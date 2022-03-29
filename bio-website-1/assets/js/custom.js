/*=========================
    navbar section start
========================== */

$(window).on('scroll', function() {
    if ($(window).scrollTop() >= 150) {
        $('.navbar').addClass('header-css');
    } else {
        $('.navbar').removeClass('header-css');
    }
});

/*=========================
        menu-toggler
========================== */
$(".nav-btn-toggler,.m-ui-heading").click(function() {
    $("#menu-toggle").toggle();
});

/*=========================
    menu-toggler over
========================== */
const skillsSection = document.getElementById("progress-bar");
const progressBar = document.querySelectorAll(".progress-bar");

function showProgress() {
    progressBar.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    })
}

function hideProgress() {
    progressBar.forEach(p => {
        p.style.opacity = 1;
        p.style.width = 0;
    })
}
window.addEventListener("scroll", () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos) {
        showProgress();
    } else {
        hideProgress();
    }
})

// about work card


/*=========================
    navbar section over
========================== */

// scroll fade start


// scroll fade over
// portfolio filter
$(document).ready(function() {

    $(".filter-button").click(function() {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        } else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});