<template>
    <div>
      <h1>Countdown Timer</h1>
      <p>
        {{ months }} months, {{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        deadline: new Date("2024-11-10T09:59:59.000Z"), // set your deadline here
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    },
    mounted() {
      this.updateCountdown();
    },
    methods: {
      updateCountdown() {
        const now               = new Date();
        const timeRemaining     = this.deadline.getTime() - now.getTime();
        const secondsRemaining  = Math.floor(timeRemaining / 1000);
        const minutesRemaining  = Math.floor(secondsRemaining / 60);
        const hoursRemaining    = Math.floor(minutesRemaining / 60);
        const daysRemaining     = Math.floor(hoursRemaining / 24);
        const monthsRemaining   = Math.floor(daysRemaining / 30);
  
        this.months     = monthsRemaining;
        this.days       = daysRemaining % 30;
        this.hours      = hoursRemaining % 24;
        this.minutes    = minutesRemaining % 60;
        this.seconds    = secondsRemaining % 60;
  
        setTimeout(this.updateCountdown, 1000); // update every second
      }
    }
  };
  </script>