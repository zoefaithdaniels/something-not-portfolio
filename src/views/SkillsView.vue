<!-- <template>
    <div class="background">
    <div class="projects">
      <h2>My Projects</h2>
      <div class="container">
        <div class="card" v-for="item in projects" :key="item.name">
          <div class="card-inner">
            <h4>{{ item.name }}</h4>
            <img :src="item.img" alt="Avatar"/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
    export default {
        projects: "exam-cards",
        data(){
            return{

                projects : [
                    {
                        name: 'HTML',
                        img: 'https://i.postimg.cc/fTVwM47B/Screenshot-2023-07-05-093000.png',
                    },
                    {
                        name: 'CSS',
                        img: 'https://i.postimg.cc/T2SzqKmJ/Screenshot-2023-07-05-093010.png',
                    },
                    {
                        name: 'BOOTSTRAP',
                        img: 'https://i.postimg.cc/RVwnvnLP/Screenshot-2023-07-05-093018.png',
                    },
                    {
                        name: 'JAVASCRIPT',
                        img: 'https://i.postimg.cc/3NTnn0jd/Screenshot-2023-07-05-093042.png',
                    },
                    {
                        name: 'VUE JS',
                        img: 'https://i.postimg.cc/4dbz4Ltx/Screenshot-2023-07-05-093048.png',
                    },
                    {
                        name: 'NODE JS',
                        img: 'https://i.postimg.cc/J0zBr1Mp/Screenshot-2023-07-05-093054.png',
                    },
                    {
                        name: 'MYSQL',
                        img: 'https://i.postimg.cc/SxCjpXcy/Screenshot-2023-07-05-093114.png',
                    },
                    {
                        name: 'WORDPRESS',
                        img: 'https://i.postimg.cc/0rgxtfW7/Screenshot-2023-07-05-093102.png',
                    },
                    {
                        name: 'UI/UX',
                        img: 'https://i.postimg.cc/ZRB5VCYt/Screenshot-2023-07-05-093121.png',
                    },
                    {
                        name: 'PHP',
                        img: 'https://i.postimg.cc/5NPDNpqg/Screenshot-2023-07-05-093126.png',
                    },
                    {
                        name: 'SEO',
                        img: 'https://i.postimg.cc/L5Zdc1GR/Screenshot-2023-07-05-093152.png',
                    },
                    {
                        name: 'FIGMA',
                        img: 'https://i.postimg.cc/L8Qc8vRR/Screenshot-2023-07-05-093134.png',
                    },
                ]
           }
        }
        
    }
</script>

<style scoped>

.card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 100px;
    margin: 50px;
    padding-left: 30px;
    
    
}
.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.background{
    background-color: black;
    padding-top: 10px;
    min-height: 100vh;
}
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
</style> -->
<template>
    <div class="background">
      <div class="projects">
        <h2>My Projects</h2>
        <div class="container">
          <div class="card" v-for="item in projects" :key="item.name">
            <div class="card-inner">
              <h4>{{ item.name }}</h4>
              <img :src="item.img" alt="Avatar" class="project-img" />
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
        projects: [
        {
                        name: 'HTML',
                        img: "https://img.icons8.com/color/480/html-5--v1.png",
                    },
                    {
                        name: 'CSS',
                        img: "https://img.icons8.com/color/480/css3.png",
                    },
                    {
                        name: 'BOOTSTRAP',
                        img: 'https://img.icons8.com/color/480/bootstrap.png',
                    },
                    {
                        name: 'JAVASCRIPT',
                        img: "https://img.icons8.com/color/480/javascript--v1.png",
                    },
                    {
                        name: 'VUE JS',
                        img: "https://img.icons8.com/color/480/vue-js.png",
                    },
                    {
                        name: 'NODE JS',
                        img: 'https://i.postimg.cc/J0zBr1Mp/Screenshot-2023-07-05-093054.png',
                    },
                    {
                        name: 'MYSQL',
                        img: 'https://i.postimg.cc/SxCjpXcy/Screenshot-2023-07-05-093114.png',
                    },
                    {
                        name: 'WORDPRESS',
                        img: 'https://i.postimg.cc/0rgxtfW7/Screenshot-2023-07-05-093102.png',
                    },
                    {
                        name: 'UI/UX',
                        img: 'https://i.postimg.cc/ZRB5VCYt/Screenshot-2023-07-05-093121.png',
                    },
                    {
                        name: 'PHP',
                        img: 'https://i.postimg.cc/5NPDNpqg/Screenshot-2023-07-05-093126.png',
                    },
                    {
                        name: 'SEO',
                        img: 'https://i.postimg.cc/L5Zdc1GR/Screenshot-2023-07-05-093152.png',
                    },
                    {
                        name: 'FIGMA',
                        img: 'https://i.postimg.cc/L8Qc8vRR/Screenshot-2023-07-05-093134.png',
                    },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 100px;
    margin: 50px;
    padding-left: 30px;
  }
  
  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .background {
    background-color: black;
    padding-top: 10px;
    min-height: 100vh;
  }
  
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    justify-items: center; /* Center cards horizontally */
  }
  
  .project-img {
    height: 100%; /* Set image height to 100% of the parent container */
  }
  </style>