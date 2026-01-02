class Preloader {
    constructor({preloader = "[data-preloader]"} = {}) {
        this.selector = preloader;
        window.addEventListener("load", () => {
            this.hide();
        });
    }

    hide() {
        const preloader = document.querySelector(this.selector);
        if (!preloader) return;

        preloader.classList.add("_hidden");
    }
}

new Preloader({
    preloader: ".preloader"
})