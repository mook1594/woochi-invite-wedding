<script setup>
import { useWeatherStore } from '@/Weather/stores/weather';
import { storeToRefs } from 'pinia'
import axios from 'axios';
import { ref, computed, onBeforeMount } from 'vue';
import { getImage } from '@/Core/composables/helper.js'

const weatherStore = useWeatherStore();
const { currentConditions } = storeToRefs(weatherStore);
const hourToMinutes = computed(() => {
    const currentDate = new Date();
    const currentHour = String(currentDate.getHours()).padStart(2, '0')
    const currentMinute = String(currentDate.getMinutes()).padStart(2, '0')
    return `${currentHour}:${currentMinute}`
})

onBeforeMount(async() => {
    weatherStore.getCurrentWeatherInfo();
});

</script>

<template>
    <header v-if="!currentConditions" class="header">
      <!-- 지역 -->
      <h1 class="header__title">
        <span class="material-symbols-outlined"> location_on </span>서울
      </h1>
      <h2 class="header__date">{{ hourToMinutes }}</h2>
    </header>
    <!-- 현재 날씨 -->
    <main v-if="!currentConditions" class="main">
      <article class="weather">
        <section class="weather__info">
          <img
            :src="getImage('clear-day')"
            alt=""
            class="weather__img"
          />
          <h3 class="weather_temp">28°</h3>
          <p class="weather_summary">대체로 맑음</p>
          <ul class="weather__moreList">
            <li class="weather__moreListItem">
              <p class="weather__subtitle">습도</p>
              <p class="weather__desc">82%</p>
            </li>
            <li class="weather__moreListItem">
              <p class="weather__subtitle">풍속</p>
              <p class="weather__desc">4.12/ms</p>
            </li>
            <li class="weather__moreListItem">
              <p class="weather__subtitle">체감</p>
              <p class="weather__desc">7도</p>
            </li>
          </ul>
        </section>
      </article>
    </main>
   
</template>
<style scoped>


.weather {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 2rem 2rem;
  color: white;
  text-align: center;
}

.weather-city,
.forecast {
  padding: 2rem 2rem;
  color: white;
}

.weather__img {
  width: 10rem;
}

.weather_temp {
  font-size: 4rem;
  line-height: 1;
  margin-bottom: 1rem;
}

.weather_summary {
  font-size: 1.125rem;
  color: #eaeaea;
  margin-bottom: 3rem;
}

.weather__moreList {
  display: flex;
  justify-content: space-around;
}

.weather__moreListItem {
  flex: 0 0 33.33%;
}

.weather__subtitle {
  font-size: 1.25rem;
  color: #9bc3ff;
  margin-bottom: 0.625rem;
}

.weather__desc {
  font-size: 1.125rem;
}

.weather__week {
  padding: 1rem 0;
}

.weather__week__tab {
  display: flex;
  justify-content: space-around;
  text-align: left;
  margin-bottom: 1.5rem;
  font-size: 1.15rem;
  font-weight: normal;
}

</style>