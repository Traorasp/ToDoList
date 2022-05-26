import {Project, projectList} from './project.js';

const loadToDoList = ((e) => {

    let project = projectList[e]

    const toDoBody = document.getElementById('to-do');
    toDoBody.innerHTML = '';

    const title = document.createElement('h1');
    title.textContent = project.title;
    toDoBody.appendChild(title);

    const toDoBtn = document.createElement('button');
    toDoBtn.classList.add(`${e}`);
    toDoBtn.textContent = '+';
    toDoBody.appendChild(toDoBtn);
    toDoBtn.addEventListener('click', (e) => {
        let ind = e.target.classList[0];
        projectList[ind].addToDo('space','fire', 'Not Important','earth') 
        loadToDoList(ind);
    })

    const list = document.createElement('div');
    list.setAttribute('id', 'list');
    toDoBody.appendChild(list);

    let projectsToDo = project.showToDo()
    projectsToDo.forEach(toDo => {
        const toDoObj = document.createElement('div');
        toDoObj.classList.add('to-do');
        
        const toDoName = document.createElement('h3');
        toDoName.textContent = toDo.name;
        toDoObj.appendChild(toDoName);

        const toDoDesc = document.createElement('h3');
        toDoDesc.textContent = toDo.desc;
        toDoObj.appendChild(toDoDesc);

        const toDoDate = document.createElement('h3');
        toDoDate.textContent = toDo.date;
        toDoObj.appendChild(toDoDate);

        let ind = projectsToDo.findIndex((elem) => {return elem == toDo});
        const deleteBtn = document.createElement('button');
        toDoBtn.classList.add(`${ind}`);
        deleteBtn.textContent = 'X';
        toDoObj.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', (btn) => {
            let ind = btn.target.classList[0];
            project.removeToDo(ind); 
            loadToDoList(e);
        })

        switch (toDo.imp) {
            case 'Not Important':
                toDoObj.classList.add('not-imp');
                break;
            case 'Important':
                toDoObj.classList.add('imp');
                break;
            case 'Urgent':
                toDoObj.classList.add('urgent');
                break;
        }

        toDoBody.appendChild(toDoObj);
    });

});

export default loadToDoList;