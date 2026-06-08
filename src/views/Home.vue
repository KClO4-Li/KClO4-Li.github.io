<template>
  <div class="home-page">
    <!-- 顶部 -->
    <HeroSection title="Ruoxian Li" />

    <!-- 主内容 -->
    <main class="page-container">
      <section class="intro-section glass-card animate-fade-up">
        <h2 class="section-title">About Me</h2>
        <p class="intro-text">
          An undergraduate student at USTC, majoring in Physics.
        </p>
      </section>

      <!-- 快速入口 -->
      <section class="quick-links">
        <router-link to="/lab" class="link-card glass-card animate-fade-up delay-1">
          <div class="card-icon">🧪</div>
          <h3>实验报告合集</h3>
        </router-link>

        <a href="https://github.com/KClO4-Li" target="_blank" class="link-card glass-card animate-fade-up delay-2">
          <div class="card-icon">💻</div>
          <h3>GitHub</h3>
        </a>
      </section>
    </main>

    <!-- Footer -->
    <SiteFooter />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<style scoped>
/* 
  由于 global.css 已经接管了全局字体、基础重置和默认颜色，
  且 animation.css 已经接管了入场动画，
  这里只需要专注于局部的排版、间距和变量调用。
*/

.home-page {
  width: 100%;
}

/* 主体容器 */
.page-container {
  padding: 0 20px 60px;
  max-width: 900px;
  margin: 0 auto;
}

/* --- 核心：复用全局变量的毛玻璃卡片 --- */
.glass-card {
  background: var(--bg-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-glass);
  border-radius: 16px;
  box-shadow: var(--shadow-glass);
}

/* Intro */
.intro-section {
  padding: 42px min(5vw, 48px);
  margin-bottom: 40px;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 22px;
  font-weight: 600;
  letter-spacing: 1px;
}

.intro-text {
  color: var(--text-secondary); /* 使用变量控制次要文字的灰度 */
  line-height: 1.9;
  font-size: 1.1rem;
  margin: 0;
}

/* 快速入口网格 */
.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
}

/* 链接卡片 */
.link-card {
  padding: 36px;
  text-align: center;
  transition: all 0.35s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 悬浮状态：调用 Hover 相关的变量 */
.link-card:hover {
  transform: translateY(-8px);
  background: var(--bg-glass-hover);
  border-color: var(--border-glass-hover);
  box-shadow: var(--shadow-hover);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
}

.link-card h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  font-weight: 500;
}

.link-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .intro-section {
    padding: 32px 22px;
  }
  .section-title {
    font-size: 1.7rem;
  }
  .link-card {
    padding: 28px;
  }
}
</style>