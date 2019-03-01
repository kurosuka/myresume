<template>
    <div id="app">
        <ul id="menu">
            <li data-menuanchor="page1" class="active"><a href="#page1">Section 1</a></li>
            <li data-menuanchor="page2"><a href="#page2">Section 2</a></li>
            <li data-menuanchor="page3"><a href="#page3">Section 3</a></li>
        </ul>
        <full-page :options="options" id="fullpage">
            <div class="section section1 scale">
                <h3>Section 1</h3>
            </div>
            <div class="section section2">
                <div class="slide">
                    <h3>Slide 2.1</h3>
                </div>
                <div class="slide">
                    <h3>Slide 2.2</h3>
                </div>
                <div class="slide">
                    <h3>Slide 2.3</h3>
                </div>
            </div>
            <div class="section section3">
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
          sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
        }
      }
    },
    methods: {
    afterLoad(){
    	var a=document.getElementById("fullpage").getElementsByTagName("section");
    	for(var i=0;i<a.length;i++){
    		
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
</style>
