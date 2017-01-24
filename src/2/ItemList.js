import React, {PropTypes} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Item from './Item'

const ItemList = ({items, onItemRemoved}) => (
  <ul>
    <ReactCSSTransitionGroup transitionName="list-item"
                           transitionEnterTimeout={300}
                           transitionLeaveTimeout={300}>
      {items.map(item =>
        <Item id={item.id}
              key={item.id}
              text={item.text}
              onRemove={onItemRemoved}
        />
      )}
    </ReactCSSTransitionGroup>
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
