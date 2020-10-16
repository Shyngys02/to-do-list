<template>
    <div class="container">
        <div class="text-center">
            <h1>Тест АПИ задачи</h1>
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
                        <th scope="col">Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(task, index) in tasks" :key="task.id">
                        <th scope="row">{{ task.id }}</th>
                        <td>{{ task.title }}</td>
                        <td>{{ task.body }}</td>
                        <td>{{ task.deadline }}</td>
                        <td>
                            <router-link :to="`/task/new/`"> Добавить </router-link>
                            <router-link :to="`/task/edit/${task.id}`"> Изменить </router-link>
                            <a class="card-link cursor-pointer" @click.prevent="removeTask(task.id)">Удалить</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Data} from '@/modules/task/data/data';
import taskService from '@/modules/task/service/taskService';

@Component
export default class CurrentTasks extends Vue {
  public tasks: Data[] = [];

  public fetchTasks() {
    taskService.fetchTasks()
    .then((response: any) => {
      this.tasks = response.data;
    })
    .catch((error: any) => {
      console.log(error.response);
    });
  }

  public removeTask(id: string) {
    taskService.removeTask(id)
      .then((response: any) => {
        alert(response.status);
      })
      .catch((error: any) => {
        console.log(error.response);
      });
  }

  private mounted() {
    this.fetchTasks();
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

    .cursor-pointer {
        cursor: pointer;
    }

    .my-modal {
        position: absolute !important;
        z-index: 10;
    }


</style>
