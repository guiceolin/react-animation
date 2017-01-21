import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Item from './item'
import ItemForm from './item_form'

class List extends React.Component {

  constructor() {
    super()
    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  addItem(text){
    let items = this.state.items
    items.push({id: Date.now(), text})
    this.setState({items})
  }

  removeItem(itemId) {
    let items = this.state.items
    items.splice(items.findIndex((item) => item.id == itemId), 1 )
    this.setState({items})
  }

  render() {
    let items = this.state.items.map(item => {
      return <Item text={item.text}
                   key={item.id}
                   id={item.id}
                   removeItem={this.removeItem}/>
    })

    return (
      <div>
        <ItemForm formSubmit={this.addItem} />
        <ReactCSSTransitionGroup transitionName="list-item" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

ReactDOM.render(<List/>, document.getElementById('list'));
