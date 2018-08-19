<template>
  <div id="EventDetailPage">
    <div class="container">
      <div class="row no-margin justify-content-center">
        <div class="col-sm-10">
          <h4 class="event-detail-title" style="">
            {{ description }}
          </h4>
        </div>
        <div class="col-sm-10">
          <div class="share-wrapper " style="margin-top: 20px">
            <div class="row no-margin">
              <div class="col-sm-6">
                <div class="row no-margin">
                  <div class="col-sm-4 no-padding">
                 <span class="event-detail-date">
                    <i class="fa fa-calendar-o event-detail-calendar-icon" aria-hidden="true" ></i>
                    18 июля
                  </span>
                  </div>
                  <div class="col-sm-8 no-padding">
                <span class="event-detail-place">
                  <i class="fa fa-map-marker event-detail-place-icon"  aria-hidden="true"></i>
                  {{ where }}
                </span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="row">
                  <div class="col-sm-12 d-none d-sm-block no-padding">
                    <h4 class="event-detail-share">Поделиться</h4>
                  </div>
                  <div class="col-sm-12 d-none d-sm-block  no-padding">
                    <div class="row no-margin">
                      <a v-for="i in socials" :href="i.link">
                        <img width="35px" height="35px" style="border-radius: 50%" :src="'http://localhost:8000/files/'+ i.logo" :alt="i.name" :title="i.name">
                      </a>
                    </div>
                  </div>
                  <div class="col-sm-12 d-block d-sm-none" style="margin-top: 20px">
                    <h4 class="event-detail-share">Поделиться</h4>
                    <div class="row no-margin">
                      <a v-for="i in socials" :href="i.link">
                        <img width="35px" height="35px" style="border-radius: 50%" :src="'http://localhost:8000/files/'+ i.logo" :alt="i.name" :title="i.name">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       <div class="col-sm-10">
         <div class="row no-margin" style="border-bottom: 1px solid #f2f2f2;padding-bottom: 25px ">
         </div>
       </div>
        <div class="col-sm-10">
          <div class="schedule-wrapper d-block d-md-none" v-for="i in schedule_conf"
               :class="{
            active: (parseInt(i.start_time.substring(0, 2) * 3600) + parseInt(i.start_time.substring(3, 5) * 60 )) <= current_seconds &&
                     current_seconds <= (parseInt(i.end_time.substring(0, 2) * 3600) + parseInt(i.end_time.substring(3, 5) * 60 ))
          }">
            <h4 class="schedule-time" :class="{'text-black' : (parseInt(i.start_time.substring(0, 2) * 3600) + parseInt(i.start_time.substring(3, 5) * 60 )) > current_seconds}">
              {{i.start_time.substring(0, 5) }} - {{i.end_time.substring(0, 5) }}
              <span class="actived-now" style="margin-left: 5px" v-if="(parseInt(i.start_time.substring(0, 2) * 3600) + parseInt(i.start_time.substring(3, 5) * 60 )) <= current_seconds &&
                     current_seconds <= (parseInt(i.end_time.substring(0, 2) * 3600) + parseInt(i.end_time.substring(3, 5) * 60 ))">
                  Сейчас идет
                </span>
            </h4>
            <h4 class="schedule-title">
              {{ i.subject }}
            </h4>
            <h4 class="schedule-speaker text-right">
              {{ i.speaker.fio }}
            </h4>
          </div>
          <div class="schedule-wrapper d-none d-md-flex" v-for="i in schedule_conf"
               :class="{
            active: (parseInt(i.start_time.substring(0, 2) * 3600) + parseInt(i.start_time.substring(3, 5) * 60 )) <= current_seconds &&
                     current_seconds <= (parseInt(i.end_time.substring(0, 2) * 3600) + parseInt(i.end_time.substring(3, 5) * 60 ))
          }">
            <div class="p-2 mr-auto">
              <h4 class="schedule-time" :class="{'text-black' : (parseInt(i.start_time.substring(0, 2) * 3600) + parseInt(i.start_time.substring(3, 5) * 60 )) > current_seconds}">
                {{i.start_time.substring(0, 5) }} - {{i.end_time.substring(0, 5) }}
                <span class="actived-now" v-if="(parseInt(i.start_time.substring(0, 2) * 3600) + parseInt(i.start_time.substring(3, 5) * 60 )) <= current_seconds &&
                     current_seconds <= (parseInt(i.end_time.substring(0, 2) * 3600) + parseInt(i.end_time.substring(3, 5) * 60 ))">
                  Сейчас идет
                </span>
              </h4>
              <h4 class="schedule-title">
                {{ i.subject }}
              </h4>
            </div>
            <div class="p-2">
              <h4 class="schedule-time">
                &nbsp
              </h4>
              <h4 class="schedule-speaker">
                {{ i.speaker.fio }}
              </h4>
            </div>
          </div>
        </div>
        <div class="col-sm-10">
          <div class="row no-margin justify-content-center">
            <h4 class="speaker-title">
              Спикеры
            </h4>
            <div class="speaker-card-wrapper" v-for="i in speakers">
              <div class="speaker-card-img" v-bind:style="{ backgroundImage: 'url(http://localhost:8000/files/' + i.photo + ')' }">
              </div>
              <div>
                <h4 class="speaker-card-speaker">{{ i.fio}}</h4>
                <h5 class="speaker-card-job">
                  {{ i.position }}
                </h5>
              </div>
            </div>
          </div>
          <div class="row no-margin justify-content-center">
            <h4 class="registration-title">
              Регистрация
            </h4>
            <h4 class="registration-description">
              Мы собрали всю информацию, которая может вам пригодиться на конференции, в одну большую новость: начиная от того, как добраться до места проведения мероприятия и где перекусить, заканчивая вопросами бухгалтерии и командировочных.
            </h4>
            <div class="col-sm-7 registration-form">
              <h4 class="registration-text">
                Наименование организации
              </h4>
              <input class="registration-input" type="text">
              <h4 class="registration-text">
                ФИО
              </h4>
              <input class="registration-input" type="text">
              <h4 class="registration-text">
                Должность
              </h4>
              <input class="registration-input" type="text">
              <h4 class="registration-text">
                Номер телефона
              </h4>
              <input class="registration-input" type="text">
              <h4 class="registration-text">
                Email
              </h4>
              <input class="registration-input" type="text">
              <button class="btn btn-brand" >Зарегистрироваться</button>
            </div>
          </div>
          <div class="row no-margin justify-content-center">
            <h4 class="registration-title">
              Нас поддерживают
            </h4>
            <div class="col-sm-3 col-6" v-for="i in partners" style="margin-bottom: 50px">
              <a :href="i.url" :title="i.name">
                <img width="100%" :src="'http://localhost:8000/files/' + i.logo" :alt="i.name" :title="i.name">
              </a>
            </div>
          </div>
          <div class="row no-margin justify-content-center">
            <h4 class="registration-title">
              Фотоотчет
            </h4>
            <div class="col-sm-12 slider-wrapper">
              <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                <swiper-slide class="slide-1" v-for="i in photos" v-bind:style="{ backgroundImage: 'url(http://localhost:8000/files/' + i.image + ')' }"></swiper-slide>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              </swiper>
              <!-- swiper2 Thumbs -->
              <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                <swiper-slide class="slide-1" v-for="i in photos" v-bind:style="{ backgroundImage: 'url(http://localhost:8000/files/' + i.image + ')' }"></swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="row no-margin justify-content-center">
            <h4 class="registration-title">
              Связаться с организаторами
            </h4>
            <div class="col-sm-12 registration-form" style="margin-top: 0px">
              <div class="d-block d-md-none">
                <h4 class="registration-text">
                  ФИО
                </h4>
                <input class="registration-input" type="text">
                <h4 class="registration-text">
                  Номер телефона
                </h4>
                <input class="registration-input" type="text">
                <h4 class="registration-text">
                  Email
                </h4>
                <input class="registration-input" type="text">
                <textarea class=""></textarea>
                <button class="btn btn-brand" style="width: 100%">Отправить</button>
              </div>
              <div class="d-sm-none d-none d-md-flex">
                <div class="mr-auto" style="width: 45%">
                  <h4 class="registration-text">
                    ФИО
                  </h4>
                  <input class="registration-input" type="text">
                  <h4 class="registration-text">
                    Номер телефона
                  </h4>
                  <input class="registration-input" type="text">
                  <h4 class="registration-text">
                    Email
                  </h4>
                  <input class="registration-input" type="text">
                </div>
                <div class="" style="width: 50%">
                  <h4 class="registration-text">
                 &nbsp
                  </h4>
                  <textarea class="" id="comment"></textarea>
                  <button class="btn btn-brand" style="width: 150px;float: right;margin-top: 40px">Отправить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid" id="EventsMainPage" style="margin-top: 100px">
      <div class="row no-margin justify-content-center">
        <div class="col-sm-4" v-for="i,y in archive_events" @click="toEvent(i.pk)">
          <div class="event-archive-img" style="width: 100%">
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
      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  import moment from 'moment'
  export default {
    data() {
      return {
        current_hour: '',
        current_minute: '',
        current_seconds: '',
        description: '',
        start_date: '',
        where: '',
        socials: [],
        schedule_conf: [],
        speakers: [],
        partners: [],
        photos: [],
        archive_events: [],
        swiperOptionTop: {
          spaceBetween: 10,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          slidesPerView: 4,
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          slideToClickedSlide: true,
        }
      }
    },
    filters: {
      HourForm (value) {
        if (value) {
          return moment(String(value)).format('Do MMMM')
        }
      },
      EventFrom (value) {
        if (value) {
          return moment(String(value)).format('HH')
        }
      }
    },
    watch: {
      '$route': function(){
        this.loadData()
      }
    },
    methods: {
      loadData() {
        console.log('I AM HERE FOR YOU')
        this.current_hour = ''
        this.current_minute = ''
        this.current_seconds = ''
        this.description = ''
        this.start_date = ''
        this.where = ''
        this.socials = []
        this.schedule_conf = []
        this.speakers = []
        this.partners = []
        this.photos = []
        this.archive_events = []

        moment.locale('ru')
        this.current_hour = moment().format('HH')
        this.current_minute = moment().format('mm')
        this.current_seconds = (parseInt(this.current_hour * 3600) + parseInt(this.current_minute * 60 ))
        console.log(moment().format('HH:mm'))
        axios.get('http://localhost:8000/api/conference/'+ this.$route.params.detail_id + '/').then((res) => {
          this.description = res.data.description
          this.start_date = res.data.start_date
          this.where = res.data.where
          this.socials = res.data.socials
          this.schedule_conf = res.data.schedule_conf
          this.speakers = res.data.speakers
          this.partners = res.data.partners
          this.photos = res.data.photos
          console.log(res.data)
        })
        axios.get('http://localhost:8000/api/conference/?year='+ this.$route.params.archive_year+ ' &conf_type=' + this.$route.params.event_id).then((res) => {
          console.log(res)
          this.archive_events = res.data
        })
      },
      toEvent(id) {
        console.log(id)
        this.$router.replace({name: 'EventsDetailPage', params: {event_id: this.$route.params.event_id, archive_year: this.$route.params.archive_year,detail_id: id}})
      }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    },
    beforeMount () {
      this.loadData()
    }
  }
</script>
