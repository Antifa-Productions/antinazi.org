if ("serviceWorker" in navigator) {
    window
        .addEventListener("load", function () {
            navigator
                .serviceWorker
                .register("worker.js")
        })
}
