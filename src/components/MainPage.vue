<template>
  <div id="MainPage">
    <div id="demo" class="carousel slide" data-ride="carousel" style="height: 870px">

      <!-- Indicators -->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      <!-- The slideshow -->
      <div class="carousel-inner">
        <div class="carousel-item active" style="background-image: url('https://picsum.photos/1024/480/?image=52');background-size: cover;height: 870px">
          <!--<img width="100%" src="https://picsum.photos/1024/480/?image=52" alt="Los Angeles">-->
        </div>
        <div class="carousel-item">
          <img width="100%" src="https://picsum.photos/1024/480/?image=54" alt="Chicago">
        </div>
        <div class="carousel-item">
          <img width="100%" src="https://picsum.photos/1024/480/?image=58" alt="New York">
        </div>
      </div>

      <div class="carousel-text-list">
        <div class="carousel-text" style="width: 400px;position: absolute;top:30%;transform: translateY(-30%);z-index: 2;left: 70px;">
          <div v-for="i in 3" class="carousel-event-info" :class="{active: i === 1}" >
            <h2> KOnferencia pkb {{ i }} </h2><br><br>
            <h4 class="text-regl" style="margin: 0px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </h4>
            <br>
            <button class="btn btn-brand">Подробнее</button>
          </div>
        </div>
      </div>

      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>

    </div>
    <!--<div class="MainPageCarousel"-->
         <!--style="width: 100%;-->
                <!--background-image: url('https://img00.deviantart.net/54d1/i/2014/109/f/7/deadpool_wallpaper_by_sadorien-d7f5sqp.png');-->
                <!--height: 870px;-->
                <!--background-size: cover "-->
    <!--&gt;-->
      <!--&lt;!&ndash;<img src="https://img00.deviantart.net/54d1/i/2014/109/f/7/deadpool_wallpaper_by_sadorien-d7f5sqp.png" alt="">&ndash;&gt;-->
    <!--</div>-->
    <div class="MainPageWhiteBack" style="position: absolute;top: 0;display: inline-block;width: 100%;height: 870px;z-index: 1">
      <img width="100%" src="../assets/images/whiteback.png" alt="" style="height: 870px">
    </div>
  </div>
</template>

