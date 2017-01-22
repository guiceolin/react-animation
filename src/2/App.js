import React from 'react'
import ReactDOM from 'react-dom'
import ItemAdd from './ItemAdd'
import ItemList from './ItemList'

class App extends React.Component {
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
    return (
      <div>
        <ItemAdd onItemAdded={this.addItem} />
        <ItemList items={this.state.items}
              onItemRemoved={this.removeItem}
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
