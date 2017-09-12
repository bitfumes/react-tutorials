import React from 'react'
import ReactDOM from 'react-dom'

class Inc extends React.Component{
  constructor(props){
    super(props);
    this.state = {counter : 0}
  }

  increment = (e) => {
    e.preventDefault();
    this.setState({
      counter : this.state.counter + 1
    });
  }

  render(){
    return <button onClick={this.increment}>Value is {this.state.counter}</button>
  }
}

ReactDOM.render(
  <Inc/>,
  document.getElementById('root')
)
