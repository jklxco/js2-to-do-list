let taskContainer = document.querySelector('#todo-list');

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
        div.textContent = todo[property];
        todoDiv.appendChild(div);
    }
    taskContainer.appendChild(todoDiv)
}

export {displayProjects, displayToDo};