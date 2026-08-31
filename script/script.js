// Navigation Responsive
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// /*Drop Menu Navigation*/
// $(document).ready(function () {
//     $('.menuname').click(function (event) {
//         event.stopPropagation();
//         $('.touchmenu').slideToggle(1000);
//     });
// });

// $(document).click(function () {
//     $('.touchmenu').hide(1000);
// });

//change header style when scrolling past point 85px
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 85) {
            $(".navBlock").css('width', '100%');
            $(".navBlock").css('position', 'fixed');
            $(".navBlock").css('top', '0px');
            $(".navBlock").css('border-radius', '0px');
            $(".headerRightBlock").css('display', 'none');
            $(".header_phone_blk").css('display', 'none');
            $(".topRight_fixed_blk").css('position', 'fixed');
            $(".headerTopRight").css('margin-top', '8px');
            $(".getStarted_button").css('padding', '8px 18px');
            $(".getStarted_button").css('margin-top', '4px');
            $(".header_profile_img").css('border-color', '#dbdbdb');
            $(".header_profile_img").css('background-size', '25px');
            $(".headerProfileName").css('color', '#dbdbdb');
            $(".dropbtnAcc").css('color', '#ffffff');
            $(".arrow_down").css('border-top-color', '#ffffff');
        } else {
            $(".navBlock").css('width', '1200px');
            $(".navBlock").css('position', 'relative');
            $(".headerRightBlock").css('display', 'inline-block');
            $(".header_phone_blk").css('display', 'inline-block');
            $(".topRight_fixed_blk").css('position', 'absolute');
            $(".headerTopRight").css('margin-top', '22px');
            $(".getStarted_button").css('padding', '12px 18px');
            $(".getStarted_button").css('margin-top', '0px');
            $(".header_profile_img").css('border-color', '#f93e45');
            $(".header_profile_img").css('background-size', '28px');
            $(".headerProfileName").css('color', '#e01919');
            $(".dropbtnAcc").css('color', '#123060');
            $(".arrow_down").css('border-top-color', '#123060');
        }
    });
});

//Sign Up Sign In Screen from Right
function fnSign(type) {
    var mWidth = $(window).width();
    var popWidth = $(window).width();
    var disable_bg = $(document.createElement("div")).addClass("disable_bg");
    dialogOpened = false;
    if (type === 1) {
        $("body").css("overflow-y", "hidden");
        if (mWidth < popWidth) {
            $(".si_su_Layout").css({ position: "absolute", "margin-right": "0" });
            $(".si_su_Layout").animate({ right: "0" }, "slow");
        } else {
            $(".si_su_Layout").animate({ right: "0px" }, "slow");
        }
        $("body").append(disable_bg);
        disable_bg.click(function (e) {
            fnSign(0);
        });
        dialogOpened = true;
    } else if (type === 0) {
        var popWidth2 = popWidth + 500;
        $(".si_su_Layout").animate({ right: "-" + popWidth2 }, "100", function () {
            $(".disable_bg").remove();
        });
        $("body").css("overflow-y", "auto");
    }
}

/*Popup Screen*/
function pop(div) {
    document.getElementById(div).style.display = 'block';
}
function hide(div) {
    document.getElementById(div).style.display = 'none';
}

/* show hide div*/
function HideDiv(d) { document.getElementById(d).style.display = "none"; }
function ShowDiv(d) { document.getElementById(d).style.display = "block"; }