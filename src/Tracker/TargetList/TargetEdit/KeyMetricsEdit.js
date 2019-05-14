import React from 'react'
import TrackerContext from '../../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ editTarget, editingTarget }) => (
                <fieldset className='KeyMetricsEdit'>
                    <legend>Key Metrics</legend>
                    <label htmlFor='revenue'>
                        Revenue: ${editingTarget.keyMetrics.revenue &&
                            editingTarget.keyMetrics.revenue.toLocaleString()}
                        <input 
                            type='number'
                            name='revenue'
                            id='revenue'
                            value={editingTarget.keyMetrics.revenue || 0}
                            onChange={({ target }) => {
                                editTarget({
                                    ...editingTarget,
                                    keyMetrics: {
                                        ...editingTarget.keyMetrics,
                                        revenue: parseFloat(target.value) || 0
                                    }
                                })
                            }}
                        />
                    </label>
                    <label htmlFor='netIncome'>
                        Net Income: ${editingTarget.keyMetrics.netIncome &&
                            editingTarget.keyMetrics.netIncome.toLocaleString()}
                        <input 
                            type='number'
                            name='netIncome'
                            value={editingTarget.keyMetrics.netIncome || 0}
                            onChange={({ target }) => {
                                editTarget({
                                    ...editingTarget,
                                    keyMetrics: {
                                        ...editingTarget.keyMetrics,
                                        netIncome: parseFloat(target.value) || 0
                                    }
                                })
                            }}
                        />
                    </label>            
                    <label htmlFor='totalEquity'>
                        Total Equity: ${editingTarget.keyMetrics.totalEquity &&
                            editingTarget.keyMetrics.totalEquity.toLocaleString()}
                        <input 
                            type='number'
                            name='totalEquity'
                            value={editingTarget.keyMetrics.totalEquity || 0}
                            onChange={({ target }) => {
                                editTarget({
                                    ...editingTarget,
                                    keyMetrics: {
                                        ...editingTarget.keyMetrics,
                                        totalEquity: parseFloat(target.value) || 0
                                    }
                                })
                            }}
                        />
                    </label>      
                    {editingTarget.info.isPublic && (
                        <label htmlFor='stockPrice'>
                            Stock Price: ${editingTarget.keyMetrics.stockPrice &&
                                editingTarget.keyMetrics.stockPrice.toLocaleString()}
                            <input 
                                type='number'
                                name='stockPrice'
                                value={editingTarget.keyMetrics.stockPrice || 0}
                                min='0'
                                onChange={({ target }) => {
                                    editTarget({
                                        ...editingTarget,
                                        keyMetrics: {
                                            ...editingTarget.keyMetrics,
                                            stockPrice: parseFloat(target.value) || 0
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