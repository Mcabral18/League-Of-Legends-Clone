// create an external call to the api
const API_URL =
  "http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json";

export default {
  async getChampions() {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.data;
  },
};
