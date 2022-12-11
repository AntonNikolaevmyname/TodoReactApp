import axios from "axios";
import { useState, useEffect } from 'react';
import { initialData } from './../data/initial-data';

export const TodoControllerGet = () => {
  /*const [tasks, setTasks] = useState();

  const getTasks = async() => {
    //const response = await axios.get('api/Home/GetAbbyyVersion');
    //setTasks(response.data);
  }

  useEffect(() => {
    getTasks();
  }, []);
*/
  //return tasks;
  return initialData;
}

export const TodoControllerGetById = (id) => {
    
    return initialData;
  }

export const TodoControllerCreate = (task) => {
    
    return initialData;
  }

  export const TodoControllerUpdate = (task) => {
    
    console.log(task)
  }

  export const TodoControllerDelete = (id) => {
    
    console.log("TodoControllerDelete " + id)
  }

  export const TodoControllerComplete = (id) => {
    
    return initialData;
  }