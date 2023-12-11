(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Global Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";


    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                    label: "Japonya",
                    data: [15, 30, 55, 65, 60, 80, 95],
                    backgroundColor: "rgba(235, 22, 22)"
                },
                {
                    label: "Güney Kore",
                    data: [8, 35, 40, 60, 70, 55, 75],
                    backgroundColor: "rgba(22, 22, 200)"
                },
                {
                    label: "Filipinler",
                    data: [12, 25, 45, 55, 65, 70, 60],
                    backgroundColor: "rgba(22, 200, 22)"
                }
            ]
            },
        options: {
            responsive: true
        }
    });


    // Salse & Revenue Chart
    var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022","2023"],
            datasets: [{
                    label: "Satış",
                    data: [45, 60, 80, 79, 30, 40, 150,180],
                    backgroundColor: "rgba(235, 22, 22, .7)",
                    fill: true
                },
                {
                    label: "Rezervasyon",
                    data: [99, 135, 170, 130, 50, 90, 270,250],
                    backgroundColor: "rgba(235, 22, 22, .5)",
                    fill: true
                }
            ]
            },
        options: {
            responsive: true
        }
    });
    





    // Pie Chart
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Japonya", "Güney Kore", "İtalya", "Yunanistan", "Filipinler","Diğer"],
            datasets: [{
                backgroundColor: [
                    "rgba(235, 22, 22, 0.8)",
                    "rgba(22, 22, 200, 0.8)",
                    "rgba(235, 222, 22,0.8)",
                    "rgba(0, 0, 0,0.8)",
                    "rgba(365,365,365,0.8)",
                    "rgba(100,100,365,0.8)"
                ],
                data: [55, 49, 44, 24, 15,30]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Doughnut Chart
    var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Türkiye", "Rusya", "Amerika", "Güney Afrika", "Diğer"],
            datasets: [{
                backgroundColor: [
                    "rgba(0,0,0)",
                    "rgba(100,100,300)",
                    "rgba(0,200,300)",
                    "rgba(300,300,300)",
                    "rgba(300,0,300)"
                ],
                data: [55, 90, 86, 50, 15]
            }]
        },
        options: {
            responsive: true
        }
    });

    
})(jQuery);

