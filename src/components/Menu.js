import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">About Heather</Link></li>
                {/* <li><Link onClick={props.onToggleMenu} to="/memories">Memories</Link></li> */}
                {/* <li><Link onClick={props.onToggleMenu} to="/blog">Family Blog</Link></li> */}
                <li><a href="https://www.afesupport.org/what-is-amniotic-fluid-embolism/">About AFE</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
