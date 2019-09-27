import React,{Component} from 'react';
import './App.css';
import Recipies from "./Recipies"
import Navbar from "./Navbar"
import RecipeInput from "./RecipeInput"

class App extends Component {
	constructor(props){
		super(props)
		this.state={
		recipes:[{
			id:0,
	      title:"Spaghetti",
	      ingredients:["flour","water"],
	      instructions:"Mix ingredients",
	      img:"spaghetti.jpg"
	    },
	    {
	    	id:1,
	      title:"Spaghetti",
	      ingredients:["flour","water"],
	      instructions:"Mix ingredients",
	      img:"spaghetti.jpg"
	    },
	    {
	    	id:2,
	      title:"Spaghetti",
	      ingredients:["flour","water"],
	      instructions:"Mix ingredients",
	      img:"spaghetti.jpg"
	    }],
	    nextRecipeId:3,
	    showForm:false
	}
	this.handleSave=this.handleSave.bind(this)
	this.handleDelete=this.handleDelete.bind(this)
	}
	handleSave(recipe){
		this.setState((prevState,props)=>{
			const newRecipe={...recipe, id: this.state.nextRecipeId}
			console.log([...prevState.recipes,newRecipe])
			return({
		        nextRecipeId: prevState.nextRecipeId + 1,
		        recipes: [...this.state.recipes, newRecipe]
			})

		},()=>(console.log(this.state)))
	}
	handleDelete(id){
		const recipes=this.state.recipes.filter(r=>id!=r.id)
		console.log(recipes)
		this.setState({recipes})
	}

  render(){
    return (
      <div>
      <Navbar onNewRecipe={()=>this.setState({showForm:true})}/>
      {this.state.showForm?
      <RecipeInput onSave={this.handleSave}
      onClose={()=>this.setState({showForm:false})}/>
      :null}
      <Recipies recipes={this.state.recipes} onDelete={this.handleDelete}/>
      </div>
    );   
  }

}

export default App;
