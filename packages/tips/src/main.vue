<template>
    <div v-if="isShow" id="bingo_tool_tip" class="bingo-tool-tip" :class="{'left': direction === 'left', 'right': direction === 'right', 'top': direction === 'top', 'bottom': direction === 'bottom'}" :style="{'background-color': background, 'color': color, 'top': top, 'left': left}">
      {{content}}
      <div class="arrow" :style="arrowStyleObject"></div>
    </div>
  </template>

  <script type="text/javascript">
    export default {
      name: 'bingoToolTip',
      data () {
        return {
          isShow: true,
          time: 3000,
          content: '',
          direction: 'right',
          background: 'red',
          color: '#fff',
          arrowStyleObject: ''
        }
      },
      beforeMount () {
        let node = document.querySelector('#bingo_tool_tip')
        if (node && node.parentNode) {
          node.parentNode.removeChild(node)
        }
      },
      computed: {
        top () {
          switch (this.direction) {
            case 'top':
              return (this.rect.top - 12) + 'px'
            case 'bottom':
              return (this.rect.top + 12) + 'px'
            case 'left':
              return (this.rect.top + this.rect.height / 2) + 'px'
            case 'right':
              return (this.rect.top + this.rect.height / 2) + 'px'
          }
        },
        left () {
          switch (this.direction) {
            case 'top':
              return (this.rect.left + this.rect.width / 2) + 'px'
            case 'bottom':
              return (this.rect.left + this.rect.width / 2) + 'px'
            case 'left':
              return (this.rect.left - 12) + 'px'
            case 'right':
              return (this.rect.left + this.rect.width + 12) + 'px'
          }
        }
      },
      mounted () {
        this.initColor()
        this.hidden()
      },
      methods: {
        initColor () {
          switch (this.direction.toLowerCase()) {
            case 'left':
              this.arrowStyleObject = {
                borderLeftColor: this.background
              }
              break;
            case 'right':
              this.arrowStyleObject = {
                borderRightColor: this.background
              }
              break;
            case 'top':
              this.arrowStyleObject = {
                borderTopColor: this.background
              }
              break;
            case 'bottom':
              this.arrowStyleObject = {
                borderBottomColor: this.background
              }
              break;
          }

        },
        hidden () {
          let that = this
          window.setTimeout(function(){
            that.isShow = false
          }, this.time)
        }
      }
    }
  </script>

  <style type="text/css">
    .bingo-tool-tip {
      display: block;
      position: absolute;
      position: fixed;
      background-color: #3695CC;
      padding: 10px 10px;
      border-radius: 5px;
      color: #fff;
      white-space: nowrap;
      z-index: 99999999
    }
    .bingo-tool-tip.left {
      transform: translate(-100%, -50%);
    }
    .bingo-tool-tip.right {
      transform: translate(0, -50%);
    }
    .bingo-tool-tip.top {
      transform: translate(-50%, -100%);
    }
    .bingo-tool-tip.bottom {
      transform: translate(-50%, 100%);
    }
    .bingo-tool-tip.right .arrow {
      display: inline-block;
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      top: 50%;
      left: -10px;
      border-top: 10px solid transparent;
      border-right: 15px solid #3695CC;
      border-bottom: 10px solid transparent;
      transform: translate(0, -50%);
    }
    .bingo-tool-tip.left .arrow {
      display: inline-block;
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      top: 50%;
      right: -10px;
      border-top: 10px solid transparent;
      border-left: 15px solid #3695CC;
      border-bottom: 10px solid transparent;
      transform: translate(0, -50%);
    }
    .bingo-tool-tip.top .arrow {
      display: inline-block;
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      left: 50%;
      bottom: -10px;
      border-top: 15px solid #3695CC;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      transform: translate(-50%, 0);
    }
    .bingo-tool-tip.bottom .arrow {
      display: inline-block;
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      left: 50%;
      top: -10px;
      border-bottom: 15px solid #3695CC;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      transform: translate(-50%, 0);
    }
  </style>