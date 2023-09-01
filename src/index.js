import './style.css';
import {displayProjects, displayDOM} from "./controller";
import {formatDistance} from '../node_modules/date-fns'

class Todo {
    constructor(title, description, dueDate, priority, projectName){
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.projectName = projectName
        
    }

    daysToGo(){
        let timeDiff = this.dueDate.getTime() - (new Date()).getTime()
        let dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
        return dayDiff
    }

}

let todoArray = []
let todoTV = new Todo('Watch TV', 'Watch Suits on Tele', new Date(2023, 8, 1), 'Low', 'tv');
let todoChips = new Todo('Eat Chips', 'Yummy Chips', new Date(2023, 8,6), 'High', 'chips');
let todoFrogs = new Todo('Alien Documentaries', 'Green Space Bois', new Date(2023, 9,19), 'Medium', 'tv');
todoArray.push(todoTV)
todoArray.push(todoChips);
todoArray.push(todoFrogs);
displayProjects(todoArray);

let tvBtn = document.querySelector('#tv');
tvBtn.addEventListener('click', () => displayProjects(todoArray, 'tv'));
let chipsBtn = document.querySelector('#chips');
chipsBtn.addEventListener('click', () => displayProjects(todoArray, 'chips'));
let allBtn = document.querySelector('#all');
allBtn.addEventListener('click', () => displayProjects(todoArray, ''));


let addTaskBtn = document.querySelector('[data-add-task]');
addTaskBtn.addEventListener('click', showModal )
let hideModalBtn = document.querySelector('[data-close-modal]');
hideModalBtn.addEventListener('click', hideModal )

function showModal(){
    let modal = document.querySelector('.modal');
    modal.style.display = 'block';
}

function hideModal(){
    let modal = document.querySelector('.modal');
    modal.style.display = 'none'
}

// Allow filtering tasks by days due
let dueAllBtn = document.querySelector('[data-btn-due-all]');
dueAllBtn.addEventListener('click', ()=> displayDOM(todoArray))

let dueWeekBtn = document.querySelector('[data-btn-due-today]');
dueWeekBtn.addEventListener('click', ()=>{
    let filterArr = todoArray.filter((arr) => arr.daysToGo() <= 1);
    displayDOM(filterArr)
} )
let dueTodayBtn = document.querySelector('[data-btn-due-week]');
dueTodayBtn.addEventListener('click', ()=>{
    let filterArr = todoArray.filter((arr) => arr.daysToGo() <= 7);
    displayDOM(filterArr)
} )
// Add ability to make new projects (form and new project button)
// Add ability to edit tasks
// Add ability to assign tasks to projects after creation
// Add ability to assign task to no project
// Add important tag to tasks
// Add completed tag to tasks
// Make important tag toggleable on task
// Change display of tasks (bold title)
