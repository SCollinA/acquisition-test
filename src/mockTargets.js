import { Contact } from './Tracker/TargetList/Contact/Contact'
import { Target } from './Tracker/TargetList/Target/Target'

export default [
    new Target({
        name: 'Google',
        address: '1600 Amphitheatre Parkway, Mountain View, California',
        employeesCount: 98771,
        foundedDate: 'September 4, 1998',
        isPublic: true,
        stockPrice: 1164.27,
        contacts: [
            new Contact('Larry Page'),
            new Contact('Sergey Brin')
        ]
    }),
    new Target({
        name: 'Amazon',
        address: '410 Terry Ave. North, Seattle, WA',
        employeesCount: 647500,
        foundedDate: 'July 5, 1994',
        isPublic: true,
        revenue: -232887000000,
        netIncome: 10073000000,
        totalEquity: 43549000000,
        stockPrice: 1889.98,
        contacts: [
            new Contact('Jeff Bezos')
        ]
    }),
    new Target({
        name: 'Apple',
        address: '1 Apple Park Way, Cupertino, California',
        employeesCount: 132000,
        foundedDate: 'April 1, 1976',
        isPublic: true,
        revenue: 265595000000,
        netIncome: 59531000000,
        totalEquity: 107147000000,
        stockPrice: 197.18,
        contacts: [
            new Contact('Steve Jobs'),
            new Contact('Steve Wozniak'),
            new Contact('Ronald Wayne')
        ]
    }),
    new Target({
        name: 'Microsoft',
        address: 'One Microsoft Way, Redmond, Washington',
        employeesCount: 134944,
        foundedDate: 'April 4, 1975',
        isPublic: true,
        revenue: 110360000000,
        netIncome: 16570000000,
        totalEquity: 82710000000,
        stockPrice: 127.13,
        contacts: [
            new Contact('Bill Gates'),
            new Contact('Paul Allen')
        ]
    }),
]