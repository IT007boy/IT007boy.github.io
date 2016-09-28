var zero=0;
var imageLeft=0;//初始化
var imageTop=0;
var mycat=["images/cat/1.png","images/cat/2.png","images/cat/3.png","images/cat/4.png","images/cat/5.png","images/cat/6.png","images/cat/7.png","images/cat/8.png","images/cat/9.png","images/cat/10.png","images/cat/11.png","images/cat/12.png","images/cat/13.png","images/cat/14.png","images/cat/15.png","images/cat/16.png","images/cat/17.png","images/cat/18.png",]
//对图片进行数组处理排序
function cata (){
	var catimage=document.getElementById('catimage');
	var catimagebox=document.getElementById('catimagebox');//得到对应的id
	if (zero==mycat.length-1) {zero=0;catimage.src=mycat[zero];}
		else{zero+=1;catimage.src=mycat[zero];
			if(zero<=6){if (imageLeft>=document.body.clientWidth) {imageLeft=0;catimagebox.style.paddingLeft=0+"px";}imageLeft+=Math.random()*80;catimagebox.style.paddingLeft=imageLeft+"px";}//随机数控制距离和margin控制方向,判断是否超过界限并重置
			if(zero<=12&&zero>6){imageTop-=Math.random()*10;catimagebox.style.paddingTop=imageTop+"px";}
			if(zero<=18&&zero>12){if(imageTop>=document.body.clientHeight){imageTop=0;catimagebox.style.paddingTop=0+"px";}imageTop+=Math.random()*80;catimagebox.style.paddingTop=imageTop+"px";}
		}
}
setInterval("cata()",200);//控制时间
	function forme(){
		document.getElementById('forme').style.display="block";
		document.getElementById('write').style.display="none";
		document.getElementById('footer').style.display="none";
	}
window.onload=function(){
 				var music=document.getElementById("music");
 				if (music.pause()) {music.play()}
 					else{music.play()}
}
