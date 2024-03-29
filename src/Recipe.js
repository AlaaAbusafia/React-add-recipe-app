import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component{
    static propTypes ={
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onDelete: PropTypes.func.isRequired
    }
    render(){
        const {title, img, instructions, id, onDelete} = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => (<li key={index}>{ing}</li>));
        return(
            <div className= "recipe-card">
                <div className= "recipe-card-img"><img src={img} alt={title} /></div>
                <div className= "recipe-card-content">
                    <h3 className= "recipe-title">{title} Recipe</h3>
                    <ul>
                        {ingredients}
                    </ul>
                    <h4>instructions: </h4>
                    <p>{instructions}</p>
                </div>
                <button type="button" onClick={() => onDelete(id)}>DELETE</button>
            </div>
        );
    }
}

export default Recipe;