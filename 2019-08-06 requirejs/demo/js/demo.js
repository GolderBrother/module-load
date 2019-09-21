// define(function(reqire,exports,module){
// //    var demo = function(){
// //        return 123
// //    };
// //    return {
// //        demo:demo
// //    }
//    var web = {
//        add:function(v){
//            return v
//        }
//    };
//    //return web;
//    module.exports = web;
// })


//AMD  / CMD 规范
//AMD 依赖前置
// define(['todo'],function(todo){
//    var t = todo.dotosomething();
//    var web = {
//        add:function(v){
//            return v+t
//        }
//    };
//    return web;
// })
//CMD 依赖就近
define(function(reqire,exports,module){
    var todo = require('todo');
    var t = todo.dotosomething();
   var web = {
       add:function(v){
           return v +t 
       }
   };
   return web;
})