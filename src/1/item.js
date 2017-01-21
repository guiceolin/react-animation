import React from 'react'
import ReactDOM from 'react-dom'

export default class Item extends React.Component {

  handleRemoveItem(e) {
    e.preventDefault()
    this.props.removeItem(this.props.id)
  }

  render() {
   return (
    <div className='item'>
      <p>
        {this.props.text}
     </p>
     <a onClick={this.handleRemoveItem.bind(this)}>Remove</a>
   </div>
   )
  }
}
