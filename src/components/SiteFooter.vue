<template>

  <footer class="footer">


<div class="footer-content">

  <p class="runtime">
    已稳定运行：{{ runningTime }}
  </p>

  <div class="footer-links">
    <span>友情链接: </span>
    <a
      href="https://jiang068.github.io/lab_reports/"
      target="_blank"
    >
      Kyota的实验报告合集
    </a>

    <span>·</span>

    <a
      href="https://phiyu.github.io"
      target="_blank"
    >
      Uphi.的个人主页
    </a>

    <span>·</span>

    <a
      href="https://github.com/KClO4-Li/KClO4-Li.github.io"
      target="_blank"
    >
      本站GitHub地址
    </a>

  </div>

</div>


  </footer>

</template>

<script setup>
import { useRunningTime } from '../components/useRunningTime';
const { runningTime } = useRunningTime();
</script>

<style scoped>

.footer {

  margin-top: 80px;

  padding:
    36px
    20px;

  border-top:
    1px solid rgba(255,255,255,0.08);

  background:
    rgba(0,0,0,0.18);

  backdrop-filter:
    blur(12px);
}

.footer-content {

  width:
    min(1100px, 92%);

  margin: auto;

  text-align: center;
}

.runtime {

  margin-bottom: 16px;

  opacity: 0.8;
}

.footer-links {

  display: flex;

  justify-content: center;

  align-items: center;

  gap: 14px;

  flex-wrap: wrap;
}

.footer-links a {

  color:
    #d7f3ff;

  text-decoration: none;

  transition:
    0.25s ease;
}

.footer-links a:hover {

  color: white;
}

</style>
