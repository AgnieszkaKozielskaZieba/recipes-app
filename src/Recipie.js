import React,{Component}from"react"
import "./Recipie.css"
import PropTypes from "prop-types"

class Recipie extends Component{
	static propTypes={
		id:PropTypes.number.isRequired,
		img:PropTypes.string,
		ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
		title:PropTypes.string.isRequired,
		instructions:PropTypes.string.isRequired,
		onDelete:PropTypes.func.isRequired
	}
	render(){
		const {title, img, instructions,id, onDelete}=this.props;

		const ingredients=this.props.ingredients.map((d,i)=><li key={i}>{d}</li>);
		return(
			<div className="RecipieCard">
			<img src={img} alt={title} className="RecipeImg"/>
			<div className="RecipieContent">
			<h2>{title}</h2>
			<div>
			<h4>Ingredients:</h4>
			<ul>{ingredients}</ul>
			</div>
			<div>
			<h4>Instructions:</h4>
			<p>{instructions}</p>
			<button onClick={()=>onDelete(id)}>DELETE</button>
			</div>
			</div>
			</div>
			)
		
	}
}

export default Recipie