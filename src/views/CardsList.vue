<template>
  <PokerCardsList :deck="cards" />
</template>



<script>
import PokerCardsList from '@/components/CardsList'
export default {
  name: 'Reveal',
  components: {
    PokerCardsList,
  },
  data: () => ({
    cards: [0, 1, 2, 3, 5, 8, 13, 20, 40, 100],
    menuVisible: false
  }),
  
}
</script>
