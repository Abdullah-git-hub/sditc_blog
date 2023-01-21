const search_inp = document.querySelector("#blog_search"),
search_btn = document.querySelector(".fa-magnifying-glass"),
search_close = document.querySelector(".fa-xmark"),
search_box = document.querySelector(".search_box"),
mode_switch = document.querySelector(".modes i"),
side_bar_open = document.querySelector(".logo .fa-bars"),
side_bar_close = document.querySelector(".side_bar_close"),
side_bar = document.querySelector(".side_bar");

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

// side_bar_open
side_bar_open.addEventListener("click", _=> {
    side_bar.classList.add("side_bar_open");
    document.body.style.overflow = "hidden";
})

document.querySelector(".side_bar_back").addEventListener("click", _=>{
    side_bar.classList.remove("side_bar_open");
    document.body.style.overflow = "auto";
})

side_bar_close.addEventListener("click", _=>{
    side_bar.classList.remove("side_bar_open");
    document.body.style.overflow = "auto";
})



// working with side bar

$(".side_sub_menu_ul").slideUp();
$(".side_sub_sub_ul").slideUp();

$(".side_sub_menu").click( function() { 
    $(this).next("ul").slideToggle(0);
});

$(".side_sub_sub").click( function() { 
    $(this).next("ul").slideToggle(0);
});
