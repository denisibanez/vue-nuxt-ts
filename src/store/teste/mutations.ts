import ListModel from '@/models/list.model.ts';

export default {
  addList(state:any, param: ListModel) {
    state.list.push(param);
  },
};
