<script lang="ts">
    import gsap from "gsap";
    import { onMount } from "svelte";

    let image: HTMLImageElement;
    export let aspect: number;
    export let src: string;

    let styles = "";
    onMount(() => {
        const maxY = (image.parentElement?.clientHeight || 0) - image.width / aspect - 15;
        const posY = Math.random() * maxY + 15;
        gsap.fromTo(
            image,
            {
                y: posY + 20,
                ease: "ease",
            },
            {
                duration: 1,
                y: posY,
            }
        );

        styles = `
        aspect-ratio:${aspect};
        `;
    });
</script>

<img class="flex-none w-screen max-w-80 max-h-full h-fit object-cover" {src} alt="" bind:this={image} style={styles} />
