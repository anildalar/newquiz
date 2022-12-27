import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
        <>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Link to="/home">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/login">Login</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/register">Register</Link>
                </Nav.Item>
            </Nav>
            
        </>
  )
}
