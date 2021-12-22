import { Toast } from "react-materialize";

export default function Contact() {
  return (
    <section>
      <div class="valign-wrapper">
        <div class="container">
          <div class="row">
            <div class="col m8 offset-m2">
              <div class="card contact-form">
                <div class="card-content brown lighten-5">
                  <span class="card-title brown-text">Contact Us</span>
                  <div>
                    <div class="row">
                      <div class="input-field col m8">
                        <i class="brown-text material-icons prefix">account_circle</i>
                        <input id="contactname" type="text" class="validate" name="contactname" required />
                        <label for="contactname">Name</label>
                      </div>
                      <div class="input-field col m8">
                        <i class="brown-text material-icons prefix">drafts</i>
                        <input id="contactemail" type="text" class="validate" name="contactemail" required />
                        <label for="contactemail">Email Address</label>
                      </div>
                      <div class="input-field col m12">
                        <i class="brown-text material-icons prefix">edit</i>
                        <textarea
                          id="contactmessage"
                          class="materialize-textarea"
                          name="contactmessage"
                          rows="5"
                        ></textarea>
                        <label for="contactmessage">Message</label>
                      </div>
                    </div>
                    <div className="row">
                      <Toast
                        options={{
                          html: "Sorry! I don't work. I'm just here to look good",
                        }}
                      >
                        Submit <i class="material-icons right">send</i>
                      </Toast>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="parallax">
          <div className="contact_page_bg"></div>
        </div>
      </div>
    </section>
  );
}
