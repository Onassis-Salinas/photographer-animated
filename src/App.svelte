<script lang="ts">
    import gsap from "gsap";
    import Image from "./Image.svelte";
    import { onMount } from "svelte";
    import Modal from "./Modal.svelte";
    import TextPlugin from "gsap/TextPlugin";
    import { fade } from "svelte/transition";

    let tween: any;
    let title: HTMLElement;
    let background: HTMLDivElement;
    gsap.registerPlugin(TextPlugin);

    onMount(() => {
        gsap.from(title, { duration: 1.5, delay: 3, top: "50%", translateY: "-50%" });
        gsap.to(background, { duration: 1.5, delay: 4.2, opacity: 0 });
        gsap.to(background, { display: "none", delay: 5 });
        // tween = gsap.from("img", { rotateZ: "90deg", duration: 1, stagger: 0.1, ease: "ease", delay: 0.5 });

        gsap.to("h1", {
            duration: 1.5,
            text: "PHOTOGRAPHER",
            ease: "ease",
        });

        gsap.to("nav", {
            delay: 1.5,
            duration: 0.7,
            opacity: 1,
            ease: "ease",
        });
    });

    let selected = 0;

    $: if (selected >= 0) {
        console.log(tween);
        tween?.restart();
    }
</script>

<main class="bg-background text-foreground h-lvh flex flex-col relative">
    <div bind:this={background} class="fixed top-0 bottom-0 left-0 right-0 bg-background z-10"></div>
    <section bind:this={title} class="text-center pt-5 pb-3 left-1/2 -translate-x-1/2 fixed top-0 z-20 w-full">
        <h1 class="text-4xl sm:text-5xl font-extralight z-30 text-center w-full"></h1>
        <nav class="flex gap-3 sm:gap-5 mt-2 justify-center text-lg font-light opacity-0">
            <button on:click={() => (selected = 0)}>People</button>-
            <button on:click={() => (selected = 1)}>Landscapes</button>-
            <button on:click={() => (selected = 2)}>Products</button>
        </nav>
    </section>

    <div id="overlay" class="bg-black opacity-0 fixed top-0 left-0 right-0 bottom-0 justify-center items-center hidden z-30"></div>

    {#if selected === 0}
        <div in:fade={{ delay: 500, duration: 400 }} out:fade={{ duration: 400 }} class="flex gap-3 overflow-x-auto overflow-y-hidden flex-1 px-1 sm:px-5 h-screen max-h-screen absolute top-0 left-0 right-0 bottom-0">
            <Image aspect={3 / 4} src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww" />
            <Image aspect={1 / 2} src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww" />
            <Image aspect={1 / 1} src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHwy" />
            <Image aspect={5 / 6} src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8Mg%3D%3D" />
            <Image aspect={3 / 2} src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlb3BsZXxlbnwwfHwwfHx8Mg%3D%3D" />
            <Image aspect={2 / 2} src="https://images.unsplash.com/photo-1442328166075-47fe7153c128?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBlb3BsZXxlbnwwfHwwfHx8Mg%3D%3D" />
            <Image aspect={2 / 3} src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwZW9wbGV8ZW58MHx8MHx8fDI%3D" />
            <Image aspect={2 / 3} src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlb3BsZXxlbnwwfHwwfHx8Mg%3D%3D" />
            <Image aspect={2 / 2} src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHBlb3BsZXxlbnwwfHwwfHx8Mg%3D%3D" />
            <Image aspect={1 / 2} src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBlb3BsZXxlbnwwfHwwfHx8Mg%3D%3D" />
            <Image aspect={2 / 3} src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxwZW9wbGV8ZW58MHx8MHx8fDI%3D" />
        </div>
    {/if}
    {#if selected === 1}
        <div in:fade={{ delay: 500, duration: 400 }} out:fade={{ duration: 400 }} class="flex gap-3 overflow-x-auto overflow-y-hidden flex-1 px-1 sm:px-5 h-screen max-h-screen absolute top-0 left-0 right-0 bottom-0">
            <Image aspect={2 / 3} src="https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFpc2FqZXN8ZW58MHx8MHx8fDI%3D" />
            <Image aspect={1} src="https://images.unsplash.com/photo-1484402628941-0bb40fc029e7?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFpc2FqZXN8ZW58MHx8MHx8fDI%3D" />
            <Image aspect={2 / 3} src="https://images.unsplash.com/photo-1537824598505-99ee03483384?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFpc2FqZXN8ZW58MHx8MHx8fDI%3D" />
            <Image aspect={2 / 3} src="https://images.unsplash.com/photo-1601694090572-98694c8b3b85?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhaXNhamVzfGVufDB8fDB8fHwy" />
            <Image aspect={2 / 3} src="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFpc2FqZXN8ZW58MHx8MHx8fDI%3D" />
            <Image aspect={1} src="https://images.unsplash.com/photo-1472213984618-c79aaec7fef0?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhaXNhamVzfGVufDB8fDB8fHwy" />
            <Image aspect={2 / 3} src="https://images.unsplash.com/photo-1541343672885-9be56236302a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBhaXNhamVzfGVufDB8fDB8fHwy" />
            <Image aspect={2 / 3} src="https://images.unsplash.com/photo-1563663170139-88d80d6387ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBhaXNhamVzfGVufDB8fDB8fHwy" />
            <Image aspect={5 / 6} src="https://images.unsplash.com/photo-1622023798750-8835db5b45f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBhaXNhamVzfGVufDB8fDB8fHwy" />
            <Image aspect={2 / 3} src="https://images.unsplash.com/photo-1594028355881-9942abbaa2af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBhaXNhamVzfGVufDB8fDB8fHwy" />
            <Image aspect={1 / 2} src="https://images.unsplash.com/photo-1613017012292-65c7fc9185a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBhaXNhamVzfGVufDB8fDB8fHwy" />
        </div>
    {/if}
    {#if selected === 2}
        <div in:fade={{ delay: 500, duration: 400 }} out:fade={{ duration: 400 }} class="flex gap-3 overflow-x-auto overflow-y-hidden flex-1 px-1 sm:px-5 h-screen max-h-screen absolute top-0 left-0 right-0 bottom-0">
            <Image aspect={2 / 3} src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDI%3D" />
            <Image aspect={2 / 3} src="https://images.unsplash.com/photo-1567721913486-6585f069b332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHx8MHx8fDI%3D" />
            <Image aspect={3 / 6} src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fHwy" />
            <Image aspect={2 / 3} src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fHwy" />
            <Image aspect={2 / 3} src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3RzfGVufDB8fDB8fHwy" />
            <Image aspect={2 / 3} src="https://images.unsplash.com/photo-1634283715079-d91bbed0ece0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2R1Y3RzfGVufDB8fDB8fHwy" />
            <Image aspect={1} src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3RzfGVufDB8fDB8fHwy" />
            <Image aspect={2 / 3} src="https://images.unsplash.com/photo-1576087503901-b2a3e3b66672?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHByb2R1Y3RzfGVufDB8fDB8fHwy" />
            <Image aspect={2 / 3} src="https://images.unsplash.com/photo-1575330933415-cea1e7ce53eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2R1Y3RzfGVufDB8fDB8fHwy" />
        </div>
    {/if}
</main>
<Modal />
