<template>
  <div id="EventDetailPage">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-10">
          <h4 class="event-detail-title" style="">
            Профессиональная конференция разработчиков высоконагруженных систем
          </h4>
        </div>
        <div class="col-sm-10">
          <div class="d-flex">
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
          <div class="d-flex schedule-wrapper" v-for="i in 5" :class="{active: i == 2}">
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
          <div class="row justify-content-center">
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
          <div class="row justify-content-center">
            <h4 class="registration-title">
              Регистрация
            </h4>
            <h4 class="registration-description">
              Мы собрали всю информацию, которая может вам пригодиться на конференции, в одну большую новость: начиная от того, как добраться до места проведения мероприятия и где перекусить, заканчивая вопросами бухгалтерии и командировочных.
            </h4>
            <div class="col-sm-6 registration-form">
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
          <div class="row justify-content-center">
            <h4 class="registration-title">
              Нас поддерживают
            </h4>
            <div class="col-sm-3" v-for="i in 5" style="margin-bottom: 50px">
              <img width="100%" src="https://s3.scoopwhoop.com/anj/logos/300977194.jpg" alt="">
            </div>
          </div>
          <div class="row justify-content-center">
            <h4 class="registration-title">
              Фотоотчет
            </h4>
            <div class="col-sm-3" v-for="i in 5" style="margin-bottom: 50px">
              <img width="100%" src="https://s3.scoopwhoop.com/anj/logos/300977194.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
