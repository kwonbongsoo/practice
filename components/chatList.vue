<template>
  <div class="chat_list_container">
    <div class="add_chat">
    <span>+ New message</span>
  </div>
  <div class="chat_list"  @click="chatList_click(obj.otherName)" v-for="(obj,index) in chatList">
    <div class="profile_div inline_block">
      <img :src="obj.profile_pic"/>
    </div>
    <div class="msg_div inline_block border">
      <div class="other_name">
        <span>{{obj.otherName}}</span>
      </div>
      <div class="last_msg">
        <div>{{obj.lastMsg}}</div>
      </div>
      <div class="last_time">
        <span>{{obj.lastTime}}</span>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
export default {
  name: 'chatList',
  data () {
    return {
      chatList: [
          {
            otherName:"임블리",
            lastMsg:"Hey, how it is going?",
            lastTime: "11:21",
            profile_pic: 'https://cf.shop.s.zigzag.kr/images/imvely.jpg'
          },
          {
            otherName:"미아마스빈",
            lastMsg:"Haha that's was so funny Story hahaha",
            lastTime: "10:30",
            profile_pic: 'https://cf.shop.s.zigzag.kr/images/miamasvin.jpg'
          },
          {
            otherName:"모코블링",
            lastMsg:"Haha that's was so funny Story hahaha",
            lastTime: "09:21",
            profile_pic: 'https://cf.shop.s.zigzag.kr/images/mocobling.jpg'
          },
          {
            otherName:"데일리먼데이",
            lastMsg:"Haha that's was so funny Story hahaha",
            lastTime: "08:20",
            profile_pic: 'https://cf.shop.s.zigzag.kr/images/dailymonday.jpg'
          },
          {
            otherName:"파티수",
            lastMsg:"Haha that's was so funny Story hahaha",
            lastTime: "Sat",
            profile_pic: 'https://cf.shop.s.zigzag.kr/images/hanaunni.jpg'
          },
          {
            otherName:"하나언니",
            lastMsg:"Haha that's was so funny Story hahaha",
            lastTime: "Fri",
            profile_pic: 'https://cf.shop.s.zigzag.kr/images/66girls.jpg'
          },
          {
            otherName:"앞이안보여요",
            lastMsg:"눈이 떠지지 않네요",
            lastTime: "Mon",
            profile_pic: 'https://cf.shop.s.zigzag.kr/images/hotping.jpg'
          },
          {
            otherName:"앞이안보여요",
            lastMsg:"눈이 떠지지 않네요",
            lastTime: "Mon",
            profile_pic: 'https://cf.shop.s.zigzag.kr/images/hotping.jpg'
          }
        ],
    }
  },
  methods: {
    chatList_click(name) {
      this.$emit('back_confirm', true);
      this.$emit('title_update', name);
      this.$router.push('/chat');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat_list_container {
  font-size: 0;
  overflow: auto;
}
.add_chat {
  background: linear-gradient(to right, #9183fe, #72a6fe);
  height: 70px;
  line-height: 70px;
  text-align: center;
}
.add_chat>span {
  color: white;
  letter-spacing: 2px;
  font-size: 1rem;
}
.chat_list>.profile_div {
  width: 20%;
}

.chat_list>.profile_div>img {
  width: 100%;
}
.inline_block {
  display: inline-block;
}
.chat_list>.msg_div {
  width: 80%;
}
.border {
  border-bottom: 1px solid #f3f3f3;
}
.chat_list>.msg_div>.other_name>span {
  margin: 5%;
  width: 55%;
  font-weight: bold;
  overflow: hidden; 
  white-space: nowrap;
  text-overflow: ellipsis;
}
.chat_list>.msg_div>.last_msg {
  margin-left: 6.5%;
  width: 83%;
  
}
.chat_list>.msg_div>.last_msg>div {
  font-size: 1rem;
  color:#b8b7ba;
  overflow: hidden; 
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-bottom: .6rem;
}
.other_name>span {
  font-size: 1.1rem;
  position:absolute;
  top:0;
}
.chat_list>.msg_div>.last_time {
  position:absolute;
  top: 15%;
  right: 5%;
  box-sizing: border-box;
}
.last_time>span {
  font-size: 0.8rem;
  color:#cccccc;
}
.chat_list {
  position: relative;
  box-sizing: border-box;
  margin-top: -1px;
}
.msg_div {
  height: 100%;
}


</style>
