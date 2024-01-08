// Elements

const inputBox = document.querySelector(".inputBox input");
const add = document.querySelector(".inputBox button");
const todoList = document.querySelector(".todoList");
const deleteAllTasks = document.querySelector(".footer button");

function showTasks() {
    let getLocalData = localStorage.getItem("New Todo");

    if (getLocalData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalData);
    }

    const pendingTasksCount = document.querySelector(".pendingTasks");
    pendingTasksCount.textContent = listArray.length; // passing the array length in the pending task count

    if (listArray.length > 0) {
        // if array length more than 0
        deleteTasks.classList.add("active") // active the delete button

    } else {
        deleteTasks.classList.remove("active"); // unactive the delete button
    }

    let newListTag = "";
    listArray.forEach(e,i => {
        newListTag += `
        <li>${e}<span class="icon" onclick="deleteTasksItem(${i})"><i class="fas fa-trash"></i></span></li>`;
        

    });

    todoList.innerHTML = newListTag; // addning new list tag inside ul tag

    inputBox.value = ""; // after add input box blank

}

function deleteTasksItem(index) {
    let getLocalData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalData);
    listArray.splice(index, 1); // remove the li by index

    localStorage.setItem("New Todo", JSON.stringify(listArray));

    showTasks(); // cal the show tasks
}

// delete all //
deleteAllTasks.onclick = function () {
    listArray = [];
    localStorage.setItem("New Todo", JSON.stringify(listArray));// set item in local

    showTasks(); // show data
};
add.onclick = function () {
    // when users click on plus icon to add tasks

    let userValue = inputBox.ariaValueMax; // user input to variable
    let getLocalData = localStorage.getItem("New Todo"); // get from local
    if (getLocalData == null) {
        //if theres no local data available

        listArray = []; // creating blank array when null on local

    } else {
        
        listArray = JSON.parse(getLocalData); // transforming json string into a js object
    }

    listArray.push(userValue); // pushing or adding new value in array

    // tansforming js object to json string
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    
    showTasks(); // calling showtask 

    add.classList.remove("active"); // unactive the add button when task added

} 


