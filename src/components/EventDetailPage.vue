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
        <div class="col-sm-10" v-if="short_description!== ''">
          <h4 class="short-description">
            {{ short_description }}
          </h4>
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
          <div class="row no-margin justify-content-center" v-if="speakers.length !== 0">
            <h4 class="speaker-title">
              Спикеры
            </h4>
            <div class="speaker-card-wrapper" v-for="i in speakers">
              <div class="speaker-card-img" v-bind:style="{ backgroundImage: 'url(' + backreq + i.photo + ')' }">
              </div>
              <div>
                <h4 class="speaker-card-speaker">{{ i.fio}}</h4>
                <h5 class="speaker-card-job">
                  {{ i.iin }}
                </h5>
              </div>
            </div>
          </div>
          <div class="row no-margin justify-content-center"  v-if="key === 'pkb' || key === 'press'">
            <h4 class="registration-title">
              Регистрация
            </h4>
            <h4 class="registration-description">
              Мы собрали всю информацию, которая может вам пригодиться на конференции, в одну большую новость: начиная от того, как добраться до места проведения мероприятия и где перекусить, заканчивая вопросами бухгалтерии и командировочных.
            </h4>
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
            <div class="col-sm-7 registration-form" v-if="key === 'pkb'">
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
                  <h4>Оферта</h4>
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
              <a :href="i.url" :title="i.name">
                <img width="100%" :src="backreq + i.logo" :alt="i.name" :title="i.name">
              </a>
            </div>
          </div>
          <div class="row no-margin justify-content-center" v-if="photos.length !== 0">
            <h4 class="registration-title">
              Фотоотчет
              <!--<span style="font-size: 10px">{{photos}}</span>-->
            </h4>
            <div class="col-sm-12 slider-wrapper photo_otchet">
              <div id="demo" class="carousel slide" data-ride="carousel">

                <!-- Indicators -->
                <ul class="carousel-indicators" v-if="photos.length !== 1">
                  <li data-target="#demo" data-slide-to="0" v-for="i,y in photos" :class="{active: y=== 0}"></li>
                </ul>

                <div class="carousel-inner">
                  <div class="carousel-item " v-for="i,y in photos" :class="{active: y === 0} " >
                    <div class="photo_otchet_img" v-bind:style="{ backgroundImage: 'url('+ backreq + i.image + ')' }"></div>
                  </div>
                </div>

                <!-- Left and right controls -->
                <div v-if="photos.length !== 1">
                  <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                  </a>
                  <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                  </a>
                </div>

              </div>

            </div>
          </div>
          <div v-if="links.length !== 0" class="row no-margin justify-content-center">
            <h4 class="registration-title" v-if="key !== 'pkb'">
              Пресс релиз
            </h4>
            <h4 class="registration-title"  v-if="key === 'pkb'">
              Материалы конференции
            </h4>
            <div class="row no-margin">
              <div class="col-12" v-for="i in links" style="text-align: center">
                <a download   :href="back_files + i.src" target="_blank" class="btn btn-brand" style="margin-bottom: 25px;width: auto;text-overflow: ellipsis;height: 45px;display: inline-block;padding: 5px 20px" >{{i.name}}
                </a>
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
        <div class="col-sm-4" v-for="i,y in archive_events" @click="toEvent(i.pk)">
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
  export default {
    data() {
      return {
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
    filters: {
      HourForm (value) {
        if (value) {
          return moment(String(value)).format('Do MMMM')
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
          console.log(res)
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
        moment.locale('ru')
        this.current_hour = moment().format('HH')
        this.current_minute = moment().format('mm')
        this.current_seconds = (parseInt(this.current_hour * 3600) + parseInt(this.current_minute * 60 ))
        axios.get(flag.backurl + '/conference/'+ this.$route.params.detail_id + '/').then((res) => {
          this.description = res.data.description
          this.start_date = res.data.start_date
          this.where = res.data.where
          this.socials = res.data.socials
          this.schedule_conf = res.data.schedule_conf
          this.speakers = res.data.speakers
          this.partners = res.data.partners
          this.photos = res.data.photos
          this.links = res.data.files_conf
          this.key = res.data.key
          this.short_description = res.data.main_description
        })
        axios.get(flag.backurl + '/conference/?year='+ this.$route.params.archive_year+ ' &conf_type=' + this.$route.params.event_id).then((res) => {
          this.archive_events = res.data
        })
      },
      toEvent(id) {
        console.log(id)
        this.$router.replace({name: 'EventsDetailPage', params: {event_id: this.$route.params.event_id, archive_year: this.$route.params.archive_year,detail_id: id}})
      }
    },
    mounted() {
    },
    beforeMount () {
      this.loadData()
    }
  }
</script>
