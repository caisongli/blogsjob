<template>
  <div>
    <el-select v-model="value1" placeholder="请选择类型" @change="change" :clearable="true">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>

    <el-select v-model="value2" collapse-tags style="margin-left: 20px;" placeholder="请选择页码" @change="pages"
      :clearable="true">
      <el-option v-for="item in options_page" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>

    <el-button type="primary" icon="el-icon-search" style="margin-left: 20px;" @click="getData">搜索</el-button>
    <div class="list" style="margin-top: 40px;">
      <el-row :gutter="10" v-for="item in data" :key="item.id">
        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
          <div class="grid-content bg-purple">
            <img :src="item.url" alt="" srcset="" style="width: 300px;height:200px" @click="checks(item.url)">
            <p style="margin-top: 1px; fontSize:20px">{{item.title}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="currentPage" :page-sizes="[9, 12, 15, 18]" :page-size="18"
      layout="total, sizes, prev, pager, next, jumper" :total="+total">
    </el-pagination>
  </div>
</template>

<script>
import * as ajax from "@/utils/apiList"
export default {
  data() {
    return {
      options: [{
        value: 'car',
        label: '酷炫跑车'
      }, {
        value: 'animal',
        label: '可爱动物'
      }, {
        value: 'beauty',
        label: '美女图片'
      }, {
        value: 'comic',
        label: '动漫图片'
      }, {
        value: 'food',
        label: '美食图片'
      }, {
        value: 'game',
        label: '游戏图片'
      }, {
        value: 'movie',
        label: '影视图片'
      }, {
        value: 'person',
        label: '人物图片'
      }, {
        value: 'phone',
        label: '手机壁纸'
      }, {
        value: 'scenery',
        label: '自然风景'
      }],
      options_page: [
        {
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }, {
          value: '4',
          label: '4'
        }],
      value1: [],
      value2: [],
      data: [],
      type: 'food',
      total:'',
      page: 1,
      currentPage: 1,
      page_size:18
    }
  },
  methods: {
    async getData() {
      let res = await ajax.getImages({ type: this.type, page: this.page, size: this.page_size });
      // const { data: { result: { list,total} } } = res;
      const  {list,total} = res;
      this.total = total
      this.data = list;
      this.value1 = [];
      this.value2 = [];
    },
    change(val) {
      this.type = val
    },
    pages(v) {
      this.page = v
    },
    checks(urls) {
      this.$confirm('跳转浏览至该图片, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '跳转成功!',
        });
        window.open(urls + '', '_blank')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    // 分页
    handleSizeChange(val) {
      this.page_size = val;
      this.getData()

    },
    //选择每页数量
    handleCurrentChange(val) {
      this.page = val;
      this.getData()
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
  margin-top: 20px;
  display: flex;

  >div {
    margin-right: 20px;
    transition: all, 0.5s;
    box-shadow: 8px 8px 10px rgb(150, 147, 147);

    &:hover {
      transform: scale(1.1);

    }

    >p {
      height: 40px;
      line-height: 40px;
    }
  }
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.list {
  display: flex;
  width: 960px;
  flex-wrap: wrap;
  margin: 0 auto;
}
</style>