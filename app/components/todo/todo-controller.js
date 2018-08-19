import TodoService from "./todo-service.js";

var todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
  //FYI DONT EDIT ME :)
  todoService.getTodos(draw)
}

function draw(todos) {
  //WHAT IS MY PURPOSE?
  //BUILD YOUR TODO TEMPLATE HERE
  let todoNum = todos.length
  var template = `<div>${todoNum} to do</div>`
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    if (todo.completed) {

      template += `
      <div>
        <input type="checkbox" id="todo-check" name="todo-list-check" value="todo" onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')" checked />
        ${todo.description} <i class="fas fa-trash" onclick="app.controllers.todoController.removeTodo('${todo._id}')"type="submit" title="Delete"></i> 
      </div>
      `
    } else {
      template += `
      <div>
        <input type="checkbox" id="todo-check" name="todo-list-check" value="todo" onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')" />
        ${todo.description} <i class="fas fa-trash" onclick="app.controllers.todoController.removeTodo('${todo._id}')"type="submit" title="Delete"></i> 
      </div>
            `
    }
  }
  template += `
    <form onsubmit="app.controllers.todoController.addTodoFromForm(event)">
      <label for="TODO"></label>
      <input type="text" name="todo" placeholder="New To do" required>
      <button type="submit">Add To do</button>

    </form>`
  document.getElementById('todo').innerHTML = template
}
//DONT FORGET TO LOOP

export default class TodoController {
  constructor() {
    getTodos()
    // draw(getTodos())
    // IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
  }
  // You will need four methods
  // getTodos should request your api/todos and give an array of todos to your callback fn
  // addTodo takes in a todo and posts it to the server
  // toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
  // removeTodo takes in a todoId and sends a delete request to the server
  // **** HINT: Everytime you make a change to any todo don't forget to get the todo list again

  addTodoFromForm(e) {

    e.preventDefault() // <-- hey this time its a freebie don't forget this
    // TAKE THE INFORMATION FORM THE FORM
    var form = e.target
    var todo = {
      description: form.todo.value
      // DONT FORGET TO BUILD YOUR TODO OBJECT
    }
    console.log(todo)
    //PASSES THE NEW TODO TO YOUR SERVICE
    //DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
    //YOU SHOULDN'T NEED TO CHANGE THIS
    todoService.addTodo(todo, getTodos)
    //^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
  }

  toggleTodoStatus(todoId) {
    // asks the service to edit the todo status
    todoService.toggleTodoStatus(todoId, getTodos)
    // YEP THATS IT FOR ME
  }

  removeTodo(todoId) {
    // ask the service to run the remove todo with this id
    todoService.removeTodo(todoId, draw)
    // ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
  }
}



