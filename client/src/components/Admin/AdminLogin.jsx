import React from "react"
import axios from "axios"
import {connect} from "react-redux"
class AdminLogin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           name : "",
           Password : "",
           
        }
        this.LoginAdmin = this.LoginAdmin.bind(this)
    }
    
    LoginAdmin() {
        axios({
            url: '/AdminLogin',
            method: 'post',
            data: {
                name: this.state.name,
                Password: this.state.Password
            }
        }).then(data => {
            console.log(data.data)
            if(!data.data.AdminLogin){
                alert("Check Again")
            }else{
                this.props.update(data.data.userData)
                if(data.data.userData.type=="Admin"){
                    
                    this.props.ChangePage("/Admin")
                    window.history.pushState({},null,"/Admin")
                }
            }

        }).catch(err => console.log(err))
        console.log(data.data)
     }

    render() {
      return <div>
      <div className="container">
<div id="login" className="signin-card loginstyle">
<div className="logo-image">
<img src="https://bootdey.com/img/Content/User_for_snippets.png" alt="Logo" title="Logo" width="138" className="loginimg"/>
</div>
<h1 className="display1 logintextcolor">Admin Login</h1>

<form action="" method="" className="" role="form" onSubmit={this.Login}>
 <div id="form-login-username" className="form-group">
 <label htmlFor="Email" className="float-label logintextcolor" >Name</label>
   <input id="username" className="form-control" name="name" type="text" size="18" alt="login" onChange={event=>{this.setState({name:event.target.value})}} required />
   <label htmlFor="password" className="float-label logintextcolor" >Password</label>
 </div>
 <div id="form-login-password" className="form-group">
   <input id="passwd" className="form-control" name="password" type="password" size="18" alt="password" onChange={event=>{this.setState({Password:event.target.value})}} required/>
 </div>
 <div id="form-login-remember" className="form-group">
 </div>
 <div>
   <button className="btn btn-block btn-info ripple-effect" type="submit" name="Submit" alt="Login"  style={{ background: "transparent"}}  >Login</button>  
   </div>
   </form>
 </div>

</div>
   </div>
    }
  }
  const mapStateToProps = (state, ownProps) => {
    return {
      user:state.user
    }
  }
 
  const mapDispatchToProps = (dispatch) => {
    return {
      update: (value) => dispatch({
        type: 'updatedata',
        value
      })
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(AdminLogin)