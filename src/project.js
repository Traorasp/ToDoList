const toDo = (name, desc, imp, date) => ({
  name, desc, imp, date,
});

const Project = (title) => {
  const toDoList = [];

  // Will add a to to object to the end of the toDoList
  const addToDo = (name, desc, imp, date) => {
    toDoList.push(toDo(name, desc, imp, date));
  };

  // Will remove the to do at the specified index
  const removeToDo = (index) => {
    toDoList.splice(index, 1);
  };

  const showToDo = () => toDoList;

  return {
    title,
    addToDo,
    removeToDo,
    showToDo,
  };
};

const projectList = [Project('Today')];

export { Project, projectList };
