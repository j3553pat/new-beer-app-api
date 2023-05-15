import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import AlcoholCard from "./BeerCard.js"
const Url = "https://api.punkapi.com/v2/beers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alcoholDrinks: [],
      isLikes: false,
    };
  }

  clickLike = () => {
    this.setState({...this.state, isLikes:!this.state.isLikes})
  }

  componentDidMount() {
    axios.get(Url)
    .then( res => {
      const alcoholDrinks = res.data
      this.setState({alcoholDrinks})
    })
  }
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <ol>{this.state.alcoholDrinks.map((drink, index) => {
          return (
            <AlcoholCard key= {index} name={drink.name} productPic={drink.image_url} description = {drink.description} 
             brewed= {drink.first_brewed} tips={drink.brewers_tips} toggleLike = {this.clickLike} 
            likes={this.state.isLikes}/>
          )
        })}</ol>
      </header>
    </div>
    )
  }
}
export default App;

