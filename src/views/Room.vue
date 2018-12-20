<template>
  <div>
    ROOT 
    {{ membersList }}
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: 'Room',
   computed: {
    ...mapState({
      membersList: state => state.socket.roomMembers
    })
  },
}
</script>

