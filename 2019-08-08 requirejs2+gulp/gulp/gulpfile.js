var gulp = require('gulp'),
    webserver = require('gulp-webserver');

//定义任务  监听index.html 启动webserver
gulp.task('default',['watch','webserver']);

gulp.task('watch',function(){
    gulp.watch(['index.html'])
})     

gulp.task('webserver',function(){
   gulp.src('')   //该任务针对的文件
        .pipe(webserver({    //该任务调用的模块
            path:'/',
            host:'127.0.0.1',
            port:'8082',
            livereload: true, //自动刷新
            direactoryListing:true,
            open:true   //自动打开
        }));
}) 
