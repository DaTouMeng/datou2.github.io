/**
 * Created by Chiman on 2017/4/21.
 */
$(function() {
    //������
    var topBar_ad = $(".topBar_ad");
    var adlink = $(".adlink");
    var adpic = $(".topBar_ad_pic");
    topBar_ad.hover(
        function() {
            adlink.css("display", "block");
            adpic.css("display", "none");
        },
        function() {
            adlink.css("display", "none");
            adpic.css("display", "block");
        }
    )

    //��Ϸ�б����
    var gameMenu = $(".gameMenu");
    var game_list = $(".game_list");
    gameMenu.hover(

        function() {
            game_list.stop(false,false).slideDown(300);
        },
        function() {
            game_list.stop(false,false).slideUp(20);
        }
    )

    //��ǰѡ��
    var selection = $(".topBar_right").children();
    selection.hover(
        function(){
            selection.removeClass("current_menu");
            $(this).addClass("current_menu");
        },
        function(){
            selection.removeClass("current_menu");
        });

    //��ݷ�ʽ�ֲ�
    var shortcut = $("#header_shortcut").children().children();
    var target;
    var i = 0;
    setInterval(function(){
        if( i == shortcut.length -1 ) {
            i = 0;
            shortcut.parent().css("top",0);
        }
        i++;
        target = -i*55;
        shortcut.parent().animate({"top": target + "px"}, 100);
    },2000);

});