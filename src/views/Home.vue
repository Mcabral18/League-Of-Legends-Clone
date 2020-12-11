<template>
  <section>
    <section
      class="pb"
      style="background-color: rgb(248, 248, 248); z-index: -5"
    >
      <div class="container pt-5">
        <div class="row">
          <div class="col-md-6">
            <div class="card_rell">
              <div class="row">
                <div class="col">
                  <h6 class="flow_right">HIGHLIGHTS</h6>
                  <img class="rell_image" src="../assets/rell.jpg" alt="" />
                </div>
                <div class="col" style="margin: auto">
                  <h6>MEDIA</h6>
                  <h2 class="rell_desciption">RELL CHAMPION SPOTLIGHT</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3" style="margin: auto">
            <div class="row mt-4">
              <div class="col-md-6">
                <img src="../assets/dev.jpg" alt="" />
              </div>
              <div class="col" style="margin: auto">
                <h6>Champion Roadmap: September 2020</h6>
              </div>
            </div>
          </div>
          <div class="col-md-3" style="margin: auto">
            <div class="row mt-4">
              <div class="col-md-6">
                <img src="../assets/garen.jpg" alt="" />
              </div>
              <div class="col" style="margin: auto">
                <h6>Read Garen: First Shield</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12 slogan_home">
            <h3 class="text-center slogan_1">CHOOSE YOUR</h3>
            <h1 class="text-center slogan_2">CHAMPION</h1>
            <h5 class="text-center slogan_3">
              With more than 140 champions, you’ll find the perfect match<br />
              for your playstyle. Master one, or master them all.
            </h5>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <hr />
    </div>
    <champions-list :champions="champions" />
  </section>
</template>

<script>
import ChampionsList from "../components/ChampionsList.vue";
import API from "../Lib/API";
export default {
  components: { ChampionsList },
  data() {
    return {
      champions: [],
    };
  },
  created() {
    this.sendApiRequest();
  },
  methods: {
    async sendApiRequest() {
      this.champions = await API.getChampions();
      // this.champions.replace(/\s+/g, "");
      console.log(this.champions);
    },
  },
};
</script>
