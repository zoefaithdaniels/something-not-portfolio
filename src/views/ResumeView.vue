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
          description: 'I am on a new learning journey in the Life Choices Studio currently learning Figma ,Ui/Ux Design, WordPress, Seo and Php.'
        },
        {
          id: 6,
          img:'https://i.postimg.cc/VNXwCNNd/lca.jpg',
          date: '2023',
          title: 'LIFE CHOICES ACADEMY',
          description: 'I am currently in a active role as a lecturers assistant in the Life Choices coding academy. My role consists of assisting new students from the new cohort while also upskilling in the LC Studio'
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
  padding: 20px;
}

.date {
  color: crimson;
}

.content {
  margin-left: 30px;
}

h2 {
  color: white;
}

p {
  color: #ccc;
}
.card-img-top{
width: 270px;
}

</style>