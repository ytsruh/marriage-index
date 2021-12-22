import { Navbar, Icon, NavItem } from "react-materialize";

export default function Navigation() {
  return (
    <div>
      <Navbar
        className="teal"
        alignLinks="right"
        brand={
          <a id="logo-container" href="/" className="brand-logo white-text">
            Marriage Index
          </a>
        }
        centerChildren
        id="mobile-nav"
        menuIcon={<Icon className="white-text">menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
        sidenav={
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/search">Search</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        }
      >
        <NavItem className="white-text" href="/">
          Home
        </NavItem>
        <NavItem className="white-text" href="/search">
          Search
        </NavItem>
        <NavItem className="white-text" href="/contact">
          Contact
        </NavItem>
      </Navbar>
    </div>
  );
}
