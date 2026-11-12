(() => {
    // Keep Framer's page routing intact; this only enhances explicit in-page anchors.
    document.addEventListener("click", (event) => {
        if (!(event.target instanceof Element)) return;

        const link = event.target.closest('a[href^="#"]');
        if (!link) return;

        const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
        if (!target || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", link.hash);
    });
})();
