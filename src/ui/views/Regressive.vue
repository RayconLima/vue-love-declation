<template>
  <div class="container">
    <h1>Countdown Timer</h1>
    <div class="flex justify-between">
      <div class="flex items-center">
        <img class="w-full" src="@/ui/assets/images/man-and-timer.png" />
      </div>
      <div class="flex items-center w-full">
        <div>
          <p class="text-white">
            {{ months }} months, {{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds
          </p>
        </div>
        <br />
        <div class="progress-bar">
          <div class="progress" :style="{ width: progressBarWidth + '%' }" :title="`${progressBarWidth}%`"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted, watch } from 'vue';

export default {
  setup() {
    const route = useRoute();
    const deadline = ref(new Date("2024-11-10T09:59:59.000Z")); // set your deadline here
    const months = ref(0);
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const progressBarWidth = ref(0);

    const updateCountdown = () => {
      const now = new Date();
      const timeRemaining = deadline.value.getTime() - now.getTime();
      const secondsRemaining = Math.floor(timeRemaining / 1000);
      const minutesRemaining = Math.floor(secondsRemaining / 60);
      const hoursRemaining = Math.floor(minutesRemaining / 60);
      const daysRemaining = Math.floor(hoursRemaining / 24);   

      const monthsRemaining = Math.floor(daysRemaining / 30);

      months.value = monthsRemaining;
      days.value = daysRemaining % 30;
      hours.value = hoursRemaining % 24;
      minutes.value = minutesRemaining % 60;
      seconds.value = secondsRemaining % 60;

      // Calculate progress bar width
      const totalSeconds = (deadline.value.getTime() - new Date("2024-01-01T00:00:00.000Z").getTime()) / 1000;
      const progress = (totalSeconds - secondsRemaining) / totalSeconds * 100;
      progressBarWidth.value = Math.floor(progress);
    };

    onMounted(() => {
      document.title = route.meta.title || 'Galeria';
      
      updateCountdown();
    });

    // Watch for changes in deadline and update countdown
    watch(deadline, () => {
      updateCountdown();
    });

    return {
      months,
      days,
      hours,
      minutes,
      seconds,
      progressBarWidth,
    };
  },
};
</script>

<style>
.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #F0E68C;
  border-radius: 10px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #593E1A;
  transition: width 0.5s;
}
</style>