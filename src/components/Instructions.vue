<template>
    <div>
        <h1>This is instructions page</h1>
        <Footer />
    </div>
</template>
<script>
import Footer from "./Footer";

export default {
    name: "Instructions",
    components: {
        Footer,
    },
    mounted() {
        window.scrollTo(0, 0);
    },
};
</script>
<style scoped></style>
