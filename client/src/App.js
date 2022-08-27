import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateModal from './components/modals/CreateModal';
import EventList from './components/EventList';
import UpdateModal from './components/modals/UpdateModal';


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <BrowserRouter>
            <Routes>
              {/* <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login/>} /> */}
              <Route path="/schedule/view" element={<EventList />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
