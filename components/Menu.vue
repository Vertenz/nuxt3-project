<template>
    <menu :class="{'menu': true, 'stop-scroll': showMenu}">
        <div class="menu-btn" @click="changeShowMenu">
            <div class="menu-btn__line"></div>
            <div class="menu-btn__line"></div>
            <div class="menu-btn__line"></div>
        </div>
        <transition name='fade'>
            <nav class="menu-nav" v-if="showMenu" @click="changeShowMenu">
                <ul class="menu-nav__ul">
                    <NuxtLink v-for="el in menuEl" :key="el.tile" :to="el.path" class="menu-nav__li">{{ el.title }}</NuxtLink>
                </ul>
                <button @click="changeTheme">changeTheme</button>
            </nav>
        </transition>
    </menu>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
            menuEl: [
                    {
                        title: 'Главная',
                        path: '/'
                    },
                    {
                        title: 'Test',
                        path: '/test'
                    },
                    {
                        title: 'About',
                        path: '/about'
                    }
                ]
        }
    },
    methods: {
        changeShowMenu: function() {
            this.showMenu = !this.showMenu;
            if (this.showMenu === true) {
                document.body.style.overflow = 'hidden';
            }else {
                document.body.style.overflow = 'auto';
            }
        },
        changeTheme: function() {
            const root = document.querySelector(':root');
            let theme = useTheme();
            theme.value === 'dark' ? theme.value = 'light' : theme.value = 'dark';
            if (theme.value === 'light') {
                    const header = document.getElementById('header');
                    header.style.background = 'linear-gradient(-70deg, var(--block-bg) 29%, rgba(0, 0, 0, 0) 31%), url("/_nuxt/static/bg2.jpg")';
                    header.style.backgroundSize = 'cover';
                    header.style.backgroundPosition = '50% 21%';
                    header.style.backgroundRepeat = 'no-repeat';
                    root.style.setProperty('--main-bg-color', '#fff');
                    root.style.setProperty('--main-text-color', '#000');
                    root.style.setProperty('--shadow', '#fff');
            }else {
                const header = document.getElementById('header');
                header.style.background = 'linear-gradient(-70deg, var(--block-bg) 29%, rgba(0, 0, 0, 0) 31%), url("/_nuxt/static/bg1.jpg")';
                header.style.backgroundSize = 'cover';
                header.style.backgroundPosition = '50% 21%';
                header.style.backgroundRepeat = 'no-repeat';
                root.style.setProperty('--main-bg-color', '#341c3c');
                root.style.setProperty('--main-text-color', '#fff');
                root.style.setProperty('--shadow', '#000');
            }

        }
    }
}
</script>

<style lang="scss" scoped>
.menu {
    position: fixed;
    top: 2vh;
    left: 2vw;
}

.menu-nav {
    position: absolute;
    top: -2vh;
    left: -2vw;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 1000vh;
    z-index: 2;
    background: linear-gradient(110deg, rgba(52, 28, 60, 1) 18%, rgba(61, 29, 29, 0.7) 1%);
    &__ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 5vw;
        padding-top: 5vh;
    }
    &__li {
        width: max-content;
        margin-bottom: 1vh;
        padding: 1em;
        color: white;
        transition: 1s;
        &:hover {
            color: var(--attention-color);
        }
    }
}

.menu-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed ;
    cursor: pointer;
    &:hover>div {
        background-color: var(--main-bg-color);
        box-shadow: none;
    }
    &__line {
        width: 3vw;
        height: 5px;
        margin-bottom: 3px;
        background-color: var(--block-attention-bg);
        box-shadow: 3px 5px 5px var(--main-bg-color);
        transition: 1s;
    }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>