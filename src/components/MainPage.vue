<template>
  <div id="MainPage">
    <div id="carousel" class="carousel slide" data-interval="false">
      <div class="carousel-inner">
        <div ref="classes" class="carousel-item " v-for="i,y in slider_data" :class="{active: y === 0,[y]: true}" v-bind:style="{ backgroundImage: 'url(' + backreq + i.poster + ')' }">
        </div>
      </div>

      <div class="carousel-text-list">
        <!--<div class="carousel-text">-->
          <div v-for="i,y in slider_data" class="carousel-event-info" :class="{active: y === cur_id}" >
            <div class="carousel-event-info-text-wrapper">
              <div class="carousel-event-info-text">
                <h3>
                  {{ i.name }}
                </h3>
                <h4 class="text-regl">
                  {{ i.description_main }}
                </h4>
                <br>
              </div>

            </div>
            <button class="btn btn-brand" @click="toEvent(i.id)">Подробнее</button>
          </div>
          <ul class="carousel-indicators d-none d-sm-flex">
            <li data-target="#carousel" v-for="i,y in slider_data" :data-slide-to="y" :class="{active: y == 0}"></li>
          </ul>
        <!--</div>-->
      </div>

      <a class="carousel-control-prev" @click="prev()" href="#carousel" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" @click="next()" href="#carousel" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>

    </div>


    <div class="MainPageWhiteBack">
      <img class="d-none d-sm-block" width="100%" src="../assets/images/whiteback.png" alt="">
    </div>

    <div class="container-fluid no-padding main-page-description">
      <div class="row no-margin justify-content-sm-center main-page-description-row">
        <div class="col-sm-12">
          <h1 class="text-center" >{{about_conf.header}}</h1>
        </div>
        <div class="col-sm-10 ">
          <p class="text-center ">
            {{about_conf.text}}
          </p>
        </div>
      </div>

      <div class="row no-margin justify-content-sm-center main-page-description-row" v-if="main_desc.header !== '' && main_desc.header !== null">
        <div class="col-sm-12">
          <h1 class="text-center" >{{main_desc.header}}</h1>
        </div>
        <div class="col-sm-10 ">
          <p class="text-center ">
            {{main_desc.text}}
          </p>
        </div>
      </div>
      <div class="videoWrapper">
        <iframe width="100%" height="315"
                :src="live">
        </iframe>
        <iframe v-if="live === ''" src="https://www.youtube.com/embed/b7G5h2SdSbA" frameborder="0"></iframe>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import flag from '../request'
  export default{
    data () {
      return {
        backreq: flag.back,
        back_files: flag.back_files,
        live: '',
        slider_data: [],
        about_conf: {},
        cur_id: 0,
        max_id: 0,
        main_desc: '',
      }
    },
    methods: {
      toEvent(id) {
        this.$router.push({name: 'EventsMainPage', params: {event_id: id}})
      },
      next() {
        if (this.cur_id >= this.max_id) {
          this.cur_id  = 0
        }
        else {
          this.cur_id++
        }
      },
      prev() {
        this.cur_id -= 1
        if (this.cur_id < 0) {
          this.cur_id = this.max_id
        }
      }
    },
    beforeMount() {
      axios
        .get(flag.backurl +'/conference_type/')
        .then((res) => {
          this.slider_data = res.data
          this.max_id = res.data.length - 1
          if (this.slider_data.length !== 0) {
            for (var i = 0; i < this.slider_data.length; i++){
              if (this.slider_data[i].live.online !== undefined) {
                this.live = this.slider_data[i].live.online.replace("watch?v=", "embed/");
//                console.log(this.slider_data[i].live.online)
              }
            }
          }
        })
      axios
        .get(flag.backurl +  '/content/key/?key=about')
        .then((res) => {
//          console.log(res.data)
          this.about_conf = res.data
        })
      axios
        .get(flag.backurl +  '/content/key/?key=main_page')
        .then((res) => {
          console.log(res.data)
          this.main_desc = res.data
        })
    }
  }
</script>

