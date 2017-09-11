import React from 'react'
import ReactDOM from 'react-dom'

function Cartoon(props){
  return <h1>Hello, {props.name} on {props.show}</h1>
}

function Show(){
  return <div>
            <Cartoon name='Pikachu' show='Pokemon' />
            <Cartoon name='Jasmine' show='Alladin' />
          </div>
}

ReactDOM.render(
  <Show/>,
  document.getElementById('root')
);
