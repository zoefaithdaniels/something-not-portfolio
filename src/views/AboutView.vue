<template>
  <div class="about">
  <!-- <div id="about"> -->
       <div class="row">
        <div class="about-col-1" style="margin-top:20px;">
        <img src="https://i.postimg.cc/Nfqny9Zy/IMG-20221103-161223.jpg"> 
        </div>
        <div class="about-col-2">
          <h1 class="sub-title">About Me</h1>
          <p>
            I am 19 years old, I live in Bishop Lavis and I am a very ambitious young lady.
              I love trying new things and discover new hidden talents that might have to learn more and too broaden my knowledge. I am a hard working person and always find ways to better myself and always up for new challenges.
              In my free time I spend time with family and reading aswell as watching sports on a regular.I am 19 years old, I live in Bishop Lavis and I am a very ambitious young lady.
          </p> 

          
          <div class="row">
                  <div class="col-lg-6">
                      <ul>
                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><strong>Birthday:</strong>16 October 2003</li>
                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><strong>Phone:</strong>+27 84  755 3693</li>
                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><strong>City:</strong>Cape Town,Bishop Lavis</li>
                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><strong>Nationality:</strong>South African</li>
                      </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li><i class="fa fa-angle-right" aria-hidden="true"></i><strong>Age:</strong>19 Years Old</li>
                      <li><i class="fa fa-angle-right" aria-hidden="true"></i><strong>Matric:</strong>Higher Certificate</li>
                      <li><i class="fa fa-angle-right" aria-hidden="true"></i><strong>Gender:</strong>Female</li>
                      <li><i class="fa fa-angle-right" aria-hidden="true"></i><strong>Email:</strong>zoedaniels094@gmail.com</li>
                    </ul>
                  </div>
              </div>





      </div>
  </div> 
</div>
</template> 
<script>
  export default {
      
  }
</script>

<style scoped>
.about{
  padding: 80px;
  background-color: black;
  overflow: hidden;
  height: 50px;
  min-height: 60vh;

 }


  .row{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: large;
  
 } 

  .about-col-1{
  flex-basis: 35%;
  margin-bottom: 30px;
  padding: 10px;
  font-size: medium;
  


 }
 .about-col-1 img{
   width: 100%;
   background-color: black; 
   padding-right: 20px;
   padding-top: 20px;
   padding-bottom: 20px;
   margin-top: -95px;
    
 } 
  .about-col-2{
 flex-basis: 60%;
} 
</style>

