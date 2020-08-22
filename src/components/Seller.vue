<!-- 商家销量统计的横向柱状图-->
<template>
  <div class="com-container">
    <div class="com-chart" ref="seller_ref"></div>
  </div>
</template>

<script>
export default {
data(){
  return{
    chartInstance:null
  }
},
mounted(){
this.initChart(),
this.getData()
},
methods:{
  // 初始化echarts实例对象
  initChart(){
   this.chartInstance= this.$echarts.init(this.$refs.seller_ref)
  },
  // 获取服务器数据
   getData(){
     return new Promise((resolve,reject)=>{
        const data=this.$http.get('seller')
        resolve(data)
     }).then(value=>{
       console.log(value);
       
     })
    // console.log(ret);
    
  },
  // 更新图标
  // updateChart(){
    
  // }

}
}
</script>

<style>

</style>