//  importing the readline module
var readline = require('readline')

// We will be able to use `rl`
// Only After creating the readline interface
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Clears the terminal screen
function clear () {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

function createTask(title, completed){
    var task = {
      title: title,
      completed: completed
    }
    return task
  }
  
  


function forEachElem(arr, callback){
    for (var i = 0; i < arr.length; i++){
      callback(arr[i], i)
    }
  }


function logTasks(tasks){
    for (var i = 0; i < tasks.length; i ++){
      console.log((i + 1)+ '. ' + tasks[i].title + '. Completed: ' + 
      tasks[i].completed)
    }
  }

function completeTask(index) {
    return tasks[index].completed = true
}

function toggleCompleted(index) {
  taskArr[index].completed = !taskArr[index].completed
}

var tasks = []
    

// Listening to end of line event
rl.on('line', function(input) {
    clear()
    var inputArr = input.split(' ')
    var upperChar = inputArr[0].toUpperCase()
    

    if (upperChar === 'ADD') {
        var description = inputArr.slice(1,inputArr.length-1).join(" ")
        var completed = inputArr.pop() 
        var userInput = createTask(description, completed)
        tasks.push(userInput)
        logTasks(tasks) 
    } else if (inputArr[0] === 'toggle') {
            var index = Number(inputArr[1])
            if (tasks[index] === undefined){
              console.log('an element at that index does not exist')
            } else {
              toggleCompeted(index)
            }
        } 
     
})