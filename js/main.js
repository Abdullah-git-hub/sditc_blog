const search_inp = document.querySelector("#blog_search"),
search_btn = document.querySelector(".fa-magnifying-glass"),
search_close = document.querySelector(".fa-xmark"),
search_box = document.querySelector(".search_box"),
mode_switch = document.querySelector(".modes i");

search_close.style.display = "none"

search_btn.addEventListener("click", _=>{
    search_inp.classList.add("search_box_active")
    search_box.style.aspectRatio = "2/1"
    search_close.style.display = "block"
})
search_close.addEventListener("click", _=>{
    search_inp.classList.remove("search_box_active")
    search_box.style.aspectRatio = "1/1"
    search_close.style.display = "none"
})

mode_switch.addEventListener("click", _=> {
    mode_switch.classList.toggle("fa-moon");
    document.body.classList.toggle("light_mode");
})