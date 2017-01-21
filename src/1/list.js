import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
        <ReactCSSTransitionGroup transitionName="list-item" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

ReactDOM.render(<List/>, document.getElementById('list'));
