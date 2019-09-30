import React, { Component } from "react";
import "./RecipeInput.css";
class RecipeInput extends Component {
	static defaultProps = {
		onClose() {},
		onSave() {}
	};
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			instructions: "",
			ingredients: [""],
			img: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleIngChange = this.handleIngChange.bind(this);
		this.AddNewIngredient = this.AddNewIngredient.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleIngChange(e) {
		let changedIngredients = this.state.ingredients.slice();
		let idx = e.target.name.split("-")[1];
		changedIngredients[idx] = e.target.value;
		this.setState({ ingredients: changedIngredients });
	}
	AddNewIngredient(e) {
		const { ingredients } = this.state;
		console.log(this.state);
		this.setState({ ingredients: [...ingredients, ""] });
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.onSave({ ...this.state });
		this.setState({
			title: "",
			instructions: "",
			ingredients: [""],
			img: ""
		});
	}
	handleClose(e) {
		e.preventDefault();
		this.props.onClose();
		this.setState({
			title: "",
			instructions: "",
			ingredients: [""],
			img: ""
		});
	}
	render() {
		const { title, instructions, img, ingredients } = this.state;
		var recipeIngredients = ingredients.map((ing, i) => (
			<div className="recipe-form-line" key={`ingredient-${i}`}>
				<label>{i + 1}</label>
				<input
					type="text"
					name={`ingredient-${i}`}
					value={ing}
					autoComplete="off"
					placeholder="Ingredient"
					onChange={this.handleIngChange}
				/>
			</div>
		));
		return (
			<div>
				<form className="recipeContainer" onSubmit={this.handleSubmit}>
					<div className="recipe-form-lineR">
						<button onClick={this.handleClose}>X</button>
					</div>
					<div className="recipe-form-line">
						<label htmlFor="recipeTitle">Title</label>
						<input
							type="text"
							name="title"
							id="recipeTitle"
							value={title}
							onChange={this.handleChange}
						/>
					</div>
					<div className="recipe-form-line">
						<label htmlFor="recipeInstructions">
							Instructions:
						</label>
					</div>
					<div className="recipe-form-line">
						<textarea
							name="instructions"
							id="recipeInstructions"
							key="instructions"
							type="Instructions"
							rows="8"
							autoComplete="off"
							value={instructions}
							onChange={this.handleChange}
						/>
					</div>
					<div className="recipe-form-line">
						<label>Ingredients:</label>
					</div>
					{recipeIngredients}
					<div className="recipe-form-lineR">
						<button type="button" onClick={this.AddNewIngredient}>
							+
						</button>
					</div>
					<div className="recipe-form-line">
						<label htmlFor="recipeImage">Image</label>
						<input
							type="text"
							name="img"
							id="recipeImage"
							value={img}
							onChange={this.handleChange}
						/>
					</div>
					<div className="recipe-form-lineR">
						<button type="submit">SAVE</button>
					</div>
				</form>
			</div>
		);
	}
}

export default RecipeInput;
