export const initialData = {
  boards: [
    {
      id: 'board-1',
      columnOrder: ['column-1', 'column-2', 'column-3'],
      columns:[
        {
          id: 'column-1',
          broadId: 'broad-1',
          title:'to do column',
          cardOder:['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6'],
          cards:[
            {
              id: 'card-1', broadId: 'broad-1', columnId: 'column-1', title:'to do card 1 ', cover: null
            },
            {
              id: 'card-2', broadId: 'broad-1', columnId: 'column-1', title:'to do card 2 ', cover: null
            },
            {
              id: 'card-3', broadId: 'broad-1', columnId: 'column-1', title:'to do card 3 ', cover: null
            },
            {
              id: 'card-4', broadId: 'broad-1', columnId: 'column-1', title:'to do card 4 ', cover: null
            },
            {
              id: 'card-5', broadId: 'broad-1', columnId: 'column-1', title:'to do card 5 ', cover: null
            },
            {
              id: 'card-6', broadId: 'broad-1', columnId: 'column-1', title:'to do card 6 ', cover: null
            }
          ]
        },
        {
          id: 'column-2',
          broadId: 'broad-1',
          title:'to do column 2',
          cardOder:['card-7', 'card-8', 'card-9'],
          cards:[
            {
              id: 'card-7', broadId: 'broad-1', columnId: 'column-2', title:'to do card 7 ', cover: null
            },
            {
              id: 'card-8', broadId: 'broad-1', columnId: 'column-2', title:'to do card 8 ', cover: null
            },
            {
              id: 'card-9', broadId: 'broad-1', columnId: 'column-2', title:'to do card 9 ', cover: 'https://www.w3schools.com/howto/img_avatar.png'
            }
          ]
        },
        {
          id: 'column-3',
          broadId: 'broad-1',
          title:'to do column 3',
          cardOder:['card-10', 'card-11', 'card-12'],
          cards:[
            {
              id: 'card-10', broadId: 'broad-1', columnId: 'column-3', title:'to do card 10 ', cover: null
            },
            {
              id: 'card-11', broadId: 'broad-1', columnId: 'column-3', title:'to do card 11 ', cover: 'https://www.w3schools.com/howto/img_avatar.png'
            },
            {
              id: 'card-12', broadId: 'broad-1', columnId: 'column-3', title:'to do card 12 ', cover: null
            }
          ]
        }
      ]

    }

  ]
}