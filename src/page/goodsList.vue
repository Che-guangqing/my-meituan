<template>
   <div class="page-product">
       <el-row class="m-crumbs">
           <crumbs />
       </el-row>
       <el-row>
           <el-col :span="19">
               <el-row>
                   <categroy />
               </el-row>
               <el-row>
                   <list />
               </el-row>
           </el-col>
           <el-col :span="5">
               <div class="map">
                   <img src="http://img0.imgtn.bdimg.com/it/u=2639636007,2894456443&fm=26&gp=0.jpg" alt="">
               </div>
               <love />
           </el-col>
       </el-row>
   </div>
</template>

<script>
import crumbs from '@/components/products/crumbs'
import Categroy from '@/components/products/categroy'
import List from '@/components/products/list'
import Love from '../components/products/love'
export default {
  components: {
    crumbs,
    Categroy,
    List,
    Love
  }
}
</script>

<style lang="scss">
    @import '@/assets/css/products/index.scss';
</style>
