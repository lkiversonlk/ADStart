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
        wx.chooseImage({
            success: function(res){
                var localIds = res.localIds;
                var imgs = $(".dyr_markup");

                if(localIds.length != imgs.length){
                    alert("您上传的照片数量与该广告要求的数量不符。该广告需要您上传" + imgs.length + "张图片");
                    return;
                }else{
                    $(imgs).each(function(i){
                        $(this).attr("src", localIds[i]);
                    });
                    $("#start_upload").hide();
                    $("#confirm_upload").show();
                }
            }
        });
    });
});

wx.error(function(){

});