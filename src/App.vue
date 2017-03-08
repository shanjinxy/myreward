<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <div class="titleText">
          <i class="icon iconfont icon-xiangzuojiantou arrowLeft"></i>
          <span class="titleWord">赞赏 作者 {{AuthorName}}</span>
        </div>
      </header>
      <div class="avatarBox " ref="menuWrapper">
        <ul class="clearfix">
          <li class="avatarItems" v-for="avatarList in TipperPortraits">
            <img v-if="avatarList" :src="avatarList" alt="">
          </li>
        </ul>
      </div>
      <div class="rewardPeople">
        共
        <span>{{tipCount}}</span>赞赏
        <i class="con iconfont icon-xiangyoujiantou"></i>
      </div>
      <div class="mainAvatar">
        <img :src="tipper.AuthorPortrait" width="100" height="100" @click="myTip()">
      </div>
      <div class="pricebox">
        <ul class="clearfix " id="listbox">
          <li class="priceitem " v-for="priceList in priceLists" @click="selected(priceList)"
              :class="{active:activeName ==priceList}">
            <span>{{priceList}}元</span>
          </li>
        </ul>
      </div>
      <div class="buttonBox">
        <button id="supportAuthor" @click="openPop()">打 赏</button>
      </div>
      <footer>
        <p>* 请确保您的余额充足，充值请至首页左上角</p>
        <p>--我的主页-我的钱包 进行充值</p>
        <div class="logo">
          <img src="../static/images/footer-0.png" alt="">
        </div>
      </footer>
      <div class="bulletinWrapper" v-show="popShow" @click="closePop()">
        <div class="popimg">
          <div class="popbox">
            <p class="title">{{unloginMessage}}</p>
            <p class="text">{{unloginText}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {getCookie} from "./utils"
  import {getMessageId} from './utils.js'
  import BScroll from 'better-scroll'
  import {authorTip} from "./api"
  export default {
    data() {
      return {
        menuWrapperX: 0,
        AuthorName: '',
        TipperPortraits: [
          '',
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "",
          '',
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "",
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "",
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg",
          "http://baoimage.wallstreetcn.com/user_250702_1479280948.jpg"
        ],
        priceLists: ['5.8', '8.8', '18.8', '28.8', '58.8', '88.8'],
        activeName: '',
        unloginText: ' 请至 首页左上角-我的主页-登陆并充值才可以给作者打赏哦',
        popShow: false,
        unloginMessage: '您还未注册登陆',
        tipCount: '',
        messageid: 123,
        tipper: {},
        token: ''
      }
    },
    created() {
      axios.get('/api/premium/authorTips', {
        params: {
          messageid: this.messageid
        }
      })
        .then((res) => {
          console.log(res.data)
          this.tipper = res.data
          this.tipCount = res.data.TipCount
          this.AuthorName = res.data.AuthorName
          this.TipperPortraits = res.data.TipperPortraits.slice(0, 10)
//          this.TipperPortraits = this.TipperPortraits.slice(0.10)
          this.$nextTick(() => {
            this._initScroll(); // 初始化scroll
          })
        });
    },
    methods: {
      _initScroll() {
        this.menuWrapper = new BScroll(this.$refs.menuWrapper, {
          scrollX: true,
          click: true,
          startX: 0,
          startY: 0,
          momentum: true,
          snap: true
        });
        this.menuWrapper.on('scroll', (pos) => {
          this.menuWrapperX = Math.abs(Math.round(pos.x))
        })
      },
      selected: function (priceList) {
        this.activeName = priceList
        ga('send', 'event', {
          eventCategory: '打赏金额' + priceList,
          eventAction: 'click',
          eventLabel: '打赏活动'
        })
      },
      // 点击显示当前选中的值
      showValue() {
        console.log('111')
      },
      openPop() {
        ga('send', 'event', {
          eventCategory: '打赏按钮点击',
          eventAction: 'click',
          eventLabel: '打赏活动'
        })
        const TipAmount = this.activeName
        if (!TipAmount) {
          alert("请选择要打赏的金额");
          return false
        }
        this.token = getCookie("X-Appgo-Token") || ''
        axios.post('/api/premium/authorTip', {
          params: {
            "MessageId": this.MessageId,
            "TipAmount": TipAmount
          },
          headers: {
            'X-Appgo-Token': this.token,
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          console.log(res.data)
          if (res.data.errcode === 40100) {
            this.unloginMessage = "您还未注册登录"
            this.unloginText = "请至 首页左上角-我的主页-登陆并充值才可以给作者打赏哦"
            this.popShow = true
          }
          if (res.data.errcode === 40001) {
            this.unloginMessage = "您的余额不足"
            this.unloginText = "请至 首页左上角-我的主页-我的钱包进行充值"
            this.popShow = true
          }
          if (res.data.errcode === 50000) {
            this.unloginMessage = "打赏失败"
            this.unloginText = " "
            this.popShow = true
          }
          if (res.data.TipId) {
            this.unloginMessage = "打赏成功"
            this.unloginText = this.AuthorName + "老师已经收到您的打赏，感谢支持！"
            this.popShow = true
          }
        })
      },
      closePop() {
        this.popShow = false
        this.activeName = ''
      },
      myTip() {
        this.cookie = getCookie('USERID') || '';
        console.log(this.cookie);
      }
    },
    watcher: {
      messageid() {
        const url = window.location.pathname;
        return getMessageId(url) || ' '
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body, html
    width: 100%
    height: 100%
    min-height: 100%
    overflow-x hidden

  html
    font-size 100px

  @media screen and (min-width: 320px) {
    html {
      font-size: 75px;
    }
  }

  @media screen and (min-width: 375px) {
    html {
      font-size: 100px;
    }
  }

  @media screen and (min-width: 768px) {
    html {
      font-size: 140px;
    }
  }

  #app
    width 100%
    height 100%
    .wrapper
      width: 100%
      height 100%
      font-size .14rem
      max-width 750px
      margin 0 auto
      text-align center
      background url('../static/images/bg.jpg')
      background-size 100% 100%
      header
        position relative
        padding .2rem 2%
        text-align center
        font-size .16rem
        color: #fff
        .arrowLeft
          position: absolute
          font-weight 700
          font-size .2rem
          left: .08rem
        .titleWord
          font-weight 200
          font-size .16rem
      .avatarBox
        width 80%
        min-height 50px
        margin .2rem auto
        overflow hidden
        text-overflow: ellipsis
        ul
          width 500%
          .avatarItems
            width 0.5rem
            height .5rem
            float left
            margin-left 10px
            margin-top 5px
            background: url("../static/images/defaultAvatar.png")
            background-size 100% 100%
            border-radius 50%
            img
              width 0.5rem
              height .5rem
              border-radius 50%
      .rewardPeople
        padding 0.2rem
        font-size .16rem
        font-weight 200
        color white
      .mainAvatar
        img
          border-radius 50%
          display block
          margin 0 auto
      .pricebox
        padding-top .2rem
        & > ul > li
          box-sizing border-box
          list-style none
          float left
          width 33%
          height 50%
          margin-top 10px
          text-align center
          padding 0 3%
          span
            border: 1px solid rgb(245, 103, 102)
            border-radius: 10px
            display: block
            text-decoration: none
            color: rgb(245, 103, 102)
            padding: 8px
          &.active span
            color: black
            border-color: black
      .buttonBox
        margin-top 20px
        button
          width 1.2rem
          height .36rem
          background-color: rgb(245, 103, 102)
          margin: 0 auto
          color: #fff
          font-size: 16px
          border-radius: 5px
          border: none
    /*footer*/
    footer
      text-align: center
      padding-top: .3rem
      color: rgb(245, 103, 102)
      font-size: .16rem
      line-height: 1.8
      .logo
        padding: .5rem 37% .1rem 37%
        img
          width: 100%;
          margin: 0 auto;
    .bulletinWrapper
      position fixed
      width 100%
      height 100%
      /*background-color #7e8c8d*/
      top: 0
      left: 0
      z-index 9
      .popimg
        width 100%
        height 50%
        background url(../static/images/pop.png)
        background-size 100% 100%
        position absolute
        top: 50%
        font-size .16rem
        transform translateY(-50%)
        .popbox
          padding: 30% 20%
          color: #A13103
          .text
            margin-top 20px
            line-height 1.2

</style>
