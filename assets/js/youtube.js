function onYouTubeIframeAPIReady(){player=new YT.Player("player",{height:"390",width:"640",videoId:"BKBC30ZXQDA",events:{onReady:onPlayerReady}})}function onPlayerReady(a){a.target.playVideo(),a.target.mute()}function stopVideo(){player.stopVideo()}function playSilent(){player.mute(),player.playVideo()}var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var player,done=!1;playSilent();