import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import './Navbar.css'

const username = "Debil";
const status = "Gold";
const user_progress = 70;


class Navbar extends React.Component {
  render() {
    return (
      <ReactBootStrap.Navbar className="navbar-container" collapseOnSelect expand="lg">

        <ReactBootStrap.Navbar.Brand href="#home" className="logo">
          <ReactBootStrap.Image src={require('./logo.png')}></ReactBootStrap.Image>
        </ReactBootStrap.Navbar.Brand>

        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">

          <ReactBootStrap.Nav className="mr-auto">
            
            <ReactBootStrap.Nav.Link href="#orders" className="headerMenu">Заказы</ReactBootStrap.Nav.Link>

            <ReactBootStrap.Nav.Link href="#jobs" className="headerMenu">Вакансии</ReactBootStrap.Nav.Link>

            <ReactBootStrap.NavDropdown title="Люди" id="collasible-nav-dropdown" className="headerMenu">
              <ReactBootStrap.NavDropdown.Item href="#people/people1">Action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#people/people2">Another action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#people/people3">Something</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#people/people4">Separated link</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>

            <ReactBootStrap.NavDropdown title="Форум" id="collasible-nav-dropdown" className="headerMenu">
              <ReactBootStrap.NavDropdown.Item href="#forum/forum1">Action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#forum/forum2">Another action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#forum/forum3">Something</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#forum/forum4">Separated link</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>

            <ReactBootStrap.NavDropdown title="Ещё" id="collasible-nav-dropdown" className="headerMenu">
              <ReactBootStrap.NavDropdown.Item href="#else/else1">Action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#else/else2">Another action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#else/else3">Something</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#else/else4">Separated link</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>

          <ReactBootStrap.Form>
            <ReactBootStrap.Form.Control className="leng-select" as="select" expand="lg">
              <option>Ru</option>
              <option>En</option>
            </ReactBootStrap.Form.Control>
          </ReactBootStrap.Form>

          <ReactBootStrap.Image src={require('./logo.png')} roundedCircle className="userpic" />
          
          <div className="aboutUser" expand="lg">
            <ul>
              <li className="username">
                <ReactBootStrap.DropdownButton id="dropdown-basic-button" title={username} className="username">
                  <ReactBootStrap.Dropdown.Item href="#/about_user_1">Action</ReactBootStrap.Dropdown.Item>
                  <ReactBootStrap.Dropdown.Item href="#/about_user_2">Something else</ReactBootStrap.Dropdown.Item>
                </ReactBootStrap.DropdownButton>
              </li>
              <li className="userStatus">{status}</li>
              <li className="userProgress"><ReactBootStrap.ProgressBar now={user_progress} /></li>
            </ul>
          </div>

        </ReactBootStrap.Navbar.Collapse>

      </ReactBootStrap.Navbar>
    )
  }
}

export default Navbar;