
document.addEventListener('DOMContentLoaded', function(){
    const circle = document.querySelector(".smallCircle")

    circle.addEventListener('click', function(){
        circle.classList.toggle('largeCircle')
    })

})
