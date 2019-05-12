import React from 'react'

export default ({ target }) => {
    return (
        <div className='KeyMetricsDetail'>
            <h4>Revenue: {target.keyMetrics.revenue}</h4>
            <h4>Cash Flow: {target.keyMetrics.cashFlow}</h4>
            <h4>Valuation: {target.keyMetrics.valuation}</h4>
            {target.info.isPublic &&
                <h4>Stock Price: {target.keyMetrics.stockPrice}</h4>}
        </div>
    )
}