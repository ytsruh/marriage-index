export default function Footer() {
  return (
    <footer className="page-footer teal">
      <div className="container">
        <div className="row">
          <div className="col l8 s12">
            <h5 className="white-text">About the team</h5>
            <p className="grey-text text-lighten-4">
              This resource was created by the St Helens Townships Family History Society. A local family
              history group dedicated to supporting family history research and the community
            </p>
            <a
              href="http://www.sthelenstownshipsfhs.org.uk/"
              className="waves-effect waves-light btn brown darken-1"
            >
              <i className="material-icons left">send</i>
              Find out more
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          This website was designed & created by{" "}
          <a className="brown-text text-darken-2" href="https://github.com/ytsruh">
            Chris Hurst
          </a>
        </div>
      </div>
    </footer>
  );
}
