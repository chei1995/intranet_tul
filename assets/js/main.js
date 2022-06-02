/*
Template Name: ClassiGrids - Classified Ads and Listing Website Template.
Author: GrayGrids
*/

(function () {

    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

     //===== mobile-menu-btn
	let navbarToggler = document.querySelector(".mobile-menu-btn");
	navbarToggler.addEventListener('click', function () {
		navbarToggler.classList.toggle("active");
	});
    
    // WOW active
    new WOW().init();

    //
    // let searchBtn = document.querySelector(".search-room button.btn")

    // searchBtn.addEventListener("click",function(e){
    //     e.preventDefault();
    //     document.querySelector(".meeting-room").setAttribute("style","display:block")
    //     window.scrollTo({
    //         top: 1000,
    //         behavior: "smooth"
    //     });
    // })
    let Today = new Date();
    let dateInp = document.querySelector("input[type=date]");
    let date = Today.getDate();
    let mouth = Today.getMonth()+1;
    if(date < 10){
        date= "0" + date;
    }
    if(mouth < 10){
        mouth= "0" + mouth;
    }
    dateInp.setAttribute("min",`${Today.getFullYear()}-${mouth}-${date}`);
    dateInp.setAttribute("max",`${Today.getFullYear()+2}-${mouth}-${date}`)
})();

