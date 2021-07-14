<template>
  <div class="home">
    <label for="locale">locale</label>
    <select v-model="$i18n.locale">
      <option>zh</option>
      <option>en</option>
    </select>
    <div>{{ $t("message.hello") }}</div>
    <div>{{ count }}</div>
    <button @click="add">Increment</button>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import {
  useRoute, onBeforeRouteLeave, onBeforeRouteUpdate,
} from 'vue-router';
import { ref, watch } from 'vue';
// import { mapMutations } from 'vuex';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    // ...mapMutations([
    //   'increment',
    // ]),
  },
  methods: {
    add() {
      // this.increment();
      this.$store.commit('increment');
    },
  },
  setup() {
    onBeforeRouteLeave(() => {
      const answer = window.confirm('Do you really want to leave? you have unsaved changes!');
      // 取消导航并停留在同一页面上
      if (!answer) return false;
      return true;
    });

    const route = useRoute();
    const userData = ref();

    onBeforeRouteUpdate(async (to, from) => {
      // 仅当 id 更改时才获取用户，例如仅 query 或 hash 值已更改
      if (to.params.id !== from.params.id) {
        userData.value = to.params.id;
      }
    });

    // 当参数更改时，获取用于信息
    watch(
      () => route.params,
      async (newParams) => {
        // userData.value = await fetchUser(newParams.id);
        userData.value = newParams.id;
      },
    );
  },
};
</script>
