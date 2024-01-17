<template>
    <div class="navbar">
        <div class="container">
            <ul class="nav">
                <li class="nav-item home-li"><a href="">داشبورد</a></li>

                <li class="nav-item">
                    <a href="">test</a>
                    <div></div>
                </li>

                <li class="nav-item">
                    <a href="">test</a>
                    <div></div>
                </li>

                <li class="nav-item">
                    <a href="">test</a>
                    <div></div>
                </li>

                <li class="nav-item">
                    <a href="">test</a>
                    <div></div>
                </li>

                <li class="nav-item">
                    <a href="">test</a>
                    <div></div>
                </li>
            </ul>
        </div>
    </div>
</template>
    <!-- <li class="nav-item" v-for="(item, index) in navbarItems.item1" :key="index">
    <a href="">{{ item.title }}</a>
    <div class="sub-item">
        <ul>
            <li v-for="(item, index) in navbarItems.grouping" :key="index"><a href="">{{ item }}</a></li>
        </ul>
    </div>
</li>
</ul> -->

<script>
export default {
    data() {
        return {
            navbarItems: {
                item1: {
                    title: "هدفون",
                    grouping: ["تسکو", "رپو", "سونی"]
                }
            },
        }
    }
}
</script>

<style scoped>
.container {
    background: white;
    margin-top: 1rem;
    margin-inline: 2.3rem;

}

li {
    list-style: none;
}

.nav-item a {
    text-decoration: none;
    color: black;
}

.nav{
    display: flex;
}

.nav li{
    margin-inline: 2rem;
}
</style>