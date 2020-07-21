//每一个页面 结构模版
<template>
    <el-container class="layout-default">
      <el-header height="100%">
          <my-header />
      </el-header>
      <el-main>
          <router-view></router-view>
      </el-main>
      <el-footer height="100%">
          <my-footer />
      </el-footer>
    </el-container>

</template>
<script>
import MyHeader from '../components/header/index.vue'
import MyFooter from '../components/footer/index.vue'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
<style lang="scss">
   @import '@/assets/css/public/layout.scss'
</style>
