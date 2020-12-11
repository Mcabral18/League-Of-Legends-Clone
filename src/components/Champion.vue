<template>
  <div class="col mt-3">
    <div class="card" style="width: 14rem; margin: 0 auto">
      <div style="overflow: hidden !important">
        <img
          class="card-img-top"
          :src="imageUrl + champion.id + '_0.jpg'"
          :alt="champion.name"
        />
      </div>
      <div class="card-body">
        <h4 class="card-text">{{ champion.name }}</h4>
      </div>
    </div>
  </div>
  <!-- <img :src="imageUrl + champion.id + '_0.jpg'" alt="" />
    <p>{{ champion.name }}</p> -->
</template>

<script>
export default {
  props: ["champion"],
  data() {
    return {
      imageUrl: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/",
    };
  },
};
</script>

<style>
</style>