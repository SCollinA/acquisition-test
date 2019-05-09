import React from 'react'
import uuid from 'uuid'
import './Tracker.css'
import TrackerContext from '../Context/TrackerContext'
import TrackerHeader from './TrackerHeader/TrackerHeader'
import TargetList from './TargetList/TargetList'

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
                name: 'new target',
                contacts: [{ 
                    name: 'new contact',
                    phoneNumber: '',
                }],
                keyMetrics: {
                    revenue: 100000000,
                },
                status: statusTypes[0],
            }
            this.setState({
                targets: [
                    ...this.state.targets,
                    newTarget
                ],
                selectedTarget: newTarget, 
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
                ...this.state.targets.filter(target => target.id !== this.state.selectedTarget.id),
                this.state.selectedTarget
            ],
            editingTarget: {}
        })
        const deleteTarget = () => this.setState({
            targets: this.state.targets.filter(target => target.id !== this.state.selectedTarget.id),
            editingTarget: {},
            selectedTarget: {}
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