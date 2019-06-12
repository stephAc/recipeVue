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
      <!-- <PosterDiv v-for="n in 20" :key="n" :number="n"/> -->
      <RecipeIcon v-for="(recipe, index) in recipes" :key="index" :recipe="recipe"/>
      <BtnNext
        :right="btnRight"
        :left="btnLeft"
        @right_btn="btnRightClick"
        @left_btn="btnLeftClick"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RecipeIcon from './RecipeIcon'
import PosterDiv from './PosterDiv'
import BtnNext from './BtnNext'
export default {
    name: 'PosterList',
    data: function() {
        return {
            n: 0,
            currentTarget: null,
            mouseIsDown: false,
            mouseIsUp: true,
            mouseBeginPositionX: null,
            scrollLeft: null,
            btnRight: true,
            btnLeft: false,
            scrollStep: 500,
        }
    },
    computed: {
        ...mapState(['recipes'])
    },
    methods: {
        mousedown: event => {
            const target = event.currentTarget
            this.currentTarget = target
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
        scroll(event) {
            const newScrollLeft = event.currentTarget.scrollLeft
            const scrollWidth = event.currentTarget.scrollWidth
            const elWidth = event.currentTarget.offsetWidth

            if (scrollWidth - newScrollLeft == elWidth) {
                this.btnLeft = true
                this.btnRight = false
            } else if (newScrollLeft === 0) {
                this.btnLeft = false
                this.btnRight = true
            } else {
                this.btnLeft = true
                this.btnRight = true
            }
        },
        btnRightClick() {
            const element = this.$refs.list
            element.scrollLeft += this.scrollStep
        },
        btnLeftClick() {
            const element = this.$refs.list
            element.scrollLeft -= this.scrollStep
        },
    },
    components: {
        RecipeIcon,
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
    user-select: none;
    scrollbar-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
    scrollbar-width: thin;
}
.listDisplay::-webkit-scrollbar {
    scrollbar-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
    scrollbar-width: thin;
}

.listDisplay::-webkit-scrollbar-thumb {
    border-radius: 5px !important;
}
.listDisplay:hover {
    cursor: pointer;
    transition: 1s;
    scrollbar-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0);
}
.listContainer {
    position: relative;
}
</style>