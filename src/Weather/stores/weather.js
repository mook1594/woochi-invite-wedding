import { defineStore } from 'pinia';
import axios from 'axios'
import { ref } from 'vue'

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    params: {
        // lang: 'ko',
        // key: '',
        // unitGroup: '',
    }
  });

export const useWeatherStore = defineStore('weather', () => {
    const address = ref('seoul');
    const currentConditions = ref(null);
    const days = ref(null);
    const getCurrentWeatherInfo = async() => {
        try{
            const res = await axiosInstance.get('/posts/1/comments');
            currentConditions.value = res.data.currentConditions;
            //days.value = res.data.days;
            //console.log(days.value);
        } catch (e) {
            alert(e.response?.data ? e.response?.data : e.message);
        }
    }
    return { currentConditions, getCurrentWeatherInfo }
});

