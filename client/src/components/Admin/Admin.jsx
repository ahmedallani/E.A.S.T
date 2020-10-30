import React from "react"
import axios from "axios"
class Admin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           Email : "",
           reason: "",
           date: "" 
        }
        this.AxiosBann = this.AxiosBann.bind(this)
    }
    AxiosBann() {
        axios({
          url: "/banaccount",
          method: "post",
          data: {
            Email: this.state.Email,
            reason: this.state.reason,
            date: this.state.date,
          },
        });
        console.log("data")
      }

    render() {
      return <div>

       
<nav role='navigation'>
  <ul className="main">
    <li className="dashboard"><a href="admindashboard">Dashboard</a></li>
    <li className="edit"><a href="#">Edit Website</a></li>
    <li className="write"><a href="#">Write news</a></li>
    <li className="comments"><a href="#">Ads</a></li>
    <li className="users"><a href="#">Manage Users</a></li>
  </ul>
</nav>
<main role="main">
  
<section className="panel important">
    <h2>Admin Space</h2>
    <ul>
      <li>Ban Accounts</li>
    </ul>
  </section>
  <section className="panel important">
    <h2>Ban Accounts</h2>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    <div className="twothirds">
          Email User:<br/>
          <input type="text" name="Email" size="40" onChange={(e) => {
                  this.setState({ Email: e.target.value }) }} required/><br/><br/>
          Date:<br/> 
          <input type="date" name="date" size="40" onChange={(e) => {
                  this.setState({ date: e.target.value }) }} required/><br/><br/>
          Reason<br/>     
          <textarea name="reason" rows="15" cols="67" onChange={(e) => {
                  this.setState({ reason: e.target.value }) }} ></textarea><br/>  
        </div>
        <div>
          <input type="submit" name="submit" value="Ban Account" onClick={this.AxiosBann} />
        </div>
      </form>

  </section>

</main>

   

   
    
      </div>
    }
  }

export default Admin ;