<script>
    import { defineComponent } from 'vue'
    import ShowItem from './ShowItem.vue'
    import * as prismic from 'https://cdn.skypack.dev/@prismicio/client'

    export default defineComponent({
        data() {
            return {
                showData: null
            }
        },
        components: { ShowItem },
        created() {

            const repositoryName = 'highmaintenance'
            const client = prismic.createClient(repositoryName)

            const init = async () => {
                const prismicDoc = await client.getByUID('show_list', 'shows')
                this.showData = prismicDoc.data.shows
            }

            init()
        } 
    })
</script>

<template>
    <section id="shows">
        <span class="rip-top"><img src="../assets/RippedYo.png" alt="" /></span>
        <div class="content-container shows-container restrict-more">
            <div class="road-case"><img src="../assets/HM-RoadCase.png" alt="" /></div>
            <div class="show-list">
                <h2 aria-hidden="true">Upcoming Shows</h2>
                <ShowItem v-for="show in showData" 
                    :date="show.date" 
                    :venue="show.venue"
                    :time="show.time"
                    :link="show.event_link.url"
                    :eventTitle="'High Maintenance live at ' + show.venue"
                />
            </div>
        </div>
        <span class="rip-bottom"><img src="../assets/RippedYo.png" alt="" /></span>
    </section>
</template>

<style lang="scss" scoped>
#shows {
    width: 100%;
    background-color: var(--brand-accent);

    span {
        display: flex;
        width: 100%;

        img {
            width: 100%;
        }
    }

    span.rip-bottom img {
        transform: rotate(180deg);
        margin-bottom: -1px;
    }
}

.shows-container {
    width: 100%;
    display: block;
    margin: 2rem 0;

    .road-case {
        max-width: 70%;
        margin: auto;

        img {
            max-width: 100%;
        }
    }

    @media (min-width: 768px) {
        .road-case {
            padding-right: 1.4rem;
        }
    }

    .show-list {
        width: 100%;
        max-width: 100%;
        margin-top: 2rem;

        h2 {
            position: absolute;
            left: -9999px;
        }
    }
}

@media (min-width: 768px) {
    .shows-container {
        display: flex;

        .road-case {
            max-width: 40%;
            margin: 0;
        }

        .show-list {
            max-width: 60%;
        }
    }
} 
</style>