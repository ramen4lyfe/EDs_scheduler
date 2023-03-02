import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateModal from './components/modals/CreateModal';
import EventList from './components/EventList';
import UpdateModal from './components/modals/UpdateModal';
import EventContextProvider from './components/context/EventContext';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <div className="col">
            <EventContextProvider>
              <Routes>
                <Route path="/schedule/view" element={<EventList />} />
              </Routes>
            </EventContextProvider>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
