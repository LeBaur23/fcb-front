<template>
  <div id="app">
    <div class="fcb-nav">
        <img src="./assets/images/bitmap.png" alt="">
    </div>
    <router-view/>
    <div class="Footer">
      <div class="container">
        <div class="row no-margin">
          <div class="col-sm-8">
            <h4 class="text-dark title">Контакты</h4>
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
export default {
  name: 'App'
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /**/
}
</style>
