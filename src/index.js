import React from 'react'
import ReactDOM from 'react-dom'

function cartoon(name='Pikachu',show='Pokemon'){
  return <div>
            <h1 className='someclass'>cartoon name is {name} and its show is {show}</h1>
            <h2>Hello Bitfumes</h2>
          </div>
}

ReactDOM.render(
  cartoon('Jasmine','Alladin'),
  document.getElementById('root')
);
