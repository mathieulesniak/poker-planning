<template>
  <div class="cardsList">
    <div v-for="card in deck" class="card-container">
        <Card :value="card"/>
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
    
    .card-container {
      flex: 1;
      background-color: blue;
      max-width: 30%;
      
      margin: 10px;
    }
  }
</style>

<script>
import Card from "@/components/Card";

export default {
  name: "CardsList",
  components: {
    Card,
  },
  props: {
    deck: Array
  }
}
</script>