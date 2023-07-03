<template>
    <div class="background">
      <h2>Testimonials</h2>
      <div class="card-container">
        <div class="flip-card" v-for="item in testimonials" :key="item.name">
            <div class="flip-card-inner">
       <div class="flip-card-front">
          <img
           :src="item.img"
            alt="Avatar"
            style="width: 100%; height: 100%;"/>
        </div>
        <div class="flip-card-back">
          <h1>{{item.name}}</h1>
          <h4>{{item.title}}</h4>
          <p>{{item.test}}</p>
         </div>
      </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  testimonials: "test-cards",
  data(){
      return{
          testimonials:[
              {name:'Nabila Samsodien',
              title:'Colleague',
              img:'https://i.postimg.cc/BbDvs0r9/NABILA-TESTI.png',
              test:'Zoe is reliable, hard working and has a warm personality. Not only does she work well on her own, but she performs just as efficiently while in a team. '
              },
              {name:'Jake Jansen',
              title:'Colleague',
              img:'https://i.postimg.cc/MT3sxkyD/jake.png',
              test:'Zoe is a kind and hardworking individual as she never gives up and is always keen on learning new things. She is someone who you can always rely on, as she is very punctual as well'
              },
              {name:'Aneeqa Brown',
              title:'Colleague',
              img:'https://i.postimg.cc/6TJyG3rp/ANEEQA-TESTI.png',
              test:'Zoe is a highly thought intellectual from my perspective. She is not only hardworking but ambitious to recreate her vision exactly as thought of. She does her work accordingly and always provide a helping hand.'
              },
              {name:'Beyonce Leonard',
              title:'Colleague',
              img:'https://i.postimg.cc/HkPjQB4N/BEYONCE-TESTIMONIAL.png',
              test:'Zoe Daniels is an ambitious and a hard working women.She thrives for excellence and shes a very helpful,generous and sweet young women.Zoe is a brilliant and bright women and always does her best.'
              },
              {name:'Keenan Olivier',
              title:'Colleague',
              img:'https://i.postimg.cc/t4GB9NVL/KEENAN-TESTI.png',
              test:'Zoe,shes a wonderful being,great to work with,always put her 100% effort in working and a great team player.'
              },
              {name:'Nikita Ramawoothar',
              title:'Colleague',
              img:'https://i.postimg.cc/MHK838zm/NIKITA-TESTI.png',
              test:'Zoe is a very creative individual and is always pleasant company to have within the workplace. She is not only helpful but also an exceptional developer.',
              }
          ]
      }
  }
}
</script>

<style scoped>
.flip-card {
background-color: transparent;
width: 300px;
height: 300px;
perspective: 1000px;
margin: 20px;


}

.background{
    background-color: black;
    min-height: 100vh;
    padding-top: 10px;
}
/* This container is needed to position the front and back side */
.flip-card-inner {
position: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 0.8s;
transform-style: preserve-3d;
}
/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
transform: rotateY(180deg);
}
/* Position the front and back side */
.flip-card-front, .flip-card-back {
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden; /* Safari */
backface-visibility: hidden;
border: 1cm;
border-color: solid black;
}
/* Style the front side (fallback if image is missing) */
.flip-card-front {
background-color:crimson;
color: black;
}
/* Style the back side */
.flip-card-back {
background-color:crimson;
color: whitesmoke;
transform: rotateY(180deg);
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  margin: 20px;
  padding-left: 65px;
}
.background {
  background-color: black;
  min-height: 100vh;
  padding-top: 10px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>