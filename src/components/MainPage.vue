<template>
  <div id="MainPage">
    <div id="carousel" class="carousel slide" data-interval="false">
      <div class="carousel-inner">
        <div ref="classes" class="carousel-item " v-for="i,y in slider_data" :class="{active: y === 0,[y]: true}" v-bind:style="{ backgroundImage: 'url(' + i.img + ')' }">
        </div>
      </div>

      <div class="carousel-text-list">
        <!--<div class="carousel-text">-->
          <div v-for="i,y in slider_data" class="carousel-event-info" :class="{active: y === cur_id}" >
            <div class="carousel-event-info-text-wrapper">
              <div class="carousel-event-info-text">
                <h3>
                  {{ i.title }}
                </h3>
                <h4 class="text-regl">
                  {{ i.text }}
                </h4>
                <br>
              </div>

            </div>
            <button class="btn btn-brand">Подробнее</button>
          </div>
          <ul class="carousel-indicators d-none d-sm-flex">
            <li data-target="#carousel" data-slide-to="0" class="active"></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
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
          <h1 class="text-center" >О конференциях</h1>
        </div>
        <div class="col-sm-10 ">
          <p class="text-center ">
            Программа охватывает такие аспекты веб-разработок, как архитектуры крупных проектов, базы данных и системы хранения, системное администрирование, нагрузочное тестирование, эксплуатация крупных проектов и другие направления, связанные с высоконагруженными системами.
          </p>
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
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            title: 'ASDASD'
          },
          {
            img: 'https://picsum.photos/1024/480/?image=52',
            text: 'there will be some text wich is smaller',
            title: 'ASDASD'
          },
          {
            img: 'https://picsum.photos/1024/480/?image=58',
            text: '2asdasdsadas asd asd asd asd sd dasd asd sd asd as ',
            title: 'ASDASD'
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

