import React from 'react'
import TrackerContext from '../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ addSortObject, sortList, sortHidden }) => {
                const sortClassesObject = {}
                // loop through sortList
                sortList.forEach((sortObject, index) => {
                    // for each sortObject
                    // add the field in the sortObject
                    for (const field in sortObject) {
                        // to sortClassesObject
                        sortClassesObject[field] = [
                            sortObject[field],
                            ` (${index + 1})`
                        ]
                        // effectively flattening the sortList
                        // into an object
                    }
                })
                // then interpolate corresponding field
                // from sortClassesObject
                // into appropriate input classname
                // if field value exists
                return !sortHidden && (
                    <div className='SortTargets'>
                        <button
                            className={
                                `sortName` +
                                `${sortClassesObject.name !== undefined ?
                                    sortClassesObject.name[0] === true ?
                                        ' sortDown' :
                                        ' sortUp' :
                                    ''}`
                            }
                            onClick={() => {
                                addSortObject('name')
                            }}
                        >
                            Name
                            {sortClassesObject.name &&
                                sortClassesObject.name[1]}
                        </button>
                        <button
                            className={
                                `sortEmployeesCount` +
                                `${sortClassesObject.employeesCount !== undefined ?
                                    sortClassesObject.employeesCount[0] === true ?
                                        ' sortDown' :
                                        ' sortUp' :
                                    ''}`
                            }                            
                            onClick={() => {
                                addSortObject('employeesCount')
                            }}
                        >
                            Employees Count
                            {sortClassesObject.employeesCount &&
                                sortClassesObject.employeesCount[1]}
                        </button>
                        <button
                            className={
                                `sortFoundedDate` +
                                `${sortClassesObject.foundedDate !== undefined ?
                                    sortClassesObject.foundedDate[0] === true ?
                                    ' sortDown' :
                                    ' sortUp' :
                                ''}`
                            }
                            onClick={() => {
                                addSortObject('foundedDate')
                            }}
                        >
                            Founded Date
                            {sortClassesObject.foundedDate &&
                                sortClassesObject.foundedDate[1]}
                        </button>
                        <button
                            className={
                                `sortRevenue` +
                                `${sortClassesObject.revenue !== undefined ?
                                    sortClassesObject.revenue[0] === true ?
                                    ' sortDown' :
                                    ' sortUp' :
                                ''}`
                            }
                            onClick={() => {
                                addSortObject('revenue')
                            }}
                        >
                            Revenue
                            {sortClassesObject.revenue &&
                                sortClassesObject.revenue[1]}
                        </button>
                        <button
                            className={
                                `sortNetIncome` +
                                `${sortClassesObject.netIncome !== undefined ?
                                    sortClassesObject.netIncome[0] === true ?
                                    ' sortDown' :
                                    ' sortUp' :
                                ''}`
                            }
                            onClick={() => {
                                addSortObject('netIncome')
                            }}
                        >
                            Net Income
                            {sortClassesObject.netIncome &&
                                sortClassesObject.netIncome[1]}
                        </button>
                        <button
                            className={
                                `sortTotalEquity` +
                                `${sortClassesObject.totalEquity !== undefined ?
                                    sortClassesObject.totalEquity[0] === true ?
                                    ' sortDown' :
                                    ' sortUp' :
                                ''}`
                            }
                            onClick={() => {
                                addSortObject('totalEquity')
                            }}
                        >
                            Total Equity
                            {sortClassesObject.totalEquity &&
                                sortClassesObject.totalEquity[1]}
                        </button>
                        <button
                            className={
                                `sortStockPrice` +
                                `${sortClassesObject.stockPrice !== undefined ?
                                    sortClassesObject.stockPrice[0] === true ?
                                    ' sortDown' :
                                    ' sortUp' :
                                ''}`
                            }
                            onClick={() => {
                                addSortObject('stockPrice')
                            }}
                        >
                            Stock Price
                            {sortClassesObject.stockPrice &&
                                sortClassesObject.stockPrice[1]}
                        </button>
                        <button
                            className={
                                `sortStatus` +
                                `${sortClassesObject.status !== undefined ?
                                    sortClassesObject.status[0] === true ?
                                        ' sortDown' :
                                        ' sortUp' :
                                ''}`
                            }                            
                            onClick={() => {
                                addSortObject('status')
                            }}
                        >
                            Status
                            {sortClassesObject.status &&
                                sortClassesObject.status[1]}
                        </button>              
                    </div>
                )
            }}
        </TrackerContext.Consumer>
    )
}