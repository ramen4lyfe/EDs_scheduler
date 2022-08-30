import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateModal from './components/modals/CreateModal';
import EventList from './components/EventList';
import UpdateModal from './components/modals/UpdateModal';
import EventContextProvider from './components/context/EventContext';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <BrowserRouter>
            <Routes>
              {/* <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login/>} /> */}
              <EventContextProvider>
                <Route path="/schedule/view" element={<EventList />} />
              </EventContextProvider>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
