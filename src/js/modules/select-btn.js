/* Check Radiobutton is Selected*/
const donatePage = document.querySelector(".donate-page");
if (donatePage !== null) {
    window.onload = function (event) {
        inputSum.addEventListener("input", enterSum);
    };
    const donateBar = document.querySelector(".progress-bar__intervals");
    const inputDonateBar = document.querySelectorAll(".progress-bar__dot");
    const inputSum = document.querySelector(".donation-input__input");

    donateBar.addEventListener("click", (event) => {
        let classes = event.target.classList;
        if (classes.contains("progress-bar__dot")) {
            const selectedSum = document.querySelectorAll(".progress-bar__dot");
            selectedSum.forEach((item) => {
                switch (item.id) {
                    case "$5000":
                        if (item.checked === true) {
                            inputSum.value = 5000;
                        }
                        break;
                    case "$2000":
                        if (item.checked === true) {
                            inputSum.value = 2000;
                        }
                        break;
                    case "$1000":
                        if (item.checked === true) {
                            inputSum.value = 1000;
                        }
                        break;
                    case "$500":
                        if (item.checked === true) {
                            inputSum.value = 500;
                        }
                        break;
                    case "$250":
                        if (item.checked === true) {
                            inputSum.value = 250;
                        }
                        break;
                    case "$100":
                        if (item.checked === true) {
                            inputSum.value = 100;
                        }
                        break;
                    case "$50":
                        if (item.checked === true) {
                            inputSum.value = 50;
                        }
                        break;
                    case "$25":
                        if (item.checked === true) {
                            inputSum.value = 25;
                        }
                        break;
                }
            });
        }
    });

    /* Input sum - select*/

    function enterSum(event) {
        inputDonateBar.forEach((item) => {
            if (event.target.value === item.value) {
                item.checked = true;
            } else {
                item.checked = false;
            }
        });
    }
}
