import React,{Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';

 class Navbar extends Component{
     render(){
    return(
     <>
     <nav className="light-blue darken-4">
        <div className="container">
            <div className="nav-warapper">
                <Link to="/" className='brand-logo'>
                    CV

                </Link>
                <Link to="/" data-target="side-nav" className='sidenav-trigger'>
                    <i className='material-icons'>menü</i>
                </Link>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <link to="/">
                            <i className='fas fa-home'></i>Home
                        </link>
                    </li>
                </ul>
                
            </div>
        </div>
     </nav>
     </>
    )
}

}
export default Navbar;