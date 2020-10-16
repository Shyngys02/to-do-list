<template>
    <div class="container">
        <div class="col-sm-12 d-flex justify-content-center align-items-end">
            <div class="col-sm-8">
                <div class="input-group input-group-df mb-3 mr-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="title">Заголовок</span>
                    </div>
                    <input v-model="newTaskData.title" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="title">
                </div>
                <div class="input-group input-group-df mb-3 mr-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="text">Текст</span>
                    </div>
                    <input v-model="newTaskData.text" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="text">
                </div>
                <div class="input-group input-group-df mb-3 mr-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="deadline">Срок выполнения</span>
                    </div>
                    <input v-model="newTaskData.deadline" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="deadline">
                </div>
            </div>
            <div class="col-sm-2  mb-3">
                <button @click="addNewTask" class="btn btn-outline-secondary my-2 my-sm-0" type="button">Добавить</button>
            </div>
        </div>
        <div class="text-center">
            <h1>Текущие задачи</h1>
        </div>
        <section>
            <div class="row">
                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Заголовок</th>
                        <th scope="col">Текст</th>
                        <th scope="col">Срок выполнения</th>
                        <th scope="col">Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(task, index) in currentTasks" :key="task.title">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ task.title }}</td>
                        <td>{{ task.text }}</td>
                        <td>{{ task.deadline }}</td>
                        <td><button @click.prevent="isDone(task.id)" class="btn btn-outline-primary my-2 my-sm-0" type="button">Выполнено</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <div class="text-center">
            <h1>Выполненные задачи</h1>
        </div>
        <section>
            <div class="row">
                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Заголовок</th>
                        <th scope="col">Текст</th>
                        <th scope="col">Срок выполнения</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(task, index) in doneTasks" :key="task.title">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ task.title }}</td>
                        <td>{{ task.text }}</td>
                        <td>{{ task.deadline }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {NewTask, TaskData} from '@/modules/task/data/data';

@Component
export default class Tasks extends Vue {
  public currentTasks: TaskData[] = [];
  public doneTasks: TaskData[] = [];

  public newTaskData: NewTask = {} as NewTask;

  public addNewTask() {
    const newTask: TaskData = {
      id: Math.floor(Math.random() * 101),
      title: this.newTaskData.title,
      text: this.newTaskData.text,
      deadline: this.newTaskData.deadline,
    };
    this.currentTasks.push(newTask);
  }

  public isDone(id: number) {
    this.currentTasks.forEach((task) => {
      if (task.id == id) {
        this.doneTasks.push(task);
      }
    });

    const index = this.currentTasks.map((element) => {
      return element.id;
    }).indexOf(id);

    this.currentTasks.splice(index, 1);
  }

}
</script>

<style scoped>
    .container {
        padding-top: 85px;
    }

    .img-block img{
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
    }

    .media img {
        max-width: 3em;
        max-height: 3em;
    }

    section {
        margin: 2em 0;
    }

    button:focus, input:focus{
        outline: none;
    }
</style>
