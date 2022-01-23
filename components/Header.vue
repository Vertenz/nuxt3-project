<template>
    <header class="header" id="header">
        <div class="header__text">
            <h1 class="header__text_h">Привет! Это </h1>
            <p>ты сейчас в разделе:</p>
            <h2 class="header__text_h2">{{ title }}</h2>
        </div>
        <div class="line"></div>
        <div class="arrow-box" id="arrow-box" @click="openHeader">
            <div class="arrow-box__el arrow-box__el_left"></div>
            <div class="arrow-box__el arrow-box__el_right"></div>
        </div>
    </header>
</template>

<script lang="ts">
export default defineComponent({
    setup() {
        async function setGradient(el: HTMLElement, percent: number | any) {
            let promise = new Promise((resolve) => {
                setTimeout(() => {
                    percent++;
                    el.style.background = `linear-gradient(-70deg, var(--block-bg) ${percent}%, rgba(0, 0, 0, 0) 31%), url('/_nuxt/static/bg1.jpg')`;
                    el.style.backgroundSize = 'cover';
                    el.style.backgroundPosition = '50% 21%';
                    el.style.backgroundRepeat = 'no-repeat';
                    resolve(percent);
                }, 35)
            })
            return promise;
        }


        async function reval() {
            const header: HTMLElement = document.getElementById('header')!;
            let percent: number | any = -10;
            while (percent < 30) {
                percent = await setGradient(header, percent).then(result => result);
            }
        }

        onMounted(reval);

        // const openHeader = () => {
        //     const header: HTMLElement = document.getElementById('header') !;
        //     let newHeight: number = header.offsetHeight + (header.offsetHeight * 0.1);
        //     let timer = setInterval(function () {
        //         newHeight = header.offsetHeight + (header.offsetHeight * 0.1);
        //         console.log(newHeight)
        //         if (newHeight <= document.documentElement.clientHeight) {
        //             header.style.height = newHeight + 'px';
        //         } else {
        //             const arrowBox: HTMLElement = document.getElementById('arrow-box') !;
        //             arrowBox.style.cssText = `bottom: 2em;
        //                                             display: flex;`;
        //             clearInterval(timer);
        //             return;
        //         }
        //     }, 30);
        // }

    //    const  openHeader = () => {
    //         const header: HTMLElement = document.getElementById('header') !;
    //         let newHeight: number = header.offsetHeight + (header.offsetHeight * 0.1);
    //         try {
    //             const timer = setInterval(async function () {
    //             newHeight = header.offsetHeight + (header.offsetHeight * 0.1);
    //             if (newHeight <= document.documentElement.clientHeight) {
    //                 header.style.height = newHeight + 'px';
    //                 console.log(header.style.height)
    //             } else {
    //                 const arrowBox: HTMLElement = document.getElementById('arrow-box') !;
    //                 arrowBox.style.cssText = `bottom: 2em;
    //                                                 display: flex;`;
    //                 clearInterval(timer);
    //                 return;
    //             }
    //             }, 20)
    //         } catch (error) {
    //             console.warn('error during polling', error.response);
    //             clearInterval(timer);
    //         }
    //         }

    const openHeader = () => {
        const header: HTMLElement = document.getElementById('header') !;
        header.classList.toggle('small-height');
        const arrowBox: HTMLElement = document.getElementById('arrow-box') !;
        arrowBox.classList.toggle('top-position');
    }

        let title = useTitle();

        return {
            title,
            openHeader
        }
    }
})
</script>

<style lang="scss" scoped>
@keyframes setShadow {
    from {
        text-shadow: 0 0 var(--shadow);
    }

    to {
        text-shadow: 2px 3px var(--shadow);
    }
}

@keyframes blinkArrow {
    from {
        background: #d9005b;
    }

    to {
        background: #f18db7;
    }
    
}
.header {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1em 1em 2em 0;
    color: #fff;
    margin-bottom: 20px;
    transition: 1s;
    &__text {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        animation: 3s infinite alternate setShadow;
        &_h {
            font-size: 1.7rem;
        }
        &_h2 {
            font-size: 1.4rem;
            transition: 0.5s;
            &::first-letter {
                color: var(--footer-color);
            }
        }
    }
}

.arrow-box {
    position: absolute;
    bottom: 2em;
    padding: 20px;
    left: 50%;
    min-width: max-content;
    max-height: max-content;
    z-index: 3;
    transition: 0.8s;
    cursor: pointer;
    &__el {
        width: 4px;
        height: 15px;
        background-color: var(--block-bg);
        animation: 3s infinite alternate blinkArrow;
        border-radius: 36%;
        &_right {
            transform: rotate(45deg);
            position: absolute;
            left: 10px;
        }
        &_left {
            transform: rotate(-45deg);
            position: absolute;
            left: 19px;
        }
    }
}
</style>