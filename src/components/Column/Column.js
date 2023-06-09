import React from 'react'
import { Container, Draggable } from 'react-smooth-dnd'

import './Column.scss'

import Card from 'components/Card/Card'
import { mapOrder } from 'utilities/sorts'

function Column(props) {

  const { column } = props
  const onCardDrop = props.onCardDrop

  const cards = mapOrder(column.cards, column.cardOder, 'id')

  // eslint-disable-next-line no-console


  return (
    <div className ="column">
      <header className="column-drag-handle">{column.title}</header>
      <div className="card-list">
        <Container
          groupName="col"
          onDrop={dropResult => onCardDrop(column.id, dropResult)}
          getChildPayload={index => cards[index]
          }
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'drop-preview'
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => (
            <Draggable key={index}>
              <Card card = {card} />
            </Draggable>))}
        </Container>
      </div>

      <footer>
        <div className="footer-actions">
          <i className='fa fa-plus icon' />Add another card
        </div>
      </footer>

    </div>
  )
}

export default Column