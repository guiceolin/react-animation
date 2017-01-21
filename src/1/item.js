import React from 'react'
import ReactDOM from 'react-dom'

export default class Item extends React.Component {

  render() {
   return (
    <div className='item'>
      <p>
        {this.props.text}
     </p>
   </div>
   )
  }
}
