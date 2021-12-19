/******************************************
*  src/components/Desktop2.vue
******************************************/

<template>
  <div class="container-center-horizontal">
    <div class="helloworld">
      <div class="overlap-group">
        <!--        <div class="highlighter">{{ highlighter }}</div>-->
        <img class="highlighter" :src="require(`@/assets/7a7c7ded113b44cb94c8392e2eb4be57.png`)"/>
        <form @submit.prevent="submitForm" class="form">
          <Loading :active="loading" />
          <div class="main">
            <h1 class="text-4">Highlight Image Generator</h1>
            <input v-model="youtube_link" type="link" class="searchlink" placeholder="Copy and paste link here" />
            <div class="flex-row">
              <div class="to">Start</div>
              <input type="text" class="time" placeholder="00:00" v-model="start_time"/>
              <div class="to">End</div>
              <div><input type="text" class="time" placeholder="00:00" v-model="end_time"/> </div>
            </div>
            <div class="flex-row">
              <input type="submit" class="submit-btn" value="Generate">
              <input type="button" v-if="this.generated==false" class="download-btn" value="Download" :disabled="true">
              <input type="button" v-else class="submit-btn" value="Download" @click="download">
            </div>
          </div>
        </form>
      </div>
      <div class="text-3">
          <span class="roboto-normal-black-30px">Highlight Image Generator</span>
        <pre></pre>
        <h1 class="roboto-normal-black-20px-2">Generate transcript-annotated screenshots for your favorite videos! <br>
          First, enter a YouTube link that you want to capture and desired time range.<br>
          Then, just click ‘Generate’ button to process video to images.<br>
          After processing finishes, click ‘Download’ button to download a .zip file of the captured images.</h1>
            <!--          ><span class="roboto-normal-black-20px-2">{{ spanText3 }}</span>-->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Loading from 'vue-loading-overlay';

export default {
  name: "App",
  data: function(){
    return {
      youtube_link: '',
      start_time: '',
      end_time: '',
      generated: false,
      loading: false,
      query: null,
    }
  },
  components:{
    Loading
  },

  methods: {
    submitForm: function (){

      var data = {
        youtube_link: this.youtube_link,
        start_time: this.start_time,
        end_time: this.end_time
      }
      console.log(data)
      this.loading = true
      var err = false
      axios.post('api/generator/', data).then(function(response){
            console.log(response);
            this.generated = true;
            this.loading = false;
          })
          .catch(function(error){
            console.log("BBB")
            console.log(error);
            alert('The face was not recognized. Please put another time section or another video.');
            console.log("CCC")
            err = true
          }).finally(()=>{
          if (err == true){
            this.$router.go(this.$router.currentRoute);
          }
      });
      this.query = this.youtube_link.slice(-5)
    },
    download: function (){
      axios({
        url:'api/downloader/?youtube_name='+ this.query + '/',
      method:'GET',
      responseType:'blob',}).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');

        fileLink.href = fileURL;
        fileLink.setAttribute('download', 'captured_images.zip');
        document.body.appendChild(fileLink);

        fileLink.click();
      })
          .catch(function(error){
            console.log(error);
          })
    },
  }
};
// const videoData = new FormData();
// videoData.append("youtube_link", this.youtube_link);
// videoData.append("start_time", this.start_time);
// videoData.append("end_time", this.end_time);

</script>

<style>
.helloworld {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 900px;
  width: 100%;
}

.overlap-group {

  background-color: var(--sunglow);

  min-height: 410px;
  padding: 15px 15px;
  width: 100%;
}

.main {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.flex-col {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 284px;
  position: relative;
  width: 1190px;
}

.highlighter {
  margin-left: 35px;
  width: 150px
}

.text-4 {
  text-align: center;
  color: var(--black-white);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-l2);
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0;
  margin-top: 82px;
  min-height: 90px;
  width: 1061px;
}

.flex-row {
  align-items: center;
  display: flex;
  height: 55px;
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 380px;
  position: relative;
}

.place {
  text-align: center;
  color: var(--black);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xl);
  font-weight: 400;
  font-style: normal;
  height: 28px;
  letter-spacing: 0;
  margin-bottom: 1px;
  width: 59px;
}
.time {
  background-color: var(--white);
  border-radius: 30px;
  box-shadow: 0px 4px 4px
  #00000040;
  margin-right: 30px;
  display: flex;
  height: 40px;
  width: 100px;
  border: 0;
  outline: 0;

//color: var(--delta);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0;
//margin-top: 1px;
  text-align: center;
}

.to {
  text-align: left;
  color: var(--white);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
  height: 26px;
  letter-spacing: 0;
  /*margin-right: auto;*/
  /*margin-left: auto;*/
//margin-top: 1px;
  width: 34px;
  z-index: 2;
  margin-right: 15px;
  margin-left: 20px;
}

.submit-btn {
  /*background-color: #FCB449;*/
  background-color: #e5f88f;
  background-size: 100% 100%;
  border-radius: 10px;
  height: 45px;
  width: 130px;
  border: 0;
  outline: 0;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;

  text-align: center;
  color: var(--black);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
}

.download-btn {
  /*background-color: #FCB449;*/
  background-color: #7a7c7c;
  background-size: 100% 100%;
  border-radius: 10px;
  height: 45px;
  width: 130px;
  border: 0;
  outline: 0;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;

  text-align: center;
  color: var(--black);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
}

.download-btn:disabled {
  background-color: #7a7c7c;
}

.text-2 {
  text-align: center;
  height: 46px;
  letter-spacing: 0;
  margin-top: 22px;
  width: 195px;
  color: var(--black);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
}

.flex-row-1 {
  align-items: center;
  display: flex;
  height: 62px;
  min-width: 342px;
  margin-right: 10px;
  margin-top: 46px;
  position: relative;
}

.text-3 {
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xl);
  font-weight: 400;
  font-style: normal;
  height: 125px;
  letter-spacing: 0;
  margin-right: 1px;
  margin-top: 53px;
  text-align: center;
  width: 70%;
  line-height: 30px;
}

.searchlink {
  /*align-self: center;*/
  background-color: var(--white);
  border-radius: 5px;
  display: flex;
  height: 50px;
  /*margin-left: 129px;*/
  margin-top: 1px;
  width: 669px;
  border: 0;
  outline: 0;
  letter-spacing: 0;
  text-align: center;
//color: var(--delta);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
}

.text-1 {
  text-align: center;
  height: 27px;
  letter-spacing: 0;
  margin-top: 18px;
  width: 404px;
  color: var(--delta);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
}

.content {
  width: 50%;
  text-align: center;
}


</style>