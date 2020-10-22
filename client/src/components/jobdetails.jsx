import React from "react"
import Footer from "./footer.jsx"
class JobDetails extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
      return <div id="detailblock">
          <div className="ashade-service-card__head">
					<div id="detailjobimg">
						<img src="img/avatars/testimonial01.png"/>
					</div>
                    
      </div>
      <cite id="detailcite"><a href="">The one who posted Name</a></cite>
<div className="ashade-page-title-wrap">
        <h1 className="ashade-page-title">
            <span>don't miss this opportunity</span>
            it came once
        </h1>
    </div>
         <div className="ashade-col col-4" id="DetailJobTitle">
				<h2>
					<span>Field</span>
						Job Title
				</h2>
		</div>

      <section className="ashade-section" id="DetailJobdescription">
					<div className="ashade-row">
						<div className="ashade-col col-4">
							<h2>
								<span>Job</span>
								 description
							</h2>
						</div>
						<div className="ashade-col col-8">
							<p className="is-dropcap">
								This is an exmaple of dropcap. To create dropcap just simply add className 'is-dropcap' to your pargraph tag and you will get this typography effect. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar metus tellus, nec semper sem egestas hendrerit. Aenean fermentum arcu at. Nullam nec tincidunt metus. Fusce cursus, ante quis placerat commodo ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar metus tellus nec.
							</p>
						</div>
					</div>
				</section>
                  <div className="ashade-contact-form__submit" id="detailsubmitbtn">  
                  <div className="modal">
  <input id="modal__trigger" type="checkbox" />
  <label htmlFor="modal__trigger">Apply Now</label>
  <div className="modal__overlay">
    <div className="modal__wrap">
      <label htmlFor="modal__trigger">&#10006;</label>
      <h2>Application</h2>
     <div >Convince me</div> 
     <textarea name="" id="" cols="30" rows="10" id="detailtextarea"></textarea>
     <button id='modalbutton'>Apply</button>
    </div>
  </div>
</div>
<Footer/>
				  </div>
         
          </div>
    }
  }

export default JobDetails