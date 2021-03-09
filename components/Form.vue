<template>
    <mdb-row class="animated zoomIn">
      <mdb-col>
        <mdb-alert v-if="fetchingError" color="danger">{{ fetchingErrorMessage }}</mdb-alert>
        <mdb-alert v-if="fetchingResult" @closeAlert="fetchingResult=null" color="success" dismiss>
          Here's your shortened url: 
          <a style="text-decoration: underline;" target="_blank" :href="fetchingResult.shortUrl" class="alert-link">
            {{ fetchingResult.shortUrl }}
            </a>
        </mdb-alert>
        <br><br>
        <mdb-input v-if="!isShortening" v-model="inputUrl" label="Input url to be shortened" type="text" class="active-cyan active-cyan-2 mt-0 mb-3 input-url"/>
        <Loader v-if="isShortening" />
        <div v-if="!isShortening" style="text-align:center;">
          <mdb-btn @click="shorten" gradient="blue" size="bg" type="submit" style="width: 50%; font-size: 20px; font-family: 'Circular-Loom'" class="mr-auto">Short it!</mdb-btn>
        </div>
      </mdb-col>
    </mdb-row>
</template>

<script>
  import {mdbRow, mdbCol, mdbInput, mdbBtn, mdbFormInline, mdbAlert} from 'mdbvue';

  export default {
    data() {
        return {
            inputUrl: "",
            isShortening: false,
            fetchingError: false,
            fetchingErrorMessage: "",
            fetchingResult: null
        }
    },
    methods: {
        async shorten({$axios}) {
            if(this.isValidUrl(this.inputUrl)){
              console.log("hello")
              this.isShortening = true;
              try {
                this.fetchingResult = await $axios.$post("/", {
                  originalUrl: this.inputUrl
                });
              }catch(error){
                this.fetchingError = true;
                this.fetchingErrorMessage = error.response.data;
              }
              this.isShortening = false;
            }
        },
        isValidUrl(url) {
          const pattern = new RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig);
          return pattern.test(url);
        }
    },
    components: {
      mdbRow,
      mdbCol,
      mdbInput,
      mdbBtn,
      mdbFormInline,
      mdbAlert
    }
  }
</script>

<style>
    input {
        color: #eee !important;
        border-bottom: 1px solid cyan !important;
    }

    .md-form>label {
    color: #eee !important;
    font-size: 18px;
    text-align: center;
    }
</style>