import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Recipies.css";
import Recipie from "./Recipie";

class Recipies extends Component {
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object),
    onDelete: PropTypes.func.isRequired
  };

  render() {
    const { onDelete } = this.props;
    const recipes = this.props.recipes.map(r => (
      <Recipie key={r.id} {...r} onDelete={onDelete} />
    ));
    return <div className="RecipiesContainer">{recipes}</div>;
  }
}

export default Recipies;
