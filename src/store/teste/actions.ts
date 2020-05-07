import ListModel from '@/models/list.model.ts';

export default {
  addListAction(context: any, param: ListModel) {
    context.commit('addList', param);
  },
};
