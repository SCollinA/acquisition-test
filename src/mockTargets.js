import { Contact } from './Tracker/TargetList/Contact/Contact'
import { Target } from './Tracker/TargetList/Target/Target'

export default [
    new Target(
        'Google',
        '1600 Amphitheatre Parkway, Mountain View, California',
        98771,
        'September 4, 1998',
        true,
        100000000,
        10,
        100000,
        1164.27,
        [
            new Contact('Larry Page'),
            new Contact('Sergey Brin')
        ]
    ),
    new Target(
        'Amazon',
        '410 Terry Ave. North, Seattle, WA',
        647500,
        'July 5, 1994',
        true,
        232887000000,
        -1000,
        1000000000,
        1889.98,
        [
            new Contact('Jeff Bezos')
        ]
    ),
    new Target(
        'Apple',
        '1 Apple Park Way, Cupertino, California',
        132000,
        'April 1, 1976',
        true,
        265595000000,
        1000,
        2000000000,
        197.18,
        [
            new Contact('Steve Jobs'),
            new Contact('Steve Wozniak'),
            new Contact('Ronald Wayne')
        ]
    ),
    new Target(
        'Microsoft',
        'One Microsoft Way, Redmond, Washington',
        134944,
        'April 4, 1975',
        true,
        110360000000,
        0,
        0,
        127.13,
        [
            new Contact('Bill Gates'),
            new Contact('Paul Allen')
        ]
    ),
]