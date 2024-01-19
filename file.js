let arr=[]
const taskInput = document.getElementsByClassName('task-input');
const taskList = document.getElementById('task-list');
const addBtn = document.getElementById('add-btn');

let add=taskInput.value;
// we are making an todo list function

document.getElementById("add").onclick=(e)=>{

    let item=document.getElementById("text").value

console.log();
  if(taskInput.value !== ""){
    const taskText = taskInput.value;
    console.log(taskText);
    const listItem = document.createElement("li");
    listItem.innerHTML = `
   ${item}
   <button class="delete-btn">Delete </button>
   <button class="complate-btn">complate </button>
<button class="edit" onClick="editTodo(this)">EDIT</button>`;
    taskList.appendChild(listItem);

}
 arr.push(item)

  localStorage.setItem("task",JSON.stringify(arr))

  

// 

// console.log(getitem)

  e.preventDefault()

}
taskList.addEventListener('click',() =>{
    if(event.target.classList.contains("delete-btn")){
        const  listItem  = event.target.parentElement;
        taskList.removeChild(listItem)

    }
    if(event.target.classList.contains("complate-btn")){
        const listItem = event.target.parentElement;
        listItem.style.color = "blue";
    }
    const edit = document.querySelector(".edit")
edit.onclick = function(){
    var text = prompt("Edi todo ");
    console.log(text);
    const listItem = event.target.parentElement;
    // listItem.innerHTML=text.value;
}
}) 

