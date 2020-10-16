<template>
    <div class="container">
        <div class="title text-center my-4">
            <h1>Добро пожаловать на наш сервис!</h1>
        </div>
        <section class="section-1">
            <div class="row justify-content-center">
                <div class="img-block col-sm-12">
                    <img src="@/assets/images/main.jpg" alt="to-do list image">
                </div>
            </div>
        </section>
        <div class="text-center">
            <h1>Текущие задачи</h1>
        </div>
        <section>
            <div class="row">
                <div class="col-sm-12 col-md-4 mb-4">
                    <div class="card">
                        <img src="@/assets/images/main.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title">Задача</h5>
                                <a href="#">18.10.2020</a>
                            </div>
                            <p class="card-text">Проблемная ситуация с явно заданной целью, которую необходимо достичь; в
                                более узком смысле задачей также называют саму эту цель, данную в рамках проблемной
                                ситуации, то есть то, что требуется сделать.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 mb-4">
                    <div class="card">
                        <img src="@/assets/images/main.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title">Задача</h5>
                                <a href="#">18.10.2020</a>
                            </div>
                            <p class="card-text">Проблемная ситуация с явно заданной целью, которую необходимо достичь; в
                                более узком смысле задачей также называют саму эту цель, данную в рамках проблемной
                                ситуации, то есть то, что требуется сделать.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 mb-4">
                    <div class="card">
                        <img src="@/assets/images/main.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title">Задача</h5>
                                <a href="#">18.10.2020</a>
                            </div>
                            <p class="card-text">Проблемная ситуация с явно заданной целью, которую необходимо достичь; в
                                более узком смысле задачей также называют саму эту цель, данную в рамках проблемной
                                ситуации, то есть то, что требуется сделать.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="text-center">
            <h1>Выполненные задачи</h1>
        </div>
        <section>
            <div class="row">
                <div class="col-sm-12 col-md-4 mb-4">
                    <div class="card">
                        <img src="@/assets/images/main.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title">Задача</h5>
                                <a href="#">18.10.2020</a>
                            </div>
                            <p class="card-text">Проблемная ситуация с явно заданной целью, которую необходимо достичь; в
                                более узком смысле задачей также называют саму эту цель, данную в рамках проблемной
                                ситуации, то есть то, что требуется сделать.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 mb-4">
                    <div class="card">
                        <img src="@/assets/images/main.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title">Задача</h5>
                                <a href="#">18.10.2020</a>
                            </div>
                            <p class="card-text">Проблемная ситуация с явно заданной целью, которую необходимо достичь; в
                                более узком смысле задачей также называют саму эту цель, данную в рамках проблемной
                                ситуации, то есть то, что требуется сделать.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 mb-4">
                    <div class="card">
                        <img src="@/assets/images/main.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title">Задача</h5>
                                <a href="#">18.10.2020</a>
                            </div>
                            <p class="card-text">Проблемная ситуация с явно заданной целью, которую необходимо достичь; в
                                более узком смысле задачей также называют саму эту цель, данную в рамках проблемной
                                ситуации, то есть то, что требуется сделать.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class TheMain extends Vue {

    private beforeMount() {
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
