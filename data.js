function createTask(expensArray, name, urgency) {

    const newTask = {
        // the purpose of the id is to give each task an unique identity
        // use a random number for simplicty's sake
        "id": Math.floor(Math.random() * 10000),
        "name": name,
        "urgency": urgency,
        "done": false
    }

    // add the new task to the array
    expensArray.push(newTask);
}

function updateTask(expensArray, id, newName, newUrgency) {
    let wantedTask = null;
    for (let t of expensArray) {
        if (t.id == id) {
            wantedTask = t;
            break;
        }
    }
    wantedTask.name = newName;
    wantedTask.urgency = newUrgency;
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
    if (wantedIndex) {
        // use .splice to delete an element from array
        // parameter 1: where to start deleting (aka which index to start deleting from)
        // parameter2 : how many to delete
        expensArray.splice(wantedIndex, 1);
    }
}