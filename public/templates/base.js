/**
 * Created by kliu on 19/06/2015.
 */

/*
 * assume ticket variable is already set by the server side
 */
wx.config(config);

wx.ready(function(){
    $("#start_upload").append("<a><p>请点击以开始上传</p></a>");
    $("#start_upload").on("click", function(){
        wx.chooseImage({
            success: function(res){
                var localIds = res.localIds;
                var imgs = $(".dyr_markup");
                $(imgs[0]).attr("src", localIds[0]);
            }
        });
    });
});

wx.error(function(){

});