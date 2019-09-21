var common = {
    _url:'http://localhost:3000',
    check:function(cur,value,filter,text1,text2){
        if(value==''){
            cur.next().show().text(text1);
        }else if(!filter.test(value)){    //校验不匹配  ！取反
            cur.next().show().text(text2);
        }else {
            cur.next().hide();   //next()同级紧邻的下一个元素
        }
    },
    http:function(type,url,data,callback){
        $.ajax({
            type:type,  //请求类型 get post put delete
            url:this._url+url, //接口路径
            async:true,  //异步
            data:data,   //传入的参数
            dataType:'json',  //返回值类型
            success:function(msg) {
                callback(res)
            },
            error:function(error){
                callback(error)
            }
        })
    }
}