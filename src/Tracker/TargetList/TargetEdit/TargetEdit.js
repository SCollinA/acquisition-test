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
                            saveTarget()
                        }}
                        onReset={() => editTarget(targets.find(target => target.id === editingTarget.id))}
                    >
                        <CompanyInfoEdit/>
                        <ContactEdit/>
                        <KeyMetricsEdit/>
                        <StatusEdit/>
                        <div>
                            <input type='submit' value='save'/>
                            <input type='reset' value='reset'/>
                            <input type='button' value='cancel'
                                onClick={() => editTarget({})}
                                />
                            <input type='button' value='delete'
                                onClick={() => deleteTarget()}
                            />
                        </div>
                    </form>
                </div>
            )}
        </TrackerContext.Consumer>
    )
}