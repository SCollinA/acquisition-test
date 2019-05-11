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
        info: {
            name: 'target 1',
            address: '123 Main St., Los Angeles, California, 11111',
            employeesCount: 1,
            foundedDate: '1-1-1970',
            isPublic: true,
        },
        contacts: [{ 
            id: uuid(),
            name: 'new contact',
            phoneNumber: '',
        }],
        keyMetrics: {
            revenue: 100000000,
            cashFlow: -1000,
            valuation: 1000000000,
            stockPrice: 45,
        },
        status: statusTypes[0],
        history: [
            `added ${new Date().toLocaleString()}`
        ]
    },
    {
        id: uuid(),
        info: {
            name: 'target 2',
            address: '125 Main St., Los Angeles, California, 11111',
            employeesCount: 2,
            foundedDate: '12-25-2018',
            isPublic: true,
        },        
        contacts: [{ 
            id: uuid(),
            name: 'new contact',
            phoneNumber: '',
        }],
        keyMetrics: {
            revenue: 100000000,
            cashFlow: -1000,
            valuation: 1000000000,
            stockPrice: 45,
        },
        status: statusTypes[1],
        history: [
            `added ${new Date().toLocaleString()}`
        ]
    },
    {
        id: uuid(),
        info: {
            name: 'target 3',
            address: '127 Main St., Los Angeles, California, 11111',
            employeesCount: 3,
            foundedDate: '12-1-2017',
            isPublic: true,
        },        
        contacts: [
            { 
                id: uuid(),
                name: 'new contact',
                phoneNumber: '',
            },
            { 
                id: uuid(),
                name: 'new contact',
                phoneNumber: '',
            },
        ],
        keyMetrics: {
            revenue: 100000000,
            cashFlow: -1000,
            valuation: 1000000000,
            stockPrice: 45,
        },
        status: statusTypes[2],
        history: [
            `added ${new Date().toLocaleString()}`
        ]
    },
    {
        id: uuid(),
        info: {
            name: 'target 4',
            address: '127 Main St., Los Angeles, California, 11111',
            employeesCount: 3,
            foundedDate: '12-1-2018',
            isPublic: true,
        },        
        contacts: [
            { 
                id: uuid(),
                name: 'new contact',
                phoneNumber: '',
            },
            { 
                id: uuid(),
                name: 'new contact',
                phoneNumber: '',
            },
        ],
        keyMetrics: {
            revenue: 100000000,
            cashFlow: -1000,
            valuation: 1000000000,
            stockPrice: 45,
        },
        status: statusTypes[3],
        history: [
            `added ${new Date().toLocaleString()}`
        ]
    },
]