<template>
  <div v-bind:class="{card: true, flip: flipped}" v-on:click="flipCard">
    <div class="inner">
      <div class="card-front">
        CARDXX value {{value}}
      </div>
      <div class="card-back">
        <img src="https://developers.giphy.com/static/img/giphy_sdks.8a3a16f623df.gif"/>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.card {
  background-color: transparent;
  width: 100px;
  height: 100px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

.inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.card.flip .inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
</style>


<script>


export default {
  name: "Card",
  props: {
    value: String
  },
  data: function() {
    return {
      flipped: false
    }
  },
  methods: {
    flipCard: function(event) { 
      this.flipped = !this.flipped;
      console.log(this.flipped);
      this.$store.dispatch("card/toggle", {
            value: this.value
          });

    }
  }
}
</script>