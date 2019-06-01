<template>
  <div class="listContainer">
    <div
      ref="list"
      class="listDisplay"
      @mousedown="mousedown($event)"
      @mousemove="mousemove($event)"
      @mouseup="mouseup"
      v-on:scroll="scroll($event)"
    >
      <PosterDiv v-for="n in 20" :key="n" :number="n"/>
      <BtnNext/>
    </div>
  </div>
</template>

<script>
import PosterDiv from './PosterDiv'
import BtnNext from './BtnNext'
export default {
    name: 'PosterList',
    data: function() {
        return {
            n: 0,
            mouseIsDown: false,
            mouseIsUp: true,
            mouseBeginPositionX: null,
            scrollLeft: null,
        }
    },
    methods: {
        mousedown: event => {
            const target = event.currentTarget
            this.mouseIsDown = true
            this.mouseIsUp = false
            this.mouseBeginPositionX = event.pageX - target.offsetLeft
            this.scrollLeft = target.scrollLeft
        },
        mousemove: event => {
            const target = event.currentTarget
            event.preventDefault()

            if (this.mouseIsDown) {
                const x = event.pageX - target.offsetLeft
                const scrollLength = (x - this.mouseBeginPositionX) * 3
                target.scrollLeft = this.scrollLeft - scrollLength
            }
        },
        mouseup: () => {
            this.mouseIsUp = true
            this.mouseIsDown = false
        },
        scroll: event => {
            console.log('scroll')

            // const newScrollLeft = $elem.scrollLeft()
            // const scrollWidth=$elem.get(0).scrollWidth;
            // if (scrollWidth-newScrollLeft==width){

            // }
            // if (newScrollLeft === 0) {
            //     alert('left end');}
        },
    },
    components: {
        PosterDiv,
        BtnNext,
    },
}
</script>

<style>
.listDisplay {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
}
.listContainer {
    position: relative;
}
.listContainer:hover {
    transform: scale(1.01);
}
</style>