import React from 'react'

export default ({ target }) => {
    return (
        <div className='KeyMetricsDetail'>
            {target.keyMetrics.revenue &&
                <h4>
                    Revenue: {target.keyMetrics.revenue < 0 && '-'}
                    ${Math.abs(target.keyMetrics.revenue).toLocaleString()}
                </h4>}
            {target.keyMetrics.netIncome &&
                <h4>
                    Net Income: {target.keyMetrics.netIncome < 0 && '-'}
                    ${target.keyMetrics.netIncome.toLocaleString()}
                </h4>}
            {target.keyMetrics.totalEquity &&
                <h4>
                    Total Equity: {target.keyMetrics.totalEquity < 0 && '-'}
                    ${target.keyMetrics.totalEquity.toLocaleString()}
                </h4>}
            {(target.info.isPublic && target.keyMetrics.stockPrice) &&
                <h4>
                    Stock Price: ${target.keyMetrics.stockPrice.toLocaleString()}
                </h4>}
        </div>
    )
}