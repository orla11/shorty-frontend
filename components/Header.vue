<template>
    <mdb-row class="header">
      <mdb-col col="2" sm="4">
      </mdb-col>
      <mdb-col col="8" sm="4">
        <h1 class="logo_title animated slideInDown">
          Shorty
        </h1>
      </mdb-col>
      <mdb-col col="2" sm="4">
      </mdb-col>
    </mdb-row> 
</template>

<script>
import {mdbRow, mdbCol} from 'mdbvue';
  export default {
    components: {
      mdbRow,
      mdbCol
    }
  }
</script>

<style scoped>
.header{
  margin-top: 5%;
  margin-bottom: 10%;
}

h1.logo_title {
  text-align: center;
  font-weight: 600 !important;
  font-size: 100px;
  font-family: cursive;
}
</style>