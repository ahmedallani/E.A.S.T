import React from "react"
import axios from "axios"
import { connect } from "react-redux";
class Contact extends React.Component {
    constructor(props){
        super(props)
        this.state={
            chat:false,
            contactlist:[],
            selectedName:null,
            selectedId:null,
            selectedimg:null,
            currentmessages:[],
            text:"",
            fetchdata:null
        }
        this.openchat=this.openchat.bind(this)
        this.sendmessage=this.sendmessage.bind(this)
    }
    sendmessage(){
      axios({
        url: '/api/contact/sendmessage',
        method: 'post',
        data: {
          type:this.props.user.type,message:this.state.text,ReceiverId:this.state.selectedId,SenderId:this.props.user.id
        }
    }).then(data=>{
      this.setState({text:""})
    })
    }
    openchat(e){
      var resiver=(e.target.id*1)
      const x= setInterval(()=>{
        axios({
          url: '/api/contact/getmessages',
          method: 'post',
          data: {
            SenderId:this.props.user.id,reciverid:resiver
          }
      }).then(result=>{
        this.setState({currentmessages:result.data})
      })
      },1000)
      
      this.state.contactlist.map(elem=>{
        console.log(elem.id,e.target.id)
        if(elem.id==e.target.id){
          
          axios({
            url: '/api/contact/getmessages',
            method: 'post',
            data: {
              SenderId:this.props.user.id,reciverid:(e.target.id*1)
            }
        }).then(data=>{
          this.setState({selectedName:elem.FirstName+" "+elem.LastName,
          selectedId:elem.id,
          selectedimg:elem.imgsrc,
          chat:true,
          currentmessages:data.data,
          fetchdata:x
        })

       })
     }
   })
      
    }
componentWillUnmount(){
clearInterval(this.state.fetchdata)
    }
componentDidMount(){
  console.log(this.props)
  if(this.props.user.type=="client"){
    setTimeout(()=>{
      axios({
        url: '/api/contact/contactlistc',
        method: 'post',
        data: {
          UserId:this.props.user.id,
        }
    }).then(data=>{
      if(data.data.length){
        this.setState({contactlist:data.data[0]})
      }
      
    })
    },1000)
  }else{
    setTimeout(()=>{
      axios({
        url: '/api/contact/contactlists',
        method: 'post',
        data: {
          UserId:this.props.user.id,
        }
    }).then(data=>{
      if(data.data.length){
        this.setState({contactlist:data.data[0]})
      }
      
    })
    },1000)
  }

}

    render() {
      return <div>
          <div className="ashade-page-title-wrap">
        <h1 className="ashade-page-title">
            <span>Hired FreeLancers</span>
            Contact
        </h1>
    </div>
  <div id='ContactList'>
    {this.state.contactlist.map((elem,index)=>{
   return  <figure className="snip1515" key={index}>
   <div className="profile-image"><img src={elem.imgsrc} alt="sample47" /></div>
   <figcaption>
    <h3 style={{color: "white"}} id={elem.id} onClick={this.openchat}>{elem.FirstName}-{elem.LastName}</h3>
     <h4 id={elem.id} onClick={this.openchat} style={{color: "white"}}>{elem.Field}</h4>
     {/* <p>Which is worse, that everyone has his price, or that the price is always so low.</p> */}
     <div className="icons"><a href="#"><i className="ion-social-reddit"></i></a>
     </div>
   </figcaption>
 </figure>
    })}
 
  </div>


{this.state.chat?<div className="Box">
              <div className="chat">
  <div className="chat-title">
    <h1>{this.state.selectedName}</h1>
    <figure className="avatarc">
      <img src={this.state.selectedimg} /></figure>
  </div>
  <div className="messages">
    <div className="messages-content">
      {this.state.currentmessages.map((elem,index)=>{
        console.log(this.props.user.type,elem.type,elem.SenderId,this.props.user.id)
        console.log(elem.type==this.props.user.type&&this.props.user.id==elem.SenderId)
        if(elem.type==this.props.user.type&&this.props.user.id==elem.SenderId){
  return  <div className="message message-personal new" key={index}>{elem.message}</div>
        }else if(elem.type==this.props.user.type&&this.props.user.id!=elem.SenderId){
  return     <div className="message new" key={index}>{elem.message}</div>
        }else if(elem.type!=this.props.user.type){
  return    <div className="message new" key={index}>{elem.message}</div>  
        }else{
  return      <div className="message message-personal new" key={index}>{elem.message}</div>
        }
      })}
    
   
    </div>
  </div>
  <div className="message-box">
    <textarea type="text" className="message-input" placeholder="Type message..." onChange={(e)=>{
      this.setState({text:e.target.value})
    }}></textarea>
    <button type="submit" className="message-submit" onClick={this.sendmessage}>Send</button>
  </div>

</div>
      </div>:null}
           
      </div>
     

   
    }
  }
  const mapStateToProps = (state, ownProps) => {
    return {
      user:state.user
    }
  }
export default connect(mapStateToProps)(Contact)