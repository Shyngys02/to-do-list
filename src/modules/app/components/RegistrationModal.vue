<template>
    <div class="modal fade" id="registrationBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="registrationBackdropLabel">Форма регистрации</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="newLogin">Логин</label>
                            <input type="text" class="form-control" id="newLogin" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="firstName">Имя</label>
                            <input type="text" class="form-control" id="firstName" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="lastName">Фамилия</label>
                            <input type="text" class="form-control" id="lastName" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="password1">Пароль</label>
                            <input type="password" class="form-control" id="password1">
                        </div>
                        <div class="form-group">
                            <label for="password2">Пароль</label>
                            <input type="password" class="form-control" id="password2">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    <button type="button" class="btn btn-primary">Зарегестрироваться</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Vue} from "vue-property-decorator";

    export default class RegistrationModal extends Vue {
    }
</script>

<style scoped>

</style>
