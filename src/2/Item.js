import React, {PropTypes} from 'react'

const Item = ({id, text, onRemove}) => (
  <li className='item'>
    <spam>{text}</spam>
    <a href='#' onClick={() => onRemove(id)}>Remove</a>
  </li>
)

Item.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default Item
