<template>
  <div class="event-conference-wrapper">
    <h2 class="event_conference" v-if="key_name !== 'mdkb'">О Конференциях</h2>
    <div class="container digital-kz-wrapper no-margin">
      <div class="row justify-content-center" v-if="digital_data.length === 0">
        <div class="col-12 no-padding">
          <h4 class="digital-kz" v-if="headline !== '' " style="text-align: left">
            {{ headline }}
          </h4>
          <h4 class="digital-kz-description" style="text-align: left">
            {{ description }}
          </h4>
        </div>
      </div>
    </div>
    <div class="row no-margin" v-for="i in digital_data">
      <div class="d-flex mb-3 no-margin">
        <div class="p-1 "><h1 class="event-conference-number">{{i.number}}</h1></div>
        <div class="p-1 "><h5 class="event-conference-title">{{i.title}}</h5></div>
      </div>
      <div class="col-sm-12">
        <div class="row no-margin  event-conference-description">
          {{i.description}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['digital_data', 'headline', 'description', 'key_name']
  }
</script>
