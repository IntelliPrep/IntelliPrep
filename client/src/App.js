import './App.css';

import Header from './components/Header.js';
import Create from './pages/Create.js';
import ViewSchedule from './pages/ViewSchedule.js';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
// appppppppp

function App() {

  return (
    <div className="App">
      <Router>
            <Header />
            <Routes>
                <Route path='/create' element={<Create />} />
                <Route path='/viewschedule' element={<ViewSchedule />} />
            </Routes>
        </Router>
    </div>  
  );
}

export default App;
