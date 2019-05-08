import React from 'react'
import './Tracker.css'
import TrackerContext from '../Context/TrackerContext'
import TrackerHeader from '../TrackerHeader/TrackerHeader'
import TargetList from '../TargetList/TargetList'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            targets: [],
            addTarget: () => null,
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