import React from 'react'

export default ({ target }) => {
    return (
        <div className='KeyMetricsDetail'>
            <h1>Revenue: {target.keyMetrics.revenue}</h1>
            <h1>Cash Flow: {target.keyMetrics.cashFlow}</h1>
            <h1>Valuation: {target.keyMetrics.valuation}</h1>
            {target.info.isPublic &&
                <h1>Stock Price: {target.keyMetrics.stockPrice}</h1>}
        </div>
    )
}