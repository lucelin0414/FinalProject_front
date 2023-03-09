import { Router, Route, Switch } from "react-router-dom";
import InputForm from "./views/InputForm";
import Main from "./views/Main";
import Header from "./layout/header";
import Footer from "./layout/footer";
import about from "./test/about";
import Kakaomap from "./pages/location";
import Login from "./pages/Login";
import LectureList from "./pages/LectureList";
import BoardList from "./pages/BoardList";
import Faq from "./pages/Faq";
import Promote from "./pages/Promote"
import Registration from "./pages/Registration";
import SuccessInfo from "./pages/SuccessInfo";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){

  return(
    <>
      <Header />
          <Switch>
            <Route exact path="/SuccessInfo" component={SuccessInfo} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/BoardList" component={BoardList} />
            <Route exact path="/LectureList" component={LectureList} />
            <Route exact path="/about" component={about} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/location" component={Kakaomap} />
            <Route exact path="/Faq" component={Faq} />
            <Route exact path="/Promote" component={Promote} />
            <Route exact path="/:crud" component={InputForm} />
            <Route exact path="/" component={Main} />
          </Switch>
      <Footer />
    </>

    

  )
}

export default App;