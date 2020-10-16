import {GetterTree} from 'vuex';
import {RootState} from '@/store';
import {TaskState} from '@/modules/task/store/state';

export const getters: GetterTree<TaskState, RootState> = {};
