<template>
  <div class="cardsList">
    <div v-for="card in deck" class="card-container" v-if="!(selectedCard && card !== selectedCard)">
        <div  v-bind:class="{selected: card == selectedCard }">
          <Card :value="card" :selected="card == selectedCard" />
        </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  .cardsList {
    background: red;
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;
    width: 500px;
    
    .hidden {
      display: none;
    }

    .card-container {
      flex: 1;
       flex-grow: 1;
      background-color: blue;
      max-width: 30%;
      
      margin: 10px;
    }
  }
</style>

<script>
import Card from "@/components/Card";
import { mapGetters, mapState } from "vuex";

export default {
  name: "CardsList",
  components: {
    Card
  },
  computed: {
    ...mapState({
      selectedCard: state => state.card.selected
    })
  },
  props: {
    deck: Array
  }
};
</script>
