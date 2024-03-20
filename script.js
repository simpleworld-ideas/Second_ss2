// main() is the entry point


document.addEventListener('DOMContentLoaded', function() {

  

async function main() {

    let expensArray= await loadTasks();
    console.log(expensArray);

//     const BASE_JSON_BIN_URL = "https://api.jsonbin.io/v3/b";
//     const BIN_ID = "65caf23bdc74654018a405ae";
//     const MASTER_KEY = "$2a$10$ur0gtvziQfckbgLLIzGzJudUtqCzse44LDsoHlhJx8o.irIfjZ2.q";

//     const axios = require('axios');

// const binId = 'YOUR_BIN_ID'; // Replace with your actual JSONBin bin ID
// const dataArray = [1,"12-03-2024","Walk", "50", "Essential","Bill"];

// axios.put(`https://api.jsonbin.io/b/${BIN_ID}`, expensArray, {
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Master-Key': MASTER_KEY // Replace with your actual JSONBin master key
//   }
// })
//   .then(response => {
//     console.log('Array data saved successfully:', response.data);
//   })
//   .catch(error => {
//     console.error('Error saving array data:', error);
//   });




    
    
    // this array will store all our expensArray


    // create some sample data to test displaying the list of tasks
    // createTask(expensArray, "12-03-2024","Walk", "50", "Essential","Bill");
    

    // display all the tasks for the first time
    renderexpensArray(expensArray);

    // let selectvalue =null;
    // let exp = document.querySelector("#addvalue").addEventListener("click",createDropdownOptions(selectvalue));
    
    document.querySelectorAll('input[name="options"]').forEach(function(radio) {
        radio.addEventListener("change", createDropdownOptions);
    });

    
    const addTodoButton = document.querySelector("#addTodo");
    addTodoButton.addEventListener("click", function(){
        const date = document.querySelector("#expenseDate");
        const selectdate = date.value;
        const taskName = document.querySelector("#taskName").value;
        const amount = document.querySelector("#Amount").value;
        const urgency = document.querySelector('input[name="options"]:checked').value;
        const expence=dropdown.value;
        // const expence = document.querySelector("#secondDropdown").value;
    

        // const btn = document.querySelector("#purchaseBtn")
        //             .addEventListener("click", onPurchaseButtonClicked);
        
        createTask(expensArray,selectdate, taskName, amount,urgency, expence);

        // redraw the todo list so the most recent one can be shown
        renderexpensArray(expensArray);

    });

    const saveButton = document.querySelector("#save-btn");
    saveButton.addEventListener("click", async function() {
      saveTasks(expensArray);
    })
}

// function getBadgeColor(urgency) {
//     if (urgency=="low") {
//         return "bg-success";
//     } else if(urgency =="medium") {
//         return "bg-warning";
//     } else if (urgency =="high") {
//         return "bg-danger"
//     }
// }

function renderexpensArray(expensArray) {
    const todoList = document.querySelector("#expenseList");
    // remove any existing list items before showing all items again
    todoList.innerHTML = "";
    for (let exp of expensArray) {

        //create a new element using document.createElement
        const tr = document.createElement('tr');
        tr.innerHTML=`
        
      
          <th scope="row">1</th>
          <td>${exp.id}</td>
          <td>${exp.date}</td>
          <td>${exp.name}</td>
          <td>$ ${exp.amount}</td>
          <td>${exp.urgency}</td>
          <td>${exp.expence}</td>
          <td><button class="btn edit-btn btn-success btn-sm">Edit</button></td> 
          <td><button class="btn delete-btn btn-danger btn-sm">Delete</button></td>
      
        `


        // select the edit button that is inside the todoList
        const editButton = tr.querySelector(".edit-btn");
        editButton.addEventListener("click", function(){
            console.log("Name",exp.name);
            processEditTask(exp, expensArray);

        })

        // // select the delete button that is inside the todoList
        tr.querySelector(".delete-btn").addEventListener("click", function(){
            processDeleteTask(exp, expensArray);
        })

        // add the new element to the DOM:
        // -- append it as child of the ul#todoList
        todoList.appendChild(tr);

        // tr.querySelector(".edit-btn").addEventListener('click', function() {
        //     alert("Editing todo :" + exp.name)
        //   })
        

    }
    }

    function createDropdownOptions(selectedValue) {
        var dropdown = document.getElementById("dropdown");
        dropdown.innerHTML = ""; // Clear existing options
    
        // Fetch the selected radio button value
        var selectedOption = document.querySelector('input[name="options"]:checked').value;
    
        // Create options based on the selected radio button value
        if (selectedOption === "Essential") {
            dropdown.add(new Option("Rent"));
            dropdown.add(new Option("Bill Payment"));
            dropdown.add(new Option("Transportation"));
            dropdown.add(new Option("Mortage"));

        } else if (selectedOption === "Non-Essential") {
            dropdown.add(new Option("Entertainment"));
            dropdown.add(new Option("Dining out,"));
            dropdown.add(new Option("Shopping"));
        }

        var selectedValue = dropdown.value;
        console.log("Selected value: " + selectedValue);

    }


    
    // Add event listeners to radio buttons to update dropdown options when changed
    // tr.querySelector(".edit-btn").addEventListener('click', function() {
    //     const newName = prompt("Enter the new task name: ", expensArray.name);
    //     const newUrgency = prompt("Enter the new urgency:", expensArray.urgency);
    //     modifyTask(expensArray, todo.id, newName, newUrgency);
    //     renderTodos(expensArray);
    //   })
    


function processEditTask(task, expensArray) {
    const newName = prompt("Enter the new task name: ", task.name);
    updateTask(expensArray, task.id, newName);
    
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




// Function to fetch and show the selected value in the console


// Initial call to createDropdownOptions to populate initial options



})