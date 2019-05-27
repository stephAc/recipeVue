<template>
  <div
    class="listDisplay"
    @mousedown="mousedown($event)"
    @mousemove="mousemove($event)"
    @mouseup="mouseup"
    @wheel="mousewheel($event)"
    id="listElement"
  >
    <PosterDiv v-for="n in 20" :key="n" :number="n"/>
  </div>
</template>

<script>
import PosterDiv from './PosterDiv'

export default {
    //     v-on:scroll="scroll"

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
            const listElement = document.getElementById('listElement')
            this.mouseIsDown = true
            this.mouseIsUp = false

            this.mouseBeginPositionX = event.pageX - listElement.offsetLeft
            this.scrollLeft = listElement.scrollLeft

            console.log(
                'mouseIsDown : ',
                this.mouseIsDown,
                'mouseIsUp : ',
                this.mouseIsUp
            )
        },
        mousemove: event => {
            const listElement = document.getElementById('listElement')
            event.preventDefault()

            if (this.mouseIsDown) {
                const x = event.pageX - listElement.offsetLeft
                const scrollLength = (x - this.mouseBeginPositionX) * 3
                listElement.scrollLeft = this.scrollLeft - scrollLength
            }
        },
        mouseup: () => {
            this.mouseIsUp = true
            this.mouseIsDown = false
        },
        mouseweel: event => {
            const listElement = document.getElementById('listElement')
            console.log('scroll')
            listElement.scrollLeft -= 30 * 30
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