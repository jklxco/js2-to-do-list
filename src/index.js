import './style.css';
import {displayProjects, displayToDo} from "./controller";

class Todo {
    constructor(title, description, dueDate, priority, projectName){
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority
        this.projectName = projectName;
    }

}

let todoArray = []
let todoTV = new Todo('Watch TV', 'Watch Suits on Tele', 'Today', 'Low', 'tv');
let todoChips = new Todo('Eat Chips', 'Yummy Chips', 'Friday', 'High', 'chips');
todoArray.push(todoTV)
todoArray.push(todoChips)


let tvBtn = document.querySelector('#tv');
tvBtn.addEventListener('click', () => displayProjects(todoArray, 'tv'));
let chipsBtn = document.querySelector('#chips');
chipsBtn.addEventListener('click', () => displayProjects(todoArray, 'chips'));
let allBtn = document.querySelector('#all');
allBtn.addEventListener('click', () => displayProjects(todoArray, ''));

displayProjects(todoArray);
