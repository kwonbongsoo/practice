<template>
  <div class="chat_list_container" :style="heightObj">
    <div class="add_chat"  @click="toastTest">
    <span>+ New message</span>
  </div>
  <!-- <div class="chat_list" @click="chatList_click(obj.otherName), eventSend(obj.chat_list_no)" v-for="(obj,index) in chatList"> -->
    <div class="chat_list" @click="chatList_click(obj.otherName), eventSend(obj.chat_list_no)" v-for="obj in chatList">
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
  <!-- <div ref="toast" id="snackbar">{{toast_message}}</div> -->
  <div ref="toast" :class="{'show' : toast_bool}" id="snackbar">{{toast_message}}</div>
 </div>
</template>

<script>
export default {
  name: 'chatList',
  data () {
    return {
      heightObj: {},
      // toast_el: '',
      toast_message: '아직 기능이 준비되지 않았어요',
      toast_bool: false,
      chatList: [
          {
            otherName:"임블리",
            chat_list_no: 1,
            lastMsg:"Awsome, I finished some team shots, You guys want see it?",
            lastTime: "11:21",
            profile_pic: 'https://cf.shop.s.zigzag.kr/images/imvely.jpg'
          },
          {
            otherName:"미아마스빈",
            chat_list_no: 2,
            lastMsg:"Haha that's was so funny Story hahaha",
            lastTime: "10:30",
            profile_pic: 'https://cf.shop.s.zigzag.kr/images/miamasvin.jpg'
          },
          {
            otherName:"모코블링",
            chat_list_no: 3,
            lastMsg:"vue js ㄹㅇ 개어렵네",
            lastTime: "09:21",
            profile_pic: 'https://cf.shop.s.zigzag.kr/images/mocobling.jpg'
          },
          {
            otherName:"데일리먼데이",
            chat_list_no: 4,
            lastMsg:"Haha that's was so funny Story hahaha",
            lastTime: "08:20",
            profile_pic: 'https://cf.shop.s.zigzag.kr/images/dailymonday.jpg'
          },
          {
            otherName:"파티수",
            chat_list_no: 5,
            lastMsg:"아니 이벤트버스형님들 너무 어렵네",
            lastTime: "Sat",
            profile_pic: 'https://cf.shop.s.zigzag.kr/images/hanaunni.jpg'
          },
          {
            otherName:"하나언니",
            chat_list_no: 6,
            lastMsg:"채팅채팅채팅채팅이야",
            lastTime: "Fri",
            profile_pic: 'https://cf.shop.s.zigzag.kr/images/66girls.jpg'
          },
          {
            otherName:"앞이안보여요",
            chat_list_no: 7,
            lastMsg:"눈이 떠지지 않네요",
            lastTime: "Mon",
            profile_pic: 'https://cf.shop.s.zigzag.kr/images/hotping.jpg'
          }
        ],
    }
  },
  created() {
    
    this.windowHeight = window.innerHeight - 70
    this.heightObj.maxHeight = this.windowHeight;
    this.heightObj.minHeight = this.windowHeight;
    this.heightObj.maxHeight += 'px'
    this.heightObj.minHeight += 'px'
  },
  mounted() {
    this.toast_el = this.$refs.toast
    this.$EventBus.$once('lastMsg_save', (last_msg)=> {
    })
  },
  methods: {
    chatList_click(name, list_no) {
      this.$emit('back_confirm', true);
      this.$emit('title_update', name);
      // this.$emit('list_no', list_no)
      this.$router.push('/chat');
    },
    eventSend(list_no) {
      this.$nextTick(()=> {
        this.$EventBus.$emit('list_no', list_no);
      })
    },
    toastTest() {
      // this.toast_el.className = 'show'
      // setTimeout(()=> { this.toast_el.className = this.toast_el.className.replace("show", ""); }, 3000);
      this.toast_bool = true
      setTimeout(()=> { this.toast_bool = false }, 3000);
    }
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
  padding-bottom: .5rem;
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


/* The snackbar - position it at the bottom and in the middle of the screen */
#snackbar {
    visibility: hidden; /* Hidden by default. Visible on click */
    min-width: 250px; /* Set a default minimum width */
    margin-left: -125px; /* Divide value of min-width by 2 */
    background-color: rgba(0, 0, 0, .8);
    color: #fff; /* White text color */
    text-align: center; /* Centered text */
    border-radius: 2px; /* Rounded borders */
    padding: 16px; /* Padding */
    position: fixed; /* Sit on top of the screen */
    z-index: 1; /* Add a z-index if needed */
    left: 50%; /* Center the snackbar */
    bottom: 30px; /* 30px from the bottom */
    font-size: 1rem;
    border-radius: 5px;
    font-weight: bold;
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar.show {
    visibility: visible; /* Show the snackbar */

/* Add animation: Take 0.5 seconds to fade in and out the snackbar. 
However, delay the fade out process for 2.5 seconds */
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
    from {bottom: 0; opacity: 0;} 
    to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
    from {bottom: 30px; opacity: 1;} 
    to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
}


</style>
