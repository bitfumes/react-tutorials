import React from 'react'
import ReactDOM from 'react-dom'

  class Clock extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        date : new Date()
      }
    }
    componentDidMount(){
      this.timer = setInterval( () => this.start(),1000);
    }

    componentWillUnmount(){
      clearInterval(this.timer);
    }

    start(){
      this.setState({
        date: new Date()
      });
    }
    render(){
      return <h1>Time is: {this.state.date.toLocaleTimeString()}</h1>
    }
  }

     ReactDOM.render(
       <Clock/>,
       document.getElementById('root')
     );
