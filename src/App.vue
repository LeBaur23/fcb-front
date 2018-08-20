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
              <a href="">
                <i class="fa fa-facebook brand_icon" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-vk brand_icon" aria-hidden="true"></i>
              </a>
              <a href="">
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
  export default {
  name: 'App',
  data () {
    return {
      slider_data: [],
      max_id: 0,
      cur_index: 0,
      show_list: false,
      windowWidth: 0,
      no_padding: false
    }
  },watch: {
      '$route' (to, from) {
        this.cur_index = to.params.event_id
        if (to.name !== 'MainPage') {
          this.show_list = true
          console.log(this.show_list)
          if ( this.windowWidth < 560) {
            this.no_padding = true
            this.show_list = true
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
    loadData() {

    },
    toMain() {
      this.$router.push('/')
    },
    toEvent(id) {
      this.$router.push({name: 'EventsMainPage', params: {event_id: id}})
    }
  },
    beforeMount() {
      axios
        .get('http://localhost:8000/api/conference_type/')
        .then((res) => {
          this.slider_data = res.data
          this.max_id = res.data.length - 1
        })
      this.show_list = false
      if (this.$route.name !== 'MainPage') {
        this.show_list = true
        this.cur_index = this.$route.params.event_id
      }
      if (this.$route.name === 'MainPage') {
        this.show_list = false

      }
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('resize', () => {
          this.windowWidth = window.innerWidth
        })
      })
      this.windowWidth = window.innerWidth

      if ( this.windowWidth < 560) {
        this.no_padding = true
        this.show_list = false
      }
    }
}
</script>

