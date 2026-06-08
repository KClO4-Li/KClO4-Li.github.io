<template>
  <section class="report-card">


<div class="card-header">

  <div class="card-icon">
    {{ icon }}
  </div>

  <div>
    <h2 class="card-title">
      {{ title }}
    </h2>

    <p class="card-desc">
      {{ desc }}
    </p>
  </div>

</div>

<div class="report-list">

  <a
    v-for="item in items"
    :key="item.name"
    :href="item.link"
    target="_blank"
    class="report-item"
  >

    <span class="report-name">
      {{ item.name }}
    </span>

    <span class="arrow">
      →
    </span>
  </a>

</div>


  </section>
</template>

<script setup>

defineProps({

  title: String,

  desc: String,

  icon: String,

  items: Array

})

</script>

<style scoped>

.report-card {
  padding: 28px;
  border-radius: 20px;
  background: var(--bg-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-glass);
  box-shadow: var(--shadow-glass);
  transition: all 0.35s ease;
  animation: fadeUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

.report-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-glass-hover);
  box-shadow: var(--shadow-hover);
}

/* 顶部 */

.card-header {

  display: flex;

  align-items: center;

  gap: 18px;

  margin-bottom: 24px;
}

.card-icon {
  font-size: 2.4rem;
}

.card-title {
  font-size: 1.35rem;

  margin-bottom: 6px;
}

.card-desc {

  opacity: 0.72;

  font-size: 0.95rem;
}

.report-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  
  /* 新增：限制最大高度并允许滚动 */
  max-height: 380px; /* 这个高度大概能显示 6-7 个实验，你可以根据需要调整 */
  overflow-y: auto;
  padding-right: 8px; /* 给右侧滚动条留一点呼吸空间 */
}

/* 定制一下滚动条，让它符合毛玻璃的唯美风格 */
.report-list::-webkit-scrollbar {
  width: 6px;
}
.report-list::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 4px;
}
.report-list::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
}
.report-list::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}
.report-item {

  display: flex;

  align-items: center;

  gap: 14px;

  padding:
    14px
    18px;

  border-radius: 14px;

  text-decoration: none;

  color: white;

  background:
    rgba(255,255,255,0.05);

  transition:
    0.25s ease;
}

.report-item:hover {

  background:
    rgba(255,255,255,0.12);

  transform:
    translateX(6px);
}

.report-name {

  flex: 1;

  line-height: 1.5;
}

.arrow {

  opacity: 0;

  transform:
    translateX(-6px);

  transition:
    0.25s ease;
}

.report-item:hover .arrow {

  opacity: 1;

  transform:
    translateX(0);
}

/* 移动端 */

@media (max-width: 768px) {

  .report-card {

    padding: 22px;
  }

  .card-title {

    font-size: 1.2rem;
  }

  .report-item {

    padding:
      12px
      14px;
  }

}

</style>
