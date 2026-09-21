/* =========================================================
   TUNETRACK PLAY — EXCLUSIVE
   PRODUCT DATA / EMAIL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       READ PRODUCT FROM URL
    ===================================================== */

    const params =
        new URLSearchParams(window.location.search);

    const productId =
        params.get("product");


    /* =====================================================
       FIND PRODUCT FROM data-catalog.js
    ===================================================== */

    const product =
        products.find(item => {

            const slug =
                item.title
                    .toLowerCase()
                    .trim()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, "");

            return slug === productId;
        });


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const titleElement =
        document.getElementById("exclusiveTitle");

    const descriptionElement =
        document.getElementById("exclusiveDescription");

    const originElement =
        document.getElementById("infoOrigin");

    const resourceElement =
        document.getElementById("infoResource");

    const requestButton =
        document.getElementById("requestButton");


    /* =====================================================
       INVALID PRODUCT
    ===================================================== */

    if (!product) {

        titleElement.textContent =
            "Exclusive resource.";

        descriptionElement.textContent =
            "This resource is currently unavailable or could not be found.";

        originElement.textContent =
            "Unavailable";

        resourceElement.textContent =
            "—";

        requestButton.disabled =
            true;

        requestButton.style.opacity =
            ".45";

        requestButton.style.cursor =
            "not-allowed";

        return;
    }


    /* =====================================================
       RENDER PRODUCT
    ===================================================== */

    titleElement.textContent =
        `${product.title}.`;

    descriptionElement.textContent =
        product.description || "";

    originElement.textContent =
        product.origin || "By request";

    resourceElement.textContent =
        product.resource || "Sequencer";


    /* =====================================================
       PAGE TITLE
    ===================================================== */

    document.title =
        `${product.title} — Tunetrack Play Exclusive`;


    /* =====================================================
       EMAIL REQUEST
    ===================================================== */

    requestButton.addEventListener("click", () => {

        const email =
            "hello@tunetrack.co";

        const subject =
            `Tunetrack Play Exclusive — ${product.title}`;

        const body =
`Hi Tunetrack,

I'd like to request the sequencer for:

${product.title}
${product.artist}

Please let me know the availability and next steps.

Thank you.`;

        const mailto =
            `mailto:${email}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.location.href =
            mailto;

    });

});