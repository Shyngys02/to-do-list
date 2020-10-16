import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import { app } from '@/modules/app/store';
import { auth } from '@/modules/auth/store';
import { task } from '@/modules/task/store';

Vue.use(Vuex);

export interface RootState {}

const store: StoreOptions<RootState> = {
  modules: {
    app,
    auth,
    task,
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
};

export default new Vuex.Store<RootState>(store);
