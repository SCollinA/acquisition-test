import React from 'react'
import TrackerContext from '../../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ editTarget, editingTarget }) => (
                <fieldset className='KeyMetricsEdit'>
                    <legend>Key Metrics</legend>
                    <label htmlFor='revenue'>
                        Revenue
                        <input 
                            type='number'
                            name='revenue'
                            id='revenue'
                            value={editingTarget.keyMetrics.revenue}
                            onChange={({ target }) => {
                                editTarget({
                                    ...editingTarget,
                                    keyMetrics: {
                                        ...editingTarget.keyMetrics,
                                        revenue: target.value
                                    }
                                })
                            }}
                        />   
                    </label>
                    <label htmlFor='cashFlow'>
                        Cash Flow
                        <input 
                            type='number'
                            name='cashFlow'
                            value={editingTarget.keyMetrics.cashFlow}
                            onChange={({ target }) => {
                                editTarget({
                                    ...editingTarget,
                                    keyMetrics: {
                                        ...editingTarget.keyMetrics,
                                        cashFlow: target.value
                                    }
                                })
                            }}
                        />         
                    </label>            
                    <label htmlFor='valuation'>
                        Valuation
                        <input 
                            type='number'
                            name='valuation'
                            value={editingTarget.keyMetrics.valuation}
                            onChange={({ target }) => {
                                editTarget({
                                    ...editingTarget,
                                    keyMetrics: {
                                        ...editingTarget.keyMetrics,
                                        valuation: target.value
                                    }
                                })
                            }}
                        />            
                    </label>      
                    {editingTarget.info.isPublic && (
                        <label htmlFor='stockPrice'>
                            Stock Price
                            <input 
                                type='number'
                                name='stockPrice'
                                value={editingTarget.keyMetrics.stockPrice}
                                onChange={({ target }) => {
                                    editTarget({
                                        ...editingTarget,
                                        keyMetrics: {
                                            ...editingTarget.keyMetrics,
                                            stockPrice: target.value
                                        }
                                    })
                                }}
                            />
                        </label>   
                    )}               
                </fieldset>
            )} 
        </TrackerContext.Consumer>
    )
}