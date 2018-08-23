<template>
  <div id="EventsMainPage">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-7 col-10">
          <transition name="fade">
            <router-view :digital_data="digital_data" :headline="headline" :description="description">
            </router-view>
          </transition>
        </div>
        <div class="col-sm-3 col-10">
          <h2 class="event_archive">Архив</h2>
          <button class="btn btn-brand without-box-shadow" v-for="i,y in archive" @click="toArchive(i)" :class="{active: y == event_index}">{{i | YearFilter}}</button>
        </div>
      </div>
    </div>
    <div v-if="!to_events && digital_data.length !== 0" class="container digital-kz-wrapper">
      <div class="row justify-content-center">
        <div class="col-sm-10 col-10">
              <h4 class="digital-kz">
                {{ headline }}
              </h4>
              <h4 class="digital-kz-description">
                {{ description}}
              </h4>
        </div>
      </div>
    </div>
    <div v-if="!to_events" class="container participant_wrapper">
      <div class="row justify-content-center">
        <div class="col-sm-10 col-10">
          <h4 class="participant_opportunity">
            Возможности на конференции для участников
          </h4>
        </div>
      </div>
      <div class="row justify-content-center no-margin">
        <div class="col-sm-5 col-10 participant-description-wrapper" v-for="i in permissions">
          <div class="d-flex mb-3 no-margin">
            <div class="p-1 no-padding">
              <img width="120px" class="participant-test" :src="backreq+ i.logo" alt="">
            </div>
            <div class="p-1 " style="margin-left: 36px">
              <h5 class="participant-description" ><span style="color: #000000;">{{i.name}}</span> {{i.description}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  import flag from '../request'
  export default {
    data() {
      return {
        backreq: flag.back,
        back_files: flag.back_files,
        event_index: null,
        headline: '',
        description: '',
        digital_data: [],
        permissions: [],
        archive: [],
        to_events: false,
        slider_data: [
          {
            img: 'https://picsum.photos/1024/480/?image=54',
            text: 'Конференция БВУ «WWCVBK»',
            title: 'ASDASD'
          },
          {
            img: 'https://picsum.photos/1024/480/?image=52',
            text: 'Конференция МФО «QWE»',
            title: 'ASDASD'
          },
          {
            img: 'https://picsum.photos/1024/480/?image=58',
            text: 'Конференция OOO «AAA»',
            title: 'ASDASD'
          }
        ]
      }
    },
    watch: {
      '$route': function(){
        this.loadData()
      }
    },
    filters: {
      YearFilter (value) {
        if (value) {
          return moment(String(value)).format('YYYY')
        }
      }
    },
    methods: {
      loadData() {
        this.to_events = false
        axios
          .get(flag.backurl + '/conference_type/' + this.$route.params.event_id + '/')
          .then((res) => {
            this.headline = res.data.headline
            this.description = res.data.description
            this.permissions = res.data.permissions
            this.digital_data = res.data.digital_data
            this.archive = res.data.archive
          })
      },
      toArchive(id) {
        this.event_index = id
        this.to_events = true
        this.$router.push({name: 'EventsArchivePage', params: {archive_year: this.$options.filters.YearFilter(id)}})
      },
      toEvent(id) {
        this.$router.push({name: 'EventsDetailPage', params: {event_id: this.$route.params.event_id, detail_id: id}})
      }
    },
    beforeMount() {
      this.loadData()
    }
  }
</script>
