import React from 'react'
import uuid from 'uuid'
import './Tracker.css'
import TrackerContext from '../Context/TrackerContext'
import TrackerHeader from './TrackerHeader/TrackerHeader'
import TargetList from './TargetList/TargetList'

import mockTargets from '../mockTargets'

export const statusTypes = [
    'researching',
    'pending approval',
    'approved',
    'denied',
]

export default class extends React.Component {
    constructor(props) {
        super(props)
        // change below methods to post to backend 

        const addTarget = () => {
            const newTarget = {
                id: uuid(),
                info: {
                    name: 'new target',
                    address: '123 Main St., New York City, NY, 10101',
                    employeesCount: 1,
                    foundedDate: '1-1-18',
                    isPublic: false,
                },
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
        
        const addSortObject = field => {
            // loop through sort list
            // looking at each object
            for (let i = 0; i < this.state.sortList.length; i++) {
                const sortObject = this.state.sortList[i]
                // if object is for this property and true
                if (sortObject[field] === true) {
                    // toggle value to desc
                    sortObject[field] = false
                    // this.state.sortList.splice(i, 1, sortObject)
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
            const newSortObject = {}
            newSortObject[field] = true
            // else add this property object
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
                        for (const sortObject in this.state.sortList) {
                            // loop through sort objects
                            // get only field from sort object
                            // and it's value (true or false)
                            for (const field of sortObject) {
                                // then use switch to sort correct field
                                switch(field) {
                                    case 'employeeCount': 
                                        if (a.info.employeesCount > b.info.employeesCount) {
                                            order = 1
                                        } else {
                                            order = -1
                                        }
                                        break
                                    default:
                                        order = 0
                                }
                            }
                        }
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

        this.state = {
            targets: mockTargets,
            addTarget,
            selectTarget,
            editTarget,
            saveTarget,
            deleteTarget,
            selectedTarget: {},
            editingTarget: {},
            comparingTargets: [],
            searchTerm: '',
            searchingTargets: [],
            sortList: [],
            addSortObject,
            sortTargets,
        }
    }

    render() {
        return (
            <TrackerContext.Provider value={this.state}>
                <TrackerHeader/>
                <TargetList/>
            </TrackerContext.Provider>
        )
    }
}