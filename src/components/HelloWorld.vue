<template>
  <div class="hello">
    <el-table :data="msg" style="width: 100%">
      <el-table-column prop="sex" label="性別" :formatter="_sex" width="180">
      </el-table-column>
      <el-table-column prop="value" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="age" :formatter="_age" label="年齡">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="[dialogFormVisible=true,open(scope.row)]">编辑</el-button>
          <!-- dailog -->
          <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="年龄" :label-width="formLabelWidth">
                <el-input v-model="form.age" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="性别" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择性别">
                  <el-option label="男" value="男"></el-option>
                  <el-option label="女" value="女"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
          <!-- end -->
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['msg'],
  data () {
    return {
      data: [],
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        age: '',
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  computed: {
  },
  methods: {
    _sex (a) {
      return a.sex ? '男' : '女'
    },
    _age (a) {
      return a.age < 20 ? '未成年' : '成年'
    },
    handleClick (row) {
      const { value, sex, age } = row
      console.log({ value, age, sex: sex ? '男' : '女' });
    },
    open (row) {
      // console.log(row);
      const { value, sex, age } = row
      this.form.name = value
      this.form.age = age
      this.form.region = sex ? '男' : '女'
    }
  },
  mounted () {
    // this._sex()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
