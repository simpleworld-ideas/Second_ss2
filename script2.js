document.addEventListener("DOMContentLoaded", function(){

    const addTodoButton = document.querySelector("#employee");
    addTodoButton.addEventListener("click",async function(){
    const response = await axios.get("data.json");
    const employeeList = document.querySelector("#employee-list");
    for (let e of response.data.Salary) {
        // create a li element to display the employee
        const liElement = document.createElement('li');
        liElement.innerHTML = `${e.Month} (Salary: ${e.Salary}) Balance: ${e.Balance}`;

     
        employeeList.appendChild(liElement);
    }
})
})