<template>
  <button @click="test">test</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    test() {
      console.log('aaa', this);
    }
  }
});
</script>