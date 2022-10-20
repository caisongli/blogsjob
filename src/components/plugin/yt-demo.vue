<!-- <template>
    <div>
        <el-button plain @click="open1">
            可自动关闭
        </el-button>
        <el-button plain @click="open2">
            不会自动关闭
        </el-button>
    </div>
</template> -->
  
<script>
import { Notification } from 'element-ui';
export default {
    methods: {
        open1() {
            const h = this.$createElement;

            Notification({
                title: '标题名称',
                message: h('i', { style: 'color: teal' }, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
            });
        },

        open2() {
            Notification({
                title: '提示',
                message: '这是一条不会自动关闭的消息',
                duration: 0
            });
        }
    },
    render() {
        const obj = {
            domProps: {
                // innerText:'按钮',
            },
            attrs:{
                type:'success'
            },
            on: {
                click: this.open1
            }
        }
        return <el-button {...obj}>dd</el-button>
    }
}
</script>