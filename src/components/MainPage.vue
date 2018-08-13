<template>
  <div id="MainPage">
    <div  style="padding-left: 300px">

    </div>
    <div id="demo" class="carousel slide" data-ride="carousel" style="height: 870px">

      <!-- Indicators -->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      <!-- The slideshow -->
      <div class="carousel-inner">
        <div ref="classes" class="carousel-item " v-for="i,y in slider_data" :class="{active: y === 0}">
        <img width="100%" :src="i.img" alt="">
      </div>
      </div>

      <div class="carousel-text-list">
        <div class="carousel-text" style="width: 400px;position: absolute;top:30%;transform: translateY(-30%);z-index: 2;left: 70px;">
          <div v-for="i,y in slider_data" class="carousel-event-info" :class="{active: y === 0}" >
            <h2> KOnferencia pkb {{ i.text }} </h2><br><br>
            <h4 class="text-regl" style="margin: 0px">
            </h4>
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

    <div class="MainPageWhiteBack" style="position: absolute;top: 0;display: inline-block;width: 100%;height: 870px;z-index: 1">
      <img width="100%" src="../assets/images/whiteback.png" alt="" style="height: 870px">
      <button @click="checkClasses">check</button>
      {{className}} <br>
      {{classes}}
      <!--<input type="text" v-for="(person, index) in people" v-model="people[index].age" />-->
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
            text: '54 text is image'
          },
          {
            img: 'https://picsum.photos/1024/480/?image=52',
            text: '52 text of image'
          },
          {
            img: 'https://picsum.photos/1024/480/?image=58',
            text: '58 text of image'
          }
        ],
        classes: [],
        className: [],
        people: [
          {id: 0, name: 'Bob', age: 2123},
          {id: 1, name: 'Frank', age: 31},
          {id: 2, name: 'Joe', age: 123}
        ]
      }
    },
    methods: {
      checkClasses() {
        console.log(this.className);
      }
    },
    created(){
      setTimeout(() => {
        this.className = this.$refs.classes;
        console.log(this.$refs.classes.length)
        for (var i = 0; i < this.$refs.classes.length; i++) {
//          var o = {p: 2}
//          watch( o, ["p"], function(){
//            alert("p changes!");
//          });

          console.log(this.$refs.classes[i].classList)
        }
      }, 200)
    }
  }
</script>

