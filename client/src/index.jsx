import React from "react";
import ReactDOM from "react-dom";
import Market from "./components/market.jsx";
import Navbar from "./components/navbar.jsx";
import Asidebar from "./components/asidebar.jsx";
import Home from "./components/home.jsx";
import Footer from "./components/footer.jsx";
import JobsPosted from "./components/client/jobsposted.jsx";
import Jobsapplied from "./components/serviceprovider/jobsapplied.jsx";
import PostJob from "./components/client/postjob.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/login.jsx";
import About from "./components/about.jsx";
import ProfileSP from "./components/serviceprovider/serviceProviderprofil/serviceproviderprofil.jsx";
import ClientProfile from "./components/client/clientprofile/clientprofil.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
////Redux///
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../Redux/redux";
import { connect } from "react-redux";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount(){
    this.props.updateComponent()
  }
  render() {
    return (
      <div>
        <Navbar />
        {this.props.page=="Home" && <Home />}
        {this.props.page=="Login" && <Login />}
        {/* <Router>
          <Navbar />
          <aside id="ashade-aside">
            <Asidebar />
          </aside>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
            <Route path="/AccountS" component={ProfileSP} />
            <Route path="/AccountC" component={ClientProfile} />
            <Route path="/JobsPosted" component={JobsPosted} />
            <Route path="/Jobsapplied" component={Jobsapplied} />
            <Route path="/PostJob" component={PostJob} />
            <Route path="/JobMarket" component={Market} />
          </Switch>
        </Router> */}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    page: state.page,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateComponent: () =>
      dispatch({
        type: "updateComponent"
      }),
  };
};
const store = createStore(rootReducer);
const AppState=connect( mapStateToProps,mapDispatchToProps )(App)
ReactDOM.render(
  <Provider store={store}>
    <AppState />
  </Provider>,
  document.getElementById("app")
);
