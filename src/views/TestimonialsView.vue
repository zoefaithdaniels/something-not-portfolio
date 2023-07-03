<!-- <template>
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
</style> -->
<template>
    <div id="app">
      <h1 class="heading">Resume</h1>
      <div class="timeline">
        <ul>
          <li v-for="event in events" :key="event.id">
            <img :src="event.img" class="card-img-top" alt="...">
            <div class="date">{{ event.date }}</div>
            <div class="content">
              <h2>{{ event.title }}</h2>
              <p>{{ event.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  
  export default {
    data() {
      return {
        events: [
          {
            id: 1,
            img:'https://i.postimg.cc/W3Fj949m/elsie-high.png',
            date: '2017-2021',
            title: 'ELSIES RIVER HIGH SCHOOL',
            description: 'Highest grade passed is Grade 12'
          },
          {
            id: 2,
            img:'https://i.postimg.cc/Y0Yn0c9B/blac.png',
            date: '2021',
            title: 'BLAC COMMUNITY',
            description: 'I Have also Volunteered at BLAC, which has taught me to take initiative in situations that required me to do so..'
          },
          {
            id: 3,
            img:'https://i.postimg.cc/rmKyvjpr/0o0k0.jpg',
            date: '2022',
            title: 'BERGVILLE PRIMARY SCHOOL',
            description: 'Ive volunteered at Bergville Primary School as a Helping hand for the educators. It has taught me to be vigilant and have patience. It has also taught me communication skills, and how to work with people on a daily basis and how to deescalating conflict.'
          },
          {
            id: 4,
            img:'https://i.postimg.cc/26cG5kmt/life-choices-2.png',
            date: '2022-2023',
            title: 'LIFE CHOICES',
            description: 'I am currently at Life Choices training coding, my goal is to improve my skills and become a full stack front-developer.'
          },
          {
            id: 5,
            img:'https://i.postimg.cc/W3t7ydJ4/Screenshot-2023-05-17-115326.png',
            date: '2023',
            title: 'LIFE CHOICES STUDIO',
            description: 'I am on a new learning journey in the Life Choices Studio currently learning Figma, Ui/Ux Design, WordPress, Seo, and Php.'
          },
          {
            id: 6,
            img:'https://i.postimg.cc/VNXwCNNd/lca.jpg',
            date: '2023',
            title: 'LIFE CHOICES ACADEMY',
            description: 'I am currently in an active role as a lecturer\'s assistant in the Life Choices coding academy. My role consists of assisting new students from the new cohort while also upskilling in the LC Studio'
          }
        ]
      }
    },
    mounted(){
      console.log(this.events);
    }
  };
  </script>
  
  <style>
  body {
    background-color: black;
    color: white;
  }
  
  .heading {
    color: crimson;
  }
  
  .timeline {
    margin-top: 30px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    position: relative;
    padding: 20;
  }
  </style>