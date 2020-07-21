<template>
  <div class="m-menu">
    <dl class="nav" @mouseLeave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <i :class="item.icon"></i>
        {{ item.title }}
        <span class="arrow"></span>
      </dd>
    </dl>

    <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item,index) in curDetail.children">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="(v,i) in item.children" :key="v + '_' + i">{{v}}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      curDetail: null,
      menuList: [
        {
          title: '美食',
          icon: 'food',
          children: [
            {
              title: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅自助餐',
                '小吃快餐',
                '西餐',
                '日韩料理',
                '聚餐宴请',
                '烧烤烤肉',
                '东北菜',
                '川湘菜',
                '江浙菜',
                '香锅烤鱼',
                '港粤菜',
                '中式烧烤/烤串',
                '西北菜',
                '咖啡',
                '酒吧',
                '茶馆',
                '云贵菜',
                '东南亚菜',
                '海鲜',
                '素食',
                '台湾/客家菜',
                '创意菜',
                '汤/粥/炖菜',
                '蒙餐新疆菜',
                '其他美食',
                '京菜',
                '鲁菜'
              ]
            }
          ]
        },
        {
          title: '外卖',
          icon: 'takeout',
          children: [
            {
              title: '外卖',
              children: ['美团外卖']
            }
          ]
        },
        {
          title: '酒店',
          icon: 'hotel',
          children: [
            {
              title: '酒店星级',
              children: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        },
        {
          title: '民宿',
          icon: 'homestay',
          children: [
            {
              title: '热门城市',
              children: [
                '上海',
                '成都',
                '北京',
                '重庆',
                '南京',
                '杭州',
                '广州',
                '西安',
                '武汉',
                '厦门',
                '长沙',
                '青岛',
                '深圳',
                '天津',
                '苏州'
              ]
            }
          ]
        },
        {
          title: '猫眼电影',
          icon: 'movie',
          children: [
            {
              title: '热门影院',
              children: [
                '万达影城',
                '大地影院文',
                '投国际影城',
                'CGV影城',
                '横店电影城',
                '太平洋电影',
                '城曲江国际影城',
                '橙天嘉禾影城',
                '奥斯卡国际影城',
                '博纳国际影城'
              ]
            }
          ]
        },
        {
          title: '机票 / 火车票',
          icon: 'airport',
          children: [
            {
              title: '机票/火车票',
              children: ['国内机票', '国际/港澳台机票', '火车票']
            }
          ]
        },
        {
          title: '休闲娱乐 / KTV',
          icon: 'ktv',
          children: [
            {
              title: '休闲娱乐 / KTV',
              children: [
                '足疗按摩',
                '洗浴/汗蒸',
                '酒吧',
                '密室逃脱',
                '轰趴馆茶馆',
                '私人影院',
                'DIY手工坊',
                '采摘/农家乐',
                '网吧网咖',
                '游乐游艺',
                'VR',
                '桌面游戏',
                '真人CS',
                '棋牌室',
                '其他玩乐'
              ]
            }
          ]
        },
        {
          title: '生活服务',
          icon: 'life',
          children: [
            {
              title: '生活服务',
              children: [
                '衣物/皮具',
                '洗护',
                '家政',
                '搬家运输',
                '送水',
                '充值缴费',
                '服饰/鞋包',
                '养护',
                '开锁换锁',
                '居家维修',
                '管道疏通',
                '家电维修',
                '清洗电脑',
                '维修手机',
                '维修证件照/肖像摄影',
                '照片冲印/图文文印',
                '商务服务/法律服务',
                '文化传媒机构',
                '成人用品/情趣用品'
              ]
            }
          ]
        },
        {
          title: '丽人 / 美发 / 医学美容',
          icon: 'hair',
          children: [
            {
              title: '丽人',
              children: [
                '美发',
                '美甲',
                '美睫',
                '美体',
                '医学美容',
                '瑜伽舞蹈',
                '瘦身纤体',
                '韩式定妆',
                '祛痘',
                '纹身',
                '化妆品',
                '养发'
              ]
            }
          ]
        },
        {
          title: '结婚 / 婚纱摄影 / 婚宴',
          icon: 'marry',
          children: [
            {
              title: '结婚',
              children: [
                '婚纱',
                '摄影旅拍',
                '个性写真',
                '婚宴',
                '婚庆公司',
                '婚纱礼服',
                '西服定制',
                '婚戒',
                '首饰',
                '婚车租赁',
                '司仪主持',
                '彩妆造型',
                '婚礼跟拍',
                '婚礼小礼品',
                '更多婚礼服务'
              ]
            }
          ]
        },
        {
          title: '亲子 / 儿童乐园 / 幼教',
          icon: 'offspring',
          children: [
            {
              title: '儿童乐园 ',
              children: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        },
        {
          title: '医疗健康 / 宠物 / 爱车',
          icon: 'health',
          children: [
            {
              title: '酒店星级',
              children: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        },
        {
          title: '运动健身 / 健身中心',
          icon: 'sport',
          children: [
            {
              title: '运动健身',
              children: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        },
        {
          title: '家装 / 建材 / 家居',
          icon: 'furniture',
          children: [
            {
              title: '家装',
              children: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        },
        {
          title: '学习培训 / 音乐培训',
          icon: 'study',
          children: [
            {
              title: '职业培训',
              children: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        },
        {
          title: ' 酒吧 / 密室逃脱',
          icon: 'bar',
          children: [
            {
              title: '玩乐',
              children: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        }
      ]
    }
  },

  methods: {
    menuEnter (item) {
      // Window.console.log(item)
      this.curDetail = item
    },
    menuLeave () {
      var self = this
      this.timer = setTimeout(function () {
        self.curDetail = null
      }, 200)
    },
    detailEnter () {
      clearTimeout(this.timer)
    },
    detailLeave () {
      this.curDetail = null
    }
  }
}
</script>
