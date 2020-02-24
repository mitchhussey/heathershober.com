import React from 'react'
import { Link } from 'gatsby'

const Banner = (props) => (
    <section id="banner" className="style8" style={{backgroundImage: `url(${props.image})`}} >
        <div className="inner">
            <header className="major">
                <h1>{ props.title }</h1>
            </header>
            <div className="content">
                <p>{ props.subtitle }</p>
            </div>
                { props.showLinks &&
                    <ul className="actions">
                        <li><Link to="/about" className="button">About Heather</Link></li>
                        <li><a href="https://www.afesupport.org/what-is-amniotic-fluid-embolism/" className="button">About AFE</a></li>
                        {/* <li><Link to="/landing" className="button">View All Memories</Link></li> */}
                        {/* <li><Link to="/landing" className="button">Shober Family Blog</Link></li> */}
                    </ul>
                }
        </div>
    </section>
)

export default Banner
