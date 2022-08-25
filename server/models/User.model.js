const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
var ObjectId = require('mongodb').ObjectId;

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "A name is required"],
            minLength: [3, "Your name must be at least 3 characters"],
        },
        email: {
            type: String,
            required: [true, "Please enter an email"],
            minLength: [3, "Your email must be at least 3 characters"],
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email"
            }
        },
        password: {
            type: String,
            required: [true, "A password is required"],
            minLength: [3, "You password must be at least 3 characters"],
        },
        hostingEvents: [{ 
            type : ObjectId, 
            ref: "TimeBlockCard",
        }],
        gameMasterEvents: [{ 
            type : ObjectId, 
            ref: "TimeBlockCard",
        }]
    },
    { timestamps: true }
);

UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    });
});

const User = mongoose.model("User", UserSchema);
module.exports = User;