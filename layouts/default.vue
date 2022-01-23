<template>
    <Menu />
    <Header />
    <div class="padding-wrap">
        <slot />
    </div>
    <footer class="footer">
        Wererate Copmuterkin {{ year }}
    </footer>
</template>

<script lang="ts">
export default defineComponent({
  name: 'default',
    setup() {
        // onMounted(() => {
        //     const headerEl: HTMLElement = document.getElementById('header') !;
        //     let scrollAnimation: boolean = false;
        //     window.addEventListener('scroll', () => {
        //         if (!scrollAnimation) {
        //             if (headerEl.getBoundingClientRect().top < -150) {
        //                 scrollAnimation = true;
        //                 hideHeader();
        //             }
        //         }
        //     })
        // })

        // function hideHeader(el: HTMLElement) {
        //     let start = Date.now();
        //     console.log('close')
        //     let timer = setInterval(function () {
        //         let timePassed = Date.now() - start;
        //         if (timePassed >= 4000) {
        //             clearInterval(timer);
        //             return;
        //         }
        //         if (el.offsetHeight - (el.offsetHeight * 0.1) > 75) {
        //             el.style.height = el.offsetHeight - (el.offsetHeight * 0.1)  + 'px';
        //         } else {
        //             const arrowBox: HTMLElement = document.getElementById('arrow-box')!;
        //             arrowBox.style.cssText = `top: 95px;
        //                                       display: flex;
        //                                       transform: rotate(180deg);`;
        //             return;
        //         }
        //     }, 20);
        // }
        // const hideHeader = () => {
        //     const header: HTMLElement = document.getElementById('header') !;
        //     header.classList.add('small-height');
        //     const arrowBox: HTMLElement = document.getElementById('arrow-box') !;
        //     arrowBox.style.cssText = `top: 95px;
        //                                       display: flex;
        //                                       transform: rotate(180deg);`;
        // }

        const year: Number = new Date().getFullYear()


        return{ year }
    }
})
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

:root {
    --main-bg-color: #341c3c;
    --block-bg: rgb(102, 60, 146, 0.8);
    --block-attention-bg: #d9005b;
    --main-text-color: #fff;
    --shadow: #000;
    --padding: 3vw;
    --footer-color: rgb(250, 124, 48);
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--main-text-color);
}
body {
    background-color: var(--main-bg-color);
    scroll-behavior: smooth;
}
a { 
    text-decoration: none;
}

ul, li {
    list-style: none;
    text-decoration: none;
}

.btn-block {
    display: flex;
    min-width: 100%;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 1em;
    &__arrow {
        filter: drop-shadow(2px 4px 6px black);
        width: 50px;
    }
    &__wrap {
        width: 185px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        padding: 1em;
        border: 1px solid var(--block-bg);
        box-shadow: 1px 2px 2px var(--block-bg);
        margin-bottom: 1rem;
        text-align: center;
        &:hover .spin {
            width: 200%;
            height: 500%;
            opacity: 1;
            left: -70px;
            top: -70px;
            background: var(--attention-color);
            transform: rotate(80deg);
        }
        &:hover .btn-block__btn {
            text-shadow: 5px 5px 5px white;
        }
    }
    &__btn {
        position: relative;
        transition: all .45s ease-Out;
    }
}

.spin {
  width: 0;
  height: 0;
  opacity: 0;
  left: 70px;
  top: 20px;
  transform: rotate(0deg);
  background: none;
  position: absolute;
  transition: all .5s ease-Out;
}

.padding-wrap {
    padding: 0 15px;
    z-index: -1;
}

.full-height {
    height: 100vh !important;
}

.small-height {
    height: 100px !important;
}

.top-position {
    top: 101px;
    display: flex;
    transform: rotate(180deg) !important;
}
</style>
