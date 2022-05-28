import { Project, projectList } from './project';
import toDoMenu from './menu';

export default (function loadField() {
  const body = document.querySelector('body');
  const projectForm = document.createElement('form');
  projectForm.classList.add('hide');
  projectForm.classList.add('projectForm');
  body.appendChild(projectForm);
  const proFieldset = document.createElement('fieldset');
  projectForm.appendChild(proFieldset);

  const exitFormBtn = document.createElement('button');
  exitFormBtn.textContent = 'X';
  exitFormBtn.setAttribute('type', 'button');

  const titleSec = document.createElement('div');
  proFieldset.appendChild(titleSec);
  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Projet Title: ';
  titleLabel.setAttribute('for', 'title');
  titleSec.appendChild(titleLabel);
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'title');
  titleInput.setAttribute('id', 'projectTitle');
  titleInput.setAttribute('required', 'true');
  titleInput.setAttribute('maxlength', '10');
  titleSec.appendChild(titleInput);

  exitFormBtn.addEventListener('click', () => {
    projectForm.classList.add('hide');
    titleInput.value = '';
  });
  proFieldset.appendChild(exitFormBtn);

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Create';
  submitBtn.setAttribute('type', 'button');
  submitBtn.addEventListener('click', () => {
    projectList.push(Project((titleInput.value)));
    projectForm.classList.add('hide');
    titleInput.value = '';
    toDoMenu.updateMenu();
  });
  proFieldset.appendChild(submitBtn);

  const show = () => {
    projectForm.classList.remove('hide');
  };

  return { show };
}());
