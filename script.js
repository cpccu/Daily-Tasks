const menu1 = document.querySelector('#menu1');
const menu2 = document.querySelector('#menu2');
const menu1_toggler = document.querySelector('#menu1_toggler');
const menu2_toggler = document.querySelector('#menu2_toggler');
const menu1_Icon = document.querySelector('#menu1_Icon');
const menu2_Icon = document.querySelector('#menu2_Icon');
const menu1_display = document.querySelector('#menu1_display');
const menu2_display = document.querySelector('#menu2_display');
const listMenu = document.querySelector('#listMenu');
const addtask = document.querySelector('#addtask');
const add = document.querySelector('#add');
const save = document.querySelector('#save');
const penddingDisplay = document.querySelector('#penddingDisplay');
const title = document.querySelector('#title');

let pendding = 0

const memberList = [
    "President",
    "Vice President",
    "General Secretary",
    "Joint Secretary",
    "Organizing Secretary",
    "Club Manager",
    "Asst. Club Manager",
    "Treasurer",
    "Joint Treasurer",
    "Media Executive",
    "Joint Media Executive",
    "Creative Executive",
    "Joint Creative Executive"
];

function createMenu(menu) {
    memberList.forEach((value) => {
        const li = document.createElement('li');
        li.className = "dropLi";
        li.innerText = value;
        menu.appendChild(li);
    });
}

add.addEventListener('click',()=>{
    addtask.classList.toggle("hidden");
})





function dropdownShow(toggler,display) {
    if (toggler === menu1) {
        menu1_Icon.classList.toggle('rotate-[-90deg]');
    } else {
        menu2_Icon.classList.toggle('rotate-90');
    }
    
    toggler.classList.toggle('hidden');

    toggler.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', (e) => {
            display.value = e.target.textContent
            console.log(e.target.textContent); // Adjust this based on your requirement
        });
    });
}



function appendList(title,ff,tt) {
    const li = document.createElement('li');
    li.className = "list";

    const div1 = document.createElement('div');
    div1.className = "list1";

    const h2 = document.createElement('h2');
    h2.innerText = title;
    div1.appendChild(h2);

    const innerDiv = document.createElement('div');
    innerDiv.innerHTML = `<p>View</p>
                     <p>From ${ff}</p>
                     <p>To ${tt}</p>`;
    div1.appendChild(innerDiv);

    const div2 = document.createElement('div');
    div2.className = "list2";
    div2.innerHTML = '<i class="fa-solid fa-check"></i><i class="fa-solid fa-trash"></i>';

    li.appendChild(div1);
    li.appendChild(div2);

    listMenu.appendChild(li); // Assuming listMenu is the parent element where you want to append the created li
}


save.addEventListener('click',()=>{
    addtask.classList.toggle("hidden");
    pendding++;
    appendList(title.value,menu1_display.value,menu2_display.value)
    penddingDisplay.innerHTML = pendding;
})





createMenu(menu1);
createMenu(menu2);

menu1_toggler.addEventListener('click', () => dropdownShow(menu1,menu1_display));
menu2_toggler.addEventListener('click', () => dropdownShow(menu2,menu2_display));

