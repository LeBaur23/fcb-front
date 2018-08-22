<template>
  <div id="MainPage">
    <div id="carousel" class="carousel slide" data-interval="false">
      <div class="carousel-inner">
        <div ref="classes" class="carousel-item " v-for="i,y in slider_data" :class="{active: y === 0,[y]: true}" v-bind:style="{ backgroundImage: 'url(http://localhost:8000/files/' + i.poster + ')' }">
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
      <div class="videoWrapper">
        <iframe width="100%" height="315"
                :src="live">
        </iframe>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data () {
      return {
        live: '',
        slider_data: [],
        about_conf: {},
        cur_id: 0,
        max_id: 0,
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
        if (this.cur_id < 0) {
          this.cur_id  = this.max_id
        }
        else{
          this.cur_id -= 1
        }
      }
    },
    beforeMount() {
      axios
        .get('http://localhost:8000/api/conference_type/')
        .then((res) => {
          this.slider_data = res.data
          this.max_id = res.data.length - 1
          if (this.slider_data.length !== 0) {
            for (var i = 0; i < this.slider_data.length; i++){
              if (this.slider_data[i].live.online !== undefined) {
                this.live = this.slider_data[i].live.online.replace("watch?v=", "embed/");
                console.log(this.slider_data[i].live.online)
              }
            }
          }
        })
      axios
        .get('http://localhost:8000/api/content/key/?key=about')
        .then((res) => {
          console.log(res.data)
          this.about_conf = res.data
        })
    }
  }
</script>

