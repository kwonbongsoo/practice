<template>
<div  class="chat_container" >
    <div ref="height" class="msg_box" id="scroll_event" :style="heightObj">
        <div v-for="obj in msgData">
            <div v-if="obj.other" class="control_padding">
                <div class="chat_box_other">
                <div class="img_box">
                    <img :src=other_profile_pic>
                </div>
                <span>{{obj.msg}}</span>
                <div class="send_time">{{obj.time}}</div>
                </div>
            </div>
            <div v-else class="control_padding">
                <div class="full-width">
                    <div class="chat_box_me float_right">
                    <div class="img_box">
                        <img :src="my_profile_pic">
                    </div>
                    <span>{{obj.msg}}</span>
                    <div class="send_time">{{obj.time}}</div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="chat_write_div">
        <div class="chat_input_box">
            <input class="input_box" v-model="new_write_msg" @keyup.enter="sendMsg" placeholder="Type somethind to send...">
        </div>
        <div class="send_btn">
            <button type="button" class="gradeition" @click="sendBtn">보내기</button>
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
      otherSend: '',
      chat_list_no: '',
      other_profile_pic: false,
      my_profile_pic: false,
      chatWindow: '',
      user_name:'bongsoo',
      chatList: [
          {
              list_no: 1,
              other_profile: "https://cf.shop.s.zigzag.kr/images/imvely.jpg",
              chat_msg: [
                  {
                      msg: "Hey, How's it going this week?",
                      other: true,
                      time: "11:20"
                  },
                  {
                      msg: "Awsome, I finished some team shots, You guys want see it?",
                      other: false,
                      time: "11:21"
                  }
              ]
          },
          {
              list_no: 2,
              other_profile: "https://cf.shop.s.zigzag.kr/images/miamasvin.jpg",
              chat_msg: [
                  {
                      msg: "Haha that's was so funny Story hahaha",
                      other: true,
                      time: "10:30"
                  }
              ]
          },
          {
              list_no: 3,
              other_profile: "https://cf.shop.s.zigzag.kr/images/mocobling.jpg",
              chat_msg: [
                  {
                      msg: "vue js ㄹㅇ 개어렵네",
                      other: true,
                      time: "09:21"
                  }
              ]
          },
          {
              list_no: 4,
              other_profile: "https://cf.shop.s.zigzag.kr/images/dailymonday.jpg",
              chat_msg: [
                  {
                      msg: "샬라샬라블러블러",
                      other: false,
                      time: "08:18"
                  },
                  {
                      msg: "Haha that's was so funny Story hahaha",
                      other: true,
                      time: "08:20"
                  }
              ]
          },
          {
              list_no: 5,
              other_profile: "https://cf.shop.s.zigzag.kr/images/hanaunni.jpg",
              chat_msg: [
                  {
                      msg: "Hey, How's it going this week?",
                      other: true,
                      time: "Sat"
                  },
                  {
                      msg: "아니 이벤트버스형님들 너무 어렵네",
                      other: true,
                      time: "Sat"
                  }
              ]
          },
          {
              list_no: 6,
              other_profile: "https://cf.shop.s.zigzag.kr/images/66girls.jpg",
              chat_msg: [
                  {
                      msg: "채팅채팅채팅채팅이야",
                      other: true,
                      time: "Fri"
                  }
              ]
          },
          {
              list_no: 7,
              other_profile: "https://cf.shop.s.zigzag.kr/images/hotping.jpg",
              chat_msg: [
                  {
                      msg: "눈이 떠지지 않네요",
                      other: true,
                      time: "Mon"
                  },
                  {
                      msg: "예시에 보이지 않아요",
                      other: false,
                      time: "Mon"
                  }
              ]
          }
      ],//db에서 받아오는게 없어서 이런식으로 처리함
      msgData: false,
      write_msg: {
          msg:'',
          other: false,
          time:'',
      },
      last_msg: '',
      new_write_msg: '',
    }
  },
  created() {
    
    this.windowHeight = window.innerHeight - 140
    this.heightObj.maxHeight = this.windowHeight;
    this.heightObj.minHeight = this.windowHeight;
    this.heightObj.maxHeight += 'px'
    this.heightObj.minHeight += 'px'
    this.$EventBus.$once('list_no', (list_no) => {
        this.chat_list_no = list_no
        for(var i=0; i<this.chatList.length; i++) {
            if(list_no == this.chatList[i].list_no) {
                this.msgData = this.chatList[i].chat_msg
                this.other_profile_pic = this.chatList[i].other_profile
                break;
            }
        }
        this.my_profile_pic = require('../assets/img/me.png')
    })
  },
  mounted() {
      this.$EventBus.$once('back_click', ()=> {
          if(this.last_msg != '')
            this.$EventBus.$emit('lastMsg_save', this.last_msg)
      })//리스트 페이지에 마지막 메세지 업데이트 해주려 했는데. 페이지가 바뀌면 채팅페이지에 동적으로 쳤던 채팅이 날라가서 진행을 안함.
  },
  methods: {
      sendMsg() {
        this.chat_write()
      },
      sendBtn() {
        this.chat_write()
      },
      chat_write() {
         if(this.new_write_msg != '') {
            let date = new Date()
            let now = date.getHours()
            if(date.getMinutes() < 10)
                now +=  ':0'+ date.getMinutes()
            else
                now += ':'+date.getMinutes()
            
            this.write_msg.time = now
            this.write_msg.msg = this.new_write_msg
            this.msgData.push(this.write_msg)
            this.last_msg = this.write_msg

            if(!this.last_msg.other)
                this.last_msg.myname = this.user_name
            
            this.write_msg = {
                msg:'',
                other: false,
                time:'',
            }
            this.$nextTick(()=> {
                this.$refs.height.scrollTop = this.$refs.height.scrollHeight
            })
            
            this.new_write_msg = ''
         }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.msg_box {
    width: 100%;
    background-color: #ebeef1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
.chat_container {
    background-color: #ebeef1;
}

.chat_write_div {
    box-sizing: border-box;
    padding: 0.9rem;
    text-align: center;
    background-color: white;
    border-top: solid 1px #e1e1eb;
    width: 100%;
}
.input_box {
    outline: none;
    border: none;
    line-height: 30px;
    font-size: 1rem;
    color:black;
    width: 100%;
}
.chat_input_box, .send_btn {
    display: inline-block;
}
.chat_input_box {
    width: 78%;
    z-index: 10;
}
.gradeition {
    background: linear-gradient(to bottom, #72a6fe, #9183fe);
    outline: none;
    border: none;
    height: 40px;
    width: 100%;
    color: white;
    border-radius: 5px;
    /* font-size: 1.1rem; */
    font-weight: 400;
}
.send_btn {
    width: 20%;
}
.chat_container>.msg_box>div>.control_padding>.chat_box_other {
    background-color: white;
    max-width: 55%;
    padding: 1.5rem;
    border-radius: 5px;
    margin: 2rem 3rem;
    margin-bottom: 1rem;
    margin-right: 22%;
    position: relative;
    float: left;
}
.chat_container>.msg_box>div>.control_padding>.chat_box_other>span {
    font-size: 0.9rem;
    color:#88888d;
}
.chat_container>.msg_box>div>.control_padding>.chat_box_other>.send_time {
    position: absolute;
    font-size: 0.8rem;
    color:#c1c1c1;
    right: -45px;
    bottom: 5px;
}
.chat_container>.msg_box>div>.control_padding>.chat_box_other>.img_box {
    width: 60px;
    position:absolute;
    overflow: hidden;
    top:-30px;
    left: -35px;
    bottom: 5px;
}
.chat_container>.msg_box>div>.control_padding>.chat_box_other>.img_box>img {
    border-radius: 100px;
    width: 100%;
}

.chat_container>.msg_box>div>.control_padding>.full-width>.chat_box_me {
    background-color: white;
    max-width: 55%;
    min-width: 10%;
    padding: 1.5rem;
    border-radius: 5px;
    margin: 1.5rem 3rem;
    margin-bottom: 1rem;
    margin-left: 22%;
    position: relative;
}
.chat_container>.msg_box>div>.control_padding>.full-width>.chat_box_me>span {
    font-size: 0.9rem;
    color:#88888d;
}
.chat_container>.msg_box>div>.control_padding>.full-width>.chat_box_me>.send_time {
    position: absolute;
    font-size: 0.8rem;
    color:#c1c1c1;
    left: -45px;
}
.chat_container>.msg_box>div>.control_padding>.full-width>.chat_box_me>.img_box {
    width: 60px;
    position:absolute;
    overflow: hidden;
    top:-30px;
    right:-30px;
}
.chat_container>.msg_box>div>.control_padding>.full-width>.chat_box_me>.img_box>img {
    border-radius: 100px;
    width: 100%;
}
.control_padding {
    padding-top:2rem;
}
.float_right {
    float: right;
    text-align: left;
    display: block;
}
.full-width {
    width: 100%;
}

</style>
