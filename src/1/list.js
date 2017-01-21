import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Item from './item'

class List extends React.Component {

  constructor() {
    super()
    this.state = {
      items: [],
      value:  ''
    }

    this.handleValueChanged = this.handleValueChanged.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleRemoveItem = this.handleRemoveItem.bind(this)
  }

  handleValueChanged(event){
    let value = event.target.value
    this.setState({value})
  }

  handleFormSubmit(event){
    event.preventDefault()
    let state = this.state
    state.items.push({id: Date.now() , text: state.value})
    state.value = ''
    this.setState(state)
  }

  handleRemoveItem(itemId) {
    let items = this.state.items
    items.splice(items.findIndex((item) => item.id == itemId), 1 )
    this.setState({items})
  }

  render() {
    let items = this.state.items.map(item => {
      return <Item text={item.text}
                   key={item.id}
                   id={item.id}
                   removeItem={this.handleRemoveItem}/>
    })

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input type='text' value={this.state.value} onChange={this.handleValueChanged}/>
          <button type='submit'>Add Item</button>
        </form>
        <ReactCSSTransitionGroup transitionName="list-item" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

ReactDOM.render(<List/>, document.getElementById('list'));
