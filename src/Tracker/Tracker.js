import React from 'react'
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
        const addTarget = () => this.setState({
            targets: [
                ...this.state.targets,
                {
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
        this.state = {
            targets: [],
            addTarget,
            selectTarget: () => null,
            editTarget: () => null,
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