<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item,index) in list" :key="index">
        <a :href="'#city-' + item ">{{item}}</a>
      </dd>
    </dl>
    <dl
      :id="'city-' + index "
      class="m-category-section"
      v-for="(item,index) in cityCroup"
      :key="index"
    >
      <dt>{{index}}</dt>
      <dd>
        <span @click="changeCity(city)" v-for="city in item" :key="city.id">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      list: 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'.split(''),
      cityList: [],
      cityCroup: {}
    }
  },
  created () {
    api.getCityList().then(res => {
      var obj = {}
      res.data.data.forEach(item => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = []
        }
        obj[item.firstChar.toUpperCase()].push(item)
      })
      // window.console.log(obj)
      this.cityCroup = obj
    })
  },
  methods: {
    changeCity (item) {
      this.$store.dispatch('setPosition', item)
      this.$router.push({ name: 'index' })
    }
  },
  components: {}
}
</script>

<style lang="scss">
@import "@/assets/css/changeCity/category.scss";
</style>
