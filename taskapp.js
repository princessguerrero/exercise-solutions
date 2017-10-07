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

var tasks = []
function createTask(title, completed){
    var task = {
      title: title,
      completed: false
    }
    return task
  }
  
  


function forEachElem(arr, callback){
    for (var i = 0; i < arr.length; i++){
      callback(arr[i], i)
    }
  }


function logCompleted(task, i) {
    if (task.completed) {
    console.log(i + '. ' + tasks[i].title + '. Completed: ' + 
        tasks[i].completed)
    }
}

function logActive(task, i) {
    if (!task.completed) {
    console.log(i + '. ' + tasks[i].title + '. Completed: ' + 
        tasks[i].completed)
    }
}


function logTasks(tasks){
    for (var i = 0; i < tasks.length; i ++){
      console.log(i + '. ' + tasks[i].title + '. Completed: ' + 
      tasks[i].completed)
    }
  }

function completeTask(index) {
  tasks[index].completed = true
}

function toggleCompleted(index) {
  tasks[index].completed = !tasks[index].completed
}


    

// Listening to end of line event
rl.on('line', function(input) {
    clear()
    var inputArr = input.split(' ')
    var command = inputArr.shift()
    var description = inputArr.join(' ')
   
    if (command === 'ADD' || command === 'add') {    
        var newTask = createTask(description)
        tasks.push(newTask)
        logTasks(tasks) 
    } else if (command === 'toggle') {
            var index = Number(input.slice(-1))
            if (tasks[index] === undefined){
              console.log('an element at that index does not exist')
            } else {
              toggleCompleted(index)
            } 
    } else if (input === 'show all') {
            logTasks(tasks)
    } else if (input === 'show completed') {
            forEachElem(tasks, logCompleted)       
    } else if (input === 'show active') {
            forEachElem(tasks, logActive)
    }     
})