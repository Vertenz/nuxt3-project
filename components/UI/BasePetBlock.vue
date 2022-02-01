<template>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
</head>
    <div class="pet-block">
        <header class="pet-header">
            <h3 class="pet-header__name">{{ props?.pet?.name }}</h3>
            <h4 class="pet-header__year">year {{ props?.pet?.year }} </h4>
        </header>
        <div class="text-block">
            <p class="text-block__text">{{ props?.pet?.description }}</p>
            <p class="text-block__tech">{{ props?.pet?.techs }}</p>
            <details v-if="props?.pet?.page" class="text-block__details">
                <summary class="text-block__summary">Here a screenshot</summary>
                <a :href="`/pets/${props?.pet?.id}.jpg`" target="_blank"><img :src="`/pets/${props?.pet?.id}.jpg`" alt="screenshot" class="text-block__img"></a>
            </details>
        </div>
        <footer class="pet-footer">
            <a class="pet-footer__link pet-footer__link_git" :href="props?.pet?.link" title="github" target="_blank"></a>
            <a v-if="props?.pet?.page" class="pet-footer__link pet-footer__link_page" :href="props?.pet?.page" title="website" target="_blank"></a>
        </footer>
    </div>
</template>
<script lang="ts">
    import { PropType } from 'vue'
    import PetsModel from '~/models/PetsModel'


    export default defineComponent({
        name: 'BasePetBlock',
        props: {
            pet: Object as PropType < PetsModel >
        },
        setup(props) {
            return {
                props,
            }
        }
    })
</script>

<style  lang="scss" scoped>
.pet-block {
    width: 100%;
    height: 100%;
    padding: 2em;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 1px;
    background-color: var(--block-bg);
    transition: 0.3s;
    &:hover {
        background-color: var(--block-attention-bg);
        transform: translate(5px, -5px);
    }
}
.pet-header {
    padding: 1em;
}
.text-block {
    padding: 1em 0;
    &__tech {
        margin-top: 3%;
    }
    &__details &__summary::-webkit-details-marker {
        display: none;
    }
    &__summary {
        list-style: none;
    }
    &__details &__summary::before{
        content: '\f247';
        font-family: FontAwesome;
    }
    &__details {
        text-decoration: underline;
        margin-top: 2%;
        &:hover {
            cursor: pointer;
        }
    }
    &__img {
        margin-top: 2%;
        max-width: 50%;
        transition: 0.7s;
        &:hover {
            transform: scale(1.5);
        }
    }
}
.pet-footer {
    padding: 1em;
    margin-top: 2%;

    &__link {
        padding: 1em;
        margin-right: 3%;
        font-size: 1.4rem;
        transition: 0.8s;

        &:hover {
            color: var(--block-bg);
        }

        &_git {
            &::before {
                content: '\f09b';
                font-family: FontAwesome;
            }
        }

        &_page {
            &::before {
                content: '\f108';
                font-family: FontAwesome;
            }
        }
    }
}
</style>