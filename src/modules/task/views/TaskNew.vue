<template>
    <div class="container mt-5">
        <div class="jumbotron jumbotron-fluid d-flex justify-content-center">
            <div class="col-sm-8">
                <h2>Добавление новой задачи</h2>
                <form>
                    <div class="form-group">
                        <label for="editTitle">Заголовок задачи</label>
                        <input v-model="newTaskData.title" type="text" class="form-control" id="editTitle"
                               aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                        <label for="editText">Текст задачи</label>
                        <textarea v-model="newTaskData.body" type="text" class="form-control" id="editText"></textarea>
                    </div>
                    <button @click.prevent="createTask(newTaskData)" type="submit" class="btn btn-primary">Сохранить</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {NewTaskData} from '@/modules/task/data/data';
import taskService from '@/modules/task/service/taskService';

@Component
export default class TaskNew extends Vue {

  public newTaskData = {} as NewTaskData;

  public createTask(newTaskData: NewTaskData) {
      taskService.createTask(newTaskData)
        .then((response: any) => {
          this.$router.push({name: 'test-api-tasks'});
          alert(response.status);
        })
        .catch((error: any) => {
          console.log(error.response);
        });

    }

  private mounted() {

  }
}
</script>

<style scoped>

</style>
