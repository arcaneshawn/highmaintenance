<script>
    import { defineComponent } from 'vue'
    import ShowItem from './ShowItem.vue'
    export default defineComponent({
        components: { ShowItem }
    })
</script>

<template>
    <section id="shows">
        <span class="rip-top"><img src="../assets/RippedYo.png" alt="" /></span>
        <div class="content-container shows-container restrict-more">
            <div class="road-case"><img src="../assets/HM-RoadCase.png" alt="" /></div>
            <div class="show-list">
                <h2 aria-hidden="true">Upcoming Shows</h2>
                <ShowItem 
                    date="11/16/2024" 
                    venue="TK's Pub"
                    time="9pm"
                    link="https://www.facebook.com/events/1100091994892545"
                    eventTitle="High Maintenance live at TK's Pub"
                />
                <ShowItem 
                    date="12/20/2024" 
                    venue="Smyrna Inn"
                    time="8pm"
                    link="https://www.facebook.com/events/933891505355143"
                    eventTitle="High Maintenance live at Smyrna Inn"
                />
                <ShowItem 
                    date="03/29/2025" 
                    venue="Mr. G's Debut"
                    time="9pm"
                    link="https://www.facebook.com/events/535478146077313"
                    eventTitle="High Maintenance live debut at Mr. G's"
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
        max-width: 80%;
        padding-right: 1.4rem;
        margin: auto;

        img {
            max-width: 100%;
        }
    }

    .show-list {
        width: 100%;
        max-width: 95%;
        margin-top: 2rem;

        h2 {
            position: absolute;
            left: -9999px;
        }
    }
}

@media (min-width: 650px) {
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