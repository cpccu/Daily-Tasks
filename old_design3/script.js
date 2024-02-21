"use strict";

const inputBox =document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addTask = document.getElementById("addTask");

addTask.addEventListener("click", function(){


    // here adding the task in the list...
    if(inputBox.value === ""){
        alert("nothing there...");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        // listContainer.appendChild(li); // add kore last e
        listContainer.prepend(li); // add kore first theke
        // listContainer.insertBefore(li, listContainer.firstChild);  // eidao add kore first theke
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        // span.innerHTML=`<img class="" src="img/cross.png>`;
        li.appendChild(span); // adding a cross button
    }
    inputBox.value = "";
    saveTask();


});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
});

function saveTask (){
    localStorage.setItem("task", listContainer.innerHTML);
}

function showTaskList (){
    listContainer.innerHTML = localStorage.getItem("task");
}

showTaskList();