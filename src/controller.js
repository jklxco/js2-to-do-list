let taskContainer = document.querySelector('#todo-list');
import {format} from '../node_modules/date-fns'

function displayProjects(todoArray, projectName = ''){
    if (projectName === '') {
        displayDOM(todoArray)
    } else {
        let filterArr = todoArray.filter(x => x.projectName == projectName)
        displayDOM(filterArr)
    }
}

// NEED TO SEPARATE LOGIC USED TO DISPLY DOM FROM THAT
// USED TO FILTER WHAT SHOULD BE DISAPLYED

function displayDOM(arr){
    taskContainer.replaceChildren()
    arr.forEach(obj => displayToDo(obj));
    
}

function displayToDo(todo){
    let todoDiv = document.createElement('div');
    for (const property in todo) {
        let div = document.createElement('p');
        (property === 'dueDate') ? div.textContent = format(todo[property], 'dd/MM/yyyy') :
            div.textContent = todo[property];
        todoDiv.appendChild(div);
    }
    todoDiv.classList.add('high');
    taskContainer.appendChild(todoDiv)
}

export {displayProjects, displayToDo, displayDOM};