




        $(function(){
            $('.btn').click(function(){
                $('.navi-button>ul').slideToggle();
            });
        });

           $(function(){
            $(".btn01").click(function(){
                $(".btn01").css("font-size","23px").css("text-decoration","underline");
                $(".btn02").css("font-size","18px").css("text-decoration","none");
                $(".btn03").css("font-size","18px").css("text-decoration","none");
                $(".btn04").css("font-size","18px").css("text-decoration","none");
                $(".btn05").css("font-size","18px").css("text-decoration","none");
            });
            $(".btn02").click(function(){
                $(".btn02").css("font-size","23px").css("text-decoration","underline");
                $(".btn01").css("font-size","18px").css("text-decoration","none");
                $(".btn03").css("font-size","18px").css("text-decoration","none");
                $(".btn04").css("font-size","18px").css("text-decoration","none");
                $(".btn05").css("font-size","18px").css("text-decoration","none");
            });
            $(".btn03").click(function(){
                $(".btn03").css("font-size","23px").css("text-decoration","underline");
                $(".btn02").css("font-size","18px").css("text-decoration","none");
                $(".btn01").css("font-size","18px").css("text-decoration","none");
                $(".btn04").css("font-size","18px").css("text-decoration","none");
                $(".btn05").css("font-size","18px").css("text-decoration","none");
            });
            $(".btn04").click(function(){
                $(".btn04").css("font-size","23px").css("text-decoration","underline");
                $(".btn02").css("font-size","18px").css("text-decoration","none");
                $(".btn03").css("font-size","18px").css("text-decoration","none");
                $(".btn01").css("font-size","18px").css("text-decoration","none");
                $(".btn05").css("font-size","18px").css("text-decoration","none");
            });
            $(".btn05").click(function(){
                $(".btn05").css("font-size","23px").css("text-decoration","underline");
                $(".btn02").css("font-size","18px").css("text-decoration","none");
                $(".btn03").css("font-size","18px").css("text-decoration","none");
                $(".btn04").css("font-size","18px").css("text-decoration","none");
                $(".btn01").css("font-size","18px").css("text-decoration","none");
            });
        });

    new WOW().init();

    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination'
        }
    });

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    function openModal(modalname){
      document.get
      $("#modal").fadeIn(300);
      $("."+modalname).fadeIn(300);
  }
  
  $("#modal, .close").on('click',function(){
      $("#modal").fadeOut(300);
      $(".modal-con").fadeOut(300);
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
        center: new kakao.maps.LatLng(37.789045, 126.698722), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var imageSrc = './img/map-logo2.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.789045, 126.698722); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
