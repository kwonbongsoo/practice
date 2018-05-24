<template>
  <div id="app">
    <div class="header">
      <div v-if="is_back" class="back_btn" @click="backClick">
        <span>뒤로</span>
      </div>
      <div class="header_title">{{title}}</div>
    </div>
    <router-view v-on:back_confirm="back_confirm" v-on:title_update="title_update"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      is_back: false,
      title: 'C H A T',
    }
  },
  methods: {
    back_confirm(res) {
      this.is_back = res;
    },
    backClick() {
      this.is_back = false;
      this.title = "C H A T";
      this.$router.go(-1);
    },
    title_update(res) {
      this.title = res;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.header {
  background-color: #3e3f4e;
  height: 70px;
  text-align: center;
  position: relative;
}
.header>.back_btn {
  position:absolute;
  color: #9e9fa6;
  font-weight: 600;
  top:23px;
  margin-left: 15px;
}
.header>.header_title {
  color: #cdcdd2;
  line-height: 70px;
  font-weight: 600;
  font-size: 1.1rem;
}
body {
  margin: 0;
  overflow: auto;
width: 100%;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
}
</style>
