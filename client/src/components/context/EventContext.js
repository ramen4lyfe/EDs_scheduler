import axios from 'axios';
import { useEffect, useState, createContext } from 'react';

export const EventContext = createEvent()


const EventContextProvider = (props) => {
    
    const[event, setEvent] = useState([
    axios.get("http://localhost:8000/schedule")
    .then((res=>{
        console.log(res);
        console.log(res.data);
        setEvent(res.data);            
    }))
    .catch((err)=>console.log(err))
    ])

    return (
        <EventContext.Provider value={{event}}>
            {props.children}
        </EventContext.Provider>
    )
}

export default EventContextProvider;