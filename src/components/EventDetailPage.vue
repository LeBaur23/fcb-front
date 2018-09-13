<template>
  <div id="EventDetailPage">
    <div v-if="!(all_responses.length === 6 )" class="loading-wrapper">
      <div class="loading-image-wrapper">
      </div>
      <div class="col-">
        <img width="150px" height="150px" src="../assets/images/bitmap.png" alt="">
      </div>
    </div>
    <div id="MainPage">
      <div id="carousel" class="carousel slide Detail_cor" data-interval="false" style="margin-top: 100px">
        <div class="carousel-inner">
          <div ref="classes" class="carousel-item " id="test-bg" v-for="i,y in slider_data" :class="{active: y === 0,[y]: true}" v-bind:style="{ backgroundImage: 'url(' + backreq + i.poster + ')' }">
          </div>
        </div>
        <div class="carousel-text-list">
          <!--<div class="carousel-text">-->
          <div v-for="i,y in slider_data" class="carousel-event-info active" style="background-color: transparent;box-shadow: none" >
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
            <button @click="toReg()" class="btn btn-brand">Подать заявку</button>
          </div>
        </div>
      </div>
      <div class="MainPageWhiteBack" style="margin-top: 100px">
        <img class="d-none d-sm-block" width="100%" src="../assets/images/whiteback.png" alt="">
      </div>
    </div>
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
                  <div class="col-sm-5 no-padding">
                 <span class="event-detail-date">
                    <i class="fa fa-calendar-o event-detail-calendar-icon" aria-hidden="true" ></i>
                    {{start_date | HourForm}}
                  </span>
                  </div>
                  <div class="col-sm-7 no-padding">
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
                    <h4 class="event-detail-share text-right">Поделиться</h4>
                  </div>
                  <div class="col-sm-12 d-none d-sm-block  no-padding">
                    <div class="row no-margin float-right">
                      <a v-for="i in socials" :href="i.link">
                        <img width="35px" height="35px" style="border-radius: 50%" :src="backreq+ i.logo" :alt="i.name" :title="i.name">
                      </a>
                    </div>
                  </div>
                  <div class="col-sm-12 d-block d-sm-none" style="margin-top: 20px">
                    <h4 class="event-detail-share">Поделиться</h4>
                    <div class="row no-margin">
                      <a v-for="i in socials" :href="i.link">
                        <img width="35px" height="35px" style="border-radius: 50%" :src="backreq+ i.logo" :alt="i.name" :title="i.name">
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
        <div class="col-sm-10" v-if="short_description!== '' && key !== 'pkb'">
          <div v-html="short_description">
          </div>
        </div>
        <div class="col-sm-10">
          <a class="show-hide-button" v-if="!show_schedule && object_keys.length !== 0" @click="show_schedule = true">ПРОГРАММА</a>
          <a class="show-hide-button" v-if="show_schedule && object_keys.length !== 0" @click="show_schedule = false">СКРЫТЬ ПРОГРАММУ</a>
          <div class="hide-schedule d-block d-sm-block d-md-none" :class="{'show-schedule' : show_schedule }"  v-for="i,y in schedule_conf">
            <div class="row">
              <h4 style="margin-top: 20px;margin-bottom: 10px;padding-left: 15px">{{object_keys[y]}}</h4>
            </div>
            <div class="schedule-wrapper" v-for="a in i[object_keys[y]]"
                 :class="{
            active: (today ===  object_keys[y]) && ((parseInt(a.start_time.substring(0, 2) * 3600) + parseInt(a.start_time.substring(3, 5) * 60 )) <= current_seconds &&
                     current_seconds <= (parseInt(a.end_time.substring(0, 2) * 3600) + parseInt(a.end_time.substring(3, 5) * 60 )))
            }"

            >
              <h4 class="schedule-time" :class="{'text-black' : (today ===  object_keys[y]) && ((parseInt(a.start_time.substring(0, 2) * 3600) + parseInt(a.start_time.substring(3, 5) * 60 )) > current_seconds)}">
              {{a.start_time.substring(0, 5) }} - {{a.end_time.substring(0, 5) }}
              <span class="actived-now" style="margin-left: 5px" v-if="(today ===  object_keys[y]) && ((parseInt(a.start_time.substring(0, 2) * 3600) + parseInt(a.start_time.substring(3, 5) * 60 )) <= current_seconds &&
              current_seconds <= (parseInt(a.end_time.substring(0, 2) * 3600) + parseInt(a.end_time.substring(3, 5) * 60 )))">
              Сейчас идет
              </span>
              </h4>
              <h4 class="schedule-title">
              {{ a.subject }}
              </h4>
              <h4 v-if="a.speakers.length > 0" class="schedule-speaker text-right" >
                Спикеры:
              </h4>
              <h4 v-if="a.speakers.length > 0" class="schedule-speaker text-right text-dark" v-for="i in a.speakers ">
              {{ i.fio }}
                <br>
              </h4>

            </div>
          </div>

          <div class="hide-schedule d-none d-md-block" :class="{'show-schedule' : show_schedule }" v-for="i,y in schedule_conf">

            <div class="row">
              <h4 style="margin-top: 20px;margin-bottom: 10px;padding-left: 15px">{{object_keys[y]}}</h4>
            </div>
            <div class="schedule-wrapper d-none d-md-flex " v-for="a in i[object_keys[y]]"
                 :class="{
            active: (today ===  object_keys[y]) && ((parseInt(a.start_time.substring(0, 2) * 3600) + parseInt(a.start_time.substring(3, 5) * 60 )) <= current_seconds &&
                     current_seconds <= (parseInt(a.end_time.substring(0, 2) * 3600) + parseInt(a.end_time.substring(3, 5) * 60 )))
            }">
            <div class="p-2 mr-auto schedule-description-info">
              <h4 class="schedule-time" :class="{'text-black' : (today ===  object_keys[y]) && ((parseInt(a.start_time.substring(0, 2) * 3600) + parseInt(a.start_time.substring(3, 5) * 60 )) > current_seconds)}">
                {{a.start_time.substring(0, 5) }} - {{a.end_time.substring(0, 5) }}
                <span class="actived-now" v-if="(today ===  object_keys[y]) && ((parseInt(a.start_time.substring(0, 2) * 3600) + parseInt(a.start_time.substring(3, 5) * 60 )) <= current_seconds &&
              current_seconds <= (parseInt(a.end_time.substring(0, 2) * 3600) + parseInt(a.end_time.substring(3, 5) * 60 )))">
                  Сейчас идет
                </span>
              </h4>
              <h4 class="schedule-title">
                {{ a.subject }}
              </h4>
            </div>
            <div class="p-2 schedule-speaker-wrapper">
              <!--<h4 class="schedule-time">-->
                <!--&nbsp-->
              <!--</h4>-->
              <h4 v-if="a.speakers.length > 0" class="schedule-speaker text-right" >
                Спикеры:
              </h4>
              <h4 v-if="a.speakers.length > 0" class="schedule-speaker text-dark" v-for="i in a.speakers">
                {{ i.fio }}
                <br>
              </h4>

            </div>
          </div>
          </div>
        </div>
        <div class="col-sm-10">
          <div v-for="i in conf_blocks">
            <h4 class="registration-title break_word">
              {{i.content.header}}
            </h4>
            <div class="break_word" v-html="i.content.text"></div>
          </div>
        </div>
        <div class="col-sm-10" v-if="ex_users.length !== 0" style="margin-top: 60px">
          <h4 class="registration-title">МОДЕРАТОРЫ</h4>
          <div style="display: inline-block;width: 100%;margin-bottom: 40px" v-for="i in ex_users" v-if="i.type === 0">
            <div class="ex_user_img-div" style="width: 20%;display: inline-block">
              <div v-bind:style="{ backgroundImage: 'url(' + backreq + i.user.photo + ')' }" class="ex_user_img"></div>
            </div>
            <div  v-html="i.user.description" class="break_word ex_user_text-div" style="width: 75%;display: inline-block;float: right">
            </div>
          </div>
          <h4 class="registration-title">ХЕАДЛАЙНЕРЫ</h4>
          <div style="display: inline-block;width: 100%;margin-bottom: 40px"  v-for="i in ex_users" v-if="i.type === 1">
            <div class="ex_user_img-div" style="width: 20%;display: inline-block;">
              <div v-bind:style="{ backgroundImage: 'url(' + backreq + i.user.photo + ')' }"  class="ex_user_img"></div>
            </div>
            <div v-html="i.user.description"  class="break_word ex_user_text-div" style="width: 75%;display: inline-block;float: right">

            </div>
          </div>
        </div>
        <div class="col-sm-10">
          <div class="row no-margin justify-content-center" v-if="speakers.length !== 0">
            <h4 class="speaker-title">
              Спикеры
            </h4>
            <div class="speaker-card-wrapper" v-for="i in speakers" v-if="i.fio !== ''">
              <div class="speaker-card-img" v-bind:style="{ backgroundImage: 'url(' + backreq + i.photo + ')' }">
              </div>
              <div>
                <h4 class="speaker-card-speaker">{{ i.fio}}</h4>
                <h5 class="speaker-card-job"  v-if="i.position !== null || i.position !== ''">
                  {{ i.position }}
                </h5>
              </div>
            </div>
          </div>
          <div class="row no-margin">
            <div class="col-sm-12 no-padding" v-if="key === 'pkb'">
              <div class="break_word" v-html="short_description">
              </div>
            </div>
          </div>
          <div id="registration" class="row no-margin justify-content-center"  v-if="(key === 'pkb' || key === 'press')">
            <h4 class="registration-title" v-if="key === 'pkb'">
              {{ custom_registration_pkb.header }}
            </h4>
            <h4 class="registration-title" v-if="key === 'press'">
              {{ custom_registration.header }}
            </h4>
            <h4 class="registration-description" v-if="key === 'pkb'">
              {{ custom_registration_pkb.text }}
            </h4>
            <h4 class="registration-description" v-if="key === 'press' ">
              {{ custom_registration.text }}
            </h4>
              <div v-if="custom_telegram.file !== null && custom_telegram.file !== ''  && custom_telegram.file !== undefined" class="col-12 no-padding text-center" style="margin-top: 20px">
                <a download :href="back_files + custom_telegram.file"  target="_blank">Инструкция по регистрации через Телеграм</a>
              </div>
            <!--<h4 class="registration-title" v-if="custom_telegram.header !== undefined && custom_telegram.header !== null && custom_telegram.header !== ''">-->
              <!--{{ custom_telegram.header }}-->
            <!--</h4>-->
            <!--<h4 class="registration-description" v-if="custom_telegram.text !== undefined && custom_telegram.text !== null && custom_telegram.text !== ''">-->
              <!--{{ custom_telegram.text }}-->
            <!--</h4>-->
            <div class="col-sm-7 registration-form" v-if="key === 'press'">
              <h4 class="registration-text" >
                Наименование организации
              </h4>
              <input class="registration-input" type="text" v-on:blur="$v.smi.company_name.$touch()"  v-model.trim="smi.company_name" @input="$v.smi.company_name.$touch()"/>
              <h4 class="registration-text" >
                ФИО
              </h4>
              <input class="registration-input" type="text"  v-on:blur="$v.smi.fio.$touch()"  v-model.trim="smi.fio" @input="$v.smi.fio.$touch()">
              <h4 class="registration-text">
                ИИН
              </h4>
              <input class="registration-input" type="text"  v-on:blur="$v.smi.iin.$touch()"  v-model.trim="smi.iin" @input="$v.smi.iin.$touch()">
              <h4 class="registration-text">
                Номер телефона
              </h4>
              <input  class="registration-input" type="tel"  v-on:blur="$v.smi.phone.$touch()" v-model.trim="smi.phone" @input="$v.smi.phone.$touch()">
              <h4 class="registration-text">
                Email
              </h4>
              <input  class="registration-input" type="tel"  v-on:blur="$v.smi.email.$touch()" v-model.trim="smi.email" @input="$v.smi.email.$touch()">
              <button class="btn btn-brand" :disabled="$v.smi.$invalid" @click="smi_data(smi)">Зарегистрироваться</button>
            </div>
            <div class="image-check" v-if="image_check">
              <div class="row luna justify-content-center no-margin">
                <div class="col-10 col-sm-6 luna-response-wrapper">
                  <div v-if="luna_pending" class="loader"></div>
                  <h4 v-if="luna_error" class="text-center">изображение не правильное, используйте другое фото</h4>
                  <h5 v-if="luna_success" class="text-center">верификация прошла успешно</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-7 registration-form" v-if="key === 'pkb' && reg_opened">
              <h4 class="registration-text">
                Наименование организации
              </h4>
              <input class="registration-input" type="text" v-on:blur="$v.registration.company_name.$touch()"  v-model.trim="registration.company_name" @input="$v.registration.company_name.$touch()"/>
              <h4 class="registration-text" >
                ФИО
              </h4>
              <input class="registration-input" type="text"  v-on:blur="$v.registration.fio.$touch()"  v-model.trim="registration.fio" @input="$v.registration.fio.$touch()">
              <h4 class="registration-text">
                ИИН
              </h4>
              <input class="registration-input" type="text"  v-on:blur="$v.registration.iin.$touch()"  v-model.trim="registration.iin" @input="$v.registration.iin.$touch()">
              <h4 class="registration-text">
                Номер телефона
              </h4>
              <input  class="registration-input" type="tel"  v-on:blur="$v.registration.phone.$touch()" v-model.trim="registration.phone" @input="$v.registration.phone.$touch()">
              <h4 class="registration-text">
                Email
              </h4>
              <input  class="registration-input"  type="tel"  v-on:blur="$v.registration.email.$touch()" v-model.trim="registration.email" @input="$v.registration.email.$touch()">
              <h4 class="registration-text">
                Фотография
              </h4>
              <b-form-file accept=".jpeg" @change="onFileChange" v-model="registration.photo" placeholder="Choose a file..."></b-form-file>
              <!--<div class="mt-3">Selected file: {{file && file.name}}</div>-->
              <label class="checkbox-wrapper">Подписаться на ежемесячную рассылку новостей
                <input v-model="registration.subs" type="checkbox" :checked="registration.subs">
                <span class="checkmark"></span>
              </label>
              <label class="checkbox-wrapper">Я даю <a @click="oferta_show = true" style="color: #3cb1f4;">согласие</a>  на сбор/обработку персональных данных
                <input v-model="oferta" type="checkbox" :checked="oferta">
                <span class="checkmark"></span>
              </label>
              <div class="oferta-wrapper" v-if="oferta_show">
                <div class="oferta-inner col-11 col-sm-10">
                  <h4>Согласие</h4>
                  <div class="oferta-inner-description">
                    Настоящим, регистрируясь для участия на конференции, я даю согласие ТОО «Первое кредитное бюро» (далее - ПКБ) на сбор и обработку моих (обо мне) персональных (в том числе биометрических) данных в соответствии с Законом РК «О персональных данных и их защите» для целей проведения указанной конференции и деятельности ПКБ, предусмотренной Законом РК «О кредитных бюро и формировании кредитных историй»
                    Достоверность сведений гарантирую
                  </div>
                  <div class="row no-margin justify-content-center">
                    <button @click="oferta_show = false" class="btn btn-brand" style="width: 180px;margin: 0 auto">Закрыть</button>
                  </div>
                </div>
              </div>
              <button class="btn btn-brand" :disabled="$v.registration.$invalid || image_response || oferta === false" @click="register(registration)">Зарегистрироваться</button>
            </div>
          </div>
          <div class="row no-margin justify-content-center" v-if="partners.length !== 0">
            <h4 class="registration-title">
              Нас поддерживают
            </h4>
            <div class="col-sm-3 col-6" v-for="i in partners" style="margin-bottom: 50px">
              <div class="row no-margin justify-content-center" style="height: 100%;align-items: center">
                <a :href="i.url" :title="i.name">
                  <img width="100%" :src="backreq + i.logo" :alt="i.name" :title="i.name">
                </a>
              </div>

            </div>
          </div>
          <div class="row no-margin justify-content-center" v-if="photos.length !== 0">
            <h4 class="registration-title">
              Фотоотчет
              <!--<span style="font-size: 10px">{{photos}}</span>-->
            </h4>
            <div class="col-sm-12 slider-wrapper photo_otchet">
              <slick class="asdasd" ref="slick" :options="slickMainOptions">
                <div class="main_slick_inner"  v-for="i in photos"  >
                  <div class="main_slick_inner_img" v-bind:style="{ backgroundImage: 'url('+ backreq + i.image + ')' }">

                  </div>
                </div>
                <div v-if="cloud_url !== ''" class="main_slick_inner">
                  <a :href="cloud_url">
                    <div class="main_slick_inner_img" style="display: flex;justify-content: center;align-items: center">
                    <h4 style="text-align: center">Посмотреть все фотографии и скачать </h4>
                  </div>
                  </a>
                </div>
              </slick>
              <slick class="asd" ref="slick" :options="slickOptions">
                <div class="sub_slick_inner" v-for="i in photos" >
                  <div class="sub_slick_inner_img" v-bind:style="{ backgroundImage: 'url('+ backreq + i.image + ')' }" >

                  </div>
                </div>
                <div v-if="cloud_url !== ''" class="sub_slick_inner" >
                  <div class="sub_slick_inner_img"  style="display: flex;justify-content: center;align-items: center">
                    <h4 class="sub_slick_inner_img_text" style="text-align: center">Посмотреть все фотографии и скачать </h4>
                  </div>
                </div>
              </slick>
            </div>
          </div>
          <div v-if="links.length !== 0" class="row no-margin justify-content-center">
            <h4 class="registration-title" v-if="key !== 'pkb'">
              Пресс релиз
            </h4>
            <h4 class="registration-title"  v-if="key === 'pkb'">
              Материалы конференции
            </h4>
            <div class="row no-margin justify-content-center">
              <div class="col-12 col-sm-8 no-padding" v-for="i in links" style="text-align: center">
                <a download  v-if="i.type === 0"  :href="back_files + i.src" target="_blank" class="btn btn-brand download_button" style="" >{{i.name}}</a>
                <a  v-if="i.type === 1"  :href="i.url" style="background-color: #b50d08!important;box-shadow: 0px 5px 30px #b50d08;" class="btn btn-brand download_button" >{{i.name}}</a>
              </div>
            </div>

          </div>
          <div class="row no-margin justify-content-center" v-if="key === 'pkb'">
            <h4 class="registration-title">
              Связаться с организаторами
            </h4>
            <div class="col-sm-12 registration-form" style="margin-top: 0px">
              <div class="d-block d-md-none">
                <h4 class="registration-text">
                  ФИО
                </h4>
                <input class="registration-input" type="text" :class="{error: $v.call_form.full_name.$error}" v-on:blur="$v.call_form.full_name.$touch()"  v-model.trim="call_form.full_name" @input="$v.call_form.full_name.$touch()">
                <h4 class="registration-text">
                  Номер телефона
                </h4>
                <input class="registration-input" type="text" v-on:blur="$v.call_form.phone.$touch()"  v-model.trim="call_form.phone" @input="$v.call_form.phone.$touch()">
                <h4 class="registration-text">
                  Email
                </h4>
                <input class="registration-input" type="text"  v-on:blur="$v.call_form.email.$touch()"  v-model.trim="call_form.email" @input="$v.call_form.email.$touch()">
                <textarea placeholder="Ваш коментарии" class="" v-on:blur="$v.call_form.comment.$touch()"  v-model.trim="call_form.comment" @input="$v.call_form.comment.$touch()"></textarea>
                <button :disabled="$v.call_form.$invalid" @click="support(call_form)" class="btn btn-brand" style="width: 100%">Отправить</button>
              </div>
              <div class="d-sm-none d-none d-md-flex">
                <div class="mr-auto" style="width: 45%">
                  <h4 class="registration-text">
                    ФИО
                  </h4>
                  <input class="registration-input" type="text" v-on:blur="$v.call_form.full_name.$touch()"  v-model.trim="call_form.full_name" @input="$v.call_form.full_name.$touch()">
                  <h4 class="registration-text">
                    Номер телефона
                  </h4>
                  <input class="registration-input" type="text" v-on:blur="$v.call_form.phone.$touch()"  v-model.trim="call_form.phone" @input="$v.call_form.phone.$touch()">
                  <h4 class="registration-text">
                    Email
                  </h4>
                  <input class="registration-input" type="text" v-on:blur="$v.call_form.email.$touch()"  v-model.trim="call_form.email" @input="$v.call_form.email.$touch()">
                </div>
                <div class="" style="width: 50%">
                  <h4 class="registration-text">
                 &nbsp
                  </h4>
                  <textarea placeholder="Ваш коментарии" class="" id="comment" v-on:blur="$v.call_form.comment.$touch()"  v-model.trim="call_form.comment" @input="$v.call_form.comment.$touch()"></textarea>
                  <button :disabled="$v.call_form.$invalid" @click="support(call_form)" class="btn btn-brand" style="width: 150px;float: right;margin-top: 40px">Отправить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid" id="EventsMainPage" style="margin-top: 100px">
      <div class="row no-margin justify-content-center">
        <div class="col-sm-4" v-for="i,y in conferences" @click="toEvent(i.pk)">
          <div class="event-archive-img" style="width: 100%">
            <div class="event-archive-background-img" style="" v-bind:style="{ backgroundImage: 'url(' + backreq + i.poster + ')' }"></div>
            <div class="event-archive-img-description">
              <h4 class="event-archive-img-description-title">
                {{i.name }}
              </h4>
              <p class="event-archive-img-description-date">
                {{ i.start_date | HourDate}}
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
  import flag from '../request'
  import { required, minLength, email, numeric } from 'vuelidate/lib/validators'
  import Slick from 'vue-slick'
  export default {
    data() {
      return {
        main_page_loaded: false,
        slider_data: [],
        ex_users: [],
        conf_blocks: [],
        cloud_url: '',
        custom_telegram: '',
        all_responses: [],
        show_schedule: false,
        conferences: [],
        reg_opened: true,
        today: '',
        dddd: null,
        custom_registration: null,
        custom_registration_pkb: null,
        slickMainOptions: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          asNavFor: '.asd'
        },
        slickOptions: {
          slidesToShow: 4,
          focusOnSelect: true,
          arrows: false,
          asNavFor: '.asdasd'
          // Any other options that can be got from plugin documentation
        },
        object_keys: [],
        luna_error: false,
        luna_success: false,
        luna_pending: false,
        image_check: false,
        image_response: true,
        key: '',
        short_description: '',
        backreq: flag.back,
        back_files: flag.back_files,
        links: [
        ],
        oferta_show: false,
        checked: true,
        oferta: true,
        file: null,
        call_form: {
          phone: '',
          email: '',
          comment: '',
          full_name: ''
        },
        smi: {
          company_name: '',
          fio: '',
          phone: '',
          email: '',
          iin: '',
        },
        registration:{
          company_name: '',
          fio: '',
          phone: '',
          email: '',
          conference: '',
          iin: '',
          photo: null,
          subs: true
        },
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
    validations: {
      registration: {
        company_name: {
          required
        },
        fio : {
          required
        },
        phone : {
          required,
          numeric,
          minLength: minLength(11)
        },
        email : {
          required,
          email
        },
        iin : {
          required,
          minLength: minLength(12)
        }
      },
      smi: {
        company_name: {
          required
        },
        fio : {
          required
        },
        phone : {
          required,
          numeric,
          minLength: minLength(11)
        },
        email : {
          required,
          email
        },
        iin : {
          required,
          minLength: minLength(12)
        }
      },
      call_form: {
        phone: {
          required,
          numeric,
          minLength: minLength(11)
        },
        email: {
          required,
          email
        },
        comment: {required},
        full_name: {required}
      },
    },
    components: { Slick },
    filters: {
      HourForm (value) {
        if (value) {
          return moment(String(value)).format('Do MMM')
        }
      },
      HourDate (value) {
        if (value) {
          return moment(String(value)).format('DD.MM.YY')
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
      toReg() {
        document.getElementById('registration').scrollIntoView();
      },
      next() {
        this.$refs.slick.next();
      },

      prev() {
        this.$refs.slick.prev();
      },

      reInit() {
        // Helpful if you have to deal with v-for to update dynamic lists
        this.$nextTick(() => {
          this.$refs.slick.reSlick();
        });
      },
      handleAfterChange(event, slick, currentSlide) {
        console.log('handleAfterChange', event, slick, currentSlide);
      },
      handleBeforeChange(event, slick, currentSlide, nextSlide) {
        console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
      },
      handleBreakpoint(event, slick, breakpoint) {
        console.log('handleBreakpoint', event, slick, breakpoint);
      },
      handleDestroy(event, slick) {
        console.log('handleDestroy', event, slick);
      },
      handleEdge(event, slick, direction) {
        console.log('handleEdge', event, slick, direction);
      },
      handleInit(event, slick) {
        console.log('handleInit', event, slick);
      },
      handleReInit(event, slick) {
        console.log('handleReInit', event, slick);
      },
      handleSetPosition(event, slick) {
        console.log('handleSetPosition', event, slick);
      },
      handleSwipe(event, slick, direction) {
        console.log('handleSwipe', event, slick, direction);
      },
      handleLazyLoaded(event, slick, image, imageSource) {
        console.log('handleLazyLoaded', event, slick, image, imageSource);
      },
      handleLazeLoadError(event, slick, image, imageSource) {
        console.log('handleLazeLoadError', event, slick, image, imageSource);
      },
      smi_data (data) {
        axios.post(flag.backurl + '/person/send_email/',data).then((res) => {
          console.log(res)
          alert('Успешно')
        })
          .catch((error) => {
          console.log(error)
            alert('Ошибка, повторите еще раз')

          })
      },
      onFileChange (e) {
        this.image_check = true
        this.luna_pending = true
        setTimeout( () => {
          console.log(this.registration.photo)
          var files = e.target.files
          console.log(files[0])
          var formData = new FormData();
          formData.append("photo", files[0]);
            axios.post(flag.backurl + '/person/image_check/', formData).then((res) => {
              if (res.data.status === false) {
                this.luna_pending = false
                this.luna_error = true
                console.log(this.luna_error)
                setTimeout(() => {
                  this.luna_pending = false
                  this.image_check = false
                  this.luna_error = false
                  this.luna_success = false
                  this.image_response = true
                }, 2000)
              }
              else {
                this.luna_pending = false
                this.luna_success = true
                console.log('SUCCESS')
                console.log(this.luna_error)
                setTimeout(() => {
                  this.luna_pending = false
                  this.image_check = false
                  this.luna_error = false
                  this.luna_success = false
                  this.image_response = false
                }, 2000)
              }

            }).catch((error) => {
              console.log('ERROR')
              this.luna_pending = false
              this.luna_error = true
              console.log(this.luna_error)
              setTimeout(() => {
                this.luna_pending = false
                this.image_check = false
                this.luna_error = false
                this.luna_success = false
              }, 2000)
              console.log(this.luna_error)
            })
        }, 200)
      },
      support (data) {
        axios.post(flag.backurl + '/support/',data).then((res) => {
          console.log(res)
          alert('Успешно')
          this.call_form.phone = ''
          this.call_form.email = '',
          this.call_form.comment = '',
          this.call_form.full_name = ''
        }).catch((error) => {
          this.call_form.phone = ''
          this.call_form.email = '',
          this.call_form.comment = '',
          this.call_form.full_name = ''
          alert('Ошибка, повторите еще раз')

        })

      },
      register(data) {
        var formData = new FormData();
        formData.append("photo", data.photo);
        formData.append("company_name", data.company_name);
        formData.append("fio", data.fio);
        formData.append("phone", data.phone);
        formData.append("email", data.email);
        formData.append("conference", data.conference);
        formData.append("iin", data.iin);
        formData.append("subs", data.subs);
        axios.post(flag.backurl + '/person/',formData).then((res) => {
          alert('Успешно')
          this.registration.company_name = ''
          this.registration.fio = ''
          this.registration.phone = ''
          this.registration.email = ''
          this.registration.conference = ''
          this.registration.iin = ''
          this.registration.photo = null
          this.registration.subs = null
        }).catch((error) => {
          alert('Ошибка, повторите еще раз')
        })
      },
      loadData() {
        axios
          .get(flag.backurl +'/conference_type/')
          .then((res) => {
            this.slider_data = res.data
            this.max_id = res.data.length - 1
            this.all_responses.push('a')
          }).catch((error) => {
          this.all_responses.push('a')
        })
        axios
          .get(flag.backurl +  '/content/key/?key=telegram')
          .then((res) => {
            this.custom_telegram = res.data
            console.log(res.data)
            this.all_responses.push('a')
          }).catch((error) => {
          this.all_responses.push('a')
        })
        axios
          .get(flag.backurl +  '/content/key/?key=reg_press')
          .then((res) => {
            this.custom_registration = res.data
            console.log(res.data)
            this.all_responses.push('a')
          }).catch((error) => {
          this.all_responses.push('a')
        })
        axios
          .get(flag.backurl +  '/content/key/?key=reg_pkb')
          .then((res) => {
            this.custom_registration_pkb = res.data
            console.log(res.data)
            this.all_responses.push('a')
          }).catch((error) => {
          this.all_responses.push('a')
        })
        this.today = moment().format('YYYY-MM-DD')
        this.registration.conference = this.$route.params.detail_id
//        console.log('I AM HERE FOR YOU')
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
        this.links = []
        this.conf_blocks = []
        this.ex_users = []
        moment.locale('ru')
        this.current_hour = moment().format('HH')
        this.current_minute = moment().format('mm')
        this.current_seconds = (parseInt(this.current_hour * 3600) + parseInt(this.current_minute * 60 ))
        axios.get(flag.backurl + '/conference/'+ this.$route.params.detail_id + '/').then((res) => {
          this.description = res.data.description
          this.start_date = res.data.start_date
          this.conf_blocks = res.data.conf_blocks
          this.where = res.data.where
          this.socials = res.data.socials
          this.cloud_url = res.data.cloud_url
          this.all_responses.push('a')
//          this.schedule_conf = res.data.schedule_conf
          var datas = []
          var days = {}
          var keys = []
//          console.log(res.data.schedule_conf)
          for (var key in res.data.schedule_conf) {
            keys.push(key)
            days[key] = res.data.schedule_conf[key]
            datas.push(days)
            days = {}
          }
          this.conferences = res.data.conferences
          this.object_keys = keys
          this.schedule_conf = datas
          this.speakers = res.data.speakers
          this.partners = res.data.partners
          this.photos = res.data.photos
          this.links = res.data.files_conf
          this.key = res.data.key
          this.reg_opened = res.data.reg_fields
          this.ex_users = res.data.ex_users
          this.short_description = res.data.main_description
        }).catch((error) => {
          this.all_responses.push('a')
        })
        axios.get(flag.backurl + '/conference/?year='+ this.$route.params.archive_year+ ' &conf_type=' + this.$route.params.event_id).then((res) => {
          this.archive_events = res.data
          setTimeout(() => {
            this.all_responses.push('a')
          },1000)
        }).catch((error) => {
          setTimeout(() => {
            this.all_responses.push('a')
          },1000)
        })
      },
      toEvent(id) {
        console.log(id)
        document.documentElement.scrollTop = 0
        this.$router.replace({name: 'EventsDetailPage', params: {event_id: this.$route.params.event_id, archive_year: this.$route.params.archive_year,detail_id: id}})
      }
    },
    beforeMount () {
      this.loadData()
    }
  }
</script>
