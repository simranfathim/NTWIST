import "./App.css";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import flag from "./images/flag.png";

import Page from "./component/Page";

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Home/>
    <Page/>
    <Footer/>
   
  
    </div>
  );
}

export default App;
