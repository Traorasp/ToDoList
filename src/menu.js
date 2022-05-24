import Project from './project.js';

const toDoMenu = (() =>{

    let projects = [];

    //Will load projects and other menu info into DOM tree
    const updateMenu = () => {
        console.log(projects);
    };

    //Will add a project to the menus projects list
    const addProject = (name) => {
        projects.push(Project(name));
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
