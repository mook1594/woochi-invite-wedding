<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <!-- 공통 하단 영역 -->
    <footer class="footer">
      <ul class="footer__list">
        <li class="footer__item">
          <RouterLink to="/">
            <span class="material-symbols-outlined footer_icons"> home </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/forecast">
            <span class="material-symbols-outlined footer_icons">
              stacked_line_chart
            </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to ="/search">
            <span class="material-symbols-outlined footer_icons"> search </span>
          </RouterLink>
        </li>
      </ul>
    </footer>
</template>

<style scoped>
/**
 Footer
 **/
 .footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  height: var(--app-footer);
}

.footer__list {
  display: flex;
  justify-content: space-around;
  color: white;
}

.footer_icons {
  font-size: 2rem;
}

</style>