<template>
    <div>
        <dashboard-layout-toolbar ></dashboard-layout-toolbar>
        <router-view></router-view>
        <authorization-modal></authorization-modal>
        <registration-modal></registration-modal>
    </div>
</template>

<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';
import DashboardLayoutToolbar from './DashboardLayoutToolbar.vue';
import DashboardLayoutFooter from './DashboardLayoutFooter.vue';
import RegistrationModal from '@/modules/app/components/RegistrationModal.vue';
import AuthorizationModal from '@/modules/app/components/AuthorizationModal.vue';

@Component({
  components: {
    DashboardLayoutToolbar,
    DashboardLayoutFooter,
    RegistrationModal,
    AuthorizationModal,
  },
})
export default class DashboardLayout extends Vue {}
</script>

<style scoped ></style>
