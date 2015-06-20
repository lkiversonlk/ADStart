/**
 * Created by kliu on 19/06/2015.
 */

$("#camera").on('click',function(){
    wx.chooseImage({
        success: function(res){
            $("#photo").attr("src", res.localIds[0]);
        }
    })
});