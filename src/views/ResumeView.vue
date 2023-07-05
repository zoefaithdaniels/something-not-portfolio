<template>
  <div class="background">
  <section id="resume" class="body2">
    <h3 style="color:#ffffff;
    text-align: center;
        margin-top: 2rem;
        text-shadow: 0.5px 0.5px black;">
      Education & Experience
    </h3>
    <ul class="timeline" style="margin-top: 2rem;
        text-shadow: 0.2px 0.5px rgb(0, 0, 0);
        margin-left: 0.5rem;
        margin-right: 0.5,
      ">
      <li class="timeline" v-for="details in resume">
        <div class="timeline-badge"><i :class="details.badge"></i></div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <img :src="details.img" class="card-img-top" alt="...">
            <h4 class="timeline-title">{{ details.name }}</h4>
            <h4 class="timeline-title"><i class="fas fa-university"></i>{{ details.place }}</h4>

            <p>
              <small style="color: rgb(27, 25, 25)"><i class="fa fa-calendar"></i> {{ details.period }}</small>
            </p>
          </div>
          <div class="timeline-body">
            <p>
              {{ details.description }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</div>
</template>

<script>
export default {
  resume: "resume",
  data() {
    return {
      resume: [
        {
          name: 'High School',
          img:'https://i.postimg.cc/bJ0fzSRh/elsie-high-removebg-preview.png',
          place: 'Life Choices Coding Academy',
          period: ' September 2022 – Present',
          badge: 'fa fa-code',
          description: "This bootcamp has introduced me to html, css, bootstrap, javascript and vue.js. I've had the opportunity to design and create webpages (such as this one)."
        },
        {
          name: 'Volunteer',
          img:'https://i.postimg.cc/RZ8Wt2x0/blac-removebg-preview.png',
          place: ' Blue Apple Real Estate School',
          period: 'September 2021 – March 2022',
          badge: 'fas fa-pen',
          description: "Duties-Setting up examination questions. Proof reading examinations. Programmes used-Google Excel Sheets. Google Docs. Freelancer.com"
        },
        {
          name: 'Volunteer',
          img:'https://i.postimg.cc/VkR8QCDP/0o0k0-removebg-preview.png',
          place: "The University of the Western Cape",
          period: ' 2018 – 2021',
          badge: 'fas fa-graduation-cap',
          description: "Four years worth of practical laboratory experience, research, scientific report writing, high accuracy measurements and data analysis"
        },
        {
          name: 'Learning Journey',
          img:'https://i.postimg.cc/zBC0LnMx/life-choices-2.png',
          place: "The University of the Western Cape",
          period: 'February 2021 – November 2021',
          badge: 'fas fa-atom',
          description: "Duties- Tutoring first year chemical science students. Marking weekly assignments. Tutoring assigned group. Skills- Communication and collaboration. Leadership. Team building. Conflict Resolution"
        },
        {
          name: 'Learning Journey',
          img:'https://i.postimg.cc/5yvY93Rt/Screenshot-2023-05-17-115326.png',
          place: "The University of the Western Cape",
          period: 'February 2021 – November 2021',
          badge: 'fas fa-atom',
          description: "Duties- Tutoring first year chemical science students. Marking weekly assignments. Tutoring assigned group. Skills- Communication and collaboration. Leadership. Team building. Conflict Resolution"
        },
        {
          name: 'Lecturers Assistant',
          img:'https://i.postimg.cc/Bb1ZcnT7/lca.jpg',
          place: "The University of the Western Cape",
          period: 'February 2021 – November 2021',
          badge: 'fas fa-atom',
          description: "Duties- Tutoring first year chemical science students. Marking weekly assignments. Tutoring assigned group. Skills- Communication and collaboration. Leadership. Team building. Conflict Resolution"
        }

      ]
    }
  }
}
</script>

<style>

.background{
  background-color: black;
  /* height: 100px;
  min-height: 70vh; */
  padding-top: 2px;
}
.card-img-top{
  width: 150px;
}
 
.timeline {
  list-style: none;
  padding: 20px 0 20px;
  position: relative;
  color: black;
  /* margin-right: auto; */
}

.timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 3px;
  background-color: #ffffff;
  left: 80%;
  /* left: 50%; */
}

.timeline>li {
  margin-bottom: 20px;
  position: relative;
}

.timeline>li:before,
.timeline>li:after {
  display: table;
}

.timeline>li:after {
  clear: both;
}

.timeline>li:before,
.timeline>li:after {
  content: " ";
  display: table;
}

.timeline>li:after {
  clear: both;
}

.timeline>li>.timeline-panel {
  width: 60%;
  float: right;
  margin-right: 23%;
  border: 1px solid #d4d4d4;
  border-radius: 25px;
  background-color: rgb(248, 242, 242, 0.8);
  padding: 20px;
  position: relative;
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.175);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
}

/* The circle on the timeline */
.timeline>li>.timeline-badge {
  color: rgb(0, 0, 0);
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 1.4em;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 80%;
  margin-left: -25px;
  background-color: #999999;
  z-index: 100;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
}

.timeline-badge {
  background-color: crimson !important;
}

.timeline-title {
  margin-top: 0;
  color: black;
}

.timeline-body>p,
.timeline-body>ul {
  margin-bottom: 0;
}

.timeline-body>p+p {
  margin-top: 5px;
}
</style>