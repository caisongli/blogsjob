<template>
    <el-container direction="vertical" style="height:100vh;">
        <el-header>
            <el-link ref="link" :underline="false" icon="el-icon-s-home" style="fontSize:20px"
                href='https://www.lcsblogs.com'>主页</el-link>
            <span style="fontSize:20px;fontWeight:900;">我的小后台</span>
            <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时间：{{ data }} -->
            <canvas id="canva"></canvas>
        </el-header>
        <el-container style="height:100vh;overflow:hidden;">
            <el-aside width="auto">
                <aside-menu></aside-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import AsideMenu from './aside-menu.vue';
import { formatDate } from '../hooks/formatDate'
import { myCanvas } from '@/utils/canvas.js'
export default {
    components: { AsideMenu },
    data() {
        return {
            data: formatDate(),
            // data :new Date().getTime(),
            timer: '',
        }
    },
    filters: {
        //    formatDates(value){
        //       return formatDate(value)
        //    }
    },
    computed: {
        //  formatDates(){
        //     return formatDate()
        //  }
    },
    mounted() {
        let _this = this
        this.timer = setInterval(() => {
            _this.data = formatDate()
        }, 1000)
        this.$nextTick(() => {
            this.fns(300, 80,"canva",1.5)
        })

    },
    destroyed() {
        clearInterval(this.timer)
    },
    watch: {
    },
    methods: {
        // 
    },
    mixins: [myCanvas]
}
</script>

<style lang="less" scoped>
.el-header {
    background-color: @theme-header;
    color: #333;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > canvas{
        margin-left: 100px;
    }
}

.el-aside {
    background-color: @theme-aside;
    color: #333;
    text-align: center;
    line-height: 100px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    // height: 800px;
    overflow-y: auto;
}

body>.el-container {
    margin-bottom: 40px;
}
</style>