// Your code here
function createEmployeeRecord(array) {
    let employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
}

function createEmployeeRecords(arrays) {
    let newArray = []
    for (let array of arrays) {
        newArray.push(createEmployeeRecord(array))
    }
    return newArray
}

function createTimeInEvent(object, dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    object.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date: date
    })
    return object
}

function createTimeOutEvent(object, dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    object.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date
    })
    return object
}

function hoursWorkedOnDate(object, date) {
    let inTime = object.timeInEvents.find(element => element.date === date)
    let outTime = object.timeOutEvents.find(element => element.date === date)
    return (outTime.hour - inTime.hour) / 100
}

function wagesEarnedOnDate(object, date) {
    let wages = hoursWorkedOnDate(object, date) * object.payPerHour
    return parseFloat(wages.toString())
}

function allWagesFor(object) {
    let availableDates = object.timeInEvents.map((element) => {return element.date})
    let payable = availableDates.reduce((acc, date) => {
        return acc + wagesEarnedOnDate(object, date)
    }, 0)
    return payable
}

function calculatePayroll(array) {
    return array.reduce(((acc, item) => {
        return acc + allWagesFor(item)
    }), 0)
}