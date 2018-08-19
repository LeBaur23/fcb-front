<template>
  <div class="event-conference-wrapper">
    <h2 class="event_conference">О Конференциях</h2>
    <div class="row no-margin" v-for="i in digital_data">
      <div class="d-flex mb-3 no-margin">
        <div class="p-1 "><h1 class="event-conference-number">{{i.number}}</h1></div>
        <div class="p-1 "><h5 class="event-conference-title">{{i.title}}</h5></div>
      </div>
      <div class="event-conference-description">
        {{i.description}}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['digital_data']
  }
</script>
