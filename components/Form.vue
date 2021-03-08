<template>
    <mdb-row class="animated zoomIn">
      <mdb-col>
        <mdb-input v-model="inputUrl" label="Input url to be shortened" type="text" class="active-cyan active-cyan-2 mt-0 mb-3 input-url"/>
        <div style="text-align:center;">
          <mdb-btn @click="shorten" gradient="blue" size="bg" type="submit" style="width: 50%; font-size: 20px; font-family: 'Circular-Loom'" class="mr-auto">Short it!</mdb-btn>
        </div>
      </mdb-col>
    </mdb-row>
</template>

<script>
import {mdbRow, mdbCol, mdbInput, mdbBtn, mdbFormInline} from 'mdbvue';
  export default {
    data() {
        return {
            inputUrl: ""
        }
    },
    methods: {
        shorten() {
            alert(this.inputUrl);
        }
    },
    components: {
      mdbRow,
      mdbCol,
      mdbInput,
      mdbBtn,
      mdbFormInline,
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