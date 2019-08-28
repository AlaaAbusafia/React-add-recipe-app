import React, {Component} from 'react';
import RecipeList from './RecipeList';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [
          {
            id: 0,
            title: "Spaghetti",
            instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
            ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
            img: "https://www.archanaskitchen.com/images/archanaskitchen/10-Brands/DelMonte-KidsRecipes/Spaghetti_Pasta_Recipe_In_Creamy_Tomato_Sauce_-_Kids_Recipes_Made_With_Del_Monte-3.jpg"
          },
          {
            id: 1,
            title: "Milkshake",
            instructions: "Combine ice cream and milk.  Blend until creamy",
            ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
            img: "https://www.eatformula.com/wp-content/uploads/2017/03/Second-MilkShake-Recipe-575x428.jpg"
          },
          {
            id: 2,
            title: "Avocado Toast",
            instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
            ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
            img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/11/0/FNK_All-the-Avocado-Toast_s4x3.jpg.rend.hgtvcom.826.620.suffix/1450059496131.jpeg"
          },
          {
            id: 3,
            title: "Blueberry Pie",
            instructions: "Combine ice cream and milk.  Blend until creamy",
            ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
            img: "https://www.averiecooks.com/wp-content/uploads/2018/06/crustlessblueberrypie-12.jpg"
          }
        ],
        nextRecipeId:4,
        showForm: false
    };
    
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  
  handleSave(recipe){
      this.setState((prevState, props) => {
        const newRecipe = {...recipe, id: this.state.nextRecipeId};
        return{
          nextRecipeId: prevState.nextRecipeId + 1,
          recipes: [...this.state.recipes, newRecipe],
          showForm: false
        }
      });
  }
  onDelete(id){
    const recipes = this.state.recipes.filter( r => r.id !== id);
    this.setState({recipes});
  }
  
  render(){
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe= {() => this.setState({showForm: true})} />
        {showForm ? 
            <RecipeInput 
                onSave = {this.handleSave}
                onClose = {() => this.setState({showForm: false})}
            /> : null 
        }
        <RecipeList recipes = {this.state.recipes} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default RecipeApp;
