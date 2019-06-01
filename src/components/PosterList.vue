<template>
  <div
    ref="list"
    class="listDisplay"
    @mousedown="mousedown($event)"
    @mousemove="mousemove($event)"
    @mouseup="mouseup"
  >
    <PosterDiv v-for="n in 20" :key="n" :number="n"/>
  </div>
</template>

<script>
import PosterDiv from './PosterDiv'
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
    },
    components: {
        PosterDiv,
    },
}
</script>

<style>
.listDisplay {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: scroll;
}

.listDisplay:hover {
    transform: scale(1.01);
}
</style>