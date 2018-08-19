<template>
  <div class="event-archive-wrapper">
    <h2 class="event_conference">
      {{ year }}
    </h2>
    <div class="event-archive-img" v-for="i,y in archive_events" @click="toEvent(i.pk)">
        <div class="event-archive-background-img" style="" v-bind:style="{ backgroundImage: 'url(http://localhost:8000/files/' + i.poster + ')' }"></div>
        <div class="event-archive-img-description">
         <h4 class="event-archive-img-description-title">
            {{i.name }}
         </h4>
          <p class="event-archive-img-description-date">
            {{ i.start_date}}
          </p>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  export default {
    data () {
      return {
        archive_events: [],
        year: ''
      }
    },
    methods: {
      toEvent(id) {
        this.$router.push({name: 'EventsDetailPage', params: {event_id: this.$route.params.event_id, archive_year: this.$route.params.archive_year, detail_id: id}})
      }
    },
    beforeMount () {
      this.year = this.$route.params.archive_year
      axios.get('http://localhost:8000/api/conference/?year=' +this.$route.params.archive_year + '&conf_type=' + this.$route.params.event_id).then((res) => {
        console.log(res)
        this.archive_events = res.data
      })
    }
  }
</script>
