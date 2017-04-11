var video_num = 15;

$(document).ready(function () {
	Bone(0,video_num);	
});

$(window).on('load', function () {
	Connect(0,video_num);
	document.addEventListener('scroll', function (event) {
		if($("#bghover").scrollTop()+$(window).height() == document.getElementById('container').clientHeight){
			Bone(video_num,video_num+3);
			Connect(video_num,video_num+3);
			video_num += 3;
		}
	},true);
});

function Bone(num,add){
	for(var i=num;i<add;i++){
		var div_t = $("<div id='text_"+i+"'>").addClass("text").append("<p>").append("<p>");
		var div_m = $("<div>").addClass("meta").append("<img id='avatar_"+i+"'>").append(div_t);
		var div_c = $("<div>").addClass("content").append("<iframe id='video_"+i+"'>").append(div_m);
		$("#container").append(div_c);
	};
}

function Connect(num,add){
	$.ajax({
		type: 'GET',
		url: 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends',
		headers: {
		 	'Accept': 'application/vnd.twitchtv.v5+json',
		 	'Client-ID': 'ben9smk4ut8egaywavw994hkf6c4n6'
		},
		success: function(data) {
			for(var i=num;i<add;i++){
				$("#video_"+i).attr("src","https://player.twitch.tv/?channel="+data.streams[i].channel.name);
				//$("#preImg_"+i).attr("src",data.streams[i].preview.medium);
				$("#avatar_"+i).attr("src",data.streams[i].channel.logo);	
				$("#text_"+i).html("<p>"+data.streams[i].channel.status+"</p><p>"+data.streams[i].channel.display_name+"</p>");
			}
		}
	});
}