/* =========================================================
   TUNETRACK PAPERS
   TYPEWRITER + LOCOMOTIVE + HEADER HIDE + HOVER IMAGE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const header =
        document.getElementById("tnco-header");

    const scrollContainer =
        document.getElementById("scrollContainer");

    const heroTypewriter =
        document.getElementById("heroTypewriter");

    const blogHoverImage =
        document.getElementById("blogHoverImage");

    const blogHoverImageSrc =
        document.getElementById("blogHoverImageSrc");

    const blogItems =
        [...document.querySelectorAll(".blog-item")];


    /* =====================================================
       TYPEWRITER
    ===================================================== */

    const messages = [
        "wanna read some of our updates? 😌",
        "funfact: we start this brand within a day 🤯",
        "what u wanna do next? hmm 😏"
    ];

    let messageIndex = 0;

    const TYPE_SPEED = 48;
    const DELETE_SPEED = 30;
    const HOLD_TIME = 1900;


    function typeMessage(message, index = 0) {

        if (!heroTypewriter) return;

        heroTypewriter.textContent =
            message.slice(0, index);


        if (index < message.length) {

            const char =
                message.charAt(index);

            let delay = TYPE_SPEED;

            if (
                char === "," ||
                char === "." ||
                char === "?" ||
                char === "!"
            ) {
                delay = 120;
            }

            if (char === " ") {
                delay = 35;
            }

            setTimeout(() => {

                typeMessage(
                    message,
                    index + 1
                );

            }, delay);

            return;
        }


        setTimeout(() => {

            deleteMessage(
                message,
                message.length
            );

        }, HOLD_TIME);
    }


    function deleteMessage(message, index) {

        if (!heroTypewriter) return;

        if (index > 0) {

            heroTypewriter.textContent =
                message.slice(0, index - 1);

            const char =
                message.charAt(index - 1);

            let delay = DELETE_SPEED;

            if (
                char === "," ||
                char === "." ||
                char === "?" ||
                char === "!"
            ) {
                delay = 80;
            }

            setTimeout(() => {

                deleteMessage(
                    message,
                    index - 1
                );

            }, delay);

            return;
        }


        messageIndex =
            (messageIndex + 1) %
            messages.length;


        setTimeout(() => {

            typeMessage(
                messages[messageIndex]
            );

        }, 180);
    }


    /* START TYPEWRITER */

    if (heroTypewriter) {

        typeMessage(
            messages[messageIndex]
        );

    }


    /* =====================================================
       HEADER STATE
    ===================================================== */

    let lastScrollY = 0;


    function updateHeader(currentY) {

        const scrollY =
            Number(currentY) || 0;

        if (!header) return;


        /* TOP */

        if (scrollY <= 8) {

            header.classList.remove("hidden");

            lastScrollY = scrollY;

            return;
        }


        /* DOWN */

        if (scrollY > lastScrollY) {

            header.classList.add("hidden");

        }


        /* UP */

        else if (scrollY < lastScrollY) {

            header.classList.remove("hidden");

        }


        lastScrollY = scrollY;
    }


    /* =====================================================
       NATIVE SCROLL FALLBACK
    ===================================================== */

    function enableNativeScroll() {

        window.addEventListener(
            "scroll",
            () => {

                updateHeader(
                    window.scrollY
                );

            },
            {
                passive: true
            }
        );


        updateHeader(
            window.scrollY
        );
    }


    /* =====================================================
       LOCOMOTIVE
    ===================================================== */

    let locomotiveScroll = null;


    function initLocomotive() {

        if (
            !scrollContainer ||
            typeof LocomotiveScroll === "undefined"
        ) {

            enableNativeScroll();

            return;
        }


        try {

            locomotiveScroll =
                new LocomotiveScroll({

                    el: scrollContainer,

                    smooth: true,

                    lerp: 0.075,

                    multiplier: 1,

                    smartphone: {
                        smooth: true
                    },

                    tablet: {
                        smooth: true
                    }

                });


            locomotiveScroll.on(
                "scroll",
                (args) => {

                    if (
                        args &&
                        args.scroll
                    ) {

                        updateHeader(
                            args.scroll.y
                        );

                    }

                }
            );


            updateHeader(0);


            window.addEventListener(
                "load",
                () => {

                    setTimeout(() => {

                        if (locomotiveScroll) {

                            locomotiveScroll.update();

                        }

                    }, 500);

                }
            );


        } catch (error) {

            console.warn(
                "Locomotive Scroll could not initialize:",
                error
            );

            locomotiveScroll = null;

            enableNativeScroll();
        }
    }


    initLocomotive();


    /* =====================================================
       BLOG HOVER IMAGE
    ===================================================== */

    if (
        blogHoverImage &&
        blogHoverImageSrc
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;


        document.addEventListener(
            "mousemove",
            (event) => {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;

            },
            {
                passive: true
            }
        );


        function animateHoverImage() {

            currentX +=
                (mouseX - currentX) * 0.14;

            currentY +=
                (mouseY - currentY) * 0.14;


            blogHoverImage.style.left =
                `${currentX}px`;

            blogHoverImage.style.top =
                `${currentY}px`;


            requestAnimationFrame(
                animateHoverImage
            );
        }


        animateHoverImage();


        blogItems.forEach(
            (item) => {

                const image =
                    item.dataset.image;


                item.addEventListener(
                    "mouseenter",
                    () => {

                        if (!image) return;

                        blogHoverImageSrc.src =
                            image;

                        blogHoverImage.classList.add(
                            "visible"
                        );

                    }
                );


                item.addEventListener(
                    "mouseleave",
                    () => {

                        blogHoverImage.classList.remove(
                            "visible"
                        );

                    }
                );

            }
        );


        blogHoverImage.addEventListener(
            "transitionend",
            () => {

                if (
                    !blogHoverImage.classList.contains(
                        "visible"
                    )
                ) {

                    blogHoverImageSrc.src = "";
                }

            }
        );

    }


    /* =====================================================
       HEADER LIQUID GLASS
    ===================================================== */

    if (header) {

        header.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    header.getBoundingClientRect();


                const x =
                    ((event.clientX - rect.left) /
                        rect.width) * 100;


                const y =
                    ((event.clientY - rect.top) /
                        rect.height) * 100;


                header.style.setProperty(
                    "--tnco-mx",
                    `${x}%`
                );

                header.style.setProperty(
                    "--tnco-my",
                    `${y}%`
                );

                header.classList.add(
                    "tnco-liquid-active"
                );

            }
        );


        header.addEventListener(
            "mouseleave",
            () => {

                header.classList.remove(
                    "tnco-liquid-active"
                );

            }
        );

    }

});