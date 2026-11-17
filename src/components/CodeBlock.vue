<template>
  <div class="code-wrapper glass-card">
    <div class="code-header">
      <span class="lang-badge">{{ language }}</span>
      <button class="copy-btn" @click="copyCode" :class="{ 'is-copied': isCopied }">
        {{ isCopied ? '已复制 ✓' : 'Copy' }}
      </button>
    </div>

    <div class="code-content">
      <pre><code class="hljs" v-html="highlightedCode"></code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import hljs from 'highlight.js'
// 引入一个好看的暗色主题（类似你截图里的 VS Code 风格）
import 'highlight.js/styles/atom-one-dark-reasonable.css'

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'plaintext' // 默认纯文本
  }
})

const isCopied = ref(false)

// 核心逻辑：利用 hljs 计算高亮后的 HTML
const highlightedCode = computed(() => {
  // 容错处理：如果传入的语言 hljs 不支持，就降级为纯文本
  const validLanguage = hljs.getLanguage(props.language) ? props.language : 'plaintext'
  return hljs.highlight(props.code, { language: validLanguage }).value
})

// 剪贴板复制逻辑
const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    isCopied.value = true
    // 2秒后恢复按钮状态
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败，可能是浏览器权限拦截:', err)
  }
}
</script>

<style scoped>
/* 整个代码块的毛玻璃外壳，复用你 global.css 里的变量 */
.code-wrapper {
  margin: 24px 0;
  border-radius: 12px;
  background: var(--bg-glass);
  border: 1px solid var(--border-glass);
  overflow: hidden; /* 防止内部元素溢出圆角 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

/* 顶部栏：深色一点，区分层次 */
.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.lang-badge {
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* 复制按钮样式 */
.copy-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.25s ease;
}

.copy-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: var(--text-primary);
}

.copy-btn.is-copied {
  background: rgba(46, 204, 113, 0.2); /* 成功时的浅绿色背景 */
  border-color: rgba(46, 204, 113, 0.4);
  color: #2ecc71;
}

/* 内部代码区：覆盖 hljs 的默认背景，让它变成透明，融入我们的毛玻璃 */
.code-content pre {
  margin: 0;
  padding: 16px;
  overflow-x: auto; /* 代码超长时允许横向滚动 */
}

.code-content :deep(.hljs) {
  background: transparent !important; /* 强制干掉 hljs 自带的黑底色 */
  padding: 0;
  font-family: 'Fira Code', Consolas, Monaco, monospace; /* 程序员等宽字体 */
  font-size: 0.95rem;
  line-height: 1.6;
}

/* 滚动条美化 */
.code-content pre::-webkit-scrollbar {
  height: 6px;
}
.code-content pre::-webkit-scrollbar-track {
  background: transparent;
}
.code-content pre::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}
</style>