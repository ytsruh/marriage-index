import { Parallax } from "react-materialize";

export default function Home() {
  return (
    <div>
      <Parallax
        image={<img alt="" src="/images/pexels-photo-247929.jpeg" />}
        options={{
          responsiveThreshold: 0,
        }}
      >
        <div className="no-pad-bot">
          <div className="container">
            <h1 className="header center brown-text text-darken-2">St Helens Marriage Index</h1>
            <div className="row center">
              <h5 className="header col s12 white-text">
                Search the largest online database of St Helens marriages
              </h5>
            </div>
            <div className="row center">
              <a href="/search" className="btn-large waves-effect waves-light teal lighten-1">
                Search Now
              </a>
            </div>
            <br />
          </div>
        </div>
      </Parallax>
      <section>
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                    <i className="material-icons">account_balance</i>
                  </h2>
                  <h5 className="center">Direct from church records</h5>
                  <p className="light center">
                    All records are taken from church or library records anc collated into a single database.
                    This allows anybody to verify a marriage that has taken place within the St Helens area.
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                    <i className="material-icons">verified_user</i>
                  </h2>
                  <h5 className="center">Verified by multiple members</h5>
                  <p className="light center">
                    Each record was transcribed by an enthusiastic family historian and subsequently verified
                    by another to ensure accuracy of records.
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                    <i className="material-icons">insert_chart</i>
                  </h2>
                  <h5 className="center">133,827 records</h5>
                  <p className="light center">
                    All of these records have been transcribed from various sources and contain data ranging
                    from 1536 through to 2010.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Parallax
        image={<img alt="" src="/images/wood-holiday-vacation-vintage.jpg" />}
        options={{
          responsiveThreshold: 0,
        }}
      >
        <div className="parallax-container no-pad-bot">
          <div className="container">
            <div className="row center">
              <h2 className="header center brown-text text-darken-2">Contact Us</h2>
              <div className="row center">
                <h5 className="header col s12 white-text">
                  If you'd like to find out more about the marriage index please reach out to us
                </h5>
              </div>
              <div className="row center">
                <a href="/contact" className="btn-large waves-effect waves-light teal lighten-1">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
