import ListModel from '@/models/list.model.ts';

export default {
  addList(context: any, param: ListModel) {
    context.commit('addList', param);
  },
};
