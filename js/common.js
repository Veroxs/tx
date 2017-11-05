$(function () {
    common.init();
})
var common = {
    init:function () {
        this.event.navListHover();
    },
    event:{
        navListHover:function () {
            $('body').on({
                'mouseenter ':function () {
                    $(this).addClass('active').siblings().removeClass('active');
                    $(this).find('.mod-nav-submenu').show();
                },
                'mouseleave':function () {
                    $(this).removeClass('active');
                    $(this).find('.mod-nav-submenu').hide();

                }
            },'#jmod_nav_menu li')
        },
    }
}