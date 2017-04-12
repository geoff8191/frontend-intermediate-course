$(document).ready(function(){
	for(var i=0;i<20;i++){
		var div_t = $("<div id='text_"+i+"'>").addClass("text").append("<p>").append("<p>");
		var div_m = $("<div>").addClass("meta").append("<img id='avatar_"+i+"'>").append(div_t);
		var div_c = $("<div>").addClass("content").append("<img id='preImg_"+i+"'>").append(div_m);
		$("#container").append(div_c);
	};

	$.ajax({
		type: 'GET',
		url: 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends',
		headers: {
		 	'Accept': 'application/vnd.twitchtv.v5+json',
		 	'Client-ID': 'ben9smk4ut8egaywavw994hkf6c4n6'
		},
		success: function(data) {
			for(var i = 0;i<20;i++){
				$("#preImg_"+i).attr("src",data.streams[i].preview.medium);
				$("#avatar_"+i).attr("src",data.streams[i].channel.logo);	
				$("#text_"+i).html("<p>"+data.streams[i].channel.status+"</p><p>"+data.streams[i].channel.display_name+"</p>");
			}
		}
	});
});