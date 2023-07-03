<template>
    <div class="background">
      <!-- <div class="projects">
        <h2>My Projects</h2>
        <div class="container" style="display:inline-block;">
            <div class="row justify-content-center cols-3">
                <div class="card" style="background-color: crimson;border:solid; border-color:black;" v-for="item in projects">
                    <div class="card-inner">
                            <h4>{{ item.name }}</h4>
                            <img
                            :src="item.img"
                            alt="Avatar"
                            style="width: 75%; height: 55%; border: solid; border-color: black;"/>
                            <a :href="item.Netlify"><i class="fa-brands fa-github"></i> Netlify</a>
                            <a :href="item.github"><i class="fa-regular fa-globe"></i> Github</a>
                    </div>
                </div>
            </div>
        </div>
       
     </div> -->
    
  <div class="background">
    <div class="projects">
      <h2>My Projects</h2>
      <div class="container">
        <div class="card" v-for="item in projects" :key="item.name">
          <div class="card-inner">
            <h4>{{ item.name }}</h4>
            <!-- <img :src="item.img" alt="Avatar" />
            <a :href="item.Netlify"><i class="fa-brands fa-github"></i> Netlify</a>
            <a :href="item.github"><i class="fa-regular fa-globe"></i> Github</a> -->
          </div>
        </div>/
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
                        name: 'First Portfolio',
                        img: 'https://i.postimg.cc/263z62Wg/first-potfiolio.png',
                        Netlify:'https://zoepersonalportfolio.netlify.app/',
                        github:'https://github.com/zoefaithdaniels/personal-portfolio-2.0.git'
                    },
                    {
                        name: 'Netflix',
                        img: 'https://i.postimg.cc/cJCqM6Jn/Pandemie-Netflix-Serie-schwankt-zwischen-Panikmache-und-Aufkl-rung-Kritik.jpg',
                        Netlify:'',
                        github:'https://github.com/zoefaithdaniels/netflix.git',
                    

                    },
                    {
                        name: 'Calculator',
                        img: 'https://i.postimg.cc/yY8DRyH6/zoes-cal.png',
                        Netlify:' https://zoe-calculator.netlify.app/',
                        github:'https://github.com/zoefaithdaniels/calculator.git'
                    },
                    {
                        name: 'Ecommerce website',
                        img: 'https://i.postimg.cc/q75wfvxy/bookstore.png',
                        Netlify:'https://endofmoduleproject.netlify.app/',
                        github:'https://github.com/zoefaithdaniels/JavaScript-end-of-module-project.git'
                    },
                    {
                        name: 'First product cards',
                        img: 'https://i.postimg.cc/RSyDY4dw/products-cards.png',
                        Netlify:'https://endofmoduleproject.netlify.app/',
                        github:'https://github.com/zoefaithdaniels/JavaScript-end-of-module-project.git'
                    },
                    {
                        name: 'My hover cards',
                        img: 'https://i.postimg.cc/BJvZ0zw7/hover-cards.png',
                        Netlify:'https://zoepersonalportfolio.netlify.app/',
                        github:'https://github.com/zoefaithdaniels/personal-portfolio-2.0.git'
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
    perspective: 1000px;
    margin: 20px;
    
    
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
    /* height: 100px; */
    padding-top: 10px;
    min-height: 100vh;
}
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}




</style>
