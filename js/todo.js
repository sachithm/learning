

window.setTimeout(function() {
  var todos = [];

	var input = prompt("What would you like to do?");

	while (input !== "quit") {
		if (input === "list") {
			listTodos();
		}

		else if (input === "new") {
			addTodos();
		}
		else if (input === "delete") {
			deleteTodo();
		}
		input = prompt("What would you like to do?");
	}

	function listTodos() {
		console.log("__________________")
		todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});
		console.log("__________________")
	}

	function addTodos() {
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
		console.log("Added todo");
	}

	function deleteTodo() {
		var index = prompt("Enter index of completed todo");
		todos.splice(index,1);
		console.log("Deleted todo " + index);
	}

	console.log("OK you quit the app");
}, 500);