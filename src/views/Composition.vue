<template>
  <div class="composition">
    Composition
    <p>{{ counter }}</p>
    <p ref="root">This is a root element</p>
  </div>
</template>

<script>
import {
  ref, computed, watch, onMounted, watchEffect,
} from 'vue';

export default {
  setup(props, context) {
    console.log('setup -> context', context);
    console.log('setup -> props', props);
    const counter = ref(0);
    const root = ref(null);

    onMounted(() => {
      // console.log('onMounted');
      // console.log(root.value, 'root.value');
    });

    watch(counter, (value) => {
      console.log('setup -> value', value);
    });

    counter.value++;

    const twiceCounter = computed(() => counter.value * 2);
    console.log('setup -> twiceCounter', twiceCounter.value);

    watchEffect(() => {
      console.log(root.value, 'root.value');
    }, {
      // flush: 'post',
    });

    return {
      counter,
      root,
    };
  },
};
</script>
