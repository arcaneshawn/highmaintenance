<template>
    <section class="overview content-container">
        <div class="overview-heading">
            <span><img src="../assets/MusicWarning.png" alt="" /></span>
            <h1 class="bungee-regular"><span class="rubik-glitch-regular">We are High Maintenance: </span>Entertainment That Demands Attention</h1>
            <span class="last-warning"><img src="../assets/MusicWarning.png" alt="" /></span>
        </div>
        <p>High Maintenance is a high-energy cover band hailing from the vibrant Louisville music scene.  Comprised of native musicians, this dynamic group delivers unforgettable performances, bringing the best of pop, rock, and alternative music to every show.</p>
        <p>With a setlist that spans decades of hits and a stage presence that radiates energy, High Maintenance knows how to get the crowd moving and singing along.  Each member of the band brings their unique talent, creating a powerful synergy that captivates audiences from start to finish.</p>
        <p>Whether they're rocking out at local venues or headlining large events, High Maintenance consistently delivers top-notch entertainment.  Their dedication to their craft and their ability to engage and energize the crowd make them one of Louisville's most sought-after bands.  Get ready for an electrifying experience because High Maintenance is here to keep the party going all night long!!</p>
    </section>
</template>

<style lang="scss" scoped>
.overview {
    text-align: center;
    padding: 2rem 4%;
    margin-top: 2rem;

    .overview-heading {
        display: block;
        justify-content: center;
        margin: 0 0 2.5rem;

        img {
            max-width: 100px;
        }

        h1 {
            margin: auto 2.5rem;
            line-height: 2.5rem;

            span {
                display: block;
                font-size: 3rem;
            }
        }

        span.last-warning {
            display: none;
        }
    }

    p {
        max-width: 1475px;
        margin: 1rem auto;
    }
}

@media (min-width: 650px) {
    .overview {
        .overview-heading {
            display: flex;
            margin: 2.5rem 0;

            span.last-warning {
                display: block;
            }
        }
    }
} 
</style>