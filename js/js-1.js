window.onload = function () {
    $(function () {
        $(".door3").animate({
            left:-955
        }, 2000, function () {
            $(".slogon, .person, .download, .flowers_left, .flowers_right, .flowers, .flowers_fl .door1, .door2").fadeIn(3000);
            // $(".slogon").slideDown(3000);
            $(".door-pho").fadeOut(200);

        });
        $(".door4").animate({
            right:-955

        },2000);
        //----------

        //------------------------------
  //广告出现
        var topBar_ad = $(".topBar_ad");
        var adlink = $(".adlink");
        var adpic = $(".topBar_ad_pic");
        topBar_ad.hover(
            function () {
                adlink.css("display", "block");
                adpic.css("display", "none");
            },
            function () {
                adlink.css("display", "none");
                adpic.css("display", "block");
            }
        )

   //游戏列表出现
        var gameMenu = $(".gameMenu");
        var game_list = $(".game_list");
        gameMenu.hover(
            function () {
                game_list.stop(false, false).slideDown(300);
            },
            function () {
                game_list.stop(false, false).slideUp(20);
            }
        )

   //当前选项
        var selection = $(".topBar_right").children();
        selection.hover(
            function () {
                selection.removeClass("current_menu");
                $(this).addClass("current_menu");
            },
            function () {
                selection.removeClass("current_menu");
            });

  //快捷方式轮播
        var shortcut = $("#header_shortcut").children().children();
        var target;
        var i = 0;
        setInterval(function () {
            if (i == shortcut.length - 1) {
                i = 0;
                shortcut.parent().css("top", 0);
            }
            i++;
            target = -i * 55;
            shortcut.parent().animate({"top": target + "px"}, 100);
        }, 2000);


        //--------------------------

//鼠标进过事件

        var QQ = $(".QQ");
        var qqBox = $(".qqBox");
        var honer_btn = $(".honer_btn");
        var wx = $(".wx");
        var anBtn2 = $(".anBtn2");
        mouseEvent(QQ, qqBox, honer_btn);
        mouseEvent(wx, anBtn2, honer_btn);
    //封装qq鼠标进过事件
        function mouseEvent(event1, event2, event3) {
            event1.on("mouseover", function () {
                event2.css("display", "block");
                event3.css("display", "block");
            });//end
            event1.on("mouseout", function () {
                event2.css("display", "none");
                event3.css("display", "none");
            });//end
        }  //end
        ; //end  事件

    //鼠标移入nav事件
        var news = $(".news");
        var title1 = $(".title1");
        var emBlock2 = $(".emBlock2");
        var special = $(".special");
        var emBlock3 = $(".emBlock3");
        var title2 = $(".title2");
        var strategy = $(".strategy");
        var emBloc4 = $(".emBloc4");
        var title3 = $(".title3");
        var tongren = $(".tongren");
        var emBloc5 = $(".emBloc5");
        var title4 = $(".title4");
        var bbs = $(".bbs");
        var emBloc6 = $(".emBloc6");
        var title5 = $(".title5");
        navMouse(news, title1, emBlock2);
        navMouse(special, title2, emBlock3);
        navMouse(strategy, title3, emBloc4);
        navMouse(tongren, title4, emBloc5);
        navMouse(bbs, title5, emBloc6);

        function navMouse(event1, event2, event3) {
            event1.on("mouseover", function () {
                event2.stop(true, false);
                event3.stop(true, false);
                event2.animate({"left": "20px"});
                event3.animate({"opacity": "1"});
            });
            event1.on("mouseout", function () {
                event2.stop(true, false);
                event3.stop(true, false);
                event2.animate({"left": "0px"});
                event3.animate({"opacity": "0"});
            })
        }
    });  //end  鼠标移入nav事件

//阴阳师logo
  var timer =  setTimeout(function () {
       $(".logo").slideDown(4000);//end
   },3000)

};






