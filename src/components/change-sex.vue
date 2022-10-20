<template>
    <div>
        <el-radio v-model="radio" label=-1 @change="fn">全部</el-radio>
        <el-radio v-model="radio" label=1 @change="fn">男</el-radio>
        <el-radio v-model="radio" label=0 @change="fn">女</el-radio>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            radio: '-1'
        };
    },
    methods:{
        fn(el){
            console.log(el);
            this.$emit('searchSex',el)
        }
    }
}
</script>