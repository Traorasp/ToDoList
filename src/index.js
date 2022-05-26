import toDoMenu from "./menu.js";
import './style.css';

const body = document.querySelector('body');
const menu = document.createElement('div');
menu.setAttribute('id', 'menu');
body.appendChild(menu);
const toDo = document.createElement('div');
toDo.setAttribute('id', 'to-do');
body.appendChild(toDo);


toDoMenu.addProject("Bob");

toDoMenu.addProject("lock");


toDoMenu.updateMenu();

