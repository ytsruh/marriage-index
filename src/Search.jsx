import { Parallax } from "react-materialize";

export default function Search() {
  return (
    <div>
      <section>
        <div className="container search-form">
          <h4 className="brown-text center-align">Search the database</h4>
          <div className="row">
            <form className="col s10 offset-s1">
              <div className="row">
                <div className="input-field col s6">
                  <i className="brown-text material-icons prefix">account_circle</i>
                  <input id="surname" type="text" className="validate" name="surname" required />
                  <label for="surname">Surname</label>
                </div>
                <div className="input-field col s6">
                  <i className="brown-text material-icons prefix">face</i>
                  <input id="firstname" type="text" className="validate" name="firstname" />
                  <label for="firstname">First Name</label>
                </div>
                <div className="input-field col s6">
                  <i className="brown-text material-icons prefix">home</i>
                  <input id="town" type="text" className="validate" name="town" />
                  <label for="town">Town</label>
                </div>
                <div className="input-field col s6">
                  <i className="brown-text material-icons prefix">date_range</i>
                  <input id="year" type="text" className="datepicker" name="year" />
                  <label for="year">Year</label>
                </div>
              </div>
              <button className="btn waves-effect waves-light right" id="search-submit" type="submit">
                Submit
                <i className="material-icons right">search</i>
              </button>
            </form>
          </div>
        </div>
      </section>
      <Parallax
        image={<img alt="" src="/images/pexels-photo-130111.jpeg" />}
        options={{
          responsiveThreshold: 0,
        }}
      >
        <div className="section no-pad-bot">
          <div>
            <div className="row">
              <div className="col s10 offset-s1">
                <div className="card hide results">
                  <div className="card-content black-text" id="table-container">
                    <span className="card-title">Search Results</span>
                    <table className="bordered highlight centered">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Spouse</th>
                          <th>Location</th>
                          <th>Date (dd/mm/yyyy)</th>
                          <th>Library Reference</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row hide results">
              <div className="col s6 offset-s3">
                <button className="btn waves-effect waves-light right search-again">Search Again</button>
                <button className="btn waves-effect waves-light left download-csv">Download CSV</button>
              </div>
            </div>
            <div className="row">
              <div className="col s8 offset-s2">
                <div className="card hide results center-align">
                  <div className="card-content black-text">
                    <p className="">
                      Please note that the records either show a marriage date or provide a library reference.
                      Both are usually not provided by the original records
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
