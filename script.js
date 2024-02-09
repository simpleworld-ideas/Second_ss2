// main() is the entry point
function main() {
    let expensArray= [];  // this array will store all our expensArray


    // create some sample data to test displaying the list of tasks
    createTask(expensArray, "Walk the dog", "medium");
    createTask(expensArray, "Wash the car", "low");
    createTask(expensArray, "Clean the bathroom", "high");

    // display all the tasks for the first time
    renderexpensArray(expensArray);

    const addTodoButton = document.querySelector("#addTodo");
    addTodoButton.addEventListener("click", function(){
        const taskName = document.querySelector("#taskName").value;
        const taskUrgency = document.querySelector("#taskUrgency").value;
        createTask(expensArray, taskName, taskUrgency);

        // redraw the todo list so the most recent one can be shown
        renderexpensArray(expensArray);

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

function renderexpensArray(expensArray) {
    const todoList = document.querySelector("#todoList");
    // remove any existing list items before showing all items again
    todoList.innerHTML = "";
    for (let t of expensArray) {


        var table = document.createElement("table");

    // Create table rows and cells
    

    // Append the table to the body of the document
    document.body.appendChild(table);
    listItem.innerHTML=`
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-active">
      ...
    </tr>
    <tr>
      ...
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2" class="table-active">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>    
                ${t.name} <span class="badge ${getBadgeColor(t.urgency)}">${t.urgency}</span>
            


            
            <div>
                <button class="btn btn-primary btn-sm edit-button">Edit</button>
                <button class="btn btn-danger btn-sm delete-button">Delete</button>
            </div>
        `

       
        // create a new element using document.createElement
        // const listItem = document.createElement('table');
        // listItem.classList.add("list-group-item");
        // listItem.style.display = "flex";
        // listItem.style.justifyContent = "space-between";
        // listItem.innerHTML=`
        //     <div>    
        //         ${t.name} <span class="badge ${getBadgeColor(t.urgency)}">${t.urgency}</span>
        //     </div>


            
        //     <div>
        //         <button class="btn btn-primary btn-sm edit-button">Edit</button>
        //         <button class="btn btn-danger btn-sm delete-button">Delete</button>
        //     </div>
        // `


        // select the edit button that is inside the listItem
        const editButton = listItem.querySelector(".edit-button");
        editButton.addEventListener("click", function(){
            processEditTask(t, expensArray);
        })

        // select the delete button that is inside the listItem
        listItem.querySelector(".delete-button").addEventListener("click", function(){
            processDeleteTask(t, expensArray);
        })

        // add the new element to the DOM:
        // -- append it as child of the ul#todoList
        todoList.appendChild(listItem);

    }
}

function processEditTask(task, expensArray) {
    const newName = prompt("Enter the new task name: ", task.name);
    const newUrgency = prompt("Enter the new urgency: ", task.urgency);
    updateTask(expensArray, task.id, newName, newUrgency);
    
    // refresh the display
    renderexpensArray(expensArray);
}

function processDeleteTask(task, expensArray) {
    // confirm is a built-in function that all browsers have
    const confirmDelete = confirm(`Are you sure you want to delete ${task.name}?`);
    if (confirmDelete) {
        deleteTask(expensArray, task.id);
    }
    renderexpensArray(expensArray);
}

main();