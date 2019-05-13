import React from 'react'
import uuid from 'uuid'
import './Target.css'
import TrackerContext from '../../../Context/TrackerContext'
import { statusTypes } from '../../Tracker'

export default ({ target }) => {
    return (
        <TrackerContext.Consumer>
            {({ selectTarget }) => (
                <div 
                    className='Target'
                    onClick={() => selectTarget(target)}
                >
                    <h3>{target.info.name || 'No Name'}</h3>
                    <h3>{target.status}</h3>
                </div>
            )}
        </TrackerContext.Consumer>
    )
}

export class Target {
    constructor(
        name = '', 
        address = '',
        employeesCount = 1,
        foundedDate = '',
        isPublic = false,
        revenue = 0,
        cashFlow = 0,
        valuation = 0,
        stockPrice = 0
    ) {
        this.id = uuid()
        this.info = {
            name,
            address,
            employeesCount,
            foundedDate,
            isPublic,
        }
        this.contacts = [{
            id: uuid(),
            name: '',
            phoneNumber: '',
        }]
        this.keyMetrics = {
            revenue,
            cashFlow,
            valuation,
            stockPrice,
        }
        this.status = statusTypes[2]
        // history: [
        //     `added ${new Date().toLocaleString()}`
        // ]
    }
}