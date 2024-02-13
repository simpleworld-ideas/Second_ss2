
const BASE_JSON_BIN_URL = "https://api.jsonbin.io/v3/b";
const BIN_ID = "65caf23bdc74654018a405ae";
const MASTER_KEY = "$2a$10$ur0gtvziQfckbgLLIzGzJudUtqCzse44LDsoHlhJx8o.irIfjZ2.q";


function createTask(expensArray, date, taskName, amount, urgency, expence)
{

    const newTask = {
        // the purpose of the id is to give each task an unique identity
        // use a random number for simplicty's sake
        "id": Math.floor(Math.random() * 10000),
        "date":date,
        "name": taskName,
        "amount": amount,
        "urgency": urgency,
        "expence": expence,
        "done": false
    }

    // add the new task to the array
    expensArray.push(newTask);
    return expensArray;
}



function updateTask(expensArray, id, taskName) {
    let wantedTask = null;
    for (let exp of expensArray) {
        if (exp.id == id) {
            wantedTask = exp;
            break;
        }
    }
    wantedTask.name = taskName;
}

function deleteTask(expensArray, id) {
    // we need to find the index of the task that we want in delete in the expensArray array
    let wantedIndex = null;
    for (let i = 0; i < expensArray.length; i++) {
        // check if the id of the task that I want to delete
        // matches the id of the task currently indicated by index `i`.
        if (id == expensArray[i].id) {
            wantedIndex = i;
        }
    }
    if (wantedIndex !== null) {
        // use .splice to delete an element from array
        // parameter 1: where to start deleting (aka which index to start deleting from)
        // parameter2 : how many to delete
        expensArray.splice(wantedIndex, 1);
    }else{
        console.log("Task is not found");
    }
}

async function loadTasks() {
    const response = await axios.get(BASE_JSON_BIN_URL + "/" + BIN_ID + "/latest");
    return response.data.record;
  }

  async function saveTasks(expensArray) {
    const response = await axios.put(`${BASE_JSON_BIN_URL}/${BIN_ID}`, expensArray, {
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": MASTER_KEY
      }
    });
    return response.data;
  
  }