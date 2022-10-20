<template>
  <div>
    <!-- <el-button @click="fn">视频</el-button> -->
    <el-tabs type="border-card">
      <el-tab-pane label="视频">
        <ul>
          <li v-for='item in list' :key="item.id">
            <video :src="item.playUrl" :poster="item.coverUrl" controls="true" playsinline="true"></video>
          </li>
        </ul>
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="currentPage" :page-sizes="[9, 12, 15, 18]" :page-size="18"
          layout="total, sizes, prev, pager, next, jumper" :total="+total">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="短视频">
        <ul>
          <li v-for='item in miniList' :key="item.id">
            <video :src="item.playurl" :poster="item.picurl" controls="true" playsinline="true"></video>
            <p><span>{{item.title}}</span></p>

          </li>
        </ul>
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="currentPage" :page-sizes="[9, 12, 15, 18]" :page-size="18"
          layout="total, sizes, prev, pager, next, jumper" :total="+total2">
        </el-pagination>
      </el-tab-pane>
      <!-- <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane> -->
    </el-tabs>
    <!-- <ul>
      <li v-for='item in list' :key="item.id">
        <video :src="item.playUrl" :poster="item.coverUrl" controls="true" playsinline="true"></video>
      </li>
    </ul>
    <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="currentPage" :page-sizes="[9, 12, 15, 18]" :page-size="18"
      layout="total, sizes, prev, pager, next, jumper" :total="+total">
    </el-pagination> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      miniList: [],
      total: '',
      total2: '',
      page: 1,
      currentPage: 1,
      page_size: 18
    }
  },
  methods: {
    async fn () {
      console.log(this.$api);
      let res = await this.$api.videoData({ page: this.page, size: this.page_size })
      let res2 = await this.$api.miniVideo({ page: this.page, size: this.page_size })
      this.total = res.total
      this.total2 = res2.total
      this.list = res.list
      this.miniList = res2.list
    },
    // 分页
    handleSizeChange (val) {
      this.page_size = val;
      this.fn()

    },
    //选择每页数量
    handleCurrentChange (val) {
      this.page = val;
      this.fn()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.fn()
    })
  }

}
</script>

<style lang="less" scoped>
ul {
  display: flex;
  // width: 1000px;
  // height: 6000px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 80px auto;

  >li {
    width: 300px;
    height: 200px;
    // margin: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    position: relative;

    >video {
      overflow: hidden;
      display: block;
      width: 100%;
      height: 200px;
    }

    >p {
      position: absolute;
      top: 10px;
      left: 10px;
      background-color: rgba(47, 45, 45, 0.244);
      color: rgb(247, 153, 82);
      line-height: 20px;
      height: 20px;
    }
  }
}
</style>