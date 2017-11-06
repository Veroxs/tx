
$(function () {
    serviceDetail.init();
})
var serviceDetail = {
    init:function () {
        this.event.servicePeriodChoose();
        this.event.tabChange();
    },
    event:{
        servicePeriodChoose:function(){
            $('body').on('click','.jmod_select_period .ui-tag',function () {
                $(this).addClass('checked').siblings().removeClass('checked');
            })
        } ,
        tabChange:function(){
            $(".jmod_company_wrap").on("click", ".tab-item", function(i) {
                var t = $(i.currentTarget);
                t.addClass("cur").siblings().removeClass("cur"),
                    $(".jmod_company_content_wrap div:eq(" + t.index() + ")").show().siblings().hide()
            })
        }
    }
}