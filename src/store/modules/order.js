import request from "@/assets/js/request.js";
const state = {
  orderList: [],
};
const mutations = {
  SET_ORDER_LIST: (state, list) => {
    state.orderList = list;
  },
};
const actions = {
  getOrderList({ commit }) {
    try {
      const res = request("getOrderList");
      const data = res.data.orders;
      data.sort((a, b) => {
        // 轉西元？ 同加1911不影響排序？
        return new Date(b.date) - new Date(a.date);
      })
      commit("SET_ORDER_LIST", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

const getters = {
  doneOrderList: (state) => {
    return state.orderList.filter(
      (order) => order.status.code === 3 || order.status.code === 4
    );
  },
  processingOrderList: (state) => {
    return state.orderList.filter(
      (order) => order.status.code === 1 || order.status.code === 2
    );
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
