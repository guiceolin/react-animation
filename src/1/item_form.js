import React from 'react';
import ReactDOM from 'react-dom';

export default class ItemForm extends React.Component {

  constructor(){
    super()
    this.state = { value: '' }

    this.formSubmit = this.formSubmit.bind(this)
    this.valueChanged = this.valueChanged.bind(this)
  }

  formSubmit(e){
    e.preventDefault()
    this.props.formSubmit(this.state.value)
    this.setState({value: ''})
  }

  valueChanged(e){
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input type='text' value={this.state.value} onChange={this.valueChanged}/>
        <button type='submit'>Add Item</button>
      </form>
    )
  }
}
