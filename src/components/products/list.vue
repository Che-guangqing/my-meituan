<template>
  <div class="m-products-list">
    <ul>
      <li :class="{'s-nav-active':item.active}" v-for="item in nav" :key="item.key">{{item.name}}</li>
    </ul>
    <el-row>
        <item v-for="(item,index) in productList" :key="index" :meta="item"/>
    </el-row>
  </div>
</template>
<script>
import Item from './item.vue'
import api from '@/api/index.js'
export default {
  data () {
    return {
      nav: [
        {
          key: 's-default',
          name: '智能排序',
          active: true
        },
        {
          key: 's-price',
          name: '价格最低',
          active: false
        },
        {
          key: 's-score',
          name: '人气最高',
          active: false
        },
        {
          key: 's-comment',
          name: '评价最高',
          active: false
        }
      ],
      productList: []
      // productList: [
      //   {
      //     image:"//p1.meituan.net/msmerchant/090f2bb55fa0266423f43b7d7231223e140038.jpg@220w_125h_1e_1c",
      //     title: "小九老火锅（胡家庙店）",
      //     type: "food",
      //     score: 4.1,
      //     commentNum: 0,
      //     comment: [
      //       {
      //         username: "xxx",
      //         evalaute: "好吃"
      //       }
      //     ],
      //     tab: ["火锅", "四川"],
      //     address: "新城区东二环路紫昕花庭西门（众信医药旁）",
      //     avg_price: 72,
      //     deal_items: [
      //       {
      //         title: "劲爆午市四人餐，提供免费WiFi",
      //         price: 999,
      //         counter_price: 1159,
      //         saleNum: 0,
      //         price_type: "元"
      //       }
      //     ]
      //   }
      // ]
    }
  },
  created () {
    api.getProductsList().then(res => {
      window.console.log(res.data.data)
      this.productList = res.data.data
    })
  },
  components: {
    Item
  }
}
</script>

<style>
</style>
