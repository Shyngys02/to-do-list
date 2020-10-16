import { Module } from 'vuex';
import { RootState } from '@/store';
import { TaskState, state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

const namespaced: boolean = true;
export const namespace: string = 'task';

export const task: Module<TaskState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
