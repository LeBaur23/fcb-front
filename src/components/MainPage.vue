<template>
  <div id="MainPage">
    <div  style="padding-left: 300px">

    </div>
    <div id="demo" class="carousel slide" data-interval="false" style="height: 870px">

      <!-- Indicators -->

      <!-- The slideshow -->
      <div class="carousel-inner">
        <div ref="classes" class="carousel-item " v-for="i,y in slider_data" :class="{active: y === 0,[y]: true}">
        <img width="100%" :src="i.img" alt="">
      </div>
      </div>

      <div class="carousel-text-list" style="width: 400px;position: absolute;top:50%;transform: translateY(-50%);height: 400px;z-index: 2;left: 70px;">
        <div class="carousel-text" >
          <div v-for="i,y in slider_data" class="carousel-event-info" :class="{active: y === cur_id}" >
            <div style="display: flex;width: 400px;height: 270px;justify-content: center;text-align: left;align-items: center">
              <h3> {{ i.text }} </h3><br>
            </div>
            <h4 class="text-regl" style="margin: 0px">
            </h4>
            <br>
            <button class="btn btn-brand">Подробнее</button>
          </div>
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
        </div>
      </div>

      <a class="carousel-control-prev" @click="prev()" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" @click="next()" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>

    </div>

    <div class="MainPageWhiteBack" style="position: absolute;top: 0;display: inline-block;width: 100%;height: 870px;z-index: 1">
      <img width="100%" src="../assets/images/whiteback.png" alt="" style="height: 870px">
    </div>

    <div class="container-fluid no-padding">
      <h1 class="text-center">О конференциях</h1>
      <div class="row justify-content-md-center">
        <div class="col-sm-8 ">
          <p class="text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div class="videoWrapper">
        <embed
               src="https://www.youtube.com/embed/tgbNymZ7vqY">
      </div>

    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        slider_data: [
          {
            img: 'https://picsum.photos/1024/480/?image=54',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            img: 'https://picsum.photos/1024/480/?image=52',
            text: 'there will be some text wich is smaller'
          },
          {
            img: 'https://picsum.photos/1024/480/?image=58',
            text: '2'
          }
        ],
        cur_id: 0,
        max_id: 2,
      }
    },
    methods: {
      next() {
        this.cur_id++
        if (this.cur_id > this.max_id) {
          this.cur_id  = 0
        }

      },
      prev() {
        this.cur_id -= 1
        if (this.cur_id < 0) {
          this.cur_id  = this.max_id
        }
      }
    }
  }
</script>

