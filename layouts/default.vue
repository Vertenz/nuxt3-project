<template>
    <Header />
        <slot />
    <footer class="footer">
        {{ year }}
    </footer>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        }
    },
}
</script>

<style lang="scss">
:root {
    --main-bg-color: #341c3c;
    --block-bg: rgb(102, 60, 146, 0.8);
    --block-attention-bg: #d9005b;
    --main-text-color: #fff;
    --shadow: #000;
    --padding: 2vw;
    --attention-color: rgb(250, 124, 48);
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--main-text-color);
}
body {
    background-color: var(--main-bg-color);
}
a {
    text-decoration: none;
}

ul, li {
    list-style: none;
    text-decoration: none;
}
</style>