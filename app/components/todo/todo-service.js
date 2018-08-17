import Todo from "../../models/todo.js"

//@ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Charlie/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		let todosCopy = []
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????
				console.log(res.data.data)
				res.data.data.forEach(todo => {
					todosCopy.push(new Todo(
						todo
					))
				})
				todoList = todosCopy
				draw(todosCopy)
			})
			.catch(logError)
	}

	addTodo(todo, getTodos) {
		// WHAT IS THIS FOR???
		todoApi.post('', todo)
			.then(function (res) {
				// <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				getTodos()
				console.log(todoList)
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId, getTodos) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		var todo = {}
		// todo = todoList.find(atodo => atodo._id === todoId
		// 	// if (todoList.includes(todoId)) {
		// 	// 	todo.completed = !todo.completed
		// 	// }
		// ) ///MODIFY THIS LINE
		// debugger
		for (let i = 0; i < todoList.length; i++) {
			const atodo = todoList[i];
			if (atodo._id == todoId) {
				todo = atodo
			}
		}
		todo.completed = !todo.completed

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				console.log(res)
				getTodos()
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(logError)
	}

	removeTodo(todoId, draw) {
		// Umm this one is on you to write.... The method is a DELETE
		todoApi.delete(todoId)
			.then(res => {
				console.log(res)
				this.getTodos(draw)

			})
	}

}


// import Todo from "../../models/todo.js"


// //@ts-ignore
// const todoApi = axios.create({
// 	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Charlie/todos/',
// 	timeout: 3000
// });

// function logError(e) {
// 	console.log(e)
// }


// let todoList = []

// export default class TodoService {

// 	getTodos(draw) {
// 		console.log("Getting the Todo List")
// 		todoApi.get('')
// 			.then((res) => { // <-- WHY IS THIS IMPORTANT????
// 				console.log(res.data)
// 				let todos = res.data.data.map(rawTodo => {
// 					return new Todo(rawTodo)
// 				})
// 				draw(todos)
// 			})
// 			.catch(logError)
// 	}

// 	addTodo(todo, draw) {
// 		// WHAT IS THIS FOR???
// 		let newTodo = new Todo({
// 			descriptiion: todo.description,
// 			completed: todo.completed,
// 			user: todo.user
// 		})
// 		todoApi.post('', todo)
// 			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
// 				draw(newTodo)
// 			})

// 			.catch(logError)
// 	}

// 	toggleTodoStatus(todoId) {
// 		// MAKE SURE WE THINK THIS ONE THROUGH
// 		//STEP 1: Find the todo by its index **HINT** todoList

// 		var todo = {} ///MODIFY THIS LINE

// 		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
// 		todoApi.put(todoId, todo)
// 			.then(function (res) {
// 				//DO YOU WANT TO DO ANYTHING WITH THIS?
// 			})
// 			.catch(logError)
// 	}

// 	removeTodo() {
// 		// Umm this one is on you to write.... The method is a DELETE

// 	}

// }
