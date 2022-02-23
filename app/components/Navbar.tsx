import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.svg'
const Navbar = () => {
    return (
        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <figure className="image">
                     <Image src={logo} />
                    </figure>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start navbar-start--centered is-size-5">
                    <a className="navbar-item mx-3">
                        Blog
                    </a>
                    <a className="navbar-item mx-3">
                        Twitter
                    </a>
                    <a className="navbar-item mx-3">
                        Docs
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <strong className='is-size-5 mr-5'>Coming Soon!</strong>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
