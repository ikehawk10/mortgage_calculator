import React, { Component } from 'react';

class Affortability extends Component {
  state = {
    item: '',
    todos: ['complete affortability calculator', 'add PMI, property tax, and insurance line items']
  }

  render() {
    return(
      <div>
          {this.state.todos.map((item, i) => {
            return <p key={i}>{item}</p>
          })}
      </div>
    )
  }
    
  
}

export default Affortability;