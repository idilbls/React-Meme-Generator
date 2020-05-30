import React, {Component} from 'react';
import Header from "./Header";
import Meme from "./Meme";


class App extends React.Component{
  constructor(){
    super()

    this.state = {

    }
  }


  render(){
    return(
<div>
  <Header />
  <Meme />
</div>

    )
  }
}

export default App