import React from 'react'
import uuid from 'uuid'
import './Tracker.css'
import TrackerContext from '../Context/TrackerContext'
import TrackerHeader from './TrackerHeader/TrackerHeader'
import TargetList from './TargetList/TargetList'

import mockTargets from '../mockTargets'

export const statusTypes = [
    'Approved',
    'Pending approval',
    'Researching',
    'Denied',
]

export default class extends React.Component {
    constructor(props) {
        super(props)
        // change below methods to post to backend 

        const addTarget = () => {
            const newTarget = {
                id: uuid(),
                info: {
                    name: '',
                    address: '',
                    employeesCount: 1,
                    foundedDate: '',
                    isPublic: false,
                },
                contacts: [{
                    id: uuid(),
                    name: '',
                    phoneNumber: '',
                }],
                keyMetrics: {
                    revenue: 0,
                    cashFlow: 0,
                    valuation: 0,
                    stockPrice: 0,
                },
                status: statusTypes[2],
                // history: [
                //     `added ${new Date().toLocaleString()}`
                // ]
            }
            this.setState({
                targets: [
                    ...this.state.targets,
                    newTarget
                ],
                selectedTarget: newTarget,
                editingTarget: newTarget, 
            })
        }

        const selectTarget = selectedTarget => this.setState({
            selectedTarget
        })

        const editTarget = editingTarget => this.setState({
            editingTarget
        })

        const saveTarget = () => this.setState({
            targets: [
                ...this.state.targets.filter(target => target.id !== this.state.editingTarget.id),
                this.state.editingTarget
            ],
            selectedTarget: this.state.editingTarget,
            editingTarget: {}
        }, () => sortTargets())

        const deleteTarget = () => this.setState({
            targets: this.state.targets.filter(target => target.id !== this.state.editingTarget.id),
            editingTarget: {},
            selectedTarget: {}
        })
        
        const updateSearchTerm = searchTerm => {
            const lowerCaseTerm = searchTerm.toLowerCase()
            const searchingTargets = this.state.targets.filter(target => {
                const contactFound = target.contacts.find(contact => {
                    return contact.name.toLowerCase().includes(lowerCaseTerm)
                })
                return target.info.name.toLowerCase().includes(lowerCaseTerm) ||
                target.info.address.toLowerCase().includes(lowerCaseTerm) ||
                contactFound
            })
            console.log(
                'search term and results',
                searchTerm, 
                searchingTargets,
            )
            this.setState({
                searchTerm,
                searchingTargets
            })
        }

        const addSortObject = field => {
            // loop through sort list
            console.log('what is field', field)
            // looking at each object
            for (let i = 0; i < this.state.sortList.length; i++) {
                const sortObject = this.state.sortList[i]
                // if object is for this property and true
                console.log('what is sort object', sortObject)
                if (sortObject[field] === true) {
                    // toggle value to desc
                    sortObject[field] = false
                    // this.state.sortList.splice(i, 1, sortObject)
                    this.setState({
                        sortList: this.state.sortList
                    }, () => {
                        sortTargets()
                        console.log(
                            'toggled current sort object',
                            this.state.sortList
                        )
                    })
                    return
                // else if object is for this property and false
                } else if (sortObject[field] === false) {
                    // remove object from list
                    this.state.sortList.splice(i, 1)
                    this.setState({
                        sortList: this.state.sortList
                    }, () => {
                        sortTargets()
                        console.log(
                            'removed current sort object', 
                            this.state.sortList
                        )
                    })
                    return
                }
            }
            const newSortObject = {}
            newSortObject[field] = true
            // else add this property object
            this.setState({
                sortList: [
                    ...this.state.sortList,
                    newSortObject
                ]
            }, () => {
                console.log('added new sort object', this.state.sortList)
                sortTargets()
            })
        }

        const sortTargets = () => {
            this.setState({
                targets: this.state.targets.sort((a, b) => {
                    let order = 0
                    console.log('sorting targets')
                    if (this.state.sortList.length > 0) {
                        console.log('sorting by sortList')
                        for (const sortObject of this.state.sortList) {
                            console.log('what is sortObject', sortObject)
                            // loop through sort objects
                            // get only field from sort object
                            // and it's value (true or false)
                            for (const field in sortObject) {
                                console.log(
                                    'what is field',
                                    field,
                                    'and value',
                                    sortObject[field],
                                    'and order',
                                    order
                                )
                                // sign must be hoisted out of for loop
                                // if sortObject[field] === false, order is desc
                                var sign = sortObject[field] ?
                                    1 : -1
                                // then use switch to sort correct field
                                switch(field) {
                                    case 'name':
                                        console.log(
                                            'sorting by name',
                                            a.info.name, 
                                            b.info.name
                                        )
                                        if (a.info.name > b.info.name) {
                                            order++                                        
                                        } else {
                                            order--
                                        }
                                        break
                                    case 'employeesCount':
                                        console.log(
                                            'sorting by employeesCount',
                                            a.info.employeesCount, 
                                            b.info.employeesCount
                                        )
                                        if (a.info.employeesCount <= b.info.employeesCount) {
                                            order++
                                        } else {
                                            order--
                                        }
                                        break
                                    case 'foundedDate':
                                        console.log(
                                            'sorting by foundedDate',
                                            a.info.foundedDate,
                                            b.info.foundedDate
                                        )
                                        if (new Date(a.info.foundedDate) < new Date(b.info.foundedDate)) {
                                            order++
                                        } else {
                                            order--
                                        }
                                        break
                                    // case 'isPublic':
                                    //     console.log(
                                    //         'sorting by isPublic',
                                    //         a.info.isPublic,
                                    //         b.info.isPublic
                                    //     )
                                    //     if (b.info.isPublic || !a.info.isPublic) {
                                    //         order++
                                    //     } else {
                                    //         order--
                                    //     }
                                    //     break
                                    case 'revenue':
                                        console.log(
                                            'sorting by revenue',
                                            a.keyMetrics.revenue,
                                            b.keyMetrics.revenue
                                        )
                                        if (a.keyMetrics.revenue <= b.keyMetrics.revenue) {
                                            order++
                                        } else {
                                            order--
                                        }
                                        break
                                    case 'cashFlow':
                                        console.log(
                                            'sorting by cashFlow',
                                            a.keyMetrics.cashFlow,
                                            b.keyMetrics.cashFlow
                                        )
                                        if (a.keyMetrics.cashFlow <= b.keyMetrics.cashFlow) {
                                            order++
                                        } else {
                                            order--
                                        }
                                        break
                                    case 'valuation':
                                        console.log(
                                            'sorting by valuation',
                                            a.keyMetrics.valuation,
                                            b.keyMetrics.valuation
                                        )
                                        if (a.keyMetrics.valuation <= b.keyMetrics.valuation) {
                                            order++
                                        } else {
                                            order--
                                        }
                                        break
                                    case 'stockPrice':
                                        console.log(
                                            'sorting by stockPrice',
                                            a.keyMetrics.stockPrice,
                                            b.keyMetrics.stockPrice,
                                            a.info.isPublic,
                                            b.info.isPublic,
                                        )
                                        if (a.info.isPublic && !b.info.isPublic) {
                                            order--
                                        } else if (!a.info.isPublic && b.info.isPublic) {
                                            order++
                                        } else if (a.keyMetrics.stockPrice >= b.keyMetrics.stockPrice) {
                                            order--
                                        } else {
                                            order++
                                        }
                                        break
                                    case 'status':
                                        console.log(
                                            'sorting by status',
                                            a.status, 
                                            b.status
                                        )
                                        if (statusTypes.indexOf(a.status) > statusTypes.indexOf(b.status)) {
                                            order++
                                        } else {
                                            order--
                                        }
                                        break
                                    default:
                                }
                            }
                            order *= sign
                        }
                        console.log(order)
                        return order
                    } else {
                        // if this.state.sortList was empty
                        // code will reach this line
                        // and default sort by name
                        if (a.info.name > b.info.name) {
                            order = 1
                        } else {
                            order = -1
                        }
                        return order
                    }
                })
            })
        }

        const removeSort = () => this.setState({
            sortList: []
        }, () => this.state.sortTargets())

        const hideSort = () => this.setState({
            sortHidden: !this.state.sortHidden,
        })

        const showAllDetails = () => this.setState({
            allDetailsView: !this.state.allDetailsView
        })

        this.state = {
            targets: mockTargets,
            addTarget,
            selectTarget,
            editTarget,
            saveTarget,
            deleteTarget,
            selectedTarget: {},
            editingTarget: {},
            // comparingTargets: [],
            searchTerm: '',
            updateSearchTerm,
            searchingTargets: [],
            sortList: [],
            addSortObject,
            sortTargets,
            removeSort,
            hideSort,
            sortHidden: false,
            allDetailsView: false,
            showAllDetails,
        }
    }

    render() {
        return (
            <TrackerContext.Provider value={this.state}>
                <div 
                    className='Tracker'
                    // onLoad={({ target }) => console.log(target)}
                >
                    <TrackerHeader/>
                    <TargetList/>
                </div>
            </TrackerContext.Provider>
        )
    }
}