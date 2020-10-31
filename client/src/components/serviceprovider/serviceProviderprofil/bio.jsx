import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux"
import axios from "axios"
class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selectedFile: "",
      defaultFile : "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      adress: "",
      password : "",
     }
   this.edit=this.edit.bind(this)
   this.onFileChange = this.onFileChange.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.addtocontact=this.addtocontact.bind(this)
  }

  addtocontact(){
    axios({
      url: '/api/contact/addtocontact',
      method: 'post',
      data: {
          clientId: this.props.userid,
          FreelancerId: this.props.user.id
      }
  }).then(data=>{
    console.log(data)
  })
  }
  onFileChange(event) {
    this.setState({ selectedFile: URL.createObjectURL(event.target.files[0]) });
};

handleChange(e) {
    var name = e.target.name;
    this.setState({
        [name]: e.target.value,
    });
}
edit(){
  if(this.props.typeuser=="client"){
return <div className="ashade-contact-form__submit">
<input type="submit" value="Add To Contact" onClick={this.addtocontact}/>
</div>
  }else{
return <div className="modal">
<input id="modal__trigger" type="checkbox" />
<label htmlFor="modal__trigger">Edit Profile</label>
<div className="modal__overlay">
<br/>
<br/>
<br/>
<br/>
<div className="modal__wrap" id="editprofilecontent">
  <label htmlFor="modal__trigger">&#10006;</label>
                        <img id="imgedit" src={this.state.selectedFile.length ? this.state.selectedFile : this.state.defaultSrc } />
                    <input className="file" type="file" onChange={this.onFileChange} />
                    <div className="row mt-3" id="inputContainer" onChange={this.handleChange}>
                                <div className="col-md-12" id="imputsforedit"><input type="text" name="firstName" className="form-control" placeholder="Edit your First Name" value={this.props.user.FirstName}/>
                              <input type="text" name="lastName" className="form-control" placeholder="Edit your Last Name" value={ this.props.user.LastName }/>
                               <input type="text" name="password" className="form-control" placeholder="Edit your Password" />
                                <input type="text" name="phoneNumber" className="form-control" placeholder="Edit your Phone Number" />
                             <input type="text" name="adress" className="form-control" placeholder="Edit your Adress" value={this.props.user.Email}/></div>
                            </div>
                             <div className="ashade-col col-6 align-bottom hide-on-tablet-port hide-on-phone">
</div>
</div>
</div>
         </div>

  }
}
  render() {
    return (
      <section className="ashade-section">
          
   
      <div className="ashade-row ashade-row-fullheight exclude-header" style={{position: "relative", top: "80px",display:"grid"}} id="serviceProfile">
      <img className="avatar" src={this.props.user.imgsrc} alt="Joshuasm32" /> 
        <div className="ashade-col col-6" id="profileInfoCard">
          <div>
            <h6><span className="profileinfo">Client Name</span>
            {this.props.user.FirstName}-{ this.props.user.LastName }
            </h6>
            <h6>
            <span className="profileinfo">Email</span>
            {this.props.user.Email}
          </h6>
          <h6>
            <span className="profileinfo">Address</span>
            {this.props.user.Adresse}
          </h6>
          <h6>
            <span className="profileinfo">Gender</span>
            {this.props.user.Gender}
          </h6>
          <h6>
              <span className="profileinfo">Field</span>
								{this.props.user.Field}	
          </h6>
          <h6>
            <span className="profileinfo">Age</span>
            {this.props.user.Age}
          </h6>
          <h6>
            <span className="profileinfo">City</span>
            {this.props.user.City}
          </h6>
          
          </div>
          {this.edit()}
        </div>
      </div>
    </section>
      
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  if(!Object.keys(state.selectedprofile).length){
    return {
      user:state.user
    }
  }else{
    return {
      user:state.selectedprofile
    }
  }



  
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (value) => dispatch({
      type: 'updatedata',
      value
    }),
    selectedprofile: (value) => dispatch({
      type: 'selectedprofile',
      value
    }),
    unselect:(value) => dispatch({
      type: 'unselect',
      value
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bio)

			