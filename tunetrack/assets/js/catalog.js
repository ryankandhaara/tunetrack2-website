    /* =========================================================

    TUNETRACK PLAY — CATALOG JAVASCRIPT

    ========================================================= */

    (() => {

        "use strict";


        /* =========================================================
        CONFIG
        ========================================================= */

        const PER_PAGE = 9;


        /* =========================================================
        PRODUCTS
        ========================================================= */

    const products = [

            {
                title: "Fajar Terangi Dunia",
                artist: "Steve Tabalujan & Friends",
                price: "Exclusive Item",
                category: ["worship"],
                image: "https://static.qobuz.com/images/covers/sn/ru/n5aot3eaqrusn_600.jpg",
                imageCredit: "Assets of Steve Tabalujan & Friends",
                link: "#",
                youtube: "8VMIEMFqCbk",

                exclusive: true,
                exclusivePage: "exclusive.html"
            },

            {
                title: "Yang Terutama ft. Monita",
                artist: "Sovereign Worship",
                price: "IDR 120.000",
                category: ["worship", "freebies"],
                image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85",
                link: "pg-yangterutamasw2.html",
                youtube: ""
            },

            {
                title: "Puji dia Yesus Sukacitaku",
                artist: "Sovereign Worship",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85",
                link: "pg-penulishidupku.html",
                youtube: ""
            },

            {
                title: "Penulis Hidupku",
                artist: "NDC Worship",
                price: "IDR 120.000",
                category: ["praise", "freebies"],
                image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85",
                link: "pg-penulishidupku.html",
                youtube: ""
            },

            {
                title: "Yesus Kumenyembahmu Medley",
                artist: "NDC Worship",
                price: "IDR 120.000",
                category: ["worship"],
                image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=85",
                link: "http://lynk.id/gudangsequencer/43dpxgq5g8ox",
                youtube: ""
            },

            {
                title: "Lebih dari Pemenang",
                artist: "Sovereign Worship",
                price: "IDR 120.000",
                category: ["praise", "rearrangement", "freebies"],
                image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=85",
                link: "pg-sw-lebihdaripemenang.html",
                youtube: ""
            },

            {
                title: "Allah Sanggup",
                artist: "JPCC Worship",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/w08zo73m7y7z",
                youtube: ""
            },

            {
                title: "Sperti Bapa Sayang Anaknya",
                artist: "Sovereign Worship",
                price: "IDR 120.000",
                category: ["worship"],
                image: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/olm3qd20r82y",
                youtube: ""
            },

            {
                title: "Mari Menari 2.0",
                artist: "Sovereign Worship",
                price: "IDR 120.000",
                category: ["praise", "rearrangement"],
                image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/gw6onoo5meng",
                youtube: ""
            },

            {
                title: "Api Pantekosta Medley",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/m07l2dmr83n6",
                youtube: ""
            },

            {
                title: "Kecaplah dan Lihatlah",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise", "rearrangement"],
                image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/e5ke29g86jxd",
                youtube: ""
            },

            {
                title: "Bukti Kasih ft. UNDVD",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["worship"],
                image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/49zn00oe0207",
                youtube: ""
            },

            {
                title: "Trima kasih Tuhan",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["worship", "freebies"],
                image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/okx7yo67kwjo",
                youtube: ""
            },

            {
                title: "Tiap Langkahku",
                artist: "Gospel Project",
                price: "IDR 120.000",
                category: ["praise", "rearrangement"],
                image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/210x2gjnokle",
                youtube: ""
            },

            {
                title: "Allah sumber Kuatku",
                artist: "Gospel Project",
                price: "IDR 120.000",
                category: ["praise", "rearrangement"],
                image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/3v9kv95403qo",
                youtube: ""
            },

            {
                title: "Allah kita heran dan Besar",
                artist: "Gospel Project",
                price: "IDR 120.000",
                category: ["praise", "rearrangement"],
                image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/jn0p6yd769rm",
                youtube: ""
            },

            {
                title: "Friend of God",
                artist: "The Music Room Collective",
                price: "IDR 120.000",
                category: ["praise", "rearrangement"],
                image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/oykp3mvv9mwd",
                youtube: ""
            },

            {
                title: "O Come All ye Faithful",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["worship"],
                image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/17lew0wdoer0",
                youtube: ""
            },

            {
                title: "NOEL",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["worship"],
                image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/mryvlqgjw772",
                youtube: ""
            },

            {
                title: "Joy to the World 2017",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["worship"],
                image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/wmpg0404o2jv",
                youtube: ""
            },

            {
                title: "O Holy Night",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["worship"],
                image: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/lwzd17o9ew0q",
                youtube: ""
            },

            {
                title: "Silent Night",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["worship"],
                image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/1rzjn7n8edx2",
                youtube: ""
            },

            {
                title: "Angels We Have Heard On High",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/n3r1k444dr3n",
                youtube: ""
            },

            {
                title: "Hark",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/okn2roo0ojg1",
                youtube: ""
            },

            {
                title: "Its Christmas",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/vdngnrgkjkk1",
                youtube: ""
            },

            {
                title: "New Things Coming",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/6z1lyz9j4k12",
                youtube: ""
            },

            {
                title: "We Raise",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/woqlqdkedrzp",
                youtube: ""
            },

            {
                title: "Praise Opening",
                artist: "Gospel Worship",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/21lklwv7yg6l",
                youtube: ""
            },

            {
                title: "In Jesus Name Asia",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/523vkzqj9m9y",
                youtube: ""
            },

            {
                title: "This is the Day - Reimagined",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise", "rearrangement"],
                image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/nyxyzxqkpop4",
                youtube: ""
            },

            {
                title: "I Know You Can",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/9kqon61317me",
                youtube: ""
            },

            {
                title: "Real Love - HxL 25",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/x9rv4o160kp0",
                youtube: ""
            },

            {
                title: "Holy Forever",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["worship"],
                image: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/l9w339mkkzy3",
                youtube: ""
            },

            {
                title: "Fill the Room",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/wxv3d8lmk9y1",
                youtube: ""
            },

            {
                title: "Now Aint that Something",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/j6p02601zn32",
                youtube: ""
            },

            {
                title: "Goodbye Yesterday",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/qe85oo2xz88l",
                youtube: ""
            },

            {
                title: "Real Love",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/x02go3dy0dwg",
                youtube: ""
            },

            {
                title: "O Come Medley Carol of The Bells",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/k67pqnk1xd1j",
                youtube: ""
            },

            {
                title: "In Jesus Name",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/592pl7k9qm8r",
                youtube: ""
            },

            {
                title: "I Speak Jesus",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["worship"],
                image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/o4xzq3zdg36w",
                youtube: ""
            },

            {
                title: "This is the Day",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/3417ervkxq64",
                youtube: ""
            },

            {
                title: "You Are Good (in LA)",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/glq0d71pdrq5",
                youtube: ""
            },

            {
                title: "You Are Good",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/9248oz68oz1z",
                youtube: ""
            },

            {
                title: "Impossible Possible",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/q20wwz5p6kpv",
                youtube: ""
            },

            {
                title: "Echo",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/r054qee22vrz",
                youtube: ""
            },

            {
                title: "In Jesus Name",
                artist: "DOE",
                price: "IDR 120.000",
                category: ["praise", "rearrangement"],
                image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/36v97ozy1n7x",
                youtube: ""
            },

            {
                title: "KAMSAHAMNIDA",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/0nv6vwezvy75",
                youtube: ""
            },

            {
                title: "This is our Time",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/0v3m7n37r606",
                youtube: ""
            },

            {
                title: "Trust in God",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["worship"],
                image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/32jn4zewe1n3",
                youtube: ""
            },

            {
                title: "Terangmu",
                artist: "Lifeline",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/d3rgvnx61v3m",
                youtube: ""
            },

            {
                title: "Selidiki Aku",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["worship"],
                image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/3o3z826jojwr",
                youtube: ""
            },

            {
                title: "Nyata Sempurna",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["worship"],
                image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/ovro6541or6g",
                youtube: ""
            },

            {
                title: "Hari Terbaik",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/p5xjj25e22g1",
                youtube: ""
            },

            {
                title: "Bangkit dan Puji Dia",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/zkddzxk1xwk9",
                youtube: ""
            },

            {
                title: "Berserah Penuh",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["worship"],
                image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/rp2x7v3v652p",
                youtube: ""
            },

            {
                title: "Raja atas Sgalanya",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["worship"],
                image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/mwjr892o57lk",
                youtube: ""
            },

            {
                title: "Sejarah Hidupku",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["worship"],
                image: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/v5wwqmno7n72",
                youtube: ""
            },

            {
                title: "Bukti Kasihmu",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["worship"],
                image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/pq0l8or7m184",
                youtube: ""
            },

            {
                title: "Tempat Pertama",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/nywv21v0k6x8",
                youtube: ""
            },

            {
                title: "Serukan Namanya",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/g4yl32on4kod",
                youtube: ""
            },

            {
                title: "Satu Persembahan",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/vrdn2qwpr515",
                youtube: ""
            },

            {
                title: "Kuteringat",
                artist: "Sovereign Worship",
                price: "IDR 120.000",
                category: ["praise", "freebies"],
                image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/6qk6ldgroy1g",
                youtube: ""
            },

            {
                title: "Dia Raja",
                artist: "Worshipnite",
                price: "IDR 120.000",
                category: ["praise", "rearrangement"],
                image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/pr4211y82ye2",
                youtube: ""
            },

            {
                title: "Praise",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise", "freebies"],
                image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/1o35kj6v9jm3",
                youtube: ""
            },

            {
                title: "Aku Diberkati 2025 Remix",
                artist: "Tunetrack",
                price: "IDR 120.000",
                category: ["praise", "rearrangement"],
                image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/lj309y3vnpvd",
                youtube: ""
            },

            {
                title: "Nyalakan Apimu",
                artist: "New Life Church",
                price: "IDR 120.000",
                category: ["praise", "rearrangement"],
                image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/vp0xlye26vjk",
                youtube: ""
            },

            {
                title: "Kunaikkan Syukurku 2025",
                artist: "Sovereign Worship",
                price: "IDR 120.000",
                category: ["praise", "rearrangement"],
                image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/lwelm3rlddgk",
                youtube: ""
            },

            {
                title: "NDC - Christmas 2024 Medley",
                artist: "NDC Worship",
                price: "IDR 120.000",
                category: ["praise", "rearrangement"],
                image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/vkvoex2704zq",
                youtube: ""
            },

            {
                title: "Ajaib kau Tuhan",
                artist: "NDC Youth",
                price: "IDR 120.000",
                category: ["praise", "rearrangement"],
                image: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/0vdrz2krz9rn",
                youtube: ""
            },

            {
                title: "Endless Praise",
                artist: "Recording Collective",
                price: "IDR 120.000",
                category: ["praise"],
                image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/p1d6okxxd054",
                youtube: ""
            },

            {
                title: "Oleh Darah Anak Domba",
                artist: "NDC Youth",
                price: "IDR 120.000",
                category: ["praise", "rearrangement"],
                image: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1000&q=85",
                link: "https://lynk.id/gudangsequencer/l20mv78q6y56",
                youtube: ""
            }

        ];

        /* =========================================================
        STATE
        ========================================================= */

        let currentPage = 1;
        let currentFilter = "all";
        let currentSearch = "";

        let currentProduct = null;

        /* =========================================================
        INITIALIZE
        ========================================================= */

        function init() {

            const grid =
                document.getElementById("catalogGrid");

            const pagination =
                document.getElementById("pagination");

            const searchInput =
                document.getElementById("searchInput");

            const filters = [
                ...document.querySelectorAll(".filter")
            ];

            const modal =
                document.getElementById("productModal");

            const modalClose =
                document.getElementById("modalClose");

            const modalImage =
                document.getElementById("modalImage");

            const modalTitle =
                document.getElementById("modalTitle");

            const modalArtist =
                document.getElementById("modalArtist");

            const modalPrice =
                document.getElementById("modalPrice");

            const modalBuy =
                document.getElementById("modalBuy");

            const modalCourtesy =
                document.getElementById("modalCourtesy");

            const mobilePageSelect =
                document.getElementById("mobilePageSelect");

            const resourceCount =
                document.getElementById("resourceCount");


            /* =====================================================
            REQUIRED ELEMENT CHECK
            ===================================================== */

            if (!grid) {

                console.error(
                    "Tunetrack Play: #catalogGrid tidak ditemukan."
                );

                return;
            }


            /* =====================================================
            RESOURCE COUNTER
            ===================================================== */

            function animateResourceCount() {

                if (!resourceCount) {
                    return;
                }

                const target =
                    products.length;

                const duration =
                    2200;

                const startValue =
                    0;

                const startTime =
                    performance.now();


                function updateCounter(currentTime) {

                    const elapsed =
                        currentTime -
                        startTime;

                    const progress =
                        Math.min(
                            elapsed / duration,
                            1
                        );

                    const eased =
                        1 -
                        Math.pow(
                            1 - progress,
                            4
                        );

                    const value =
                        Math.round(
                            startValue +
                            (
                                target -
                                startValue
                            ) *
                            eased
                        );

                    resourceCount.textContent =
                        value;


                    if (progress < 1) {

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        resourceCount.textContent =
                            target;

                    }

                }


                resourceCount.textContent =
                    "0";

                requestAnimationFrame(
                    updateCounter
                );
            }


            /* =====================================================
            FILTER + SEARCH
            ===================================================== */

            function getFilteredProducts() {

                const query =
                    currentSearch
                        .trim()
                        .toLowerCase();


                return products.filter(
                    product => {

                        const filterMatch =
                            currentFilter === "all" ||
                            product.category.includes(
                                currentFilter
                            );


                        if (!filterMatch) {
                            return false;
                        }


                        if (!query) {
                            return true;
                        }


                        return (
                            product.title
                                .toLowerCase()
                                .includes(query)

                            ||

                            product.artist
                                .toLowerCase()
                                .includes(query)
                        );

                    }
                );

            }


            /* =====================================================
            CARD TEMPLATE
            ===================================================== */

            function cardTemplate(
                product,
                index
            ) {

                return `
                    <article
                        class="card"
                        data-index="${index}"
                        tabindex="0"
                        aria-label="${product.title}"
                    >

                        <div class="card-image">

                            <img
                                src="${product.image}"
                                alt=""
                                loading="lazy"
                                decoding="async"
                            >

                                <span
                                    style="
                                        position:absolute;
                                        right:12px;
                                        bottom:10px;
                                        z-index:5;
                                        font-size:7px;
                                        line-height:1;
                                        font-weight:500;
                                        letter-spacing:.03em;
                                        color:rgba(255,255,255,.72);
                                        text-shadow:0 1px 6px rgba(0,0,0,.65);
                                        pointer-events:none;
                                        white-space:nowrap;
                                    "
                                >
                                    Assets of ${product.artist}
                                </span>

                                <span
                                    class="play"
                                    aria-hidden="true"
                                >

                                <svg
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >

                                    <path
                                        d="m7 5 7 5-7 5V5Z"
                                        fill="currentColor"
                                    />

                                </svg>

                            </span>

                        </div>


                        <div class="card-info">

                            <div>

                                <h2 class="card-title">
                                    ${product.title}
                                </h2>

                                <p class="card-artist">
                                    ${product.artist}
                                </p>

                            </div>


                            <div class="card-bottom">

                                <span class="card-price">
                                    ${product.price}
                                </span>


                                <span class="card-arrow">

                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >

                                        <path
                                            d="m7 4 6 6-6 6"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />

                                    </svg>

                                </span>

                            </div>

                        </div>

                    </article>
                `;

            }


            /* =====================================================
            PAGINATION
            ===================================================== */

            function renderPagination(
                totalPages
            ) {

                if (!pagination) {
                    return;
                }


                requestAnimationFrame(
                    () => {

                        if (
                            window.loco &&
                            typeof window.loco.update ===
                            "function"
                        ) {

                            window.loco.update();

                        }

                    }
                );


                pagination.innerHTML =
                    "";


                if (totalPages <= 1) {

                    pagination.style.display =
                        "none";

                } else {

                    pagination.style.display =
                        "flex";

                }


                function addButton(
                    label,
                    page,
                    active = false
                ) {

                    const button =
                        document.createElement(
                            "button"
                        );

                    button.className =
                        "page-btn" +
                        (
                            active
                                ? " active"
                                : ""
                        );

                    button.type =
                        "button";

                    button.textContent =
                        label;


                    button.addEventListener(
                        "click",
                        () => {

                            if (
                                page ===
                                currentPage
                            ) {
                                return;
                            }


                            currentPage =
                                page;

                            render();


                            requestAnimationFrame(
                                () => {

                                    if (
                                        window.loco &&
                                        typeof window.loco.scrollTo ===
                                        "function"
                                    ) {

                                        window.loco.scrollTo(
                                            0,
                                            {
                                                duration:650,
                                                disableLerp:false
                                            }
                                        );

                                    } else {

                                        window.scrollTo({
                                            top:0,
                                            behavior:"smooth"
                                        });

                                    }

                                }
                            );

                        }
                    );


                    pagination.appendChild(
                        button
                    );

                }


                /* =============================================
                DESKTOP PAGINATION
                ============================================= */

                if (totalPages <= 4) {

                    for (
                        let i = 1;
                        i <= totalPages;
                        i++
                    ) {

                        addButton(
                            String(i).padStart(
                                2,
                                "0"
                            ),
                            i,
                            i === currentPage
                        );

                    }

                } else if (
                    currentPage <= 2
                ) {

                    /*
                    * PAGE 1 / 2
                    *
                    * 01 02 03 ... Last
                    */

                    addButton(
                        "01",
                        1,
                        currentPage === 1
                    );

                    addButton(
                        "02",
                        2,
                        currentPage === 2
                    );

                    addButton(
                        "03",
                        3,
                        currentPage === 3
                    );


                    const dots =
                        document.createElement(
                            "span"
                        );

                    dots.className =
                        "pagination-dots";

                    dots.textContent =
                        "…";

                    pagination.appendChild(
                        dots
                    );


                    addButton(
                        "Last",
                        totalPages,
                        currentPage === totalPages
                    );

            } else if (
                currentPage >=
                totalPages - 2
            ) {

                /*
                * LAST PAGES
                *
                * 01 ... 07 08 09
                */

                addButton(
                    currentPage === totalPages
                        ? "First"
                        : "01",
                    1,
                    false
                );


                const dots =
                    document.createElement(
                        "span"
                    );

                dots.className =
                    "pagination-dots";

                dots.textContent =
                    "…";

                pagination.appendChild(
                    dots
                );


                addButton(
                    String(
                        totalPages - 2
                    ).padStart(
                        2,
                        "0"
                    ),
                    totalPages - 2,
                    currentPage ===
                    totalPages - 2
                );

                addButton(
                    String(
                        totalPages - 1
                    ).padStart(
                        2,
                        "0"
                    ),
                    totalPages - 1,
                    currentPage ===
                    totalPages - 1
                );

                addButton(
                    String(
                        totalPages
                    ).padStart(
                        2,
                        "0"
                    ),
                    totalPages,
                    currentPage ===
                    totalPages
                );

            }


                /* =============================================
                MOBILE PAGE SELECT
                ============================================= */

                if (mobilePageSelect) {

                    mobilePageSelect.innerHTML =
                        "";


                    for (
                        let i = 1;
                        i <= totalPages;
                        i++
                    ) {

                        const option =
                            document.createElement(
                                "option"
                            );

                        option.value =
                            i;

                        option.textContent =
                            `Page ${String(i).padStart(2,"0")}`;

                        option.selected =
                            i === currentPage;


                        mobilePageSelect.appendChild(
                            option
                        );

                    }

                }

            }


            /* =====================================================
            RENDER
            ===================================================== */

            function render() {

                const filtered =
                    getFilteredProducts();


                const totalPages =
                    Math.max(
                        1,
                        Math.ceil(
                            filtered.length /
                            PER_PAGE
                        )
                    );


                if (
                    currentPage >
                    totalPages
                ) {

                    currentPage =
                        totalPages;

                }


                const start =
                    (
                        currentPage -
                        1
                    ) *
                    PER_PAGE;


                const visible =
                    filtered.slice(
                        start,
                        start + PER_PAGE
                    );


                grid.innerHTML =
                    visible
                        .map(
                            (
                                product,
                                index
                            ) =>
                                cardTemplate(
                                    product,
                                    start + index
                                )
                        )
                        .join("");


                renderPagination(
                    totalPages
                );


                /* =============================================
                CARD ENTRANCE REVEAL
                ============================================= */

                requestAnimationFrame(
                    () => {

                        const cards =
                            [
                                ...grid.querySelectorAll(
                                    ".card"
                                )
                            ];


                        cards.forEach(
                            (
                                card,
                                index
                            ) => {

                                setTimeout(
                                    () => {

                                        card.classList.add(
                                            "revealed"
                                        );

                                    },
                                    Math.min(
                                        index * 55,
                                        360
                                    )
                                );

                            }
                        );

                    }
                );

            }


            /* =====================================================
            OPEN PRODUCT MODAL
            ===================================================== */

            function openProduct(
                product
            ) {

                if (!modal) {
                    return;
                }


                currentProduct =
                    product;


                if (modalImage) {

                    modalImage.src =
                        product.image;

                }


                if (modalTitle) {

                    modalTitle.textContent =
                        product.title;

                }


                if (modalArtist) {

                    modalArtist.textContent =
                        product.artist;

                }


                if (modalPrice) {

                    modalPrice.textContent =
                        product.price;

                }


                if (modalCourtesy) {

                    modalCourtesy.textContent =
                        product.artist;

                        
                }

                if (
                    product.exclusive ===
                    true
                ) {

                    modalBuy.textContent =
                        "Get This Product";

                    modalBuy.href =
                        product.exclusivePage +
                        "?product=" +
                        encodeURIComponent(
                            product.title
                        );

                    modalBuy.target =
                        "_self";

                } else {

                    modalBuy.textContent =
                        "Get this Product";

                    modalBuy.href =
                        product.link;

                    modalBuy.target =
                        "_blank";

                }


                modal.classList.add(
                    "open"
                );


                modal.setAttribute(
                    "aria-hidden",
                    "false"
                );


                document.body.style.overflow =
                    "hidden";

            }


            /* =====================================================
            CLOSE PRODUCT MODAL
            ===================================================== */

            function closeProduct() {

                if (!modal) {
                    return;
                }


                modal.classList.remove(
                    "open"
                );


                modal.setAttribute(
                    "aria-hidden",
                    "true"
                );


                document.body.style.overflow =
                    "";


                stopPreview();


                currentProduct =
                    null;

            }


            /* =====================================================
            CARD CLICK
            ===================================================== */

            grid.addEventListener(
                "click",
                event => {

                    const card =
                        event.target.closest(
                            ".card"
                        );


                    if (!card) {
                        return;
                    }


                    const index =
                        Number(
                            card.dataset.index
                        );


                    const filtered =
                        getFilteredProducts();


                    const product =
                        filtered[index];


                    if (!product) {
                        return;
                    }


                    event.preventDefault();


                    openProduct(
                        product
                    );

                }
            );


            /* =====================================================
            CARD KEYBOARD
            ===================================================== */

            grid.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key !== "Enter" &&
                        event.key !== " "
                    ) {
                        return;
                    }


                    const card =
                        event.target.closest(
                            ".card"
                        );


                    if (!card) {
                        return;
                    }


                    event.preventDefault();


                    const index =
                        Number(
                            card.dataset.index
                        );


                    const filtered =
                        getFilteredProducts();


                    const product =
                        filtered[index];


                    if (product) {

                        openProduct(
                            product
                        );

                    }

                }
            );


            /* =====================================================
            FILTER BUTTONS
            ===================================================== */

            filters.forEach(
                button => {

                    button.addEventListener(
                        "click",
                        () => {

                            filters.forEach(
                                item =>
                                    item.classList.remove(
                                        "active"
                                    )
                            );


                            button.classList.add(
                                "active"
                            );


                            currentFilter =
                                button.dataset.filter ||
                                "all";


                            currentPage =
                                1;


                            render();

                        }
                    );

                }
            );


            /* =====================================================
            SEARCH
            ===================================================== */

            if (searchInput) {

                let searchTimer;


                searchInput.addEventListener(
                    "input",
                    event => {

                        clearTimeout(
                            searchTimer
                        );


                        searchTimer =
                            setTimeout(
                                () => {

                                    currentSearch =
                                        event.target.value;


                                    currentPage =
                                        1;


                                    render();

                                },
                                120
                            );

                    }
                );

            }


            /* =====================================================
            MOBILE PAGE SELECT
            ===================================================== */

            if (mobilePageSelect) {

                mobilePageSelect.addEventListener(
                    "change",
                    event => {

                        currentPage =
                            Number(
                                event.target.value
                            );


                        render();


                        requestAnimationFrame(
                            () => {

                                if (
                                    window.loco &&
                                    typeof window.loco.scrollTo ===
                                    "function"
                                ) {

                                    window.loco.scrollTo(
                                        0,
                                        {
                                            duration:650,
                                            disableLerp:false
                                        }
                                    );

                                } else {

                                    window.scrollTo({
                                        top:0,
                                        behavior:"smooth"
                                    });

                                }

                            }
                        );

                    }
                );

            }


            /* =====================================================
            MODAL EVENTS
            ===================================================== */

            if (modalClose) {

                modalClose.addEventListener(
                    "click",
                    closeProduct
                );

            }


            if (modal) {

                modal.addEventListener(
                    "click",
                    event => {

                        if (
                            event.target ===
                            modal
                        ) {

                            closeProduct();

                        }

                    }
                );

            }


            document.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key ===
                        "Escape"
                    ) {

                        closeProduct();

                    }

                }
            );


            /* =====================================================
            LOCOMOTIVE SCROLL
            ===================================================== */

            function initSmoothScroll() {

                if (
                    !window.LocomotiveScroll
                ) {
                    return;
                }


                const container =
                    document.querySelector(
                        "[data-scroll-container]"
                    );


                if (!container) {
                    return;
                }


                if (window.loco) {

                    try {

                        window.loco.destroy();

                    } catch (error) {}


                    window.loco =
                        null;

                }


                window.loco =
                    new LocomotiveScroll({

                        el:container,

                        smooth:true,

                        lerp:0.085,

                        multiplier:1,

                        smartphone:{
                            smooth:true,
                            lerp:0.1
                        },

                        tablet:{
                            smooth:true,
                            lerp:0.1
                        }

                    });

            }


            /* =====================================================
            INITIAL PAGE
            ===================================================== */

            animateResourceCount();

            render();


            /* =====================================================
            FORCE HERO REVEAL
            ===================================================== */

            document.body.classList.add(
                "is-ready"
            );


            requestAnimationFrame(
                () => {

                    requestAnimationFrame(
                        () => {

                            document.body.classList.add(
                                "is-ready"
                            );

                        }
                    );

                }
            );


            /* =====================================================
            INIT LOCOMOTIVE
            ===================================================== */

            requestAnimationFrame(
                () => {

                    initSmoothScroll();


                    setTimeout(
                        () => {

                            if (
                                window.loco &&
                                typeof window.loco.update ===
                                "function"
                            ) {

                                window.loco.update();

                            }

                        },
                        150
                    );

                }
            );

        }


        /* =========================================================
        DOM READY
        ========================================================= */

        if (
            document.readyState ===
            "loading"
        ) {

            document.addEventListener(
                "DOMContentLoaded",
                init,
                {
                    once:true
                }
            );

        } else {

            init();

        }

    })();


    /* =========================================================
    TNCO CURRENCY SELECTOR

    IMPORTANT:
    This block is intentionally independent
    from the catalog IIFE above.

    ========================================================= */

    (() => {

        "use strict";


        /* =====================================================
        CONFIG
        ===================================================== */

        const API =
            "https://api.frankfurter.dev/v2";


        const QUICK_CURRENCIES = [
            "IDR",
            "USD",
            "MYR",
            "GBP"
        ];


        const SYMBOLS = {

            IDR:"Rp",
            USD:"$",
            MYR:"RM",
            GBP:"£",

            EUR:"€",
            JPY:"¥",
            CNY:"¥",
            KRW:"₩",
            SGD:"S$",
            AUD:"A$",
            CAD:"C$",
            NZD:"NZ$",
            CHF:"CHF",
            THB:"฿",
            PHP:"₱",
            INR:"₹",
            VND:"₫",
            HKD:"HK$",
            TWD:"NT$"

        };


        /* =====================================================
        STATE
        ===================================================== */

        let currencies = [];

        const rateCache = {};

        let activeCurrency =
            "IDR";

        let baseIDRAmount =
            0;

        let trigger =
            null;

        let picker =
            null;

        let searchInput =
            null;

        let currencyList =
            null;

        let priceElement =
            null;

        let modalElement =
            null;

        let suppressPriceObserver =
            false;


        /* =====================================================
        FORMAT ORIGINAL IDR
        ===================================================== */

        function parseIDR(
            value
        ) {

            if (!value) {
                return 0;
            }


            const clean =
                String(value)
                    .replace(
                        /IDR/gi,
                        ""
                    )
                    .replace(
                        /[^0-9]/g,
                        ""
                    );


            return Number(
                clean
            ) || 0;

        }


        /* =====================================================
        CREATE UI
        ===================================================== */

        function createCurrencyUI() {

            priceElement =
                document.getElementById(
                    "modalPrice"
                );


            modalElement =
                document.getElementById(
                    "productModal"
                );


            if (
                !priceElement ||
                !modalElement
            ) {
                return false;
            }


            /*
            * Prevent duplicate creation.
            */

            if (
                document.getElementById(
                    "tncoCurrencyPicker"
                )
            ) {

                picker =
                    document.getElementById(
                        "tncoCurrencyPicker"
                    );

                trigger =
                    document.querySelector(
                        ".tnco-currency-trigger"
                    );

                searchInput =
                    picker.querySelector(
                        ".tnco-currency-search"
                    );

                currencyList =
                    picker.querySelector(
                        ".tnco-currency-list"
                    );

                return true;

            }


            /* =================================================
            PRICE WRAPPER
            ================================================= */

            const parent =
                priceElement.parentElement;


            if (!parent) {
                return false;
            }


            const wrap =
                document.createElement(
                    "div"
                );


            wrap.className =
                "tnco-price-wrap";


            parent.insertBefore(
                wrap,
                priceElement
            );


            wrap.appendChild(
                priceElement
            );


            /* =================================================
            TRIGGER
            ================================================= */

            trigger =
                document.createElement(
                    "button"
                );


            trigger.type =
                "button";


            trigger.className =
                "tnco-currency-trigger";


            trigger.setAttribute(
                "aria-label",
                "Choose currency"
            );


            trigger.innerHTML = `

                <span
                    class="tnco-currency-trigger-code"
                >
                    IDR
                </span>

                <span
                    class="tnco-currency-chevron"
                    aria-hidden="true"
                ></span>

            `;


            wrap.appendChild(
                trigger
            );


            /* =================================================
            PICKER
            
            IMPORTANT:
            Picker goes into BODY.
            
            This prevents modal overflow,
            transform, and positioning problems.
            ================================================= */

            picker =
                document.createElement(
                    "div"
                );


            picker.id =
                "tncoCurrencyPicker";


            picker.className =
                "tnco-currency-picker";


            picker.innerHTML = `

                <div
                    class="tnco-currency-search-wrap"
                >

                    <input
                        class="tnco-currency-search"
                        type="search"
                        autocomplete="off"
                        spellcheck="false"
                        placeholder="Search currency..."
                    >

                    <button
                        type="button"
                        class="tnco-currency-search-clear"
                        aria-label="Clear search"
                    >
                        ×
                    </button>

                </div>


                <div
                    class="tnco-currency-list"
                ></div>

            `;


            document.body.appendChild(
                picker
            );


            searchInput =
                picker.querySelector(
                    ".tnco-currency-search"
                );


            currencyList =
                picker.querySelector(
                    ".tnco-currency-list"
                );


            /* =================================================
            TRIGGER CLICK
            ================================================= */

            trigger.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    event.stopPropagation();


                    if (
                        picker.classList.contains(
                            "is-open"
                        )
                    ) {

                        closePicker();

                    } else {

                        openPicker();

                    }

                }
            );


            /* =================================================
            SEARCH
            ================================================= */

            searchInput.addEventListener(
                "input",
                () => {

                    renderCurrencies(
                        searchInput.value
                    );

                }
            );


            /* =================================================
            CLEAR SEARCH
            ================================================= */

            const clearButton =
                picker.querySelector(
                    ".tnco-currency-search-clear"
                );


            clearButton.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    event.stopPropagation();


                    searchInput.value =
                        "";


                    renderCurrencies();


                    searchInput.focus();

                }
            );


            /* =================================================
            PICKER CLICK
            ================================================= */

            picker.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                }
            );


            /* =================================================
            OUTSIDE CLICK
            ================================================= */

            document.addEventListener(
                "click",
                event => {

                    if (
                        !picker ||
                        !trigger
                    ) {
                        return;
                    }


                    if (
                        picker.contains(
                            event.target
                        ) ||
                        trigger.contains(
                            event.target
                        )
                    ) {
                        return;
                    }


                    closePicker();

                }
            );


            /* =================================================
            ESC
            ================================================= */

            document.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key ===
                        "Escape"
                    ) {

                        closePicker();

                    }

                }
            );


            /* =================================================
            POSITION UPDATE
            ================================================= */

            window.addEventListener(
                "resize",
                () => {

                    if (
                        picker &&
                        picker.classList.contains(
                            "is-open"
                        )
                    ) {

                        positionPicker();

                    }

                }
            );


            window.addEventListener(
                "scroll",
                () => {

                    if (
                        picker &&
                        picker.classList.contains(
                            "is-open"
                        )
                    ) {

                        positionPicker();

                    }

                },
                true
            );


            /* =================================================
            INITIAL PRICE
            ================================================= */

            if (
                parseIDR(
                    priceElement.textContent
                )
            ) {

                baseIDRAmount =
                    parseIDR(
                        priceElement.textContent
                    );

            }


            renderCurrencies();


            return true;

        }


        /* =====================================================
        POSITION
        ===================================================== */

        function positionPicker() {

            if (
                !picker ||
                !trigger
            ) {
                return;
            }


            const rect =
                trigger.getBoundingClientRect();


            const width =
                Math.min(
                    300,
                    window.innerWidth - 24
                );


            picker.style.width =
                `${width}px`;


            /*
            * Align picker right edge
            * with trigger right edge.
            */

            let left =
                rect.right -
                width;


            let top =
                rect.bottom +
                10;


            /*
            * Horizontal safety.
            */

            left =
                Math.max(
                    12,
                    Math.min(
                        left,
                        window.innerWidth -
                        width -
                        12
                    )
                );


            /*
            * Vertical safety.
            */

            const pickerHeight =
                picker.offsetHeight ||
                320;


            if (
                top +
                pickerHeight >
                window.innerHeight -
                12
            ) {

                top =
                    rect.top -
                    pickerHeight -
                    10;

            }


            top =
                Math.max(
                    12,
                    top
                );


            picker.style.left =
                `${left}px`;


            picker.style.top =
                `${top}px`;

        }


        /* =====================================================
        OPEN
        ===================================================== */

        function openPicker() {

            if (
                !picker ||
                !trigger
            ) {
                return;
            }


            renderCurrencies();


            picker.classList.add(
                "is-open"
            );


            trigger.classList.add(
                "is-open"
            );


            positionPicker();


            requestAnimationFrame(
                () => {

                    positionPicker();

                }
            );


            setTimeout(
                () => {

                    if (searchInput) {

                        searchInput.focus();

                    }

                },
                50
            );

        }


        /* =====================================================
        CLOSE
        ===================================================== */

        function closePicker() {

            if (!picker) {
                return;
            }


            picker.classList.remove(
                "is-open"
            );


            if (trigger) {

                trigger.classList.remove(
                    "is-open"
                );

            }

        }


        /* =====================================================
        LOAD CURRENCIES
        ===================================================== */

        async function loadCurrencies() {

            try {

                const response =
                    await fetch(
                        `${API}/currencies`
                    );


                if (!response.ok) {

                    throw new Error(
                        "Currency list request failed"
                    );

                }


                const data =
                    await response.json();


                /*
                * Normalize Frankfurter v2
                * currency objects.
                */

                if (
                    Array.isArray(data)
                ) {

                    currencies =
                        data
                            .map(
                                item => {

                                    const code =
                                        String(
                                            item.iso_code ||
                                            ""
                                        )
                                            .toUpperCase();


                                    return {

                                        code,

                                        name:
                                            item.name ||
                                            code,

                                        symbol:
                                            item.symbol ||
                                            SYMBOLS[
                                                code
                                            ] ||
                                            code

                                    };

                                }
                            )
                            .filter(
                                item =>
                                    item.code
                            );

                } else {

                    currencies =
                        [];

                }


                /*
                * Make sure our four defaults
                * are always available.
                */

                QUICK_CURRENCIES
                    .forEach(
                        code => {

                            if (
                                !currencies.some(
                                    item =>
                                        item.code ===
                                        code
                                )
                            ) {

                                currencies.push({

                                    code,

                                    name:
                                        code === "IDR"
                                            ? "Indonesian Rupiah"
                                            : code === "USD"
                                                ? "United States Dollar"
                                                : code === "MYR"
                                                    ? "Malaysian Ringgit"
                                                    : "British Pound",

                                    symbol:
                                        SYMBOLS[
                                            code
                                        ] || code

                                });

                            }

                        }
                    );


                renderCurrencies(
                    searchInput
                        ? searchInput.value
                        : ""
                );


            } catch (error) {

                console.warn(
                    "Tunetrack currency list failed:",
                    error
                );


                /*
                * Fallback.
                */

                currencies =
                    QUICK_CURRENCIES.map(
                        code => ({

                            code,

                            name:
                                code === "IDR"
                                    ? "Indonesian Rupiah"
                                    : code === "USD"
                                        ? "United States Dollar"
                                        : code === "MYR"
                                            ? "Malaysian Ringgit"
                                            : "British Pound",

                            symbol:
                                SYMBOLS[
                                    code
                                ] || code

                        })
                    );


                renderCurrencies();

            }

        }


        /* =====================================================
        RENDER CURRENCIES
        ===================================================== */

        function renderCurrencies(
            query = ""
        ) {

            if (!currencyList) {
                return;
            }


            const q =
                String(query)
                    .trim()
                    .toLowerCase();


            let results;


            /*
            * No search:
            * only 4 requested currencies.
            */

            if (!q) {

                results =
                    QUICK_CURRENCIES
                        .map(
                            code =>
                                currencies.find(
                                    item =>
                                        item.code ===
                                        code
                                )
                        )
                        .filter(Boolean);

            } else {

                /*
                * Search everything.
                */

                results =
                    currencies.filter(
                        currency => {

                            const code =
                                currency.code
                                    .toLowerCase();

                            const name =
                                currency.name
                                    .toLowerCase();

                            const symbol =
                                String(
                                    currency.symbol ||
                                    ""
                                )
                                    .toLowerCase();


                            return (
                                code.includes(q) ||
                                name.includes(q) ||
                                symbol.includes(q)
                            );

                        }
                    );

            }


            if (!results.length) {

                currencyList.innerHTML = `

                    <div
                        class="tnco-currency-empty"
                    >
                        No currency found
                    </div>

                `;

                return;

            }


            currencyList.innerHTML =
                results
                    .map(
                        currency => {

                            const selected =
                                currency.code ===
                                activeCurrency;


                            return `

                                <button
                                    type="button"
                                    class="
                                        tnco-currency-item
                                        ${selected ? "is-selected" : ""}
                                    "
                                    data-currency="${currency.code}"
                                >

                                    <span
                                        class="tnco-currency-symbol"
                                    >
                                        ${currency.symbol}
                                    </span>


                                    <span
                                        class="tnco-currency-name"
                                    >

                                        <span
                                            class="tnco-currency-code"
                                        >
                                            ${currency.code}
                                        </span>

                                        <span
                                            class="tnco-currency-full"
                                        >
                                            ${currency.name}
                                        </span>

                                    </span>


                                    <span
                                        class="tnco-currency-mark"
                                    >
                                        ${selected ? "✓" : ""}
                                    </span>

                                </button>

                            `;

                        }
                    )
                    .join("");


            currencyList
                .querySelectorAll(
                    ".tnco-currency-item"
                )
                .forEach(
                    item => {

                        item.addEventListener(
                            "click",
                            async event => {

                                event.preventDefault();

                                event.stopPropagation();


                                await selectCurrency(
                                    item.dataset.currency
                                );

                            }
                        );

                    }
                );

        }


        /* =====================================================
        GET RATE
        ===================================================== */

        async function getRate(
            currency
        ) {

            if (
                currency ===
                "IDR"
            ) {

                return 1;

            }


            if (
                rateCache[currency]
            ) {

                return rateCache[
                    currency
                ];

            }


            const response =
                await fetch(
                    `${API}/rate/IDR/${currency}`
                );


            if (!response.ok) {

                throw new Error(
                    `Rate failed: IDR → ${currency}`
                );

            }


            const data =
                await response.json();


            const rate =
                Number(
                    data.rate
                );


            if (
                !Number.isFinite(rate) ||
                rate <= 0
            ) {

                throw new Error(
                    "Invalid currency rate"
                );

            }


            rateCache[currency] =
                rate;


            return rate;

        }


        /* =====================================================
        FORMAT
        ===================================================== */

        function formatPrice(
            amount,
            currency
        ) {

            const info =
                currencies.find(
                    item =>
                        item.code ===
                        currency
                );


            const symbol =
                (
                    info &&
                    info.symbol
                ) ||
                SYMBOLS[
                    currency
                ] ||
                currency;


            const noDecimals =
                [
                    "IDR",
                    "JPY",
                    "KRW",
                    "VND"
                ].includes(
                    currency
                );


            const formatted =
                new Intl.NumberFormat(
                    undefined,
                    {
                        minimumFractionDigits:
                            noDecimals
                                ? 0
                                : 2,

                        maximumFractionDigits:
                            noDecimals
                                ? 0
                                : 2
                    }
                )
                    .format(
                        amount
                    );


            return (
                `${currency} ${symbol}${formatted}`
            );

        }


        /* =====================================================
        SELECT CURRENCY
        ===================================================== */

        async function selectCurrency(
            currency
        ) {

            closePicker();


            if (
                !priceElement ||
                !baseIDRAmount
            ) {
                return;
            }


            /*
            * IDR = restore original.
            */

            if (
                currency ===
                "IDR"
            ) {

                suppressPriceObserver =
                    true;


                priceElement.textContent =
                    `IDR ${baseIDRAmount.toLocaleString("id-ID")}`;


                suppressPriceObserver =
                    false;


                activeCurrency =
                    "IDR";


                updateTrigger();


                renderCurrencies();


                return;

            }


            /*
            * Show subtle loading state.
            */

            priceElement.style.opacity =
                ".45";


            try {

                const rate =
                    await getRate(
                        currency
                    );


                const converted =
                    baseIDRAmount *
                    rate;


                suppressPriceObserver =
                    true;


                priceElement.textContent =
                    formatPrice(
                        converted,
                        currency
                    );


                suppressPriceObserver =
                    false;


                activeCurrency =
                    currency;


                updateTrigger();


                renderCurrencies();


            } catch (error) {

                console.warn(
                    "Tunetrack currency conversion failed:",
                    error
                );


                suppressPriceObserver =
                    true;


                priceElement.textContent =
                    `IDR ${baseIDRAmount.toLocaleString("id-ID")}`;


                suppressPriceObserver =
                    false;


                activeCurrency =
                    "IDR";


                updateTrigger();


            }


            requestAnimationFrame(
                () => {

                    if (priceElement) {

                        priceElement.style.opacity =
                            "1";

                    }

                }
            );

        }


        /* =====================================================
        TRIGGER LABEL
        ===================================================== */

        function updateTrigger() {

            if (!trigger) {
                return;
            }


            const label =
                trigger.querySelector(
                    ".tnco-currency-trigger-code"
                );


            if (label) {

                label.textContent =
                    activeCurrency;

            }

        }


        /* =====================================================
        WATCH MODAL PRICE
        
        This replaces the broken dependency
        on currentProduct from the other IIFE.
        ===================================================== */

        function watchModal() {

            if (
                !modalElement ||
                !priceElement
            ) {
                return;
            }


            /*
            * Initial price.
            */

            const initial =
                parseIDR(
                    priceElement.textContent
                );


            if (initial) {

                baseIDRAmount =
                    initial;

            }


            /*
            * Watch modal opening.
            */

            const modalObserver =
                new MutationObserver(
                    () => {

                        if (
                            modalElement.classList.contains(
                                "open"
                            )
                        ) {

                            const currentText =
                                priceElement.textContent;


                            const parsed =
                                parseIDR(
                                    currentText
                                );


                            /*
                            * If modal opens with a fresh
                            * IDR price, treat it as the
                            * new product price.
                            */

                            if (
                                !suppressPriceObserver &&
                                parsed &&
                                /^IDR/i.test(
                                    currentText.trim()
                                )
                            ) {

                                baseIDRAmount =
                                    parsed;


                                activeCurrency =
                                    "IDR";


                                updateTrigger();


                                renderCurrencies();

                            }

                        }

                    }
                );


            modalObserver.observe(
                modalElement,
                {
                    attributes:true,
                    attributeFilter:[
                        "class"
                    ]
                }
            );


            /*
            * Watch #modalPrice itself.
            *
            * This catches openProduct()
            * changing product price even if
            * modal was already open.
            */

            const priceObserver =
                new MutationObserver(
                    () => {

                        if (
                            suppressPriceObserver
                        ) {
                            return;
                        }


                        const text =
                            priceElement.textContent
                                .trim();


                        /*
                        * New product price is always
                        * written as IDR by openProduct().
                        */

                        if (
                            /^IDR/i.test(
                                text
                            )
                        ) {

                            const parsed =
                                parseIDR(
                                    text
                                );


                            if (
                                parsed &&
                                parsed !==
                                baseIDRAmount
                            ) {

                                baseIDRAmount =
                                    parsed;


                                activeCurrency =
                                    "IDR";


                                priceElement.style.opacity =
                                    "1";


                                updateTrigger();


                                renderCurrencies();

                                closePicker();

                            }

                        }

                    }
                );


            priceObserver.observe(
                priceElement,
                {
                    childList:true,
                    characterData:true,
                    subtree:true
                }
            );

        }


        /* =====================================================
        INIT CURRENCY
        ===================================================== */

        function initCurrency() {

            const ready =
                createCurrencyUI();


            if (!ready) {

                /*
                * If the main catalog has not
                * finished creating the modal yet,
                * try once more on the next frame.
                */

                requestAnimationFrame(
                    () => {

                        if (
                            createCurrencyUI()
                        ) {

                            watchModal();

                            loadCurrencies();

                        }

                    }
                );


                return;

            }


            watchModal();

            loadCurrencies();

        }


        /* =====================================================
        DOM READY
        ===================================================== */

        if (
            document.readyState ===
            "loading"
        ) {

            document.addEventListener(
                "DOMContentLoaded",
                initCurrency,
                {
                    once:true
                }
            );

        } else {

            initCurrency();

        }

    })();
    
    /* =========================================================
   PAYMENT METHODS — CLEAN FINAL
========================================================= */

(function () {

    "use strict";


    const trigger =
        document.getElementById(
            "paymentMethodsTrigger"
        );

    const modal =
        document.getElementById(
            "paymentMethodsModal"
        );


    if (!trigger || !modal) {
        return;
    }


    /* =====================================================
       OPEN
    ===================================================== */

    trigger.onclick = function (event) {

        event.preventDefault();
        event.stopPropagation();


        modal.classList.add("open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        trigger.setAttribute(
            "aria-expanded",
            "true"
        );

        document.body.style.overflow =
            "hidden";

    };


    /* =====================================================
       CLOSE
    ===================================================== */

    modal.onclick = function (event) {

        /*
         * Close button
         */

        const close =
            event.target.closest(
                "[data-payment-close]"
            );


        if (close) {

            event.preventDefault();
            event.stopPropagation();

            modal.classList.remove("open");

            modal.setAttribute(
                "aria-hidden",
                "true"
            );

            trigger.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.style.overflow =
                "";

            return;
        }


        /*
         * Backdrop
         */

        if (
            event.target === modal
        ) {

            modal.classList.remove("open");

            modal.setAttribute(
                "aria-hidden",
                "true"
            );

            trigger.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.style.overflow =
                "";

        }

    };


    /* =====================================================
       ESC
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                modal.classList.contains("open")
            ) {

                modal.classList.remove(
                    "open"
                );

                modal.setAttribute(
                    "aria-hidden",
                    "true"
                );

                trigger.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.style.overflow =
                    "";

            }

        }
    );

})();