if (initCheck()) {
    var sidebarHtml =
        '<div class="container">' +
        '    <div class="menu-wrap optiscroll" id="menuWrap" style="display:none">' +
        '        <nav class="menu">' +
        '            <!-- 个人简介 -->' +
        '            <div class="introduce-box">' +
        '                <div class="introduce-head">' +
        '                    <div class="introduce-via" id="menuBlogAvatar"></div>' +
        '                </div>' +
        '                <div id="introduce"></div>' +
        '            </div>' +
        '            <!-- 导航 -->' +
        '            <div class="nav-title"></div>' +
        '            <div class="icon-list">' +
        '                <ul id="m-nav-list">' +
        '                </ul>' +
        '            </div>' +
        '            <!-- 最新随笔 -->' +
        '            <div class="m-list-title"><span>最新随笔</span></div>' +
        '            <div class="m-icon-list" id="sb-sidebarRecentposts"></div>' +
        '            <!-- 我的标签 -->' +
        '            <div class="m-list-title"><span>我的标签</span></div>' +
        '            <div class="m-icon-list" id="sb-toptags"></div>' +
        '            <!-- 随笔分类 -->' +
        '            <div class="m-list-title"><span>随笔分类</span></div>' +
        '            <div class="m-icon-list" id="sb-classify"></div>' +
        '            <!-- 随笔档案 -->' +
        '            <div class="m-list-title"><span>随笔档案</span></div>' +
        '            <div class="m-icon-list" id="sb-record"></div>' +
        '            <!-- 阅读排行 -->' +
        '            <div class="m-list-title"><span>阅读排行</span></div>' +
        '            <div class="m-icon-list" id="sb-topview"></div>' +
        '            <!-- 推荐排行 -->' +
        '            <div class="m-list-title"><span>推荐排行</span></div>' +
        '            <div class="m-icon-list" id="sb-topDiggPosts"></div>' +
        '            <!-- 自定义列表 -->' +
        '            <span id="menuCustomList"></span>' +
        '        </nav>' +
        '        <button class="close-button" id="close-button">Close Menu</button>' +
        '        <div class="morph-shape" id="morph-shape" data-morph-open="M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z">' +
        '            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none">' +
        '                <path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z"/>' +
        '            </svg>' +
        '        </div>' +
        '    </div>' +
        '    <button class="menu-button" id="open-button">MENU</button>' +
        '    <div class="content-wrap" id="content-wrap"></div><!-- /content-wrap -->' +
        '</div>' +
        '<div class="main-header">' +
        '    <canvas id="notHomeTopCanvas" style=" position: absolute;margin: auto;width: 100%;height: 100%;top: 0;bottom: 0;left: 0;right: 0;"></canvas>' +
        '    <div class="vertical">' +
        '        <div class="main-header-content inner">' +
        '            <link href="https://fonts.googleapis.com/css?family=Playball" rel="stylesheet">' +
        '            <h1 class="page-title" style="font-family: \'Playball\', cursive;" id="homeTopTitle"></h1>' +
        '            <h2 class="page-description" id="hitokoto"></h2>' +
        '            <h3 class="page-author" id="hitokotoAuthor"></h3>' +
        '            <h1 class="sb-title" id="sbTitle"></h1>' +
        '            <p class="article-info" id="articleInfo"></p>' +
        '        </div>' +
        '    </div>' +
        '    <a class="scroll-down" href="javascript:void(0);" data-offset="-45">' +
        '        <span class="hidden">Scroll Down</span>' +
        '        <i class="scroll-down-icon iconfont icon-fanhui"></i>' +
        '    </a>' +
        '</div>' +
        '<div id="loading"></div>'  +
        '<div id="bottomProgressBar"></div>' +
        '<div id="rightMenu"></div>';

    window.cnblogsConfigDefault = {
        GhUserName: 'BNDong',
        GhRepositories: 'Cnblogs-Theme-SimpleMemory',
        GhVersions: 'v1.1.2',
        blogUser: "",
        blogAvatar: "",
        blogStartDate: "2019-01-01",
        menuCustomList: {},
        menuNavList: [],
        webpageTitleOnblur: "(oﾟvﾟ)ノ Hi",
        webpageTitleOnblurTimeOut: 500,
        webpageTitleFocus: "(*´∇｀*) 欢迎回来！",
        webpageTitleFocusTimeOut: 1000,
        webpageIcon: "",
        fontIconExtend: "",
        progressBar: {
            id: 'top-progress-bar',
            color: '#77b6ff',
            height: '2px',
            duration: 0.2
        },
        loading: {
            rebound: {
                tension: 16,
                friction: 5
            },
            spinner: {
                id: 'spinner',
                radius: 90,
                sides: 3,
                depth: 4,
                colors: {
                    background: '#f0f0f0',
                    stroke: '#272633',
                    base: null,
                    child: '#272633'
                },
                alwaysForward: true,
                restAt: 0.5,
                renderBase: false
            }
        },
        homeTopAnimationRendered: true,
        homeTopAnimation: {
            radius: 15,
            density: 0.2,
            color: 'rgba(255,255,255, .2)',
            clearOffset: 0.3
        },
        essayTopAnimationRendered: true,
        essayTopAnimation: {
            triW: 14,
            triH: 20,
            neighbours: ["side", "top", "bottom"],
            speedTrailAppear: .1,
            speedTrailDisappear: .1,
            speedTriOpen: 1,
            trailMaxLength: 30,
            trailIntervalCreation: 100,
            delayBeforeDisappear: 2,
            colors: [
                '#96EDA6', '#5BC6A9',
                '#38668C', '#374D84',
                '#BED5CB', '#62ADC6',
                '#8EE5DE', '#304E7B'
            ]
        },
        bgAnimationRendered: true,
        backgroundAnimation: {
            colorSaturation: "60%",
            colorBrightness: "50%",
            colorAlpha: 0.5,
            colorCycleSpeed: 5,
            verticalPosition: "random",
            horizontalSpeed: 200,
            ribbonCount: 3,
            strokeSize: 0,
            parallaxAmount: -0.2,
            animateSections: true
        },
        homeTopImg: [
            "https://raw.githubusercontent.com/BNDong/Cnblogs-Theme-SimpleMemory/master/img/home_top_bg.jpg"
        ],
        homeBannerText: "",
        homeBannerTextType: "jinrishici",
        essayTopImg: [
            "https://raw.githubusercontent.com/BNDong/Cnblogs-Theme-SimpleMemory/master/img/nothome_top_bg.jpg"
        ],
        essayCodeHighlightingType: 'cnblogs',
        essayCodeHighlighting: '',
        essaySuffix: {
            aboutHtml: '',
            copyrightHtml: '',
            supportHtml: ''
        },
        bottomBlogroll: [],
        bottomText: {
            icon: "❤️",
            left: "",
            right: ""
        },
        consoleList: [],
        themeAuthor: false,
    };
	
	window.cnblogsConfig = {
        GhVersions    : 'v1.1.4', // 版本
        blogUser      : "suwanbin", // 用户名
        blogAvatar    : "https://pic.cnblogs.com/avatar/1725797/20190702163645.png", // 用户头像
        blogStartDate : "2019-6-26", // 入园时间，年-月-日。入园时间查看方法：鼠标停留园龄时间上，会显示入园时间
        
        GhUserName: '1335951413'
        GhRepositories: 'my-cnblogs-theme'
        
        GhVersions: 'v1.1.4'
        
        webpageIcon: "https://pic.cnblogs.com/avatar/1725797/20190702163645.png"
        
        fontIconExtend: "//at.alicdn.com/t/font_543384_ezv3l7gd9r7.css"
        // 首页图片（随机一张）
        homeTopImg: [
	        "http://pic1.win4000.com/wallpaper/9/54362d63810ea.jpg",
	        "https://img15.3lian.com/2015/f3/16/d/46.jpg",
	        "http://pic1.win4000.com/wallpaper/3/589ac4fd2341d.jpg",
	        "http://www.zhisheji.com/data/head/58115cfa9d473.jpg",
	        "http://www.33lc.com/article/UploadPic/2012-9/201292116541988072.jpg",
	        "https://raw.githubusercontent.com/BNDong/Cnblogs-Theme-SimpleMemory/master/img/home_top_bg.jpg"
    	]
        // 文章页图片
        essayTopImg: [
        	"https://piccdn.gracg.com/uploadfile/photo/2019/6/pic_k2516h63butkqdzx5f2aczy5g1u8sw9b.jpg",
	        "https://piccdn.gracg.com/uploadfile/photo/2019/6/pic_u2tta0t5rxragmr4iigijbegd1mih5rx.jpg",
	        "https://piccdn.gracg.com/uploadfile/photo/2019/6/pic_0gs774657jatvocdikhhbtgm2oxijc6v.jpg",
	        "https://piccdn.gracg.com/uploadfile/photo/2019/2/pic_fxc0hbc8ctztckcnyfyed1ae5um0a6yi.jpg",
	        "https://piccdn.gracg.com/uploadfile/photo/2019/2/pic_fca13a7swgg6abndy7jg6txt8us7mfav.jpg",
	        "https://piccdn.gracg.com/uploadfile/photo/2019/2/pic_dlhxdb6c08svpuvr3b1w0ceu3dusjhpt.jpg"
    	]
        
        bottomText: {
        	icon: "❤️",
	        left : "等到黑夜翻面之后",
	        right: "会是新的白昼"
	    }
        
    }
	
    window.cnblogsConfig = $.extend( true, window.cnblogsConfigDefault, window.cnblogsConfig );

    // set sidebar html
    var url = window.location.href,tmp = [];
    tmp = url.split("/");
    var user = tmp[3];
    var navListHtml = '<li><a href="https://www.cnblogs.com/'+user+'/" target="_self">首页</a></li>' +
    '<li><a href="https://msg.cnblogs.com/send/'+user+'" target="_blank">联系</a></li>' +
    '<li><a href="https://www.cnblogs.com/'+user+'/rss" target="_blank">订阅</a></li>' +
    '<li><a href="https://i.cnblogs.com/" target="_blank">管理</a></li>';

    var menuNavList = window.cnblogsConfig.menuNavList;
    if (menuNavList.length > 0) {
        $.each(menuNavList, function (i) {
            navListHtml += '<li><a href="'+(menuNavList[i][1])+'" target="_blank">'+(menuNavList[i][0])+'</a></li>';
        });
    }

    $('#blog-news').prepend(sidebarHtml);
    $('#m-nav-list').append(navListHtml);

    // set userName
    if (window.cnblogsConfig.blogUser === "") window.cnblogsConfig.blogUser = user;

    // start cache
    $.ajaxSetup({cache: true});

    // load loadingJs
    $.getScript(getJsDelivrUrl('loading.js'), function () {

        // Loading start
        pageLoading.initRebound();
        pageLoading.initSpinner();
        pageLoading.spinner.init(pageLoading.spring, true);

        $.getScript(getJsDelivrUrl('jquery.mCustomScrollbar.min.js'), function () {
            $.getScript(getJsDelivrUrl('require.min.js'), function () {
                $.getScript(getJsDelivrUrl('config.js'), function () {
                    var staticResource = [
                        'optiscroll', 'ToProgress', 'rotate',
                        'snapSvg', 'classie', 'main4', 'tools'];
                    require(staticResource, function() {
                        require(['base'], function() {
                            (new Base).init();
                        });
                    });
                });
            });
        });
    });
} else {
    $('a[name="top"]').text("SimpleMemory：基础配置有误，请阅读文档，检查配置！").css({
        'display': 'block',
        'text-align': 'center',
        'padding-top': '45vh',
        'font-size': '20px',
        'color': '#333'
    });
}

// init check
function initCheck() {

    // check base theme
    var baseStyle = $('#mobile-style').attr('href');
    if (typeof baseStyle != 'undefined') {
        var bt = baseStyle.split('/');
        if($.inArray('SimpleMemory', bt) !== -1) {
            return true;
        }
    }
    return false;
}

// get file url
function getJsDelivrUrl(file, directory) {
    file = setFileNameMin(file, directory);
    return 'https://cdn.jsdelivr.net/gh/'+(window.cnblogsConfig.GhUserName)+'/'+(window.cnblogsConfig.GhRepositories)+'@'+(window.cnblogsConfig.GhVersions)+'/' + (file ? file : '');
}

// optimization file name
function setFileNameMin(file, directory) {
    if (typeof file == 'undefined') return '';
    var suffix  = null,fileArr = file.split('.');
    if (fileArr.length > 0 && $.inArray(fileArr[(fileArr.length -1)], ['js', 'css']) !== -1) {
        suffix = fileArr.pop();
        switch (suffix) {
            case 'js':directory = 'script';break;
            case 'css':directory = 'style';break;
        }
    } else {
        if (typeof directory == 'undefined') return '';
        switch (directory) {
            case 'js':directory = 'script';break;
            case 'css':directory = 'style';break;
        }
    }
    file.search('.min') === -1 && fileArr.push('min');
    suffix != null && fileArr.push(suffix);
    return (typeof directory !== 'undefined' ? ('src/' + directory + '/' + fileArr.join('.')) : (fileArr.join('.')));
}