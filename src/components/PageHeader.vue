<script>
import { defineComponent } from 'vue'
import TopMenu from './TopMenu.vue'
import HeaderImage from './HeaderImage.vue'
export default defineComponent({
    components: { TopMenu, HeaderImage }
})
</script>

<template>
    <div class="top-bar">
        <TopMenu />
    </div>
    <div class="logo-container">
        <div class="logo">
            <img src="../assets/HM-LogoMain.png" alt="Official Logo of High Maintenance Band from Louisville, KY" />
        </div>
        <div class="sangker">
            <img src="../assets/HM-Sangker.jpg" alt="Sarah, singer of High Maintenance Band from Louisville, KY" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
}
.top-bar {
    background-color: var(--brand-alt);
    position: relative;
    width: 100%;
    height: 56px;
}
.logo-container {
    width: 100%;

    .logo {
        position: absolute;
        top: 0;
        left: 0;
        max-width: 62%;

        img {
            max-width: 100%;
        }
    }

    .sangker {
        width: 100%;

        img {
            max-width: 100%;
        }
    }
}
</style>