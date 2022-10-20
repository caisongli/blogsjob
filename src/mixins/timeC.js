import { formatDate } from '@/hooks/formatDate'
export default {
    data() {
        return {
            formatTime: formatDate(),
            timer: ''
        }
    },
    mounted() {
        let _this = this
        this.timer = setInterval(() => {
            _this.formatTime = formatDate()
        }, 1000)
    },
    destroyed() {
        clearInterval(this.timer)
    },
}