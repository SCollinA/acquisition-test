import React from 'react'
import './Tracker.css'
import TrackerContext from '../Context/TrackerContext'
import TrackerHeader from './TrackerHeader/TrackerHeader'
import TargetList from './TargetList/TargetList'
import { Target, statusTypes } from './TargetList/Target/Target'

import mockTargets from '../mockTargets'

export default class extends React.Component {
    constructor(props) {
        super(props)
        // change below methods to post to backend 
        const addTarget = () => {
            const newTarget = new Target({})
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
            this.setState({
                searchTerm,
                searchingTargets
            })
        }

        const addSortObject = field => {
            // loop through sort list
            // looking at each object
            for (let i = 0; i < this.state.sortList.length; i++) {
                const sortObject = this.state.sortList[i]
                // if object is for this property and true
                if (sortObject[field] === true) {
                    // toggle value to desc
                    sortObject[field] = false
                    this.setState({
                        sortList: this.state.sortList
                    }, () => sortTargets())
                    return
                // else if object is for this property and false
                } else if (sortObject[field] === false) {
                    // remove object from list
                    this.state.sortList.splice(i, 1)
                    this.setState({
                        sortList: this.state.sortList
                    }, () => sortTargets())
                    return
                }
            }
            // no sort object for this field found in sort list
            const newSortObject = {}
            newSortObject[field] = true
            this.setState({
                sortList: [
                    ...this.state.sortList,
                    newSortObject
                ]
            }, () => sortTargets())
        }

        const sortTargets = () => {
            this.setState({
                targets: this.state.targets.sort((a, b) => {
                    let order = 0
                    if (this.state.sortList.length > 0) {
                        // loop through sort objects
                        for (const sortObject of this.state.sortList) {
                            // get only field from sort object
                            // and it's value (true or false)
                            for (const field in sortObject) {
                                // sign must be hoisted out of for loop
                                // if sortObject[field] === false, order is desc
                                var sign = sortObject[field] ?
                                    1 : -1
                                // then use switch to sort correct field
                                switch(field) {
                                    case 'name':
                                        if (a.info.name > b.info.name) {
                                            order++                                        
                                        } else {
                                            order--
                                        }
                                        break
                                    case 'employeesCount':
                                        if (a.info.employeesCount <= b.info.employeesCount) {
                                            order++
                                        } else {
                                            order--
                                        }
                                        break
                                    case 'foundedDate':
                                        if (new Date(a.info.foundedDate) < new Date(b.info.foundedDate)) {
                                            order++
                                        } else {
                                            order--
                                        }
                                        break
                                    case 'revenue':
                                        if (a.keyMetrics.revenue <= b.keyMetrics.revenue) {
                                            order++
                                        } else {
                                            order--
                                        }
                                        break
                                    case 'netIncome':
                                        if (a.keyMetrics.netIncome <= b.keyMetrics.netIncome) {
                                            order++
                                        } else {
                                            order--
                                        }
                                        break
                                    case 'totalEquity':
                                        if (a.keyMetrics.totalEquity <= b.keyMetrics.totalEquity) {
                                            order++
                                        } else {
                                            order--
                                        }
                                        break
                                    case 'stockPrice':
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
                        return order
                    } else {
                        // this.state.sortList was empty
                        // default sort by name
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
            targets: [],
            addTarget,
            selectTarget,
            editTarget,
            saveTarget,
            deleteTarget,
            selectedTarget: {},
            editingTarget: {},
            searchTerm: '',
            updateSearchTerm,
            searchingTargets: [],
            sortList: [],
            addSortObject,
            sortTargets,
            removeSort,
            hideSort,
            sortHidden: true,
            showAllDetails,
            allDetailsView: false,
        }
    }

    componentDidMount() {
        this.setState({
            targets: mockTargets
        }, () => this.state.sortTargets())
    }

    render() {
        return (
            <TrackerContext.Provider value={this.state}>
                <div className='Tracker'>
                    <TrackerHeader/>
                    <TargetList/>
                </div>
            </TrackerContext.Provider>
        )
    }
}