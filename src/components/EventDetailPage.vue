<template>
  <div id="EventDetailPage">
    <div class="container">
      <div class="row no-margin justify-content-center">
        <div class="col-sm-10">
          <h4 class="event-detail-title" style="">
            Профессиональная конференция разработчиков высоконагруженных систем
          </h4>
        </div>
        <div class="col-sm-10">
          <div class="row no-margin d-block d-sm-block d-md-block d-md-block d-lg-none">
            <div class="col-12">
              <span class="event-detail-date">
              <i class="fa fa-calendar-o event-detail-calendar-icon" aria-hidden="true" ></i>
              18 июля
              </span>
              <span class="event-detail-place">
              <i class="fa fa-map-marker event-detail-place-icon"  aria-hidden="true"></i>
              Алматы
              </span>
            </div>
            <div class="row no-margin" style="margin-top: 20px !important;">
              <div class="col-4">
                <h4 class="event-detail-share">Поделиться</h4>
              </div>
              <div class="col-8 no-padding">
                <div class="row no-margin float-right">
                  <a class="icon-a" href="" style="background-color: black;border-radius: 50%;padding: 7px 12px">
                    <i class="fa fa-facebook brand_icon-2" style="color: white" aria-hidden="true"></i>
                  </a>
                  <a class="icon-a" href="" style="background-color: black;border-radius: 50%;padding: 7px">
                    <i class="fa fa-vk brand_icon-2" style="color: white" aria-hidden="true"></i>
                  </a>
                  <a class="icon-a" href="">
                    <i class="fa fa-telegram brand_icon-2" style="color: black;font-size: 38px" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="share-wrapper d-none d-sm-none d-md-none  d-lg-flex">
            <div class="p-2 mr-auto">
              <span class="event-detail-date">
                <i class="fa fa-calendar-o event-detail-calendar-icon" aria-hidden="true" ></i>
                18 июля
              </span>
              <span class="event-detail-place">
                <i class="fa fa-map-marker event-detail-place-icon"  aria-hidden="true"></i>
                Алматы
              </span>
            </div>
            <div class="p-2">
              <h4 class="event-detail-share">Поделиться</h4>
            </div>
            <div class="">
              <div class="row no-margin">
                <a class="icon-a" href="" style="background-color: black;border-radius: 50%;padding: 10px 17px">
                  <i class="fa fa-facebook brand_icon-2" style="color: white" aria-hidden="true"></i>
                </a>
                <a class="icon-a" href="" style="background-color: black;border-radius: 50%;padding: 10px">
                  <i class="fa fa-vk brand_icon-2" style="color: white" aria-hidden="true"></i>
                </a>
                <a class="icon-a" href="">
                  <i class="fa fa-telegram brand_icon-2" style="color: black;font-size: 47px" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
       <div class="col-sm-10">
         <div class="row no-margin" style="border-bottom: 1px solid #f2f2f2;padding-bottom: 25px ">
         </div>
       </div>
        <div class="col-sm-10">
          <div class="schedule-wrapper d-block d-md-none" v-for="i in 5" :class="{active: i == 2}">
            <h4 class="schedule-time">
              11:00 - 12:00
              <span class="actived-now" style="margin-left: 5px" v-if="i == 2">
                  Сейчас идет
                </span>
            </h4>
            <h4 class="schedule-title">
              Церемония открытия
            </h4>
            <h4 class="schedule-speaker text-right">
              David Coperfield
            </h4>
          </div>
          <div class="schedule-wrapper d-none d-md-flex" v-for="i in 5" :class="{active: i == 2}">
            <div class="p-2 mr-auto">
              <h4 class="schedule-time">
                11:00 - 12:00
                <span class="actived-now" v-if="i == 2">
                  Сейчас идет
                </span>
              </h4>
              <h4 class="schedule-title">
                Церемония открытия
              </h4>
            </div>
            <div class="p-2">
              <h4 class="schedule-time">
                &nbsp
              </h4>
              <h4 class="schedule-speaker">
                David Coperfield
              </h4>
            </div>
          </div>
        </div>
        <div class="col-sm-10">
          <div class="row no-margin justify-content-center">
            <h4 class="speaker-title">
              Спикеры
            </h4>
            <div class="speaker-card-wrapper" v-for="i in 7">
              <div class="speaker-card-img" >
              </div>
              <div>
                <h4 class="speaker-card-speaker">David Coperfield</h4>
                <h5 class="speaker-card-job">
                  Основатель двух
                  стартапов «Sprayable»
                  и «Stream»</h5>
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
            <div class="col-sm-3 col-6" v-for="i in 7" style="margin-bottom: 50px">
              <img width="100%" src="https://s3.scoopwhoop.com/anj/logos/300977194.jpg" alt="">
            </div>
          </div>
          <div class="row no-margin justify-content-center">
            <h4 class="registration-title">
              Фотоотчет
            </h4>
            <div class="col-sm-12 slider-wrapper">
              <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                <swiper-slide class="slide-1" v-for="i in 7"></swiper-slide>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              </swiper>
              <!-- swiper2 Thumbs -->
              <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                <swiper-slide class="slide-1" v-for="i in 5"></swiper-slide>
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
      <div class="row no-margin">
        <div class="col-sm-4" v-for="i,y in slider_data" @click="toEvent(y)">
          <div class="event-archive-img" style="width: 100%">
            <img width="100%" :src="i.img" alt="">
            <div class="event-archive-img-description">
              <h4 class="event-archive-img-description-title detail-event-archive-title">
                {{i.text}}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
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
        ],
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
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
  }
</script>
