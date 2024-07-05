let inputPlace = document.querySelector("#toDo")
let toDoList = document.querySelector(".toDoList")
let addButton = document.querySelector("#add")
let lists = document.querySelector(".lists")

addButton.onclick = function addList() {
    let list = document.createElement("div")
    list.classList.add("list")
    list.innerHTML = `
        <div class="left"><input type="text" name="value" id="value" value="${inputPlace.value}" disabled></div>   
        <div class="right">
            <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="remove"><i class="fa-solid fa-trash-can"></i></button>
        </div>`
    
    lists.appendChild(list)
    
    let delet = list.querySelector(".remove")  
    delet.onclick = function deleteList() {
        list.remove()
    }

    
    let value = list.querySelector("#value")
    let edit = list.querySelector(".edit")
    edit.onclick = function editList() {
        value.disabled = !value.disabled
    }

    inputPlace.value = " "
}