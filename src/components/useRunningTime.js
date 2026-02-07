import { ref, onMounted, onUnmounted } from 'vue'

export function useRunningTime() {
    const startTime = ref(new Date('2025-11-01T13:00:00'))
    const runningTime = ref('0天 0小时 0分钟 0秒')
    let timer = null

    const updateRunningTime = () => {
        const now = new Date()
        const diff = now - startTime.value

        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)

        runningTime.value = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`
    }

    onMounted(() => {
        timer = setInterval(updateRunningTime, 1000)
    })

    onUnmounted(() => {
        if (timer) {
            clearInterval(timer)
        }
    })

    return {
        runningTime
    }
}