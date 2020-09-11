




        $(function(){
            $('.function-button6').click(function(){
                $('.menu-box-button>ul').slideToggle();
            });
        });

           $(function(){
            $(".function-button1").click(function(){
                $(".function-button1").css("font-size","23px").css("text-decoration","underline");
                $(".function-button2").css("font-size","16px").css("text-decoration","none");
                $(".function-button3").css("font-size","16px").css("text-decoration","none");
                $(".function-button4").css("font-size","16px").css("text-decoration","none");
                $(".function-button5").css("font-size","16px").css("text-decoration","none");
            });
            $(".function-button2").click(function(){
                $(".function-button2").css("font-size","23px").css("text-decoration","underline");
                $(".function-button1").css("font-size","16px").css("text-decoration","none");
                $(".function-button3").css("font-size","16px").css("text-decoration","none");
                $(".function-button4").css("font-size","16px").css("text-decoration","none");
                $(".function-button5").css("font-size","16px").css("text-decoration","none");
            });
            $(".function-button3").click(function(){
                $(".function-button3").css("font-size","23px").css("text-decoration","underline");
                $(".function-button2").css("font-size","16px").css("text-decoration","none");
                $(".function-button1").css("font-size","16px").css("text-decoration","none");
                $(".function-button4").css("font-size","16px").css("text-decoration","none");
                $(".function-button5").css("font-size","16px").css("text-decoration","none");
            });
            $(".function-button4").click(function(){
                $(".function-button4").css("font-size","23px").css("text-decoration","underline");
                $(".function-button2").css("font-size","16px").css("text-decoration","none");
                $(".function-button3").css("font-size","16px").css("text-decoration","none");
                $(".function-button1").css("font-size","16px").css("text-decoration","none");
                $(".function-button5").css("font-size","16px").css("text-decoration","none");
            });
            $(".function-button5").click(function(){
                $(".function-button5").css("font-size","23px").css("text-decoration","underline");
                $(".function-button2").css("font-size","16px").css("text-decoration","none");
                $(".function-button3").css("font-size","16px").css("text-decoration","none");
                $(".function-button4").css("font-size","16px").css("text-decoration","none");
                $(".function-button1").css("font-size","16px").css("text-decoration","none");
            });
        });

    new WOW().init();

    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination'
        }
    });

    $(function(){
        $(".pro").click(function(){
            $(".section04-pro").css("display","flex");
            $(".section04-bake").css("display","none");
        });
        $(".bake").click(function(){
            $(".section04-pro").css("display","none");
            $(".section04-bake").css("display","flex");
        });
    });

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
      center: new kakao.maps.LatLng(37.789053, 126.698711), // 지도의 중심좌표
      level: 4 // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = './img/map-logo2.png', // 마커이미지의 주소입니다    
  imageSize = new kakao.maps.Size(37.1, 63.7), // 마커이미지의 크기입니다
  imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
  markerPosition = new kakao.maps.LatLng(37.789053, 126.698711); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
position: markerPosition,
image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  

// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
var content = '<div class="customoverlay">' +
  '  <a href="#" target="_blank">' +
  '    <span class="title">헤이리 예술마을</span>' +
  '  </a>' +
  '</div>';

// 커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng(37.789053, 126.698711);  

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
  map: map,
  position: position,
  content: content,
  yAnchor: 1 
});