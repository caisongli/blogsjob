<template>
  <div id="input">
    <el-input placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input1" @change="changes">
    </el-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input1: ''
    }
  },
  // props: ['addlist'],
  methods: {
    changes () {
      this.$emit('addlist', this.input1)
      this.input1 = ''
    }
  }
}
</script>

<style lang="less" scoped>
#input {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>