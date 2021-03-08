<template>
    <mdb-row class="footer" style="text-align: center; margin-top: 15%">
      <mdb-col col="6" sm="4">
        <mdb-btn tag="a" floating class="btn-tw" icon="twitter" fab size="lg" href="https://twitter.com/0rla3" />
        <mdb-btn tag="a" floating class="btn-in" icon="linkedin" fab size="lg" href="https://linkedin.com/in/orlanfran" />
        <mdb-btn tag="a" floating class="btn-gt" icon="github" fab size="lg" href="https://github.com/orla11" />
      </mdb-col>
      <mdb-col col="6" sm="4" class="mt-3">
        <p>Copyright © Shorty, All Rights Reserved</p>
      </mdb-col>
      <mdb-col col="6" sm="4" class="mt-3">
        Made with&nbsp;&nbsp;<mdb-icon icon="mug-hot" class="amber-text" />&nbsp;&nbsp;by&nbsp;<a style="color:yellow;" href="orla.dev" target="_blank">orla.dev</a>
      </mdb-col>
    </mdb-row> 
</template>

<script>
  import {mdbRow, mdbCol, mdbBtn, mdbIcon} from 'mdbvue';
  export default {
    components: {
      mdbRow,
      mdbCol,
      mdbBtn,
      mdbIcon
    }
  }
</script>

<style>
    .btn-tw{
        background-color: #55ACEE !important;
    }

    .btn-in{
        background-color: #0e76a8 !important;
    }

    .btn-gt {
        background-color: grey !important;
    }
</style>