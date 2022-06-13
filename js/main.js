var navPrincipal = $("#nav-principal");
const navToggle = $(".mobile-nav-toggle");


navToggle.click(function () {
    const visibility = navPrincipal.attr("data-visible")

    if (visibility === "true") {
        navPrincipal.attr("data-visible", "false")
        navToggle.attr("aria-expanded", false)
    } else {
        navPrincipal.attr("data-visible", "true")
        navToggle.attr("aria-expanded", true)
    }
})
