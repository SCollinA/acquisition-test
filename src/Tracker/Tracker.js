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
        })
        const deleteTarget = () => this.setState({
            targets: this.state.targets.filter(target => target.id !== this.state.editingTarget.id),
            editingTarget: {},
            selectedTarget: {}
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
            comparingTargets: [],
            searchingTargets: [],
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