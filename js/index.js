var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay : 2000,
    effect: 'fade',
    speed:1000
});
$(function () {
    pageIndex.init();
})
var pageIndex = {
    init:function () {
        this.event.fixedContentHover();
    },
    event:{
        fixedContentHover:function(){
            $('body').on({
                'mouseenter ':function () {
                    $(this).find('.layer-content').show();
                },
                'mouseleave':function () {
                    $(this).find('.layer-content').hide();

                }
            },'.fixed-item-more')
        }
    }
}