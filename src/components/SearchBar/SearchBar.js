import React, { Component } from "react";
import "./SearchBar.css";
class SearchBar extends Component {
  state = {
search:''
  };
  inputChanged(event){
    console.log(event.target.value)
    this.setState({
      search:event.target.value
    })
  }
  render(){
  return (
<div className="search-bar-container ui input">
    <input type="text" onChange={this.inputChanged.bind(this)} placeholder="Search..."/>
</div>    
  )
}};

export default SearchBar;
