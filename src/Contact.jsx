import { Toast } from "react-materialize";

export default function Contact() {
  return (
    <section>
      <div className="valign-wrapper">
        <div className="container">
          <div className="row">
            <div className="col m8 offset-m2">
              <div className="card contact-form">
                <div className="card-content brown lighten-5">
                  <span className="card-title brown-text">Contact Us</span>
                  <div>
                    <div className="row">
                      <div className="input-field col m8">
                        <i className="brown-text material-icons prefix">account_circle</i>
                        <input
                          id="contactname"
                          type="text"
                          className="validate"
                          name="contactname"
                          required
                        />
                        <label htmlFor="contactname">Name</label>
                      </div>
                      <div className="input-field col m8">
                        <i className="brown-text material-icons prefix">drafts</i>
                        <input
                          id="contactemail"
                          type="text"
                          className="validate"
                          name="contactemail"
                          required
                        />
                        <label htmlFor="contactemail">Email Address</label>
                      </div>
                      <div className="input-field col m12">
                        <i className="brown-text material-icons prefix">edit</i>
                        <textarea
                          id="contactmessage"
                          className="materialize-textarea"
                          name="contactmessage"
                          rows="5"
                        ></textarea>
                        <label htmlFor="contactmessage">Message</label>
                      </div>
                    </div>
                    <div className="row">
                      <Toast
                        options={{
                          html: "Sorry! I don't work. I'm just here to look good",
                        }}
                      >
                        Submit <i className="material-icons right">send</i>
                      </Toast>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax">
          <div className="contact_page_bg"></div>
        </div>
      </div>
    </section>
  );
}
