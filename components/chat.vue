<template>
<div  class="chat_container">
    <div ref="height" class="msg_box" :style="heightObj">
        121
    </div>
    <div class="chat_write_div">
        <div class="chat_input_box">
            <input class="input_box" placeholder="Type somethind to send...">
        </div>
        <div class="send_btn">
            <button type="button" class="gradeition">보내기</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'chat',
  data () {
    return {
      windowHeight: 0,
      heightObj: {},
    }
  },
  created() {
    this.windowHeight = window.innerHeight - 140
    this.heightObj.maxHeight = this.windowHeight;
    this.heightObj.height = this.windowHeight;
    this.heightObj.maxHeight += 'px'
    this.heightObj.height += 'px'
  },
  mounted() {
    
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.msg_box {
    background-color: #ebeef1;
    border-bottom: solid 1px #e1e1eb;
    overflow: hidden;
}
.chat_write_div {
    /* width: 100%; */
    padding: 0.9rem;
    text-align: center;
}
.input_box {
    outline: none;
    border: none;
    line-height: 30px;
    font-size: 1rem;
    color:black;
}
.chat_input_box, .send_btn {
    display: inline-block;
}
.chat_input_box {
    width: 78%;
}
.gradeition {
    background: linear-gradient(to bottom, #72a6fe, #9183fe);
    outline: none;
    border: none;
    height: 40px;
    width: 100%;
    color: white;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: 400;
}
.send_btn {
    width: 20%;
}
</style>
