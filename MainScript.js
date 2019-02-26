$(document).ready(function(){
	//hide show list elemts bassed on id number
	var id = "_0;"
	var aristdata = '{ '+
   '"_1": "https://open.spotify.com/album/6N5bEk8rM1srrYQzm7HOEh",'+
   '"_2": "https://itunes.apple.com/us/album/spark-shop-ep/1453248590?app=music&ign-mpt=uo%3D4",'+
   '"_3": "https://itunes.apple.com/us/album/spark-shop-ep/1453248590?app=itunes&ign-mpt=uo%3D4",'+
   '"_4": "",'+
   '"_5": "https://play.google.com/store/music/album/Arc_Spark_Spark_Shop?id=B74pmfuc73x6yxzuwdjljeu43su&hl=en",'+
   '"_6": "",'+
   '"_7": "",'+
   '"_8": "https://music.amazon.com/albums/B07NS9W3VR?tab=CATALOG",'+
   '"_9": "https://music.youtube.com/playlist?list=OLAK5uy_kZfhGwNTH2YVDGmGSU0nMF78kWIHSwLdM",'+
   '"_10": "https://youtu.be/PDb_cLSVndk",'+
   '"img": "cover.png",'+
   '"title1": "Arc Spark",'+
   '"title2": "Spark Shop",' +
   '"facebook": "",' +
   '"instagram": "https://www.instagram.com/darth_kyro/",' +
   '"twitter": "https://twitter.com/SoCityKi",' +
   '"snapchat": "",' +
   '"pinterest": "",' +
   '"linkedin": "",' +
   '"00": "00" }';
   obj = JSON.parse(aristdata);
	
	$("#title1").text(obj.title1);
	$("#title2").text(obj.title2);
	$("title").text(obj.title1+" - "+obj.title2)
	$(".bg").css("background-image", "url('"+obj.img+"')");
	$(".musiccover").attr("src", obj.img);
	$("#_1").attr("href", obj._1);
	$("#_2").attr("href", obj._2);
	$("#_3").attr("href", obj._3);
	$("#_4").attr("href", obj._4);
	$("#_5").attr("href", obj._5);
	$("#_6").attr("href", obj._6);
	$("#_7").attr("href", obj._7);
	$("#_8").attr("href", obj._8);
	$("#_9").attr("href", obj._9);
	$("#_10").attr("href", obj._10);
	$(".facebook").attr("href", obj.facebook);
	$(".instagram").attr("href", obj.instagram);
	$(".twitter").attr("href", obj.twitter);
	$(".snapchat").attr("href", obj.snapchat);
	$(".pinterest").attr("href", obj.pinterest);
	$(".linkedin").attr("href", obj.linkedin);

	$(".retailer-link").each(function(){
		if($(this).attr("href") == ""){
			//$(this).css( "visibility","visible" );
			$(this).parent("li").hide();
		} else {
			$(this).parent("li").show();
		}
	});
	$(".social-link").each(function(){
		if($(this).attr("href") == ""){
			//$(this).css( "visibility","visible" );
			$(this).hide();
		} else {
			$(this).show();
		}
	});

})
