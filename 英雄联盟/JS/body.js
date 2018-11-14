// 轮播图
window.onload=function () {
    var list=document.querySelector('.wheel-photo');
        var icos=document.querySelectorAll('.wheel-subscript li');
        var li=document.querySelectorAll('.wheel-photo li');
        var len=li.length;
        var li_width=document.querySelector('.wheel').clientWidth;
        list.innerHTML=list.innerHTML+list.innerHTML;
        li=document.querySelectorAll('.wheel-photo li');
        for(var i=0;i<li.length;i++){
                li[i].style.width=li_width+'px';
        }
        list.style.width=li.length*li_width+'px';
          //自动播放函数
        function autoplay(){
                var count=1;
                timeId=setInterval(function(){
                show(count%len);
                count++;
               },3000)
        }
        //show函数
         function show(n){
                if (n==1) {
                      list.style.marginLeft="0px";
                }
                var w=n>0? -(n-1)*li_width : -(len-1)*li_width;
                var step=20;
                var x=step;
                timeor=setInterval(function(){
                list.style.marginLeft=(w-x)+"px";
                x+=step;
                if (x>li_width) {
                     clearInterval(timeor);
                        
                }

                },20);     
                //移动下标变化
                for(var i=0;i<icos.length;i++){
                        if (n==i) {
                        icos[i].className="on";
                }else{
                     icos[i].className="subscript";    
                } 
        }

}
var hiddenProperty = 'hidden' in document ? 'hidden' : 'webkitHidden' in document ? 'webkitHidden' : 'mozHidden' in document ? 'mozHidden' : null;
var onVisibilityChange = function(){ if (!document[hiddenProperty]) {
  clearInterval("timeId");
  autoplay();
   }
 }
onVisibilityChange();
       // 鼠标移入事件
       //  for(var i=0; i<icos.length;i++){
       //          icos[i].onmouseover=function onmouseover(){
       //                clearInterval(timeId);
       //                 show(this.innerText); 
       //          }
       //          icos[i].onmouseout=function onmouseout(){
       //                 autoplay(); 
       //          } 
       //  }

// autoplay();


// 新闻公告切换
var cuts=document.querySelectorAll('.new-top li');
var news=document.querySelectorAll('.new-middle ul');
  
    cuts[0].onmouseover=function onmouseover1(){
      news[0].style.display="block";
      cuts[0].lastChild.className="green-line";
       cuts[0].firstChild.style.color="#1da6ba";
      for(var i=0;i<news.length;i++){
        if (i!=0) {
          cuts[i].firstChild.style.color="#676767";
          cuts[i].lastChild.className="";
          news[i].style.display="none";
        }
      }
    }
    cuts[1].onmouseover=function onmouseover2(){
      news[1].style.display="block";
       cuts[1].lastChild.className="green-line";
        cuts[1].firstChild.style.color="#1da6ba";
      for(var i=0;i<news.length;i++){
        if (i!=1) {
           cuts[i].firstChild.style.color="#676767";
          cuts[i].lastChild.className="";
          news[i].style.display="none";
        }
      }
    }
    cuts[2].onmouseover=function onmouseover3(){
      news[2].style.display="block";
       cuts[2].lastChild.className="green-line";
       cuts[2].firstChild.style.color="#1da6ba";
      for(var i=0;i<news.length;i++){
        if (i!=2) {
           cuts[i].firstChild.style.color="#676767";
          cuts[i].lastChild.className="";
          news[i].style.display="none";
        }
      }
    }
    cuts[3].onmouseover=function onmouseover4(){
      news[3].style.display="block";
       cuts[3].lastChild.className="green-line";
       cuts[3].firstChild.style.color="#1da6ba";
      for(var i=0;i<news.length;i++){
        if (i!=3) {
           cuts[i].firstChild.style.color="#676767";
          cuts[i].lastChild.className="";
          news[i].style.display="none";
        }
      }
    }
  cuts[4].onmouseover=function onmouseover5(){
      news[4].style.display="block";
      cuts[4].lastChild.className="green-line";
      cuts[4].firstChild.style.color="#1da6ba";
      for(var i=0;i<news.length;i++){
        if (i!=4) {
           cuts[i].firstChild.style.color="#676767";
          cuts[i].lastChild.className="";
          news[i].style.display="none";
        }
      }
    }

//热门活动切换
var cuts2=document.querySelectorAll('.active-list li');
var actives=document.querySelectorAll('.active-box ul');
  
    cuts2[0].onmouseover=function onmouseover1(){
      actives[0].style.display="block";
       cuts2[0].lastChild.className="green-line2";
      cuts2[0].firstChild.style.color="#1da6ba";
        cuts2[0].firstChild.style.fontWeight="700";
      for(var i=0;i<actives.length;i++){
        if (i!=0) {
           cuts2[i].firstChild.style.color="#676767";
           cuts2[i].firstChild.style.fontWeight="";
          cuts2[i].lastChild.className="";
          actives[i].style.display="none";
        }
      }
    }
    cuts2[1].onmouseover=function onmouseover2(){
      actives[1].style.display="block";
       cuts2[1].lastChild.className="green-line2";
      cuts2[1].firstChild.style.color="#1da6ba";
        cuts2[1].firstChild.style.fontWeight="700";
      for(var i=0;i<actives.length;i++){
        if (i!=1) {
          cuts2[i].firstChild.style.fontWeight="";
           cuts2[i].firstChild.style.color="#676767";
          cuts2[i].lastChild.className="";
          actives[i].style.display="none";
        }
      }
    }
    cuts2[2].onmouseover=function onmouseover3(){
      actives[2].style.display="block";
         cuts2[2].lastChild.className="green-line2";
      cuts2[2].firstChild.style.color="#1da6ba";
      cuts2[2].firstChild.style.fontWeight="700";
      for(var i=0;i<actives.length;i++){
        if (i!=2) {
          cuts2[i].firstChild.style.fontWeight="";
           cuts2[i].firstChild.style.color="#676767";
          cuts2[i].lastChild.className="";
          actives[i].style.display="none";
        }
      }
    }
   
    var slice=document.querySelector('.new-hero-skin');
    var video=document.getElementById('video');
    video.onmouseover=function (){
        video.play();
        slice.style.paddingBottom=80+"px";
    }
     video.onmouseout=function (){
        video.pause();
        slice.style.paddingBottom=0+"px";
    }
    var seven=document.querySelector('.pop-seven');
        seven.onmouseover=function (){
         video.play();   
         slice.style.paddingBottom=80+"px";
    }
    seven.onmouseout=function (){
          video.pause();  
           slice.style.paddingBottom=0+"px";
    }

var allHeroA=document.querySelectorAll('.all-hero-title ul li a');
var allHeroSpan=document.querySelectorAll('.all-hero-title ul li span');
var allHeroIcon=document.querySelectorAll('.all-hero-title ul li i');
var allHeroList=document.querySelectorAll('.all-hero-list');

  allHeroA[0].onmouseover=function() {
   allHeroSpan[0].style.color="#1da6ba";
   allHeroIcon[0].className="all-hero-icon2";
   allHeroList[0].style.display="block";
   for(var i=0;i<allHeroA.length;i++){
        if (i!=0) {
    allHeroList[i].style.display="none";
     allHeroSpan[i].style.color="#000";
     allHeroIcon[i].className="all-hero-icon";
  }
    }
      }
        allHeroA[1].onmouseover=function() {
   allHeroList[1].style.display="block";
   allHeroSpan[1].style.color="#1da6ba";
   allHeroIcon[1].className="all-hero-icon2";
   for(var i=0;i<allHeroA.length;i++){
        if (i!=1) {
       allHeroList[i].style.display="none";
     allHeroSpan[i].style.color="#000";
     allHeroIcon[i].className="all-hero-icon";
  }
    }
      }
        allHeroA[2].onmouseover=function() {
     allHeroList[2].style.display="block";
   allHeroSpan[2].style.color="#1da6ba";
   allHeroIcon[2].className="all-hero-icon2";
   for(var i=0;i<allHeroA.length;i++){
        if (i!=2) {
      allHeroList[i].style.display="none";
     allHeroSpan[i].style.color="#000";
     allHeroIcon[i].className="all-hero-icon";
  }
    }
      }
        allHeroA[3].onmouseover=function() {
     allHeroList[3].style.display="block";
   allHeroSpan[3].style.color="#1da6ba";
   allHeroIcon[3].className="all-hero-icon2";
   for(var i=0;i<allHeroA.length;i++){
        if (i!=3) {
      allHeroList[i].style.display="none";
     allHeroSpan[i].style.color="#000";
     allHeroIcon[i].className="all-hero-icon";
  }
    }
      }
        allHeroA[4].onmouseover=function() {
     allHeroList[4].style.display="block";
   allHeroSpan[4].style.color="#1da6ba";
   allHeroIcon[4].className="all-hero-icon2";
   for(var i=0;i<allHeroA.length;i++){
        if (i!=4) {
      allHeroList[i].style.display="none";
     allHeroSpan[i].style.color="#000";
     allHeroIcon[i].className="all-hero-icon";
  }
    }
      }
        allHeroA[5].onmouseover=function() {
   allHeroList[5].style.display="block";
   allHeroSpan[5].style.color="#1da6ba";
   allHeroIcon[5].className="all-hero-icon2";
   for(var i=0;i<allHeroA.length;i++){
        if (i!=5) {
      allHeroList[i].style.display="none";
     allHeroSpan[i].style.color="#000";
     allHeroIcon[i].className="all-hero-icon";
  }
    }
      }
        allHeroA[6].onmouseover=function() {
     allHeroList[6].style.display="block";
   allHeroSpan[6].style.color="#1da6ba";
   allHeroIcon[6].className="all-hero-icon2";
   for(var i=0;i<allHeroA.length;i++){
        if (i!=6) {
      allHeroList[i].style.display="none";
     allHeroSpan[i].style.color="#000";
     allHeroIcon[i].className="all-hero-icon";
  }
    }
      }






}