 
jQuery.noConflict();
jQuery(document).ready(function ($) {
    //alert("h: " + $(window).height() + "w: " + $(window).width());
    //alert("h: " + $(".myJumbotron").height() + "w: " + $(".myJumbotron").width());
    if (($(window).height() > 640) && ($(window).width() > 640)) {
        $("h5").show(); $("label").show(); $("h6").show();
    }
    if (($(window).height() < 640) || ($(window).width() < 640)) {
        $("h5").hide(); $("label").hide(); $("h6").hide();
    }

    var temp, imgSum=1, lastPos=0;
    // imgSum = Math.floor(($(window).width()) / 120);
    imgSum = Math.floor(($(".myJumbotron").width() + 100) / 120);
    imgSum++;
    if (imgSum >= 25) imgSum = 25;
    for (var i = 0; i < 25; i++) {
        $("#p" + i ).hide();
    }
 
      temp = ($(window).width() - imgSum * 120) / 2;
     for (var i = 0; i < imgSum ; i++) {
        $("#p" + i).show();
        $("#p" + i).offset({ left: temp });
        temp += 120;
    }
    lastPos = temp - 120;

    $("label").click( function (e) {
        e.preventDefault();
 
        if (($(window).height() < 640)) {
            $(".myJumbotron").height(400);
            window.resizeTo($(window).height(), 640);
        }
        if (($(window).width() < 640)) {
            $(".myJumbotron").width(640);
            window.resizeTo($(window).width(), 640);
        }
        $("h6").slideToggle("slow");
    });

    $(window).resize(function (e) {
        e.preventDefault();
        if (($(window).height() > 640) && ($(window).width() > 640)) {
            $("h5").show(); $("label").show(); $("h6").show();
        }
        if (($(window).height() < 640) || ($(window).width() < 640)) {
            $("h5").hide(); $("label").hide(); $("h6").hide();
        }

        //  imgSum = Math.floor(($(window).width()) / 120);
        imgSum = Math.floor(($(".myJumbotron").width() + 100) / 120);
        imgSum++;
        if (imgSum >= 25) imgSum = 25;
        for (var i = 0; i < 25; i++) {
            $("#p" + i).hide();
        }

        temp = ($(window).width() - imgSum * 120) / 2;
        for (var i = 0; i < imgSum ; i++) {
            $("#p" + i).show();
            $("#p" + i).offset({ left: temp });
            temp += 120;
        }
        lastPos = temp - 120;
    });

    $("img").hover(function (e) {
        var pos = 0;
        var id = e.target.id;
        id = Number(id.slice(1));
        var pos = 0;
        if ( (imgSum-1) != id) {
            id++;
            var elem = "#p" + id;
            $(elem).hide();
            $(this).height(180);
            $(this).width(240);
            pos = $(window).height() - 180;
            $(this).offset({ top: pos });
        }
        else {
            $(this).prev().hide();
            $(this).height(180);
            $(this).width(240);
            pos = $(window).height() - 180;
            lastPos = lastPos - 120;
            $(this).offset({ left: lastPos, top: pos });
        }
    },
    function (e) {
        var pos = 0;
        var id = e.target.id;
        id = Number(id.slice(1));
        var pos = 0;
        if ((imgSum - 1) != id) {
            id++;
            var elem = "#p" + id;
            $(this).height(90);
            $(this).width(120);
            pos = $(window).height() - 90;
            $(this).offset({ top: pos });
            $(elem).show();
        }
        else {
            $(this).height(90);
            $(this).width(120);
            pos = $(window).height() - 90;
            lastPos = lastPos + 120;
            $(this).offset({ left: lastPos, top: pos });
            $(this).prev().show();
        }
    });
});
//@copyright Wendy Xiao  demo  5-25-2016