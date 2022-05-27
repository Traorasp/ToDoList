import {Project, projectList} from './project.js';
import loadToDoList from './to-do-list.js';
import loadField from './loadField.js';

const toDoMenu = (() =>{

    //Will load projects and other menu info into DOM tree
    const updateMenu = () => {
        const body = document.querySelector('body');
        const menu = document.getElementById('menu');
        menu.innerHTML = '';

        const title = document.createElement('h1');
        title.textContent = 'Menu';
        menu.appendChild(title);

        const projectBar = document.createElement('h2');
        projectBar.textContent = 'Projects';
        menu.appendChild(projectBar);
        
        const projectsDisplay = document.createElement('ul');
        menu.appendChild(projectsDisplay);
        projectList.forEach(project => {

            const projectHolder = document.createElement('li')
            projectHolder.classList.add('project');
            projectsDisplay.appendChild(projectHolder);

            const projectName = document.createElement('p');
            projectName.textContent = `${project.title}`;
            projectName.addEventListener('click', (e) => {
                loadToDoList(findInd(e.target.textContent));
            });
            projectHolder.appendChild(projectName);

            const removeProjectBtn = document.createElement('button');
            removeProjectBtn.textContent = 'X';
            removeProjectBtn.classList.add(`btn-${project.title}`)
            projectHolder.appendChild(removeProjectBtn);
            removeProjectBtn.addEventListener('click', (e) => {
                projectList.splice(findInd(e.target.classList[0].substring(4)),1)
                updateMenu();
            })
        });

        const createProjectBtn = document.createElement('button');
        createProjectBtn.classList.add('create-project-btn')
        createProjectBtn.textContent = '+';
        projectsDisplay.appendChild(createProjectBtn);
        createProjectBtn.addEventListener('click', displayForm);
    };

    const displayForm = () => {
        loadField.show();
    }

    const findInd = (name) => {
        return projectList.findIndex((project) => {
            return `${project.title}` == `${name}`}); 
    }
    
    return {
        updateMenu,
        displayForm,
    }

})();

export default toDoMenu;
