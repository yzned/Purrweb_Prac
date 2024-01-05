import './App.css';
import MainLanding from './MainLanding';
import MyMenu from './sections/Menu/MyMenu';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <MainLanding/> } />
        <Route path="/Menu" element={ <MyMenu/> } />
      </Routes>
    </div>
  );
}

export default App;
