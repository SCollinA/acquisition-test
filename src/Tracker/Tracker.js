import React from 'react'
import uuid from 'uuid'
import './Tracker.css'
import TrackerContext from '../Context/TrackerContext'
import TrackerHeader from '../TrackerHeader/TrackerHeader'
import TargetList from '../TargetList/TargetList'

const statusTypes = [
    'researching',
    'pending approval',
    'approved',
    'denied',
]

export default class extends React.Component {
    constructor(props) {
        super(props)
        // change below methods to post to backend 
        const addTarget = () => this.setState({
            targets: [
                ...this.state.targets,
                {
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
            ]
        })
        const selectTarget = selectedTarget => this.setState({
            selectedTarget
        })
        const editTarget = selectedTarget => this.setState({
            selectedTarget
        })
        const saveTarget = () => this.setState({
            targets: [
                ...this.state.targets.filter(target => target.id !== this.state.selectedTarget.id),
                this.state.selectedTarget
            ]
        })
        this.state = {
            targets: [],
            addTarget,
            selectTarget,
            editTarget,
            saveTarget,
            deleteTarget: () => null,
            selectedTarget: {},
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