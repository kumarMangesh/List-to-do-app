var userinput = document.getElementById("userinput")
var ul = document.getElementById("listitem");
var submit = document.getElementById("submit");
var itemaddDiv = document.getElementById("iteamadd")




function createlist() {

    if (userinput.value.length > 1) {
        var todo = document.createElement("div")
        todo.classList.add('to-do')
        //creating li items
        var list = document.createElement("li");
        var userText = document.createTextNode(userinput.value)
        var attach = list.appendChild(userText)
        console.log(attach)
        todo.appendChild(attach)
        //creating delete button
        var deletebutton = document.createElement('button')
        deletebutton.classList.add('deletebutton')
        deletebutton.innerHTML = '<i class="fas fa-trash-alt"></i>'
        todo.appendChild(deletebutton)

        //functionality of delete button
        function removebtn() {
            todo.remove();
        }
        deletebutton.addEventListener('click', removebtn)

        ul.appendChild(todo)

        userinput.value = "";
        //removebtn();
    }

}

submit.addEventListener("click", createlist)