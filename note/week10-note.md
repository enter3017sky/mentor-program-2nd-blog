#Gulp 範例

[gulp快速入門](https://segmentfault.com/a/1190000003690263)



```js
// gulp引入
let gulp  = require('gulp');

// 路径
let SRC         = './src',// 入口文件夹
    DIST         = './static',// 出口文件夹
    LESS_SRC     = SRC + '/**/*.less', // less编译入口 (** 匹配js文件夹的0个或多个子文件夹)  
    JS_SRC         = SRC + '/**/*.js', // JS编译入口 (* 匹配js文件夹下所有.js格式的文件)
    IMG_SRC     = SRC + '/**/images/*.{png,jpg,gif,ico}',// 图片编译入口
    HTML        = './*.html';// html文件

//插件
let less         = require('gulp-less'),// less编译
    sourcemaps     = require('gulp-sourcemaps'),// 浏览器显示编译前less或js位置
    uglify         = require('gulp-uglify'),// 压缩js文件
    pump         = require('pump'),// 可以使我们更容易找到代码出错位置
    cleanCSS     = require('gulp-clean-css'),// css压缩
    rename         = require("gulp-rename"),// 文件更名
    autoprefixer= require('gulp-autoprefixer'),// 根据设置浏览器版本自动处理css属性的浏览器前缀
    concat         = require('gulp-concat'),// 合并javascript文件，减少网络请求。
    imagemin     = require('gulp-imagemin'),// 图片压缩
    pngquant     = require('imagemin-pngquant'), // 深度压缩  
    changed     = require('gulp-changed'),// 只通过更改过的文件
    browserSync = require('browser-sync').create(),//浏览器实时刷新  
    babel         = require('gulp-babel');// es6 编译 es5

// 刷新浏览器
let    reload      = browserSync.reload;

// less编译
gulp.task('less',  ()=> {
    let options = {  
        browsers: ['last 5 versions', 'Android >= 4.0'],// 浏览器版本
        cascade: true,//是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
        remove:true //是否去掉不必要的前缀 默认：true 
    };  
  return gulp.src([LESS_SRC,'!'+SRC+'/common/**/*.less'])// 除了common文件夹下的less全部编译
      .pipe(sourcemaps.init())// 启用sourcemaps功能
      .pipe(changed(DIST))// 只通过更改过的文件
    .pipe(less())// 执行less编译操作
    .pipe(autoprefixer(options))
    .pipe(cleanCSS({
        keepSpecialComments: '*'
        //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
    }))// 开启css压缩
    .pipe(rename(
        // {
        //     dirname: "css",// 生成到对应目录下，可以修改上级目录名字，但是所有只能生成到一个文件夹
           //  basename: "aloha",// 文件名字
           //  prefix: "bonjour-",// 文件前缀
           //  suffix: ".min",// 文件后缀
           //  extname: ".css"// 文件类型        
        // }
        function (path) {
            // path.dirname += "/css";// 生成到对应目录下，可以修改上级目录名字，但是所有只能生成到一个文件夹
            // path.basename += "-goodbye";// 文件名字
            // path.extname = ".md";// 文件类型     
            // 前缀后缀不生效
            path.dirname = path.dirname.replace('less', 'css');// 修改上级目录，可生成到对应目录
        }
    ))// 改名字
    .pipe(sourcemaps.write('./map'))// 生成记录位置信息的sourcemaps文件，为空时即为解析目录下
    .pipe(gulp.dest(DIST))// 编译出口，可生成目录或为存在目录
    .pipe(reload({stream: true}));
});

// js操作
gulp.task('js',  (cb)=> {
    // pump是一个小节点模块，将流连接在一起，如果其中一个关闭，则会将它们全部破坏
    // 当dest发出关闭或错误时，使用标准source.pipe（dest）事件源将不会被销毁。 
    // 您还不能提供回调来告诉管道何时完成。
    pump([
            gulp.src([JS_SRC]),// JS编译入口
            sourcemaps.init(),// 启用sourcemaps功能
            changed(DIST),// 只通过更改过的文件
            babel({
                presets: ['env']// 编译成es5
            }),
            uglify(),// 开启压缩功能
            concat({
                path:'js/all.js'
            }),// 开启js合并功能
            rename({suffix: '.min'}),// 改名字中间加‘.min’
            sourcemaps.write('./map'),// 生成记录位置信息的sourcemaps文件，为空时即为解析目录下
            gulp.dest(DIST),// 编译出口，可生成目录或为存在目录
            reload({stream: true})
        ],cb// 函数有参数
    )
});

// 图片压缩（由于可能过多图片，不建议每次更新操作）
// cmd命令：gulp images
gulp.task('images',  ()=> {
        gulp.src([IMG_SRC])// JS编译入口
        .pipe(changed(DIST))// 只通过更改过的文件
        .pipe(imagemin(
            {
                optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
                progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
                interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
                multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
                svgoPlugins: [{removeViewBox: false}], // 不移除svg的viewbox属性  
                use: [pngquant()] // 使用pngquant插件进行深度压缩
            }
        ))
        .pipe(gulp.dest(DIST))// 编译出口，可生成目录或为存在目录
    }
)

// 静态服务器 + 监听 less/js/html 文件
gulp.task('server',  ()=> {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// 执行默认操作，顺序执行另外的操作
gulp.task('default',['server'],()=> {
    // 执行操作
    gulp.start(['less','js']);
    // 监听改变
    gulp.watch(LESS_SRC, ['less']);            // 监听less的改变并执行对应操作
    gulp.watch(JS_SRC, ['js']);                // 监听js的改变并执行对应操作
    gulp.watch(HTML, reload);    
})

```