import { testApi } from '@/network/testApi';
import {Data, NewTaskData} from '@/modules/task/data/data';


const taskService = {
  fetchTasks() {
    return testApi.get('/posts?userId=1');
  },

  fetchCurrentTask(id: string) {
    return testApi.get('/posts/' + id);
  },

  createTask(data: NewTaskData) {
    return testApi.post('/posts/', data);
  },

  updateTodo(id: string, data: Data) {
    return testApi.put('/posts/' + id, data);
  },

  removeTask(id: string) {
    return testApi.delete('/posts/' + id);
  },
};

export default taskService;
