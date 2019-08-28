import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component{
    
    static defaultProps = {
        onNewRecipe(){}
    }
    
    static propTypes = {
        onNewRecipe: PropTypes.func
    }
    
    render(){
        return(
            <header>
                <div><h2><a>Your Recipe</a></h2>
                    <p>Share your cooking method</p>
                </div>
                <nav>
                    <li><a onClick= {this.props.onNewRecipe}>New Recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact Us</a></li>
                </nav>
            </header>
        );
    }
}

export default Navbar;