import React from 'react'
import TrackerContext from '../../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ editTarget, editingTarget }) => (
                <fieldset className='KeyMetricsEdit'>
                    <legend>Key Metrics</legend>
                    <label htmlFor='revenue'>
                        Revenue: ${editingTarget.keyMetrics.revenue.toLocaleString()}
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
                                        revenue: parseFloat(target.value)
                                    }
                                })
                            }}
                        />
                    </label>
                    <label htmlFor='netIncome'>
                        Net Income: ${editingTarget.keyMetrics.netIncome.toLocaleString()}
                        <input 
                            type='number'
                            name='netIncome'
                            value={editingTarget.keyMetrics.netIncome}
                            onChange={({ target }) => {
                                editTarget({
                                    ...editingTarget,
                                    keyMetrics: {
                                        ...editingTarget.keyMetrics,
                                        netIncome: parseFloat(target.value)
                                    }
                                })
                            }}
                        />
                    </label>            
                    <label htmlFor='totalEquity'>
                        Total Equity: ${editingTarget.keyMetrics.totalEquity.toLocaleString()}
                        <input 
                            type='number'
                            name='totalEquity'
                            value={editingTarget.keyMetrics.totalEquity}
                            onChange={({ target }) => {
                                editTarget({
                                    ...editingTarget,
                                    keyMetrics: {
                                        ...editingTarget.keyMetrics,
                                        totalEquity: parseFloat(target.value)
                                    }
                                })
                            }}
                        />
                    </label>      
                    {editingTarget.info.isPublic && (
                        <label htmlFor='stockPrice'>
                            Stock Price: ${editingTarget.keyMetrics.stockPrice.toLocaleString()}
                            <input 
                                type='number'
                                name='stockPrice'
                                value={editingTarget.keyMetrics.stockPrice}
                                onChange={({ target }) => {
                                    editTarget({
                                        ...editingTarget,
                                        keyMetrics: {
                                            ...editingTarget.keyMetrics,
                                            stockPrice: parseFloat(target.value)
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