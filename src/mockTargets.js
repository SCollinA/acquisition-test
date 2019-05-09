import uuid from 'uuid'

export const statusTypes = [
    'researching',
    'pending approval',
    'approved',
    'denied',
]

export default [
    {
        id: uuid(),
        name: 'target 1',
        contacts: [{ 
            id: uuid(),
            name: 'new contact',
            phoneNumber: '',
        }],
        keyMetrics: {
            revenue: 100000000,
        },
        status: statusTypes[0],
        history: [
            `added ${new Date().toLocaleString()}`
        ]
    },
    {
        id: uuid(),
        name: 'target 2',
        contacts: [{ 
            id: uuid(),
            name: 'new contact',
            phoneNumber: '',
        }],
        keyMetrics: {
            revenue: 100000000,
        },
        status: statusTypes[0],
        history: [
            `added ${new Date().toLocaleString()}`
        ]
    },
    {
        id: uuid(),
        name: 'target 3',
        contacts: [{ 
            id: uuid(),
            name: 'new contact',
            phoneNumber: '',
        }],
        keyMetrics: {
            revenue: 100000000,
        },
        status: statusTypes[0],
        history: [
            `added ${new Date().toLocaleString()}`
        ]
    },
]