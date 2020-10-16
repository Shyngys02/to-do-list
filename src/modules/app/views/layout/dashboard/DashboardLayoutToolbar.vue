<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#">
            <img src="@/assets/images/logo.png" width="40" height="40" class="d-inline-block align-top" alt="" loading="lazy">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" :to="{path: '/'}">Главная</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{path: '/test-api-tasks'}">API задачи</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{path: '/tasks'}">Задачи</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Задачи
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Описание</a>
                        <a class="dropdown-item" href="#">Требования</a>
                    </div>
                </li>

            </ul>
            <div class="d-flex">
                <div class="mx-2 mx-xs-0">
                    <button class="btn btn-outline-secondary my-2 my-sm-0" data-toggle="modal" data-target="#registrationBackdrop" type="button">Регистрация</button>
                </div>
                <div class="mx-2 mx-xs-0">
                    <button class="btn btn-outline-secondary my-2 my-sm-0" data-toggle="modal" data-target="#authBackdrop" type="button">Вход</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class DashboardLayoutToolbar extends Vue {

}
</script>

<style scoped lang='scss' >
  .navbar {
    z-index: 4;
  }
</style>
