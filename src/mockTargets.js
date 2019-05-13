import uuid from 'uuid'

export const statusTypes = [
    'Researching',
    'Pending approval',
    'Approved',
    'Denied',
]

export default [
    {
        id: uuid(),
        info: {
            name: 'Google',
            address: '1600 Amphitheatre Parkway, Mountain View, California',
            employeesCount: 98771,
            foundedDate: 'September 4, 1998',
            isPublic: true,
        },
        contacts: [
            { 
                id: uuid(),
                name: 'Larry Page',
                phoneNumber: '',
            },
            { 
                id: uuid(),
                name: 'Sergey Brin',
                phoneNumber: '',
            },
        ],
        keyMetrics: {
            revenue: 100000000,
            cashFlow: 10,
            valuation: 100000,
            stockPrice: 1164.27,
        },
        status: statusTypes[2],
        // history: [
        //     `added ${new Date().toLocaleString()}`
        // ]
    },
    {
        id: uuid(),
        info: {
            name: 'Amazon',
            address: '410 Terry Ave. North, Seattle, WA',
            employeesCount: 647500,
            foundedDate: 'July 5, 1994',
            isPublic: true,
        },        
        contacts: [{ 
            id: uuid(),
            name: 'Jeff Bezos',
            phoneNumber: '',
        }],
        keyMetrics: {
            revenue: 232887000000,
            cashFlow: -1000,
            valuation: 1000000000,
            stockPrice: 1889.98,
        },
        status: statusTypes[3],
        // history: [
        //     `added ${new Date().toLocaleString()}`
        // ]
    },
    {
        id: uuid(),
        info: {
            name: 'Apple',
            address: '1 Apple Park Way, Cupertino, California',
            employeesCount: 132000,
            foundedDate: 'April 1, 1976',
            isPublic: true,
        },        
        contacts: [
            { 
                id: uuid(),
                name: 'Steve Jobs',
                phoneNumber: '',
            },
            { 
                id: uuid(),
                name: 'Steve Wozniak',
                phoneNumber: '',
            },
            { 
                id: uuid(),
                name: 'Ronald Wayne',
                phoneNumber: '',
            },
        ],
        keyMetrics: {
            revenue: 265595000000,
            cashFlow: 1000,
            valuation: 2000000000,
            stockPrice: 197.18,
        },
        status: statusTypes[1],
        // history: [
        //     `added ${new Date().toLocaleString()}`
        // ]
    },
    {
        id: uuid(),
        info: {
            name: 'Microsoft',
            address: 'One Microsoft Way, Redmond, Washington',
            employeesCount: 134944,
            foundedDate: 'April 4, 1975',
            isPublic: true,
        },        
        contacts: [
            { 
                id: uuid(),
                name: 'Bill Gates',
                phoneNumber: '',
            },
            { 
                id: uuid(),
                name: 'Paul Allen',
                phoneNumber: '',
            },
        ],
        keyMetrics: {
            revenue: 110360000000,
            cashFlow: 0,
            valuation: 0,
            stockPrice: 127.13,
        },
        status: statusTypes[0],
        // history: [
        //     `added ${new Date().toLocaleString()}`
        // ]
    },
]