<script>
    import gsap from "gsap";
    import { Flip } from "gsap/all";

    function hideElement() {
        const image = document.querySelector("#preview");
        const imgElement = document.querySelector(`img[src="${image.src}"]`);
        const overlay = document.querySelector("#overlay");
        const modal = document.querySelector("#modal");

        const state = Flip.getState(image);
        gsap.to(overlay, { opacity: 0, duration: 0.8 });

        image.style.visibility = "hidden";
        imgElement.style.visibility = "visible";

        Flip.from(state, { targets: imgElement, duration: 1, ease: "power1.inOut", scale: true });
        gsap.to(modal, { display: "none", delay: 0.5 });
        gsap.to(overlay, { display: "none", delay: 0.8 });
        gsap.to(imgElement, { zIndex: 0, delay: 1 });
    }
</script>

<div id="modal" class="fixed top-0 left-0 right-0 bottom-0 justify-center items-center hidden z-50" on:click={hideElement}>
    <img id="preview" class="invisible flex-none w-fit max-w-[95%] max-h-[95%] h-fit object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww" alt="" data-flip-id="selected" />
</div>
