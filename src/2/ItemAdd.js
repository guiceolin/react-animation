import React, {PropTypes} from 'react'

class ItemAdd extends React.Component {
  constructor(){
    super()
    this.state = { itemText: '' }

    this.addItem = this.addItem.bind(this)
    this.valueChanged = this.valueChanged.bind(this)
  }

  addItem(e){
    e.preventDefault()
    this.props.onItemAdded(this.state.itemText)
    this.setState({itemText: ''})
  }

  valueChanged(e){
    this.setState({itemText: e.target.value})
  }

  render(){
    return (
      <form onSubmit={this.addItem}>
        <input type='text' value={this.state.itemText} onChange={this.valueChanged}/>
        <button type='submit'>Add Item</button>
      </form>
    )
  }
}

ItemAdd.propTypes = {
  onItemAdded: PropTypes.func.isRequired
}

export default ItemAdd
