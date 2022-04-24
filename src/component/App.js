import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Detail} from "./Detail";
import {Home} from "./Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/:id" element={<Detail />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
