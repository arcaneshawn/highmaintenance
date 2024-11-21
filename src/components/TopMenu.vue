<template>
    <div class="menu-container">
        <ul class="menu bungee-regular">
            <li class="menu-item"><RouterLink to="/">Home</RouterLink></li>
            <li class="menu-item"><a href="#shows" title="View Upcoming Shows">Shows</a></li>
            <!--<li class="menu-item"><RouterLink to="/">About</RouterLink></li>-->
            <li class="menu-item"><a href="#contact-us" title="Contact High Maintenace via Email">Contact</a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.menu-container {
    width: 100%;
    height: 100%;
}

.menu {
    display: flex;
    float: right;
    font-size: 1.2rem;
    height: 56px;
    color: var(--brand-light);

    li a {
        text-decoration: none;

        &:hover {
            background-color: var(--brand-light);
            color: var(--brand-alt);
        }
    }
}
.menu-item {
    align-content: center;
}
.menu a {
    color: var(--brand-light);
    font-weight: 800;
    padding: .5rem 1rem;
}
</style>