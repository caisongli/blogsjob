<template>
  <footer>
    <div>
      {{msg}}
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    // 
  },
  mounted () {
    this.$bus.$on('msg', (data) => {
      this.msg = data
    })
  }
}
</script>

<style lang="less" scoped>

</style>