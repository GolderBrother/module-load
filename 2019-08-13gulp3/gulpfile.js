var gulp = require('gulp'),
    webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');  //合并、压缩js
var concat = require('gulp-concat');  //文件合并
var minifycss = require('gulp-minify-css');//压缩CSS
var sass = require('gulp-sass'); //使用gulp编译sass
var imagemin = require('gulp-imagemin'); //压缩图片   

//定义任务 gulp.task(name,fn)  第一参数是任务名，第二个参数是执行任务内容
gulp.task('uglify-js',function(){
    gulp.src(['src/js/*.js'])    //gulp.src(path) 选择文件
        //.pipe(concat('all.js'))   //表示src中设置的路径全部合并处理
        .pipe(uglify({
            mangle:true,  //是否修改变量名
            compress:true,  //是否完全压缩
            //preserveComments:all   //保留所有的注释
        }))   //压缩文件
        .pipe(gulp.dest('dist/js'))    //压缩后的方件路径
})
//定义任务 gulp.task(name,fn)  第一参数是任务名，第二个参数是执行任务内容
gulp.task('copy-js',function(){
    gulp.src(['src/lib/*.min.js'])    //gulp.src(path) 选择文件
        .pipe(uglify())   //压缩文件
        .pipe(gulp.dest('dist/lib'))    //压缩后的方件路径
})

// //css合并压缩
// gulp.task('minify-css',function(){
//     gulp.src(['src/css/*.css'])
//         .pipe(minifycss())//压缩文件
//         .pipe(gulp.dest('dist/css')) //压缩后的方件路径
// })
//css合并压缩
gulp.task('minify-css',function(){
    gulp.src(['src/css/*.css'])
        //.pipe(concat('all.css'))   //合并的处理
        .pipe(minifycss({
            keepBreaks:true, //默认为false 是否保留换行
            advanced:false,  //默认true 高级优化（是否合并选择器等）
            compatibility:'ie7' //保留ie7及以下兼容写法
        }))//压缩文件
        .pipe(gulp.dest('dist/css')) //压缩后的方件路径
})

//编译sass
gulp.task('sass',function(){
    gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
})

//复制HTML
gulp.task('copy-html',function(){
    gulp.src(['src/index.html'])    //gulp.src(path) 选择文件
        .pipe(gulp.dest('dist'))    //压缩后的方件路径
})

//压缩图片 imagemin
gulp.task('image-min',function(){
    gulp.src(['src/img/*.*'])    //gulp.src(path) 选择文件
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))    //压缩后的方件路径
})

//定义任务  监听index.html 启动webserver
gulp.task('default',['watch','webserver']);

//自定义任务   合并执行任务，当执行 gulp js时，会执行合并压缩以及复制JS操作
gulp.task('js',['uglify-js','copy-js'])
gulp.task('project',['uglify-js','copy-js','copy-html','minify-css','sass','image-min'])

gulp.task('watch',function(){
    gulp.watch(['index.html']);   //监听html文件变化
    gulp.watch('src/js/*.js',['uglify-js']);   //监听js文件变化
    gulp.watch('src/css/*.css',['minify-css']);   //监听css文件变化
})     

gulp.task('webserver',function(){
   gulp.src('src/')   //该任务针对的文件
        .pipe(webserver({    //该任务调用的模块
            path:'/',
            host:'127.0.0.1',
            port:'8085',
            livereload: true, //自动刷新
            direactoryListing:false, //指定目录找到默认首页
            open:true   //自动打开
        }));
}) 
