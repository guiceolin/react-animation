import React, {PropTypes} from 'react'
import Item from './Item'

const ItemList = ({items, onItemRemoved}) => (
  <ul>
    {items.map(item =>
      <Item id={item.id}
            text={item.text}
            onRemove={onItemRemoved}
      />
    )}
  </ul>
)

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onItemRemoved: PropTypes.func.isRequired
}

export default ItemList
