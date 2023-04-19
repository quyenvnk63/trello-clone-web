import React, { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import { Container, Draggable } from 'react-smooth-dnd'

import './Boardcontent.scss'

import Column from 'components/Column/Column'
import { mapOrder } from 'utilities/sorts'
import { applyDrag } from 'utilities/drapDrop'

import { initialData } from 'actions/initialData'

function Boardcontent() {

  const [broad, setBoard] = useState({})
  const [columns, setColumns] = useState([])

  useEffect(() => {
    const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
    if (boardFromDB) {
      setBoard(boardFromDB)
      setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
    }
  }, [])

  if (isEmpty(broad)) {
    return <div className="not-found" style={{ 'padding':'10px', 'color':'white' }}>Board not found</div>
  }

  const onColumnDrop = (dropResult) => {
    // eslint-disable-next-line no-console
    // console.log(dropResult)
    let newColumns = [ ...columns]
    newColumns = applyDrag(newColumns, dropResult)

    let newBoard = { ...broad }
    newBoard.columnOrder = newColumns.map(column => column.id)
    newBoard.columns = newColumns

    setColumns(newColumns)
    setBoard(newBoard)
  }

  const onCardDrop = (columnId, dropResult) => {
    if (dropResult.addedIndex !== null || dropResult.removedIndex !== null) {
      // console.log(dropResult)
      let newColumns = [ ...columns]
      let currentColumn = newColumns.find(column => column.id === columnId)
      currentColumn.cards = applyDrag(currentColumn.cards, dropResult)

      currentColumn.cardOder = currentColumn.cards.map(c => c.id)
      setColumns(newColumns)

    }

  }

  return (
    <div className="board-content">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={index => columns[index]

        }
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'column-drop-preview'
        }}
      >
        {columns.map((column, index) => (
          <Draggable key={index}>
            <Column column={column} onCardDrop = {onCardDrop}/>
          </Draggable>
        ))}
      </Container>
      <div className="add-new-column">
        <i className='fa fa-plus icon' />Add another card
      </div>


    </div>
  )
}

export default Boardcontent