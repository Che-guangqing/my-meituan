<template>
   <div class="m-product-select">
       <dl class="tab">
           <dt>
               {{name}} <i class="el-icon-caret-bottom"></i>
           </dt>
           <dd>
               <div class="select-title">{{name}} </div>
               <span v-for="(item,index) in list" :key="index">{{item.name}} </span>
           </dd>
           <!-- <dd>
               <dt>{{name}} </dt >
               <span v-for="(item,index) in list" :key="index">{{item.name}} </span>
           </dd> -->
       </dl>
   </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: [
    'name',
    'list'
  ]
}
</script>

<style>

</style>
