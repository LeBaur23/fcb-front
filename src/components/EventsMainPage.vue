<template>
  <div id="EventsMainPage">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-7 col-10">
          <div class="event-conference-wrapper" v-if="false">
            <h2 class="event_conference">О Конференциях</h2>
            <div class="row no-margin">
              <div class="d-flex mb-3 no-margin">
                <div class="p-1 "><h1 class="event-conference-number">150</h1></div>
                <div class="p-1 "><h5 class="event-conference-title">Финансовых организации</h5></div>
              </div>
              <div class="event-conference-description">
                Мы собираем более 300 участников кредитной экосистемы
              </div>
            </div>
            <div class="row no-margin">
              <div class="d-flex mb-3 no-margin">
                <div class="p-1 "><h1 class="event-conference-number">4</h1></div>
                <div class="p-1 "><h5 class="event-conference-title">Цифровые сессии</h5></div>
              </div>
              <div class="event-conference-description">
                Мы работаем по самым актуальным темам в области цифровизации
              </div>
            </div>
            <div class="row no-margin">
              <div class="d-flex mb-3 no-margin">
                <div class="p-1 "><h1 class="event-conference-number">20</h1></div>
                <div class="p-1 "><h5 class="event-conference-title">Цифровые сессии</h5></div>
              </div>
              <div class="event-conference-description">
                Мы работаем паралельно с деловыми СМИ и предостовляем качественный аналитический контент
              </div>
            </div>
          </div>
          <div class="event-archive-wrapper">
            <h2 class="event_conference">
              2018
            </h2>
            <div class="event-archive-img" v-for="i,y in slider_data"  @click="toEvent(y)">
              <img width="100%" :src="i.img" alt="">
              <div class="event-archive-img-description">
                <h4 class="event-archive-img-description-title">
                  {{i.text}}
                </h4>
                <p class="event-archive-img-description-date">
                  21.03.2018
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-10">
          <h2 class="event_archive">Архив</h2>
          <button class="btn btn-brand without-box-shadow" v-for="i,y in 3" :class="{active: y == 0}">{{2015 + i}}</button>
        </div>
      </div>
    </div>
    <div v-if="false" class="container digital-kz-wrapper">
      <div class="row justify-content-center">
        <div class="col-sm-10 col-10">
              <h4 class="digital-kz">
                Цифровой Казахстан
              </h4>
              <h4 class="digital-kz-description">
                Конференции Первого кредитного бюро - это серия ежегодных специализированных мероприятии для профессиональных участников финансового рынка. Конференции и другие мероприятия ПКБ собирают весь финансовый рынок для обсуждения основных вопросов риск-менеджмента, бизнеса, технологий а так же других финансовых иноваций.
              </h4>
        </div>
      </div>
    </div>
    <div v-if="false" class="container participant_wrapper">
      <div class="row justify-content-center">
        <div class="col-sm-10 col-10">
          <h4 class="participant_opportunity">
            Возможности на конференции для участников
          </h4>
        </div>
      </div>
      <div class="row justify-content-center no-margin">
        <div class="col-sm-5 col-10 participant-description-wrapper">
          <div class="d-flex mb-3 no-margin">
            <div class="p-1 no-padding">
              <img class="participant-test" src="../assets/images/events_main/test.png" alt="">
            </div>
            <div class="p-1 " style="margin-left: 36px">
              <h5 class="participant-description" ><span style="color: #000000;">Послушайте экспертов</span> и сделайте себе отметки о тех или иных иновациях</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-5 col-10 participant-description-wrapper">
          <div class="d-flex mb-3 no-margin">
            <div class="p-1 no-padding">
              <img class="participant-connection" src="../assets/images/events_main/connection.png" alt="">
            </div>
            <div class="p-1 " style="margin-left: 36px">
              <h5 class="participant-description" ><span style="color: #000000;">Познакомтесь с коллегами</span> из других организации. Проффессиональный нетворкинг</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-5 col-10 participant-description-wrapper">
          <div class="d-flex mb-3 no-margin">
            <div class="p-1 no-padding">
              <img class="participant-conversation" src="../assets/images/events_main/conversation.png" alt="">
            </div>
            <div class="p-1" style="margin-left: 36px">
              <h5 class="participant-description" ><span style="color: #000000;">Получите персональные консультации.</span> Консультации с экспертами и спикерами конференции возможны по предварительной записи. Оставьте заявку в телеграм боте</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-5 col-10 participant-description-wrapper">
          <div class="d-flex mb-3 no-margin">
            <div class="p-1 no-padding">
              <img class="participant-three-test-tubes" src="../assets/images/events_main/three-test-tubes.png" alt="">
            </div>
            <div class="p-1" style="margin-left: 36px">
              <h5 class="participant-description" ><span style="color: #000000;">Посетите Soution Demo Center</span> протестируйте все решения и сервисы</h5>
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
        ]
      }
    },
    methods: {
      toEvent(id) {
        this.$router.push({name: 'EventsDetailPage', params: {event_id: this.$route.params.event_id, detail_id: id}})
      }
    }
  }
</script>
