<template>
  <section class="container">
    <div class="row">
      <champion
        v-for="(champion, index) in champions"
        :key="index"
        :champion="champion"
      />
    </div>
  </section>
</template>

<script>
import Champion from "./Champion.vue";
export default {
  components: { Champion },
  props: ["champions"],
};
</script>

<style>
</style>