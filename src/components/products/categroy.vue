<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item) in classicList" :key="item.type">
        <Mselect :name="item.title" :list="item.subList" />
        <!-- <m-select :name = "item.title" :list = "item.sub_list"/> -->
      </dd>
    </dl>

    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item) in areaList" :key="item.type">
        <Mselect :name="item.title" :list="item.sub_list" />
      </dd>
    </dl>
  </div>
</template>

<script>
import Mselect from './select'
import api from '@/api/index.js'
export default {
  data () {
    return {
      // classicList: [
      //   {
      //     title: "美食",
      //     type: "foof",
      //     sub_list: [
      //       {
      //         name: "日本菜",
      //         id: "Japan"
      //       },
      //       {
      //         name: "饮品店",
      //         id: "drank"
      //       },
      //       {
      //         name: "面包甜点",
      //         id: "cate"
      //       }
      //     ]
      //   },
      //   {
      //     title: "酒店住宿",
      //     type: "hotel",
      //     sub_list: [
      //       {
      //         name: "温泉酒店",
      //         id: "hot_spring"
      //       },
      //       {
      //         name: "经济型酒店",
      //         id: "economy"
      //       },
      //       {
      //         name: "高端酒店",
      //         id: "high"
      //       }
      //     ]
      //   }
      // ],
      classicList: '',
      areaList: [
        {
          title: '推荐商圈',
          sub_list: [
            {
              name: '望京',

              id: 120000
            },

            {
              name: '昌平',

              id: 12222
            }
          ]
        }
      ]
    }
  },
  mounted () {
    api.getClassifyList().then(res => {
      window.console.log('+++++++++++++++-', res.data)
      this.classicList = res.data.data
    })
  },
  methods: {},
  components: {
    Mselect
  }
}
</script>

<style>
</style>
