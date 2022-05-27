import { Project , projectList} from "./project";
import loadToDoList from "./to-do-list";

const loadToDoForm = (e) => { 

    const toDoBody = document.getElementById('to-do');

    const toDoForm = document.createElement('form');
    toDoForm.classList.add('hide');
    toDoForm.classList.add('toDoForm');
    toDoBody.appendChild(toDoForm);
    const toDoFieldset = document.createElement('fieldset');
    toDoForm.appendChild(toDoFieldset);

    const titleSec = document.createElement('div');
    toDoFieldset.appendChild(titleSec);
    const toDoTitle = document.createElement('label')
    toDoTitle.textContent = 'To Do Title: '
    toDoTitle.setAttribute('for', 'title');
    titleSec.appendChild(toDoTitle);
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('id', 'toDoTitle');
    titleInput.setAttribute('required', 'true');
    titleInput.setAttribute('maxlength', '10');
    titleSec.appendChild(titleInput);

    const descSec = document.createElement('div');
    toDoFieldset.appendChild(descSec);
    const toDoDesc = document.createElement('label')
    toDoDesc.textContent = 'Desc: '
    toDoDesc.setAttribute('for', 'desc');
    descSec.appendChild(toDoDesc);
    const descInput = document.createElement('textarea');
    descInput.setAttribute('name', 'desc');
    descInput.setAttribute('id', 'desc');
    descInput.setAttribute('cols', '30');
    descInput.setAttribute('rows', '3');
    descSec.appendChild(descInput);

    const impSec = document.createElement('div');
    toDoFieldset.appendChild(impSec);
    const toDoImp = document.createElement('label')
    toDoImp.textContent = 'Importance: '
    toDoImp.setAttribute('for', 'importance');
    impSec.appendChild(toDoImp);
    const impInput = document.createElement('select');
    impInput.setAttribute('name', 'importance');
    impInput.setAttribute('id', 'importance');
    impSec.appendChild(impInput);

    const notImp = document.createElement('option');
    notImp.textContent = "Not Important";
    notImp.setAttribute('value', 'Not Important')
    impInput.appendChild(notImp);

    const Imp = document.createElement('option');
    Imp.textContent = "Important";
    Imp.setAttribute('value', 'Important')
    impInput.appendChild(Imp);

    const urgentImp = document.createElement('option');
    urgentImp.textContent = "Urgent";
    urgentImp.setAttribute('value', 'Urgent')
    impInput.appendChild(urgentImp);

    const dateSec = document.createElement('div');
    toDoFieldset.appendChild(dateSec);
    const toDoDate = document.createElement('label')
    toDoDate.textContent = 'By: '
    toDoDate.setAttribute('for', 'date');
    dateSec.appendChild(toDoDate);
    const dateInput = document.createElement('input');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('id', 'date');
    dateInput.setAttribute('type', 'date');
    dateSec.appendChild(dateInput);

    const createToDoBtn = document.createElement('button');
    createToDoBtn.textContent = 'Create';
    createToDoBtn.setAttribute('type', 'button')
    createToDoBtn.classList.add(`${e}`)
    createToDoBtn.addEventListener('click', (e) => {
        let ind = e.target.classList[0];
        projectList[ind].addToDo(
            `${titleInput.value}`,
            `${descInput.value}`,
            `${impInput.value}`,
            `${dateInput.value}`
        );
        toDoForm.classList.add('hide');
        loadToDoList(ind);
    })
    toDoFieldset.appendChild(createToDoBtn)



    const exitFormBtn = document.createElement('button');
    exitFormBtn.textContent = 'X';
    exitFormBtn.setAttribute('type', 'button')
    exitFormBtn.addEventListener('click', () => {
        toDoForm.classList.add('hide');
        toDoInput.textContent = '';
        descInput.textContent = '';
        impInput.value = '';
        dateInput.value = '';
    })    
    toDoFieldset.appendChild(exitFormBtn);

    const reveal = () => {
        toDoForm.classList.remove('hide');
    };

    return {reveal};
};

export default loadToDoForm;