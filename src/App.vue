<template >
  <NavbarC></NavbarC>
  <router-view></router-view>
  <FooterC></FooterC>
</template>
<script>
import NavbarC from '../src/components/NavbarC'
import FooterC from '../src/components/FooterC.vue'
export default {
  components: {
    NavbarC,
    FooterC
  }
  
}
</script>
<style lang="">
  
</style>