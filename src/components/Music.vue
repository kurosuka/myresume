<template>
	<div id="music" @click="playMusic()" class="rotate" autoplay preload="auto">
		<audio :src="url"></audio>
		<img src="../assets/music.png"  />
	</div>
</template>

<script>
	export default{
		name:'music',
		data(){
			return{
				url:"http://m10.music.126.net/20190305131042/0642cdbc8102913eba4a292f5e3b7ba0/ymusic/7e7d/0a80/692e/200e011ff5fd6f782bbd96c005fd67df.mp3",
				isStop:true
			}
		},
		methods:{
			playMusic(){
				var audio=document.getElementById("music").getElementsByTagName("audio")[0];
				var audioContent=document.getElementById("music");
				if(audioContent.classList.contains("rotate")){
					audioContent.classList.remove("rotate");
					audio.pause();
					console.log("暂停");
				}else{
					audioContent.classList.add("rotate");
					audio.play();
					console.log("播放")
				}
			}
		}
	}
</script>

<style>
 #music{ border-radius: 100%;background:#ffffff;}
 .rotate{animation: rotate 1.2s linear infinite;}
 #music img{width: 100%; height: 100%; }
 @keyframes rotate{
 	from{transform: rotate(0deg);}
 	to{transform: rotate(360deg);}
 }
</style>