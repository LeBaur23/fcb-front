<template>
  <div id="app">
    <div class="fcb-nav" :class="{active: show_list}" style="position: relative;z-index: 2;">
      <div class="container-fluid">
        <img @click="toMain()" src="./assets/images/bitmap.png" :class="{'no-padding': no_padding}" alt="" style="display: inline-block;padding: 20px">
        <ul class="list-inline" style="display: inline-block" v-if="show_list">
          <li class="list-inline-item" v-for="i,y in slider_data" @click="toEvent(i.id)" :class="{active: i.id == cur_index}">{{i.name}}</li>
          <!--<li class="list-inline-item"><a class="social-icon text-xs-center" target="_blank" href="#">G+</a></li>-->
          <!--<li class="list-inline-item"><a class="social-icon text-xs-center" target="_blank" href="#">T</a></li>-->
        </ul>
      </div>
    </div>
    <!--<div class="fcb-nav">-->
        <!--<img src="./assets/images/bitmap.png" alt="">-->
    <!--</div>-->
    <router-view/>
    <div class="notification" v-if="slider_data.length !== 0 && slider_data[0].notification.speaker !== undefined && opened">
      <div class="modal-back"  @click="closeModal()">

      </div>
      <div class="col-11 col-sm-6 col-md-6 col-lg-4 notification-inner" >
          <img src="./assets/images/notification.png" width="250px" alt="">
          <h5>
            Хей-хей
          </h5>
          <h4 >
             <span v-if="slider_data[0].notification.is_now === false">Не пропустите выступление</span> <span v-if="slider_data[0].notification.is_now === true">Сейчас выступает</span>
            <br>
             <span class="speaker">{{slider_data[0].notification.speaker}}</span> <b>в {{slider_data[0].notification.time.substring(0,5)}}</b>
          </h4>
        <button class="btn btn-brand" @click="toEvent_detail(slider_data[0].notification.id_conf,slider_data[0].id)">Перейти</button>
      </div>
    </div>
    <div class="to-top" v-if="show_top">
      <div class="to-top-button" @click="toTop()">
        <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
      </div>
    </div>
    <div class="Footer">
      <div class="container">
        <div class="row no-margin">
          <div class="col-sm-8">
            <h4 class="text-dark title">Контакты </h4>
            <p class="text-fade text">
              Республика Казахстан, г. Алматы, A25D0B1, Медеуский район, мкр. «Самал-3», дом 25, башня-1, 1 этаж
            </p>
            <a class="phone text" href="tel:+7-727-300-01-80">+ 7 (727) 300-01-80</a>
            <a class="mail text" href="https://mail.google.com/mail/?view=cm&fs=1&to=info@1cb.kz">info@1cb.kz</a>
          </div>
          <div class="col-sm-4">
            <h4 class="text-dark title" >Социальные сети</h4>

            <div class="row no-margin">
              <a href="https://www.facebook.com/1cb.kz/">
                <i class="fa fa-facebook brand_icon" aria-hidden="true"></i>
              </a>
              <a href="https://vk.com/firstcreditbureau">
                <i class="fa fa-vk brand_icon" aria-hidden="true"></i>
              </a>
              <a href="https://t.me/FCBKbot">
                <i class="fa fa-telegram brand_icon" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="row no-margin d-none d-sm-block" style="border-top: 1px solid #c5c5c5;margin: 0px 15px !important;">
        </div>
        <div class="row no-margin">
          <div class="col-sm-12 " :class="{'text-center': 'd-sm-block'}">
            <p class="text-dark rights" style="margin: 15px 0px">2017 © Все права защищены. ТОО «Первое кредитное бюро»</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import flag from './request'
  import moment from 'moment'
  export default {
  name: 'App',
  data () {
    return {
      show_top: false,
      opened: true,
      notification: '',
      key_from_app: '',
      slider_data: [],
      max_id: 0,
      cur_index: 0,
      year: '',
      show_list: false,
      windowWidth: 0,
      no_padding: false
    }
  },watch: {
      '$route' (to, from) {
        this.cur_index = to.params.event_id
        if (to.name !== 'MainPage') {
          this.show_list = true
          if ( this.windowWidth < 560) {
            this.no_padding = true
            this.show_list = false
          }
        }
        if (to.name === 'MainPage') {
          this.show_list = false
          console.log(this.show_list)
          if ( this.windowWidth < 560) {
            this.no_padding = true
            this.show_list = false
          }
        }
      },
  },
  methods: {
    closeModal () {
      this.opened = false
    },
    loadData() {

    },
    toTop() {
      var timeout
      if (document.documentElement.scrollTop !== 0 || document.body.scrollTop !== 0) {
          window.scrollBy(0, -50);
          timeout = setTimeout(this.toTop, 10)
      }
      else {
        clearTimeout (timeout)
      }
//        document.body.scrollTop = 0;
//        document.documentElement.scrollTop = 0;
    },
    toMain() {
      this.$router.push('/')
    },
    toEvent(id) {
      this.$router.push({name: 'EventsMainPage', params: {event_id: id}})
    },
    toEvent_detail(event_id, id ) {
      console.log(event_id, id)
      this.$router.push({name: 'EventsDetailPage', params: {event_id: id, archive_year: this.year, detail_id: event_id}})
      this.opened = false
    }
  },
    beforeMount() {
      var top = this
      window.onscroll = function() {
        if (document.documentElement.scrollTop > 200 ) {
          top.show_top = true
        }
        else {
          top.show_top = false
        }
      };

      axios
        .get(flag.backurl + '/conference_type/')
        .then((res) => {
          this.slider_data = res.data
          console.log(res)
          this.max_id = res.data.length - 1
        })

      this.windowWidth = window.innerWidth
      if ( this.windowWidth < 560) {
        this.no_padding = true
      }
      if (this.$route.name !== 'MainPage') {
        this.show_list = true
        if ( this.windowWidth < 560) {
          this.show_list = false
        }
        else {
          this.show_list = true
        }
        this.cur_index = this.$route.params.event_id
      }
      if (this.$route.name === 'MainPage') {
        this.show_list = false
        if ( this.windowWidth < 560) {
          this.show_list = false
        }
      }
    },
    mounted() {
    this.year = moment().format('YYYY')
//    console.log())
    }
}
</script>

