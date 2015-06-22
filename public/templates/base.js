/**
 * Created by kliu on 19/06/2015.
 */

/*
 * assume ticket variable is already set by the server side
 */
wx.config(config);

wx.ready(function(){
    $("#start_upload").append("<br/> 请点击本框选择图片")
    $("#start_upload").on("click", function(){
        $("#start_upload").hide();
        $("#confirm_upload").show();
        wx.chooseImage({
            success: function(res){
                var localIds = res.localIds;
                var imgs = $(".dyr_markup");
                $(imgs[0]).attr("src", localIds[0]);
                $("#start_upload").hide();
                $("#confirm_upload").show();
            }
        });
    });
});

wx.error(function(){

});