<template>
    <div class="container mt-5">
        <div class="jumbotron jumbotron-fluid d-flex justify-content-center">
            <div class="col-sm-8">
                <h2>Редактирование задачи {{ currentTaskData.id }}</h2>
                <form>
                    <div class="form-group">
                        <label for="editTitle">Заголовок задачи</label>
                        <input v-model="currentTaskData.title" type="text" class="form-control" id="editTitle"
                               aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                        <label for="editText">Текст задачи</label>
                        <textarea v-model="currentTaskData.body" type="text" class="form-control" id="editText"></textarea>
                    </div>
                    <button @click.prevent="updateTask(currentTaskData)" type="submit" class="btn btn-primary">Сохранить</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Data} from '@/modules/task/data/data';
import taskService from '@/modules/task/service/taskService';

@Component
export default class TaskEdit extends Vue {
  public currentTaskData = {} as Data;

  public fetchCurrentTask(id: string) {
    taskService.fetchCurrentTask(id)
      .then((response: any) => {
        this.currentTaskData = response.data;
        alert(response.status);
      })
      .catch((error: any) => {
        console.log(error.response);
      });
  }

  public updateTask(currentTaskData: Data) {
    taskService.updateTodo(this.$route.params.uuid, currentTaskData)
      .then((response: any) => {
        this.$router.push({name: 'test-api-tasks'});
        alert(response.status);
      })
      .catch((error: any) => {
        console.log(error.response);
      });

  }

  private mounted() {
    if (this.$route.params.uuid) {
      this.fetchCurrentTask(this.$route.params.uuid);
    }
  }
}
</script>

<style scoped>

</style>
