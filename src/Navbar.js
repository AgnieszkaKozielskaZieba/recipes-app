import React,{Component} from "react"
import "./Navbar.css"

class Navbar extends Component{
	static defaultProps={
		onNewRecipe(){}
	}
	constructor(props){
		super(props)
		this.handleNewRecipe=this.handleNewRecipe.bind(this)
	}
	handleNewRecipe(e){
		e.preventDefault()
		this.props.onNewRecipe()
	}
	render(){
		return(
			<div className="Container">
			<div className="Title">
			Recipe App
			</div>
			<nav className="ContainerElements">
			<li onClick={this.handleNewRecipe}>New Recipe</li>
			<li>Home</li>
			<li>About</li>
			<li>Contact us</li>

			</nav>
			</div>
		)
	}
}

export default Navbar