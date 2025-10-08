import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Register/> */}
        {/* <Login/> */}
        {/* <Home/> */}
        <Home/>
      </div>
    </BrowserRouter>
  );
}

export default App;