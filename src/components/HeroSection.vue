<template>
  <header class="hero">


<!-- 顶部导航 -->
<nav class="navbar">

  <router-link to="/" class="logo">
      KClO4-Li
  </router-link>

  <div class="nav-links">
    <router-link to="/">
      首页
    </router-link>

    <router-link to="/lab">
      实验报告
    </router-link>

    <a
      href="https://github.com/KClO4-Li"
      target="_blank"
    >
      GitHub
    </a>
  </div>

</nav>

<!-- Hero主体 -->
<div class="hero-content">

  <p class="hero-tag">
    {{ tag }}
  </p>

  <h1 class="hero-title">
    {{ title }}
  </h1>

  <p class="hero-subtitle">
    {{ subtitle }}
  </p>

</div>

  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },

  subtitle: {
    type: String,
    default: ''
  },

  tag: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>

.hero {
  position: relative;

  min-height: 42vh;

  padding:
    24px
    min(6vw, 80px);

  display: flex;
  flex-direction: column;

  justify-content: space-between;
}

/* 顶部导航 */

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 14px 24px;

  border-radius: 18px;

  background:
    rgba(255,255,255,0.08);

  backdrop-filter: blur(14px);

  border:
    1px solid rgba(255,255,255,0.12);

  animation:
    fadeUp 0.8s ease;
}

.logo {
  font-size: 1.3rem;
  font-weight: 700;

  letter-spacing: 1px;

  color: white;

  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;

  gap: 28px;
}

.nav-links a {
  color: rgba(255,255,255,0.82);

  text-decoration: none;

  transition:
    0.25s ease;
}

.nav-links a:hover {
  color: white;

  transform:
    translateY(-2px);
}

/* Hero */

.hero-content {
  flex: 1;

  display: flex;
  flex-direction: column;

  justify-content: center;

  align-items: center;

  text-align: center;

  animation:
    fadeUp 1s ease;
}

.hero-tag {
  margin-bottom: 14px;

  color: #8be9fd;

  letter-spacing: 3px;

  font-size: 0.9rem;
}

.hero-title {
  font-size:
    clamp(2.5rem, 7vw, 5rem);

  font-weight: 800;

  margin-bottom: 18px;

  text-shadow:
    0 0 20px rgba(255,255,255,0.18);
}

.hero-subtitle {
  font-size: 1.1rem;

  opacity: 0.82;

  line-height: 1.8;
}

/* 移动端 */

@media (max-width: 768px) {

  .hero {
    min-height: 34vh;
  }

  .navbar {
    padding: 12px 16px;
  }

  .nav-links {
    gap: 16px;

    font-size: 0.95rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

}

</style>
