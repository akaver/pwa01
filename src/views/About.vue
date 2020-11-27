<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
    <div @click="installToDesktop()" :style="{ display: installBtnVisibility }">Install</div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    props: {},
})
export default class About extends Vue {
    installBtnVisibility = "none";
    installEvent: Event | null = null;

    created() {
        console.log("created");
        window.addEventListener("beforeinstallprompt", (e) => {
            console.log('beforeinstallprompt', e);
            e.preventDefault();
            this.installEvent = e;
            this.installBtnVisibility = "block";
        });
    }

    installToDesktop() {
        this.installBtnVisibility = "none";
        if (this.installEvent) {
            console.log(this.installEvent);
        }
    }
}
</script>
