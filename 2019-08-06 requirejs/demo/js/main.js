require.config({
    //baseUrl:"node_modules",  //全局定义   路径参照于main.js页面的相对路径
    shim:{   //非AMD模块输出，继承AMD的规范
        "bootstrap" :{
            deps:["jquery"],    //表示有依赖关系
            exports:"bootstrap"    //名称
        }
    },
    paths:{
        "jquery":"../node_modules/jquery/dist/jquery",
        "bootstrap":"../node_modules/bootstrap/dist/js/bootstrap",
        "a":"test/a",
        "demo":"demo"
    }
})
require(['jquery','bootstrap','a','demo'],function($,bootstrap,a,demo){
    console.log(a);
   // document.querySelector("h1").innerHTML = a;
   $("h1").text(a);
    console.log(demo.add(1000))
})