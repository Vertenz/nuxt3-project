<template>
    <footer class="footer">
        <div class="contact">
            <a href="https://github.com/Vertenz" class="contact__link contact__link_git"></a> 
            <a href="https://twitter.com/DevWererat" class="contact__link contact__link_twitter"></a> 
            <a href="www.linkedin.com/in/vladimir-medvedev-4387b81b1" class="contact__link contact__link_linkedin"></a> 
            <a href="mailto:dev.vladimir@yahoo.com"
                class="contact__link contact__link_email"></a>
        </div>
        <div class="year">{{ year }}</div>
    </footer>
</template>

<script lang="ts">
export default defineComponent({
    setup() {
        const year: Number = new Date().getFullYear()


        return { year }
    }
})
</script>

<style lang="scss" scoped>
    .footer {
        display: flex;
        justify-content: space-between;
    }
    .contact {
        &__link {
            padding: 1em;
            margin-right: 1.5em;
            transition: 0.3s;
            font-family: FontAwesome;

            &:hover {
                color: var(--block-bg);
            }

            &_git {
                &::after {
                    content: '\f09b';
                }
            }

            &_twitter {
                &::after {
                    content: '\f099';
                }
            }

            &_linkedin {
                &::after {
                    content: '\f0e1';
                }
            }

            &_email {
                &::after {
                    content: '\f1fa';
                }
            }
        }
    }
</style>