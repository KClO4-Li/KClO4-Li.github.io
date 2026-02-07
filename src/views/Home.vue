<template>
  <div class="body">
    <header class="header-section animate-fade-in-down">
      <div class="title-group">
        <h1 class="page-title">MewoLi的实验报告合集</h1>
        <div class="sub-title">
          <p>点击卡片下载资源 · 仅供参考 · 请勿抄袭</p>
        </div>
      </div>
    </header>

    <main class="grid-container">
      
      <div class="report-card animate-slide-up delay-1">
        <div class="card-header">
          <span class="category-icon">📐</span>
          <h3>大学物理-基础实验</h3>
        </div>
        <div class="card-content">
          <a class="report-link" href="/files/单摆法测重力加速度.pdf">单摆法测重力加速度</a>
          <a class="report-link" href="/files/示波器的使用.pdf">示波器的使用</a>
          <a class="report-link" href="/files/钢丝杨氏模量.pdf">钢丝杨氏模量</a>
        </div>
      </div>

      <div class="report-card animate-slide-up delay-2">
        <div class="card-header">
          <span class="category-icon">🔬</span>
          <h3>大学物理-综合实验</h3>
        </div>
        <div class="card-content">
          <a class="report-link" href="/files/双臂电桥.pdf">双臂电桥</a>
          <a class="report-link" href="/files/F-H实验.pdf">F-H实验</a>
          <a class="report-link" href="/files/单色仪的定标与使用.pdf">单色仪的定标与使用</a>
        </div>
      </div>

      <div class="report-card highlight-card animate-slide-up delay-3">
        <div class="card-header">
          <span class="category-icon">🚀</span>
          <h3>物理创新能力提升实验II</h3>
        </div>
        <div class="card-content">
          <a class="report-link" href="/files/非平衡电桥的数字化.pdf">非平衡电桥的数字化</a>
          <a class="report-link ppt-link" 
             href="https://kclo4-li.github.io/files/非平衡电桥的数字化-期末报告-陈联宇-李若贤.pptx"
             target="_blank">
            期末汇报 PPT (来自💡)
          </a>
          <a class="report-link" 
             href="https://github.com/KClO4-Li/Digitization-of-Unbalanced-Electric-Bridge-YIXIST-and-Arduino" 
             target="_blank">
            项目代码
          </a>
        </div>
      </div>

      <div class="report-card disabled-card animate-slide-up delay-4">
        <div class="card-header">
          <span class="category-icon">💻</span>
          <h3>计算机程序设计实验</h3>
        </div>
        <div class="card-content">
          <span class="status-text">🚧 施工中 / 待更新</span>
        </div>
      </div>

    </main>
    
    <footer class="site-footer animate-fade-in">
      <div class="footer-content">
        <p>已平稳运行: {{ runningTime }}</p>
        <p class="friend-links">
          友情链接：
          <a href="https://jiang068.github.io/lab_reports/" target="_blank">Kyota的实验报告</a> |
          <a href="https://phiyu.github.io/ta/" target="_blank">Uphi.的助教主页</a> |
          <a href="https://github.com/KClO4-Li/KClO4-Li.github.io" target="_blank">本站GitHub地址</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRunningTime } from '../components/useRunningTime';
const { runningTime } = useRunningTime();
</script>

<style scoped>
/* 全局布局 */
.body {
  min-height: 100vh;
  padding: 40px 8vw; /* 增加左右留白 */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "PingFang SC", "Heiti SC", sans-serif;
}

/* 头部样式 */
.header-section {
  text-align: center;
  margin-bottom: 50px;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.page-title {
  font-size: 3rem;
  margin: 0 0 15px 0;
  font-weight: 700;
  letter-spacing: 2px;
}

.sub-title {
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.3);
  display: inline-block;
  padding: 5px 15px;
  border-radius: 20px;
}

/* 核心 Grid 布局 */
.grid-container {
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  padding-bottom: 60px;
}

/* 卡片通用样式 */
.report-card {
  background: rgba(255, 255, 255, 0.15); 
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s;
  display: flex;
  flex-direction: column;
}

.report-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
}

/* 卡片头部 */
.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 10px;
}

.category-icon {
  font-size: 1.5rem;
  margin-right: 10px;
}

.card-header h3 {
  margin: 0;
  font-size: 1.25rem;
  color: #fff;
  font-weight: 600;
}

/* 链接样式 */
.card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.report-link {
  display: block;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  position: relative;
  overflow: hidden;
}

.report-link:hover {
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  font-weight: 500;
}

/* 特殊样式：PPT链接 */
.ppt-link {
  background: rgba(255, 165, 0, 0.15);
  border: 1px solid rgba(255, 165, 0, 0.3);
}
.ppt-link:hover {
  background: #ffae00;
  color: #fff;
}

/* 特殊样式：待更新卡片 */
.disabled-card {
  opacity: 0.7;
  border-style: dashed;
}
.status-text {
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  text-align: center;
  display: block;
  padding: 20px 0;
}

/* 页脚 */
.site-footer {
  margin-top: auto;
  width: 100%;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  padding: 20px 0;
  font-size: 0.9rem;
}
.friend-links a {
  color: #87CEEB;
  text-decoration: none;
  margin: 0 5px;
  transition: color 0.2s;
}
.friend-links a:hover {
  color: #fff;
  text-decoration: underline;
}

/* --- 动画效果 --- */
.animate-fade-in-down {
  animation: fadeInDown 1s ease-out;
}

.animate-slide-up {
  opacity: 0; 
  animation: slideUp 0.8s ease-out forwards;
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }
.delay-4 { animation-delay: 0.8s; }

.animate-fade-in {
  animation: fadeIn 1.5s ease-out;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 响应式适配 */
@media (max-width: 768px) {
  .page-title { font-size: 2rem; }
  .body { padding: 20px 5vw; }
  .grid-container { grid-template-columns: 1fr; }
}
</style>