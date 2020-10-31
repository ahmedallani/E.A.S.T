import React from "react"
class VisitorAsidebar extends React.Component {
    constructor(props){
        super(props)
        this.handleclick=this.handleclick.bind(this)
    }
    handleclick(e){
        console.log(e.target.id)
if(e.target.id=="Home"){
    this.props.ChangeRoute("/")
    window.history.pushState({},null,"/")
}if(e.target.id=="About"){
    this.props.ChangeRoute("/About")
    window.history.pushState({},null,"/About")
}if(e.target.id=="offers"){
    this.props.ChangeRoute("/Market")
    window.history.pushState({},null,"/Offers")
}if(e.target.id=="Client-Login"){
    this.props.ChangeRoute("/ClientLogin")
    window.history.pushState({},null,"/ClientLogin")
    window.location.reload();
}if(e.target.id=="Freelancer-Login"){
    this.props.ChangeRoute("/FreelancerLogin")
    window.history.pushState({},null,"/FreelancerLogin")
    window.location.reload();
}if(e.target.id=="Client-Signup"){
    this.props.ChangeRoute("/ClientSignup")
    window.history.pushState({},null,"/ClientSignup")
    window.location.reload();
}if(e.target.id=="Freelancer-Signup"){
    this.props.ChangeRoute("/FreelancerSignup")
    window.history.pushState({},null,"/FreelancerSignup")
    window.location.reload();
}
    }
    render() {
      return <div>
    <div id="AsideBar">
          <div id="Home" onClick={this.handleclick}>Home</div>
         <br></br>
          <div>JobOffers</div>
          <br></br>
          <div id="offers" onClick={this.handleclick} className="AsideBarAppliedJobs">Offers</div>
         <br></br>
          <div id="About" onClick={this.handleclick}>About</div>
          <br></br>
          <div id="Login" onClick={this.handleclick}>Login</div>
          <br></br>
          <div className="AsideBarAppliedJobs" id="Client-Login" onClick={this.handleclick}>Client-Login</div>
          <br></br>
          <div className="AsideBarAppliedJobs" id="Freelancer-Login" onClick={this.handleclick}>Freelancer-Login</div>
          <br></br>
          <div id="Signup" onClick={this.handleclick}>Signup</div>
          <br></br>
          <div className="AsideBarAppliedJobs" id="Client-Signup" onClick={this.handleclick}>Client-Signup</div>
          <br></br>
          <div className="AsideBarAppliedJobs" id="Freelancer-Signup" onClick={this.handleclick}>Freelancer-Signup</div>
    </div>
      </div>
    }
  }

export default VisitorAsidebar
visitorNavbar:["home","JobOffers-0","PostedJobs","Account","About","Logout"]