
$(function () {
    merchantDetail.init();
})
var merchantDetail = {
    init:function () {
        this.event.tabChange();
    },
    event:{
        tabChange:function(){
            $("body").on("click", ".provider-aboutcrumb>a", function(i) {
                var t = $(i.currentTarget);
                t.addClass("cur").siblings().removeClass("cur"),
                    $(".jmod-tabcontent>div:eq(" + t.index() + ")").show().siblings().hide()
            })
        }
    }
}