const Project = (title) => {

    let toDoList = ['wa', 9]
    
    //Will add a to to object to the end of the toDoList
    const addToDo = (name, desc, imp, date) => {
        toDoList.push(toDo(name,desc,imp,date))
    }

    //Will remove the to do at the specified index
    const removeToDo = (index) => {
        toDoList.splice(index,1)
    }

    return {
        title,
        addToDo,
        removeToDo,
        toDoList,
    }
};

const toDo = (name, desc, imp, date) => {
    return {name, desc, imp, date};
}

export default Project;