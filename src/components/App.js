import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

class App extends React.Component {
  render() { return (
    <div>
      <NavBar />
      <Home username={this.user.name} city={this.user.city} color={this.user.color} />
      <About bio={this.user.bio} links={this.user.links} />
    </div>
  );
}}

export default App;
