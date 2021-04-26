// Close Tips  close-tip
function closeTips() {
    document.getElementsByClassName("box-tips")[0].classList.add("hide");
}
// Toggle Item - Click on box to selected Plans account
function toggleItem(elem) {
    for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", function (e) {
            var current = this;
            for (var i = 0; i < elem.length; i++) {
                if (current != elem[i]) {
                    elem[i].classList.remove('active');
                } else if (current.classList.contains('active') === true) {
                    current.classList.remove('active');
                } else {
                    current.classList.add('active')
                }
            }
            e.preventDefault();
        });
    };
}
toggleItem(document.querySelectorAll('.box-plans'));
// Custom range slider
const stRange = document.querySelector('.range')
const stThumb = document.querySelector('.thumb')
const stTrack = document.querySelector('.track-inner')

const customSlider = (value) => {
    stThumb.style.left = `${value}%`
    stThumb.style.transform = `translate(-${value}%, -50%)`
    stTrack.style.width = `${value}%`
}
if (stRange !== null) {
    stRange.oninput = (e) => customSlider(e.target.value)
    customSlider(24) // Init value
}