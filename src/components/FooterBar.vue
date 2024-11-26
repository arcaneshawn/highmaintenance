<template>
    <footer>
        <div class="social">
            <a href="https://www.facebook.com/highmaintenanceeventband" title="Visit the official Facebook page of High Maintenance Band, Louisville, KY" target="_blank">
                <img src="../assets/facebook-icon.webp" alt="Facebook link icon" />
            </a>
        </div>
        <div class="developer">
            Site Designed & Developed <span>by Shawn Dugdale</span>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    footer {
        width: 100%;
        height: 100px;
        background-color: var(--brand-alt);
        padding: 1rem 2rem;
        display: flex;

        .social {
            width: 10%;

            a { 
                width: 50px;
                height: 50px;
                display: block;

                img {
                    max-height: 100%;
                }
            }
        }

        .developer {
            text-align: end;
            width: inherit;
            color: var(--brand-light);
            font-weight: bolder;
            font-size: 0.9rem;
            margin: auto 0;

            span {
                display: block;
            }
        }
    }
</style>