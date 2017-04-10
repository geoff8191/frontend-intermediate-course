$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends',
		headers: {
		 	'Accept': 'application/vnd.twitchtv.v5+json',
		 	'Client-ID': 'ben9smk4ut8egaywavw994hkf6c4n6'
		},
		success: function(data) {
			for(var i = 0;i<20;i++){
				$("#video_"+i).attr("src","https://player.twitch.tv/?channel="+data.streams[i].channel.name);
				//$("#preImg_"+i).attr("src",data.streams[i].preview.medium);
				$("#avatar_"+i).attr("src",data.streams[i].channel.logo);	
				$("#text_"+i).html("<p>"+data.streams[i].channel.status+"</p><p>"+data.streams[i].channel.display_name+"</p>");
			}
		}
	});
});