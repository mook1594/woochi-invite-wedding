<script setup>
import { useWeatherStore } from '../stores/weather';
import { onBeforeMount } from 'vue';
const weatherStore = useWeatherStore();
onBeforeMount(() => {
    //weatherStore.getCurrentWeatherInfo();
});
</script>

<template>
    <article class="forecast">
      <!-- 시간별 예보 -->
      <section class="forecast__today">
        <strong class="forecast__title">시간별</strong>
        <ul class="week__list">
          <!-- 시간별 예보 상세 아이템 -->
          <li class="week__list__item">
            <span>9시</span>
            <img src="../assets/images/icons/hail.png" alt="" class="week_icons" />
            <span>18°</span>
          </li>
        </ul>
      </section>
      <!-- 중기 예보 -->
      <section class="forecast__week">
        <strong class="forecast__title">중기예보</strong>
        <ul class="forecast__weekList">
          <!-- 중기 예보 상세 아이템 -->
          <li class="forecast__weekListItem">
            <div class="forecast__itemLeft">
              <strong class="forecast__day">월요일</strong>
              <span class="forecast__date">2024.07.01</span>
            </div>
            <div class="forecast__itemMiddle">
              <strong class="forecast__tmp">32°</strong>
            </div>
            <div class="forecast__itemRight">
              <img
                src="../assets/images/icons/hail.png"
                alt=""
                class="forecast__weekListImg"
              />
            </div>
          </li>
        </ul>
      </section>
    </article>
</template>
<style scoped>

.forecast {
  margin-bottom: 2rem;
}

.forecast {
  padding: 2rem 2rem;
  color: white;
}

.forecast__title {
  font-size: var(--app-title);
  display: block;
}

.forecast__weekListItem {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #bababa;
  padding: 0.625rem 0;
}

.forecast__day {
  display: block;
  margin-bottom: 0.3125rem;
}

.forecast__tmp {
  font-size: 2.5rem;
}

.forecast__date {
  color: #bababa;
}

.forecast__weekListImg {
  width: 100%;
}

.forecast__itemLeft {
  flex: 0 0 40%;
}

.forecast__itemMiddle {
  flex: 0 0 40%;
}

.forecast__itemRight {
  flex: 0 0 20%;
}

</style>