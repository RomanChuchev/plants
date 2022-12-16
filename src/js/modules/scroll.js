/*Testimonials Scroll*/
const homePage = document.querySelector(".home");
if (homePage !== null) {
    window.addEventListener("DOMContentLoaded", () => {
        const scrollbar = document.querySelector(".testimonials__scrollbar");
        const slider = document.querySelector(".testimonials__slider");

        function scroll(e) {
            const screenWidth = window.screen.width;
            if (screenWidth >= 1260) {
                const blockWidth = 25.65;
                switchWidth(e, blockWidth);
            }
            if (screenWidth >= 960 && screenWidth < 1260) {
                const blockWidth = 34.41;
                switchWidth(e, blockWidth);
            }
            if (screenWidth >= 855 && screenWidth < 960) {
                const blockWidth = 34.45;
                switchWidth(e, blockWidth);
            }
            if (screenWidth > 810 && screenWidth < 855) {
                const blockWidth = 34.6;
                switchWidth(e, blockWidth);
            }
            function switchWidth(e, blockWidth) {
                switch (e.target.value) {
                    case "0":
                        slider.style.left = 0;
                        break;
                    case "1":
                        slider.style.left = -blockWidth + "%";
                        break;
                    case "2":
                        slider.style.left = -blockWidth * 2 + "%";
                        break;
                    case "3":
                        slider.style.left = -blockWidth * 3 + "%";
                        break;
                    case "4":
                        slider.style.left = -blockWidth * 4 + "%";
                        break;
                    case "5":
                        slider.style.left = -blockWidth * 5 + "%";
                        break;
                    case "6":
                        slider.style.left = -blockWidth * 6 + "%";
                        break;
                    case "7":
                        slider.style.left = -blockWidth * 7 + "%";
                        break;
                }
            }
        }
        scrollbar.addEventListener("input", scroll);
    });
}
