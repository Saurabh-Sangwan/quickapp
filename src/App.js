import {MemoryRouter as Router, Routes,Link, Route} from "react-router-dom";
import Login from './components/Login';
import Registration from './components/Registration';
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import './App.css'

function App() {
  
  return (
    <div className="App">
      <Router>
      <Routes>
        
        <Route path="/" element={<Registration/>} exact />
        <Route path="login" element={<Login/>} exact />
        <Route path="home" element={<Home/>} exact />
        <Route path="home/CreatePost" element={<CreatePost/>} exact />
      </Routes>
      </Router>
      {/* <Registration/> */}

      {/* <Login/> */}
    </div>
  );
}

export default App;
