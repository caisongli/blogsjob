<template>
  <div>
    <el-Autocomplete placeholder="请输入内容" @input="change" v-model="input" :debounce='time'
      :fetch-suggestions="querySearch" clearable v-debounce:2000>
      <template #prepend>搜索:</template>
      <template #append><span @click="fn">重置</span></template>
    </el-Autocomplete>
  </div>
</template>
<script>
import { mock } from '@/mock/index'
export default {
  data () {
    return {
      input: '',
      time: 300,
      restaurants: mock,
    }
  },
  methods: {
    change (v) {
      console.log('v:' + v);
      if (v.charCodeAt() == 32) return
      this.$emit('_search', v)
    },
    fn () {
      this.$emit('_search', -1)
    },
    querySearch (queryString, cb) {
      var restaurants = this.restaurants;
      // var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      console.log(queryString);
      // 调用 callback 返回建议列表的数据
      cb(restaurants);
    },
    createFilter (queryString) {
      return (restaurants) => {
        return (restaurants.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
  }
}
</script>