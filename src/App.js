import React from 'react';
import { BrowserRouter ,Route} from "react-router-dom";
import Kakaomap from "./pages/location";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    
    <BrowserRouter>
        <Route exact path="/location" component={Kakaomap} />
    </BrowserRouter>
    
    </>
  );
}

export default App;
