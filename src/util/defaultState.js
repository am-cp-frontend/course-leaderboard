const state = [
    {
        name: 'Notes',
        description: 'Notes',
        parts: [
            {
                name: 'Classic',
                description: 'Сделать Action Bar',
                completedBy: ['defunkt', 'brotheroftux']
            },

            {
                name: 'Hard',
                description: 'Подрубить картиночки',
                completedBy: ['brotheroftux']
            }
        ]
    }
]

const users = [
    {
        name: 'defunkt'
    },

    {
        name: 'brotheroftux'
    }
]

export { state, users }