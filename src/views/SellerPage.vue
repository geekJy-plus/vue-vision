<!--针对于/sellerpage 这条路径而显示出来的，在这个组件中，通过子组件注册的方式显示Seller.vue这个组件-->
<template>
  <div class="com-page">
    <seller></seller>
  </div>
</template>

<script>
import Seller from '@/components/Seller.vue'
export default {

components:{
  seller:Seller
}
}
</script>

<style>

</style>