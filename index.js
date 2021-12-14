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
    let timeInEventsValue = {
        type: 'TimeIn',
        hour: parseInt(dateStamp.slice(11)),
        date: dateStamp.slice(0, 10)
    }
    object['timeInEvents'] = [timeInEventsValue]
    return object
}

function createTimeOutEvent(object, dateStamp) {
    let timeOutEventsValue = {
        type: 'TimeOut',
        hour: parseInt(dateStamp.slice(11)),
        date: dateStamp.slice(0, 10)
    }
    object['timeOutEvents'] = [timeOutEventsValue]
    return object
}

function hoursWorkedOnDate(object, dateString) {
    console.log(object)
    createTimeInEvent(object, dateStamp)
    createTimeOutEvent(object, dateStamp)
    console.log(object.timeInEvents)
    console.log(object.timeOutEvents[0].hour)
    console.log(object.timeInEvents[0].hour)
    return (object.timeOutEvents[0].hour - object.timeInEvents[0].hour) / 100
}

console.log(hoursWorkedOnDate(createEmployeeRecord(["Julius", "Caesar", "General", 1000]), "0044-03-15"))

// function wagesEarnedOnDate(object, dateString) {
//     return hoursWorkedOnDate(object, dateString) * object.payPerHour.value
// }