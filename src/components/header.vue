<template>
    <div class="header">
    <!--创建一个bootstarp导航条-->
        <nav class="navbar navbar-default">
            <!--创建一个bootstrap全屏布局-->
            <div class="container-fluid">
                <!--创建一个bootstrapLOGO布局-->
                <!--注意:必须要创建navbar-header，把logo以及响应式按钮给包裹进去..否则..大家删除下navbar-header 缩小屏幕点击下拉菜单就知道了-->
                <div class="navbar-header">
                    <div class="navbar-brand hidden-xs">
                        <a href="/"><img src="static/image/logo.png" class="m-logo" /></a>
                    </div>
                    <div class="row visible-xs dropdown-xs">
                        <div class="col-lg-6">
                            <div class="input-group">
                                <div class="input-group-btn">
                                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">美容 <span class="caret"></span></button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="#">美容</a>
                                        </li>
                                        <li>
                                            <a href="#">美发</a>
                                        </li>
                                        <li>
                                            <a href="#">美甲</a>
                                        </li>
                                        <li>
                                            <a href="#">化妆</a>
                                        </li>
                                        <li>
                                            <a href="#">仪器</a>
                                        </li>
                                        <li>
                                            <a href="#">培训</a>
                                        </li>
                                        <li>
                                            <a href="#">招聘</a>
                                        </li>
                                        <!--<li role="separator" class="divider"></li>
						    						<li>
						    							<a href="#">Separated link</a>
						    						</li>-->
                                    </ul>
                                </div>
                                <!-- /btn-group -->
                                <input type="text" class="form-control" aria-label="...">
                                <button class="glyphicon glyphicon-search btn btn-default" href="#"></button>
                            </div>
                            <!-- /input-group -->
                        </div>
                        <!-- /.col-lg-6 -->
                    </div>
                    <!-- /.row -->

                    <!--创建一个按钮
							class{
								navbar-toggle:向js传递这个按钮是可以点击的
								collapsed:不结合navbar-collapse那就是一个默认class..不加貌似也没发现什么bug.
							}
							data-toggle="collapse":引入collapse插件
							data-target="#navbar-gbtag":当点击按钮的时候跳转/打开哪一个标签
							aria-expanded="false":辅助性阅读功能..针对特殊人群的设置-->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-gbtag" aria-expanded="false">
								<!--在按钮上添加一些图标和说明
								class{
									sr-only:隐藏这个标签
									incon-bar:图标样式
									动手改一下图标样式为glyphicon glyphicon-star试试
								}-->
								<span class="sr-only">导航菜单</span>
			        			<span class="icon-bar"></span>
			        			<span class="icon-bar"></span>
			        			<span class="icon-bar"></span>
							</button>
                </div>
                <!--创建导航条元素布局
							class{
								collapse:配合navbar-collapse 按钮默认是否展开 如果取消collapse 那么按钮默认就是展开的
								navbar-collapse:导航条元素布局必须的class
							}
							id:与按钮的data-targe一致-->
                <div class="collapse navbar-collapse" id="navbar-gbtag">
                    <!--创建导航条内部元素
								 class{
								 	nav :创建导航条内部元素的一个必须的基类
								 	navbar-nav:这点不好解释.因为翻了一下官方文档并没有说的特别详细 这里稍微说一下
								 	,:使ul水平居中横排排列.同时宽度为内容宽度不会挤下后面的元素如form;等最后大家可以删除这个class试试就知道作用了
								 	navbar-right:导航条排列的类	
								 }-->

                    <!--导航元素-->
                    <!--class{
							navbar-form:可以呈现良好的垂直对齐具体参考http://v3.bootcss.com/components/#navbar-forms
							navbar-left:用来规定导航条内元素对齐的具体参考http://v3.bootcss.com/components/#navbar-component-alignment
							}-->
                    <form class="navbar-form navbar-left hidden-xs" role="search">
                        <!--class{
									btn:创建一个按钮所必须的基类
									btn:按钮样式 基于btn基类 具体参考http://v3.bootcss.com/css/#buttons
									form-group:排列表单元素的一个基类具体参考http://v3.bootcss.com/css/#forms
								}-->
                        <div class="form-group">
                            <!--class{
										form-control:设置宽度为100%但是我们在父级元素form设置了navbar-form所以宽度会得到一定的控制
									}-->
                            <input type="text" class="form-control" placeholder="美丽从这里开始" />
                        </div>
                        <button type="submit" class="btn btn-default">搜索</button>
                        <!--表单组-->

                    </form>
                    <!--表单-->

                    <ul class="nav navbar-nav navbar-right navbar-size">
                        <li class="dropdown">
                            <router-link to="/brand?category=1" class="dropdown-toggle hidden-xs" role="button" aria-haspopup="true" aria-expanded="false">美业品牌<span class="caret"></span></router-link>
                            <a class="dropdown-toggle visible-xs" role="button" aria-haspopup="true" aria-expanded="false">美业品牌<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-submenu">
                                    <a class="hidden-xs" tabindex="-1" href="#">美容美发</a>
                                    <a class="submenu-title visible-xs" tabindex="-1" href="#">美容美发<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li role="separator" class="divider visible-xs"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=1">专业美容</router-link>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=3">美容养生</router-link>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=12">减肥纤体</router-link>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=8">保健护理</router-link>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=26">专业发品</router-link>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=25">专业美发</router-link>
                                        </li>
                                    </ul>
                                </li>
                                <!--class{
												divider:分隔线样式
											}
											role="separator":声明这个元素为一个分隔线-->
                                <li role="separator" class="divider"></li>
                                <li class="dropdown-submenu">
                                    <a class="hidden-xs" tabindex="-1" href="#">专业彩妆</a>
                                    <a class="submenu-title visible-xs" tabindex="-1" href="#">专业彩妆<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li role="separator" class="divider visible-xs"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=5">美甲</router-link>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=6">美睫</router-link>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=17">彩妆</router-link>
                                        </li>
                                    </ul>
                                </li>
                                <!--class{
												divider:分隔线样式
											}
											role="separator":声明这个元素为一个分隔线-->
                                <li role="separator" class="divider"></li>
                                <li class="dropdown-submenu">
                                    <a class="hidden-xs" tabindex="-1" href="#">美业设备</a>
                                    <a class="submenu-title visible-xs" tabindex="-1" href="#">美业设备<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li role="separator" class="divider visible-xs"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=7">微美纹饰</router-link>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=13">抗衰护肤</router-link>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=11">仪器设备</router-link>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=10">大医美</router-link>
                                        </li>
                                    </ul>
                                </li>
                                <!--class{
																				divider:分隔线样式
																			}
																			role="separator":声明这个元素为一个分隔线-->
                                <li role="separator" class="divider"></li>
                                <li class="dropdown-submenu">
                                    <a class="hidden-xs" tabindex="-1" href="#">美妆护肤</a>
                                    <a class="submenu-title visible-xs" tabindex="-1" href="#">美妆护肤<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li role="separator" class="divider visible-xs"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=19">美妆用品</router-link>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=20">面膜品牌</router-link>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=18">香水</router-link>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=21">微商</router-link>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=16">个人护理</router-link>
                                        </li>
                                    </ul>
                                </li>
                                <!--class{
																				divider:分隔线样式
																			}
																			role="separator":声明这个元素为一个分隔线-->
                                <li role="separator" class="divider"></li>
                                <li class="dropdown-submenu">
                                    <a class="hidden-xs" tabindex="-1" href="#">代工企业</a>
                                    <a class="submenu-title visible-xs" tabindex="-1" href="#">代工企业<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li role="separator" class="divider visible-xs"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=2">院线代工</router-link>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=23">加工包材</router-link>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=24">原料</router-link>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <router-link tabindex="-1" to="/brand?category=1&type=22">日化代工</router-link>
                                        </li>
                                    </ul>
                                </li>
                                <!--class{
																				divider:分隔线样式
																			}
																			role="separator":声明这个元素为一个分隔线-->
                            </ul>
                            <!--下拉菜单-->
                        </li>
                        <li class="dropdown">
                            <router-link to="/school?category=2" class="dropdown-toggle hidden-xs" role="button" aria-haspopup="true" aria-expanded="false">美业机构<span class="caret"></span></router-link>
                            <a class="dropdown-toggle visible-xs" role="button" aria-haspopup="true" aria-expanded="false">美业机构<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link to="/school?category=2&type=1">美容学校</router-link>
                                </li>
                                <!--class{
												divider:分隔线样式
											}
											role="separator":声明这个元素为一个分隔线-->
                                <li role="separator" class="divider"></li>
                                <li>
                                    <router-link to="/school?category=2&type=2">其他学校</router-link>
                                </li>

                            </ul>
                            <!--下拉菜单-->
                        </li>
                        <li class="dropdown">
                            <router-link to="/exhibition?category=3" class="dropdown-toggle hidden-xs" role="button" aria-haspopup="true" aria-expanded="false">展会信息<span class="caret"></span></router-link>
                            <a class="dropdown-toggle visible-xs" role="button" aria-haspopup="true" aria-expanded="false">展会信息<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link to="/exhibition?category=3&type=1">国内展会</router-link>
                                </li>
                                <!--class{
												divider:分隔线样式
											}
											role="separator":声明这个元素为一个分隔线-->
                                <li role="separator" class="divider"></li>
                                <li>
                                    <router-link to="/foreignExhibition?category=3&type=2">国际展会</router-link>
                                </li>
                                <li role="separator" class="divider"></li>
                                <li>
                                    <router-link to="/exhibitor?category=3&type=3">美博会参展商名录</router-link>
                                </li>

                            </ul>
                            <!--下拉菜单-->
                        </li>
                        <li class="dropdown">
                            <router-link to="/news?category=4" class="dropdown-toggle hidden-xs" role="button" aria-haspopup="true" aria-expanded="false">美妆资讯<span class="caret"></span></router-link>
                            <a class="dropdown-toggle visible-xs" role="button" aria-haspopup="true" aria-expanded="false">美妆资讯<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link to="/news?category=4&type=1">美容美妆资讯</router-link>
                                </li>
                                <!--class{
												divider:分隔线样式
											}
											role="separator":声明这个元素为一个分隔线-->
                                <li role="separator" class="divider"></li>
                                <li>
                                    <router-link to="/news?category=4&type=2">美容美妆赛事</router-link>
                                </li>

                            </ul>
                            <!--下拉菜单-->
                        </li>
                        <li class="dropdown">
                            <router-link to="/recruit?category=5" class="dropdown-toggle hidden-xs" role="button" aria-haspopup="true" aria-expanded="false">美业招聘<span class="caret"></span></router-link>
                            <a class="dropdown-toggle visible-xs" role="button" aria-haspopup="true" aria-expanded="false">美业招聘<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link to="/recruit?category=5&type=1">本地招聘信息</router-link>
                                </li>
                                <!--class{
												divider:分隔线样式
											}
											role="separator":声明这个元素为一个分隔线-->
                                <li role="separator" class="divider"></li>
                                <li>
                                    <router-link to="/resume?category=5&type=2">本地求职信息</router-link>
                                </li>

                            </ul>
                            <!--下拉菜单-->
                        </li>
                        <li class="dropdown">
                            <router-link to="/shoptransfer?category=6" class="dropdown-toggle hidden-xs" role="button" aria-haspopup="true" aria-expanded="false">门店转让<span class="caret"></span></router-link>
                            <a class="dropdown-toggle visible-xs" role="button" aria-haspopup="true" aria-expanded="false">门店转让<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link to="/shoptransfer?category=6&type=1">美业转让</router-link>
                                </li>
                                <!--class{
												divider:分隔线样式
											}
											role="separator":声明这个元素为一个分隔线-->
                                <li role="separator" class="divider"></li>
                                <li>
                                    <router-link to="/shoptransfer?category=6&type=2">其他转让</router-link>
                                </li>

                            </ul>
                            <!--下拉菜单-->
                        </li>
                        <li class="dropdown">
                            <router-link to="/logistics?category=7" class="dropdown-toggle hidden-xs" role="button" aria-haspopup="true" aria-expanded="false">物流快递<span class="caret"></span></router-link>
                            <a class="dropdown-toggle visible-xs" role="button" aria-haspopup="true" aria-expanded="false">物流快递<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link to="/logistics?category=7&type=1">全国物流</router-link>
                                </li>
                                <!--class{
												divider:分隔线样式
											}
											role="separator":声明这个元素为一个分隔线-->
                                <li role="separator" class="divider"></li>
                                <li>
                                    <router-link to="/logistics?category=7&type=2">快递查询</router-link>
                                </li>
                                <li role="separator" class="divider"></li>
                                <li>
                                    <router-link to="/logistics?category=7&type=3">网点查询</router-link>
                                </li>

                            </ul>
                            <!--下拉菜单-->
                        </li>
                        <li class="dropdown">
                            <router-link to="/service?category=8" class="dropdown-toggle hidden-xs" role="button" aria-haspopup="true" aria-expanded="false">便民服务<span class="caret"></span></router-link>
                            <a class="dropdown-toggle visible-xs" role="button" aria-haspopup="true" aria-expanded="false">便民服务<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link to="/service?category=8&type=1">美容店家</router-link>
                                </li>
                                <!--class{
												divider:分隔线样式
											}
											role="separator":声明这个元素为一个分隔线-->
                                <li role="separator" class="divider"></li>
                                <li>
                                    <router-link to="/service?category=8&type=2">装修服务</router-link>
                                </li>
                                <li role="separator" class="divider"></li>
                                <li>
                                    <router-link to="/service?category=8&type=3">广告制作</router-link>
                                </li>
                                <li role="separator" class="divider"></li>
                                <li>
                                    <router-link to="/service?category=8&type=4">包材包装</router-link>
                                </li>
                                <li role="separator" class="divider"></li>
                                <li>
                                    <router-link to="/service?category=8&type=5">代加工</router-link>
                                </li>

                            </ul>
                            <!--下拉菜单-->
                        </li>
                        <!--导航子元素2-->
                    </ul>
                    <!--导航元素2 -->
                </div>
                <!--导航布局-->
            </div>
            <!--end 全屏布局-->
        </nav>
    </div>
</template>

<script>
</script>

<style>
</style>