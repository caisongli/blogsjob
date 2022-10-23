<template>
  <div class="home">
    <change-sex @searchSex="searchSex"></change-sex>
    <search-page @_search="searchName"></search-page>
    <hr>
    <HelloWorld :msg="data" />
    <hr>
    <DataList></DataList>
    <hr>
    <el-button @click="fn($event)" v-debounce:2000>dd</el-button>
    <el-button @click="alertBox()" disabled>按钮</el-button>
    <p>{{'dd' | lcs }}</p>
    <p>{{ Date.now() | formatDate(1) }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ChangeSex from '@/components/change-sex.vue';
import SearchPage from '@/components/search-page.vue';
import { mock } from '@/mock/index'
import DataList from '@/components/data-list.vue';
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ChangeSex,
    SearchPage,
    DataList
  },
  data () {
    return {
      data: mock
    }
  },
  methods: {
    searchSex (i) {
      this.data = mock.filter(el => {
        return i == -1 ? el : el.sex == i
      })
    },
    searchName (v) {
      this.data = mock.filter(el => {
        return v == -1 || v === '' ? el : el.value.search(v) != -1
      })
    },
    fn (e) {
      // console.log(e);
      this.$toast.show(e.target.textContent, 2000);
    }
  }
}
</script>
<style lang="less" scoped>

</style>  
