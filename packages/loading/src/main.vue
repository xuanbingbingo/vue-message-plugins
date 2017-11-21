<template>
    <div class="bingo-loading" :style="{'top': top, 'left': left, 'width': width, 'height': height}">
      <div class="bg"></div>
      <div class="bingo-container">
        <i class="icon-spinner icon-spin icon-4x"></i>
      </div>
    </div>
  </template>

  <script type="text/javascript">
    export default {
      name: 'bingo-loading',
      data () {
        return {
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }
      }
    }
  </script>