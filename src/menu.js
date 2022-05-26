import {Project, projectList} from './project.js';
import loadToDoList from './to-do-list.js';

const toDoMenu = (() =>{

    //Will load projects and other menu info into DOM tree
    const updateMenu = () => {
        const body = document.querySelector('body');
        const menu = document.getElementById('menu');

        const title = document.createElement('h1');
        title.textContent = 'Menu';
        menu.appendChild(title);

        const today = document.createElement('h2');
        today.textContent = 'Today';
        menu.appendChild(today);
    
        const notes = document.createElement('h2');
        notes.textContent = 'Notes';
        menu.appendChild(notes);

        const projectBar = document.createElement('h2');
        projectBar.textContent = 'Projects';
        menu.appendChild(projectBar);
        
        const projectsDisplay = document.createElement('ul');
        menu.appendChild(projectsDisplay);
        projectList.forEach(project => {
            const projectName = document.createElement('li');
            projectName.textContent = `${project.title}`;
            projectName.addEventListener('click', (e) => {
                loadToDoList(findInd(e.target.textContent));
            });
            projectsDisplay.appendChild(projectName);
        });
    };

    const findInd = (name) => {
        return projectList.findIndex((project) => {
            return `${project.title}` == `${name}`}); 
    }

    //Will add a project to the menus projects list
    const addProject = (name) => {
        projectList.push(Project(name));
    };

    //Takes user to project designated
    const openProject = (proj) => {

    }
    
    return {
        updateMenu,
        addProject,
    }

})();

export default toDoMenu;
