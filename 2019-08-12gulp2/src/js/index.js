$(function(){
    //开屏广告   倒计时
    var num = $(".count-down .jump b").text();   //跳转的时间
    //setInterval(函数体,时间)
   var timer= setInterval(function(){
         num--;
         $(".count-down .jump b").text(num);
         if(num ==1){
            clearInterval(timer);   //清除定时器
            $(".count-down ").fadeOut(800);
         }
    },1000);
    //点击跳转
    $(".count-down .jump").click(function(){
        clearInterval(timer);   //清除定时器
        $(".count-down ").fadeOut(800);
    });
    //校验
    //成为焦点
    $(".panel input").focus(function(){
        $(this).next().hide();
    });
   
    //失去焦点  正则表达式 定义一种规则去匹配符合规则的字符。
    $(".mobile").blur(function(){
        var value = $(this).val();  //当前表单的值   ,\d表示0-9的数字
        var filter = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        common.check($(this),value,filter,'手机号不能为空','手机号输入错误');
    });
     $(".password").blur(function(){
        var value = $(this).val();  //当前表单的值
        var filter = /^[a-zA-Z0-9]\w{5,17}$/;   //6-18位  \w单词字符包括:a-z、A-Z、0-9,以及下划线
        common.check($(this),value,filter,'密码不能为空','密码输入错误');
    });
     //公共方法
     
    //登录
    $(".panel .login").click(function(){
        var _mobile =$.trim($(".mobile").val()),
            _psd = $.trim($(".password").val());
        var data ={
            mobile:_mobile,
            psd:_psd
        };
        if(!_mobile || !_psd || $(".error-tip").is(":visible")){    //:visible 显示   is() 是否匹配
            alert('请输入正确内容');
            //$(".msg-tip").fadeIn();  //错误提示显示
        }else {
            //window.location.href="demo.html";
            common.http('post','/form_info',data,function(){
                window.location.href="demo.html";
            })
        }
    });
})