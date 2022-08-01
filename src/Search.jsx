import React, { useState } from "react";
import { Parallax, Preloader } from "react-materialize";
import Results from "./Components/Results";

export default function Search() {
  const [surname, setSurname] = useState("");
  const [firstName, setFirstName] = useState("");
  const [year, setYear] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          surname: surname,
          firstName: firstName,
          year: parseInt(year),
        }),
      });
      //Check for ok response
      if (!response.ok) {
        //Throw error if not ok
        throw Error(response.statusText);
      }
      // Set to json, put token in storage & redirect
      const result = await response.json();
      setYear("");
      setFirstName("");
      setSurname("");
      setData(result);
      setLoading(false);
    } catch (err) {
      setYear("");
      setFirstName("");
      setSurname("");
      setError(true);
      setLoading(false);
      console.log(err);
    }
  };

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Parallax
        image={<img alt="" src="/images/pexels-photo-130111.jpeg" />}
        options={{
          responsiveThreshold: 0,
        }}
      >
        <section>
          <div className="container search-form white" style={{ padding: "3px" }}>
            <h4 className="brown-text center-align">Search the database</h4>
            <h6 className="brown-text center-align" style={{ marginBottom: "25px" }}>
              Please enter a surname as a minimum. A First name or Year of marriage can be considered as
              optional
            </h6>

            <div className="row">
              <form className="col s10 offset-s1" onSubmit={submitForm}>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="brown-text material-icons prefix">account_circle</i>
                    <input
                      id="surname"
                      type="text"
                      className="validate"
                      name="surname"
                      required
                      onChange={(e) => setSurname(e.target.value)}
                    />
                    <label htmlFor="surname">Surname</label>
                  </div>
                  <div className="input-field col s6">
                    <i className="brown-text material-icons prefix">face</i>
                    <input
                      id="firstname"
                      type="text"
                      className="validate"
                      name="firstname"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label htmlFor="firstname">First Name</label>
                  </div>
                  <div className="input-field col s6">
                    <i className="brown-text material-icons prefix">date_range</i>
                    <input
                      id="year"
                      type="text"
                      className="datepicker"
                      name="year"
                      onChange={(e) => setYear(e.target.value)}
                    />
                    <label htmlFor="year">Year</label>
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
      </Parallax>

      {data ? (
        <div className="section brown ">
          <div>
            <div className="row">
              <div className="col s10 offset-s1">
                <Results data={data} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

const Loading = () => {
  return (
    <div className="center-align" style={{ height: "80vh", paddingTop: "200px" }}>
      <Preloader active color="green" flashing={false} size="big" />
    </div>
  );
};

const Error = () => {
  return (
    <div className="card brown lighten-5" style={{ height: "80vh", margin: 0 }}>
      <div className="card-content black-text">
        <span className="card-title center-align">Sorry something went wrong</span>
        <p className="center-align">Please reload the page & try again</p>
      </div>
    </div>
  );
};
