import { createStore, createLogger } from 'vuex';

export default function () {
  return createStore({
    state: {
      count: 0,
    },
    mutations: {
      increment(state) {
        state.count++;
      },
    },
    actions: {
    },
    modules: {
    },
    plugins: [createLogger()],
  });
}
