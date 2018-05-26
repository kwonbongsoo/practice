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
      this.$EventBus.$emit('back_click')
      // vue를 처음시작할 때 코드를 vuex가 있는 회사 코드로 시작해서 vuex없이 컴포넌트끼리 데이터 넘기는데 익숙하지 않았음.
      // 레퍼런스랑 사용법 찾아보고 자식컴포넌트에서 부모컴포넌트로 넘길때 emit 을 사용했었고, 형제 컴포넌트일 때 데이터 넘기는 방법을 찾다가
      // main.js에서 프로토 타입에 EventBus를 사용하는걸 보고 처리함 그래서 $emit 처리가 두가지로 나누어져 있음.
      this.is_back = false;
      this.title = "C H A T";
      this.$router.go(-1);
    },
    title_update(res) {
      this.title = res;
    },
    // list_no(res) {
    //   this.$EventBus.$emit('list_no', res)
    // }
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
  top:0;
  width: 100%;
  z-index: 10;
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
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
}
</style>
