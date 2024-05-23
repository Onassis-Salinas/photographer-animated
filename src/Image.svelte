<script lang="ts">
    import gsap from "gsap";
    import { Flip } from "gsap/all";
    import { onMount } from "svelte";

    gsap.registerPlugin(Flip);
    let image: HTMLImageElement;
    export let aspect: number;
    export let src: string;

    function visualize() {
        image.setAttribute("data-flip-id", "selected");
        const preview = document.querySelector("#preview");
        const modal = document.querySelector("#modal");
        preview.src = image.src;
        preview.style["aspect-ratio"] = image.style["aspect-ratio"];
        modal.style.display = "flex";

        const state = Flip.getState(image);

        image.style.visibility = "hidden";
        image.style.zIndex = 999;
        preview.style.visibility = "visible";

        Flip.from(state, { targets: preview, duration: 1, ease: "power1.inOut", scale: true });
        gsap.to(image, { zIndex: 30, delay: 0 });
    }

    let styles = "";
    onMount(() => {
        const maxY = image.parentElement?.clientHeight - 120 - image.width / aspect - 15;
        const posY = Math.random() * maxY + 120;
        console.log(maxY)

        styles = `
        aspect-ratio:${aspect};
        transform: translateY(${posY}px)
        `;
    });
</script>

<img on:click={visualize} class="opacity-100 flex-none w-screen max-w-80 max-h-full h-fit object-cover" {src} alt="" bind:this={image} style={styles} />
