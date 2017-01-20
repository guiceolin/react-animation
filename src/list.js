import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {

  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  addItemHandler(){
    this.state.items.push('item')
    this.setState({items: this.state.items})
  }

  render() {
    let items = this.state.items.map(item => <div className='item'><p>{item}</p></div>)
    return (
      <div>
        <input type='button' onClick={ (() => { this.addItemHandler()}).bind(this)} />
        {items}
      </div>
    )
  }
}

ReactDOM.render(<List/>, document.getElementById('list'));
