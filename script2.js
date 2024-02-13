document.addEventListener("DOMContentLoaded", function(){

    const addTodoButton = document.querySelector("#employee");
    addTodoButton.addEventListener("click",async function(){
    const response = await axios.get("data.json");
    const employeeList = document.querySelector("#employee-list");
    for (let e of response.data.employees) {
        // create a li element to display the employee
        const liElement = document.createElement('li');
        liElement.innerHTML = `${e.name} (${e.title})`;

     
        employeeList.appendChild(liElement);
    }
})
})