<template>
    <div id="app">
        <ul id="menu">
            <li data-menuanchor="page1" class="active"><a href="#page1">个人信息</a></li>
            <li data-menuanchor="page2"><a href="#page2">工作经历</a></li>
            <li data-menuanchor="page3"><a href="#page3"></a></li>
        </ul>
        <full-page :options="options" id="fullpage">
            <div class="section" id="section1">
                <div class="inforcontent animated zoomInUp">
                	<div class="infortitle">基本资料</div>
                	<span>姓名：左学雷</span>
                	<span>微信：kurosuka_888</span>
                	<span>毕业院校：山东科技大学</span>
                	<span>专业与学历：教育技术学&nbsp;本科</span>
                	<span>工作年限：8年</span>
                	<span>个人网站：<a href="http://www.baidu.com">www.baidu.com</a></span>
                	<div class="userimg"><img src="../build/logo.png"  /></div>
                </div>
            </div>
            <div class="section"id="section2">
                <div class="slide">
                    <div class="work">
                    	<div>上海丹爱法企业发展有限公司</div>
                    	<span>2015/05~至今</span>
                    	<span>web前端开发</span>
                    	<section>
                    		<span>1.与项目经理与技术团队等进行充分的沟通，开发创建性高，高可用性的web网页制作</span>
                    		<span>2.充分理解项目需求：包括产品的目标，可用性标准以及时间要求；参与移动产品和项目制作，配合后台开发人员实现产品前端界面效果与功能。</span>
                    		<span>3.负责移动产品HTML5、CSS3的编写，解决web端和移动端适配问题等。</span>
                    		<span>4.实现产品UI和交互方面的开发需求，确保产品具有优质的用户使用体验。</span>
                    	</section>
                    </div>
                </div>
                <div class="slide">
                    <div class="work">
                    	<div>苏州瑞安多媒体信息服务有限公司</div>
                    	<span>2011/09~2015/04</span>
                    	<span>web前端开发,flash开发</span>
                    	<section>
                    		<span>1.负责飞利浦电商页面制作和Flash动画制作</span>
                    		<span>2.根据页面需求，编写HTML页面模板</span>
                    		<span>3.使用jQuery编写css动画效果和相关插件</span>
                    		<span>4.编写Flash播放器</span>
                    	</section>
                    </div>
                </div>
            </div>
            <div class="section" id="section3">
                <h3>Section 3</h3>
            </div>
        </full-page>
    </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        options: {
          afterLoad: this.afterLoad,
          scrollOverflow: true,
          scrollBar: false,
          menu: '#menu',
          navigation: true,
          recordHistory:false,
          anchors: ['page1', 'page2', 'page3'],
          sectionsColor: ['#87b0a5', '#109085', '#4d5e8f', '#945c4c', '#a29971', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
        }
      }
    },
    methods: {
    afterLoad:function(anchorLink,index){
    	if(index===1){
    		$('#section1').classList.add('animated zoomIn');
    	}
    },
    onLeave:function(){
    	if(index===2){
    		$('#section1').classList.remove('animated rollIn');
    	}
    }
    }
  }
</script>

<style>


    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    .section1{background: url(assets/1.jpg) no-repeat 100%;}
    .scale{animation: scaler .4s, 500ms;}
    @keyframes scaler{
    	from{
    		transform: scale(1.2);
    	}
    	to{transform: scale(1);}
    }
    .section2{background: url(assets/2.jpg) no-repeat;}
    .section3{background: url(assets/3.jpg) no-repeat;}
    .inforcontent{
    	width: 60%; 
    	height: 40%; 
    	background: rgba(23,20,20,0.58); 
    	position: absolute;
    	left: 0;
    	top: 0;
    	right: 0;
    	bottom: 0;
    	margin: auto;
    	font-size: 14px;
    	box-shadow:0 0 16px rgba(23,20,20,1);
    	border: 1px solid rgba(23,20,20,0.58);
    	border-radius: 8px;
    	padding-left: 1%;
    	padding-top: 1%;
    	animation: toleft 1s backwards;
    	}
	.inforcontent span{
		display: block;
		 font-size: 24px;
		 line-height: 1.5;
		 color: #ffffff;
		 
	}
	.infortitle{font-size: 36px;color:#ffffff; margin-bottom: 10px; border-bottom: 1px solid #ffffff; width: 60%;}
	body{font-family: arial,helvetica, "微软雅黑";}
	#menu li.active a{padding: 0 10px;}
	#menu li.active a:after{background: none;}
	@keyframes toleft{
		from{right:-1000px}
		to{right: 0px;}
	}
	.userimg{width:250px; height: 250px; position: absolute;top: 0; right: 20px; bottom: 0; margin:auto; background: #ffffff; box-shadow: 0px 0px 8px #42B983;}
	.userimg img{max-width: 100%; height: 250px;}
	#menu{background: rgba(23,25,25,.5)}
	#menu li.active{background: #42B983;}
	.slide{}
	.work{
		background: #ffffff;;
		color: #35495E;
		height:300px;
		width: 700px;
		margin: 0 auto;
		box-shadow: 0px 0px 16px #ffffff;
		border-radius: 4px;
	}
	.work>div{font-size: 28px; padding-top: 15px; padding-left: 15px;}
	.work>span{font-size: 20px; padding-left: 15px; padding-top: 15px; display: inline-block;}
	.work section>span{font-size: 16px;padding-left: 15px;padding-top: 10px; display: block;}
</style>
