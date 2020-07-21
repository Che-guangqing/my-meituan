<template>
  <div class="love">
    <p class="fav">猜你喜欢</p>
    <dl class="wrapper" v-for="(item,index) in loveList" :key="index">
      <dt>
        <img :src="item.image" alt="图片" />
      </dt>
      <dd>
        <h3>{{item.title}} </h3>
        <p>
          <el-rate
            v-model="item.score"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
          <span class="love-comment">{{item.commentNum}}个评价</span>
        </p>
        <p>
            <span class="love-addr">{{item.address}} </span>
        </p>
        <p class="love-price">
            <span class="font">￥</span>
            {{item.price}}
            <span class="font">起 </span>
        </p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loveList: [
        {
          image:
            'http://p1.meituan.net/msmerchant/090f2bb55fa0266423f43b7d7231223e140038.jpg@220w_125h_1e_1c',
          title: '小九老火锅（三桥）',
          type: 'food',
          score: '4.1',
          commentNum: 479,
          tab: ['火锅', '四川'],
          address: '三桥',
          price: 72
        }, {
          image:
            'http://p0.meituan.net/msmerchant/dd36bd046167db1169f92d8812ad9b7e63015.jpg@190w_106h_1e_1c',
          title: '加米仕牛排自助餐厅（钟楼银泰店）',
          type: 'food',
          score: '4.5',
          commentNum: 794,
          tab: ['火锅', '四川'],
          address: '钟楼/鼓楼',
          price: 69
        }
      ]
    }
  },
  methods: {},
  components: {}
}
</script>

<style>
</style>
