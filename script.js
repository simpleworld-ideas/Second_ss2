// main() is the entry point
function main() {
    let todos= [];  // this array will store all our todos


    // create some sample data to test displaying the list of tasks
    createTask(todos, "Walk the dog", "medium");
    createTask(todos, "Wash the car", "low");
    createTask(todos, "Clean the bathroom", "high");

    // display all the tasks for the first time
    renderTodos(todos);

    const addTodoButton = document.querySelector("#addTodo");
    addTodoButton.addEventListener("click", function(){
        const taskName = document.querySelector("#taskName").value;
        const taskUrgency = document.querySelector("#taskUrgency").value;
        createTask(todos, taskName, taskUrgency);

        // redraw the todo list so the most recent one can be shown
        renderTodos(todos);

    });
}

function getBadgeColor(urgency) {
    if (urgency=="low") {
        return "bg-success";
    } else if(urgency =="medium") {
        return "bg-warning";
    } else if (urgency =="high") {
        return "bg-danger"
    }
}

function renderTodos(todos) {
    const todoList = document.querySelector("#todoList");
    // remove any existing list items before showing all items again
    todoList.innerHTML = "";
    for (let t of todos) {
       
        // create a new element using document.createElement
        const listItem = document.createElement('li');
        listItem.classList.add("list-group-item");
        listItem.style.display = "flex";
        listItem.style.justifyContent = "space-between";
        listItem.innerHTML=`
            <div>    
                ${t.name} <span class="badge ${getBadgeColor(t.urgency)}">${t.urgency}</span>
            </div>
            <div>
                <button class="btn btn-primary btn-sm edit-button">Edit</button>
                <button class="btn btn-danger btn-sm delete-button">Delete</button>
            </div>
        `


        // select the edit button that is inside the listItem
        const editButton = listItem.querySelector(".edit-button");
        editButton.addEventListener("click", function(){
            processEditTask(t, todos);
        })

        // select the delete button that is inside the listItem
        listItem.querySelector(".delete-button").addEventListener("click", function(){
            processDeleteTask(t, todos);
        })

        // add the new element to the DOM:
        // -- append it as child of the ul#todoList
        todoList.appendChild(listItem);

    }
}

function processEditTask(task, todos) {
    const newName = prompt("Enter the new task name: ", task.name);
    const newUrgency = prompt("Enter the new urgency: ", task.urgency);
    updateTask(todos, task.id, newName, newUrgency);
    
    // refresh the display
    renderTodos(todos);
}

function processDeleteTask(task, todos) {
    // confirm is a built-in function that all browsers have
    const confirmDelete = confirm(`Are you sure you want to delete ${task.name}?`);
    if (confirmDelete) {
        deleteTask(todos, task.id);
    }
    renderTodos(todos);
}

main();