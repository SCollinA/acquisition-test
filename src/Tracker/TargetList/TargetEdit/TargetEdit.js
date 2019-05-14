import React from 'react'
import './TargetEdit.css'
import TrackerContext from '../../../Context/TrackerContext'
import ContactEdit from './ContactEdit';
import StatusEdit from './StatusEdit';
import KeyMetricsEdit from './KeyMetricsEdit';
import CompanyInfoEdit from './CompanyInfoEdit';

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ 
                targets,
                editingTarget, 
                editTarget, 
                saveTarget, 
                deleteTarget 
            }) => (
                <div 
                    className='targetEditWrapper'
                    onClick={() => saveTarget()}
                >
                    <form
                        className='TargetEdit'
                        onClick={event => event.stopPropagation()}
                        onSubmit={event => {
                            event.preventDefault()
                            // if (new Date(editingTarget.info.foundedDate).toString() === 'Invalid Date') {
                            //     window.alert('Invalid Date')
                            // } else {
                                saveTarget()
                            // }
                        }}
                        onReset={() => editTarget(targets.find(target => target.id === editingTarget.id))}
                    >
                        <div className='infoMetricsEdit'>
                            <CompanyInfoEdit/>
                            <KeyMetricsEdit/>
                        </div>
                        <ContactEdit/>
                        <StatusEdit/>
                        <div className='targetEditButtons'>
                            <input type='button' value='delete'
                                onClick={() => {
                                    if (window.confirm('Are you sure?')) {
                                        deleteTarget()
                                    }
                                }}
                            />
                            <input type='button' value='cancel'
                                onClick={() => editTarget({})}
                            />
                            <input type='reset' value='reset'/>
                            <input type='submit' value='save'/>
                        </div>
                    </form>
                </div>
            )}
        </TrackerContext.Consumer>
    )
}