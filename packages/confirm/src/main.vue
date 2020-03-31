<template>
    <transition name="bounce">
      <div class="bingo-confirm" v-if="visible">
        <div class="bg"></div>
        <div class="bingo-container" :style="{width: width}">
          <div class="header">
            {{title}}
            <i @click="close" class="icon-remove icon-large bingo-close-btn" v-if="closeVisible"></i>
          </div>
          <div class="content">
            <p>{{contentMessage}}</p>
          </div>
          <div class="bingo-footer">
            <a href="javscript:void(0)" @click="confirm(fn, callback)" class="bingo-btn make-sure">{{confirmMessage}}</a>
            <a href="javscript:void(0)" class="bingo-btn cancel">{{cancelMessage}}</a>
          </div>
        </div>
      </div>
    </transition>
  </template>

<script type="text/javascript">
export default {
  name: "bingo-confirm",
  props: {
    width: {
      type: String,
      default: "260px"
    },
    title: {
      type: String,
      default: "标题"
    },
    contentMessage: {
      type: String,
      default: "内容"
    },
    confirmMessage: {
      type: String,
      default: "确定"
    },
    cancelMessage: {
      type: String,
      default: "取消"
    },
    closeVisible: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      visible: false,
      fn: function () {
        return Promise.resolve();
      },
      callback: function () {
        alert("默认函数起2作用了！");
      }
    };
  },
  methods: {
    close () {
      this.$emit("update:visible", false);
    },
    confirm (fn, callback) {
      this.visible = false;
      return new Promise(function (resolve, reject) {
        fn()
          .then(function () {
            resolve();
          })
          .then(function () {
            callback();
          });
      });
    }
  }
};
</script>

  <style type="text/css">
    .bg{
      background: rgba(0,0,0,.5);
      position: fixed;
      left: 0;
      top:0;
      right: 0;
      bottom:0;
    }
    .bingo-container{
      position: fixed;
      top: 50%;
      left: 50%;
      background:#fff;
      z-index:10;
      transform: translate3d(-50%,-50%,0)

    }
  </style>
