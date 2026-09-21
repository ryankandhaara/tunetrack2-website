/* =========================================================
   TUNETRACK PLAY — EXCLUSIVE
   PRODUCT DATA / EMAIL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PRODUCT DATA
    ===================================================== */

    const exclusiveProducts = {

        "fajar-terangi-dunia": {
            title: "Fajar Terangi Dunia",
            artist: "NDC Worship",

            description:
                "A sequencer originally made by request, now available exclusively through Tunetrack Play. Get the resource created for this song and bring it into your next service.",

            origin: "By request",
            resource: "Sequencer"
        },


        /* =================================================
           CONTOH PRODUK BERIKUTNYA

        "produk-lain": {
            title: "Produk Lain",
            artist: "Artist",
            description:
                "Description untuk produk ini.",

            origin: "By request",
            resource: "Sequencer"
        }

        ================================================= */
    };


    /* =====================================================
       READ PRODUCT FROM URL
    ===================================================== */

    const params = new URLSearchParams(window.location.search);

    const productId =
        params.get("product") || "fajar-terangi-dunia";

    const product =
        exclusiveProducts[productId];


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

        requestButton.disabled = true;

        requestButton.style.opacity = ".45";
        requestButton.style.cursor = "not-allowed";

        return;
    }


    /* =====================================================
       RENDER PRODUCT
    ===================================================== */

    titleElement.textContent =
        `${product.title}.`;

    descriptionElement.textContent =
        product.description;

    originElement.textContent =
        product.origin;

    resourceElement.textContent =
        product.resource;


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

        window.location.href = mailto;

    });

});