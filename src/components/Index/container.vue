<template>
  <div class="m-istyle" >
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}} </dt>
      <dd v-for="(item,index) in nav.list" :key="index" :class="{active: kind ==item.tab}" :data-type="item.tab">{{item.text}} </dd>
      <!-- <dd :class="{active: kind =='food'}" data-type="food">约会聚餐</dd>
      <dd :class="{active: kind =='spa'}" data-type="spa">丽人SPA</dd>
      <dd :class="{active: kind =='movie'}" data-type="movie">电影演出</dd>
      <dd :class="{active: kind =='travel'}" data-type="travel">品质出游</dd> -->
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in resultData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <span class="sold bottom-right-info">{{item.address}}</span>
              <!-- <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span> -->
            </div>
            <!-- <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">抢光了！</span>
              </span>
            </div>
            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                <span class="units">/{{item.price_info.unit}}均 </span>
              </span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      kind: 'all',
      resultData: {}
      // list: [
      //   {
      //     image:
      //       "//p0.meituan.net/wmproduct/eb4077ca1cc35aa70543db39a2900d0d146996.jpg@368w_208h_1e_1c",
      //     title: "美佳蛋糕（火车站民乐园店）",
      //     sub_title:
      //       "蛋糕28选1,约8英寸，圆形特价水果卡通过寿蛋糕免预约三环内24小时免费配送送货上门",
      //     price_info: {
      //       current_price: null,
      //       old_price: null,
      //       avg_price:16,
      //       unit:'人',
      //     },
      //     rentNum:10,
      //     address: "解放路/火车站"
      //   },{
      //     image:
      //       "//p0.meituan.net/bbia/aff7a786ea3fa4edd47ed05df1b84860335192.jpg@368w_208h_1e_1c",
      //     title: "巧巧工坊（钟楼店）",
      //     sub_title: "蛋糕9选1,约8英寸，圆形",
      //     price_info: {
      //       current_price: 99,
      //       old_price: 149,
      //       avg_price:null,
      //       unit:null,
      //     },
      //     rentNum:10,
      //     address: "莲湖公园"
      //   },{
      //     image:
      //       "//p0.meituan.net/bbia/aff7a786ea3fa4edd47ed05df1b84860335192.jpg@368w_208h_1e_1c",
      //     title: "巧巧工坊（钟楼店）",
      //     sub_title: "蛋糕9选1,约8英寸，圆形",
      //     price_info: {
      //       current_price: 99,
      //       old_price: 149,
      //       avg_price:null,
      //       unit:null,
      //     },
      //     rentNum:0,
      //     address: "莲湖公园"
      //   },

      // ]
    }
  },
  props: [
    // 子组件接收父组件
    'nav'
  ],
  created () {
    api.getResultProducts().then(res => {
      window.console.log(res)
      this.resultData = res.data.data
    })
  },
  methods: {
    over (e) {
      const dom = e.target
      const tagName = dom.tagName.toLowerCase()
      // tagName = DD  转换成小写
      if (tagName != 'dd') {
        return false
      }
      this.kind = dom.getAttribute('data-type')
      // 动态获取数据 ajax请求
    }
  }

}
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
