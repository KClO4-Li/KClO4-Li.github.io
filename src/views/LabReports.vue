<template>
  <div class="lab-page">
    <!-- Hero -->
    <HeroSection
      title="实验报告合集"
      subtitle="仅供参考 请勿抄袭"
      tag="LAB REPORTS"
    />

    <!-- 主体 -->
    <main class="page-container">
      <section class="report-masonry">
        <ReportCard
          v-for="group in reports"
          :key="group.title"
          :title="group.title"
          :desc="group.desc"
          :icon="group.icon"
          :items="group.items"
          class="masonry-item"
        />
      </section>
    </main>

    <!-- Footer -->
    <SiteFooter />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import ReportCard from '../components/ReportCard.vue'
import SiteFooter from '../components/SiteFooter.vue'

const reports = [
  {
    title: '大学物理 基础实验',
    desc: '一级大雾',
    icon: '📐',
    items: [
      { name: '单摆法测重力加速度', link: '/files/单摆法测重力加速度.pdf' },
      { name: '示波器的使用', link: '/files/示波器的使用.pdf' },
      { name: '钢丝杨氏模量', link: '/files/钢丝杨氏模量.pdf' }
    ]
  },
  {
    title: '大学物理 综合实验',
    desc: '二级大雾',
    icon: '🔬',
    items: [
      { name: '双臂电桥', link: '/files/双臂电桥.pdf' },
      { name: 'F-H实验', link: '/files/F-H实验.pdf' },
      { name: '单色仪的定标与使用', link: '/files/单色仪的定标与使用.pdf' }
    ]
  },
  {
    title: '物理学专业基础实验',
    desc: '五级大雾',
    icon: '🧪',
    items: [
      { name: '闪烁体荧光衰减长度测量', link: '/files/闪烁体荧光衰减长度测量.pdf' },
      { name: '双光子HOM干涉实验', link: '/files/双光子HOM干涉实验.pdf' },
      { name: '量子保密通信实验', link: '/files/量子保密通信实验.pdf' },
      { name: '宇宙线μ子平均寿命的测量', link: '/files/宇宙线μ子平均寿命的测量.pdf' },
      { name: '高分辨率伽马能谱测量及相对效率刻度', link: '/files/高分辨率伽马能谱测量及相对效率刻度.pdf' },
      { name: '光的力学效应及皮牛力的测量', link: '/files/光的力学效应及皮牛力的测量.pdf'},
      { name: '微电子工艺及半导体材料实验', link: '/files/微电子工艺及半导体材料实验.pdf'},
      { name: '非线性光学二次谐波产生实验', link: '/files/非线性光学二次谐波产生实验.pdf'},
      { name: '半导体α谱仪和α粒子能量损失', link: '/files/半导体α谱仪和α粒子能量损失.pdf'}
      // 后续你随时可以往这里加第5-9个实验，排版不会崩
    ]
  },
  {
    title: '物理创新能力提升实验II',
    desc: '岩板大二实验课',
    icon: '🚀',
    items: [
      { name: '非平衡电桥的数字化', link: '/files/非平衡电桥的数字化.pdf' },
      { name: '项目PPT(来自💡)', link: '/files/非平衡电桥的数字化-期末报告-陈联宇-李若贤.pdf'},
      { name: '项目代码', link: 'https://github.com/KClO4-Li/Digitization-of-Unbalanced-Electric-Bridge-YIXIST-and-Arduino' }
    ]
  }
]
</script>

<style scoped>
.lab-page {
  width: 100%;
}

.page-container {
  padding: 0 20px 60px;
  max-width: 1100px; /* 实验报告卡片较宽，容器比 Home 页稍微放大一点 */
  margin: 0 auto;
}

/* 核心：CSS Columns 瀑布流布局 */
.report-masonry {
  column-count: 2;          /* 默认分为两列 */
  column-gap: 30px;         /* 列间距 */
  padding-bottom: 60px;
}

/* 防止单个卡片被硬生生切断分到两列 */
.masonry-item {
  break-inside: avoid;      /* 核心：避免元素内部断行 */
  -webkit-column-break-inside: avoid;
  margin-bottom: 30px;      /* 行间距 */
  display: block;           /* 确保作为块级元素计算高度 */
}

/* 大屏展示优化：屏幕足够大时，自动扩展为 3 列 */
@media (min-width: 1400px) {
  .page-container {
    max-width: 1400px;
  }
  .report-masonry {
    column-count: 3;
  }
}

/* 移动端适配：回归单列 */
@media (max-width: 768px) {
  .report-masonry {
    column-count: 1;
  }
}
</style>