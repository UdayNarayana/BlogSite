import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {

    return (
        <React.Fragment>
            <nav className="navbar">
                <p><a href="/">BlogSite</a></p>
                <div className="links-section">
                    <Link className="links" to="/">Home</Link>
                    <Link className="links newblog" style={{
                        color: '#fff',
                        backgroundColor: 'crimson',
                        borderRadius: '8px',
                        padding: '8px'
                    }} to="/new-blog">
                        New Blog
                    </Link>
                </div>
            </nav>
        </React.Fragment>

    )

}

export default Navbar