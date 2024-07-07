<script setup>
</script>

<template>
    <main class="weather-city">
      <!-- 검색 영역 -->
      <section class="weather__search">
        <input
          type="text"
          class="weather__searchBar"
          placeholder="도시를 검색해주세요"
        />
      </section>
      <!-- 검색 데이터가 있으면 -->
      <section class="weather__city">
        <div class="weather__cityLeft">
          <strong class="weather__cityTmp">25°</strong>
          <p class="weather__cityTmpMore">H: 27° / L: 19°</p>
          <p>Montral, Canada</p>
        </div>
        <div class="weather__cityRight">
          <img
            src="@/Weather/assets/images/icons/cloudy.png"
            alt=""
            class="weather__cityImg"
          />
        </div>
        <span class="material-symbols-outlined weather__cancel"> cancel </span>
      </section>
      <!-- 검색 데이터가 없으면 -->
      <section class="no-data" style="display: none">
        <p>검색한 지역이 없습니다.</p>
      </section>
    </main>
</template>
<style scoped>
.weather__search {
  margin-bottom: 1.5rem;
}

.weather__searchBar {
  width: 100%;
  background-color: #233a5a;
  border: 1px solid #233a5a;
  padding: 1rem;
  outline: none;
  border-radius: 5px;
  color: white;
}

.weather-city,
.forecast {
  height: calc(var(--vh, 1vh) * 100 - var(--app-footer));
  overflow: scroll;
}

.weather__city {
  display: flex;
  align-items: center;
  background-color: #233a5a;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  padding: 1rem 1.5rem;
  position: relative;
}

.weather__cancel {
  position: absolute;
  top: -7px;
  right: -7px;
}

.weather__city:last-child {
  margin-bottom: 0;
}

.weather__cityLeft {
  flex: 0 0 70%;
  text-align: left;
}

.weather__cityRight {
  flex: 0 0 30%;
  text-align: right;
}

.weather__cityImg {
  max-width: 100%;
}

.weather__cityTmp {
  font-size: 2rem;
}

.weather__cityTmpMore {
  font-size: 0.875rem;
  color: #bababa;
}

.weather-city,
.forecast {
  padding: 2rem 2rem;
  color: white;
}

</style>