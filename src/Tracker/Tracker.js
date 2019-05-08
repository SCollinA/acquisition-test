import React from 'react'
import './Tracker.css'
import TrackerContext from '../Context/TrackerContext'
import TrackerHeader from '../TrackerHeader/TrackerHeader'
import TargetList from '../TargetList/TargetList'

export default class extends React.Component {
    constructor(props) {
        super(props)
        const addTarget = () => this.setState({
            targets: [
                ...this.state.targets,
                {
                    name: 'new target',
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