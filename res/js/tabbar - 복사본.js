(function($,sr){
    // http://paulirish.com/2009/throttled-smartresize-jquery-event-handler/
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function(func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          }

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 50);
      };
  };

    // smartresize
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


var $window = $(window);

// 탭바 네비게이션이 배치된 컨테이너 //
var $tab_container = $('.tab-container');

// 탭바 네비게이션 //
var $tabbar = $('.tab-bar');

/*
클릭 이벤트를 수신하는 실제 버튼
해당 버튼에는 Active 효과가 없음
*/
var $tab_button = $('.tab-button');

// Active 효과(원 안에 빨간 아이콘)가 배치된 컨테이너 입니다. //
var $active_tab = $('.active-tab-container');
var $active_label = $('.active-label-container');

var active_tab = 0; // Active된 슬라이드 index
var tab_length = $tab_button.find('.tab').length; // Tab 버튼의 개수
var tab_width = $tab_button.find('.tab').outerWidth(); // 1개 tab 버튼의 width
var middle_width = $tabbar.find('.middle').outerWidth(); // Active 탭바(탭바에 움푹 파진 영역)의 width 값

/*
oversize : Active 탭바와 탭 버튼 간의 width 차를 구하여 탭바의 위치를 설정하는데 사용함
Active 탭바의 width가 tab 버튼의 width보다 클 경우
탭의 일부가 화면 밖으로 벗어나지 않으면 정확한 위치에 배치할 수 없습니다.
*/
var oversize = middle_width - tab_width - 30;

var $swiper = $('.swiper-container');
var activeIndex = 0;

/*
각 탭에 해당하는 페이지를 슬라이드 시키기 위해 .swiper-container에 swiper 라이브러리를 적용합니다.
이 부분은 탭바 기능 및 인터렉션을 확인하기 위해 임시로 적용한 라이브러리로
실제 개발에는 필요 없는 기능입니다.
*/
var mySwiper;

// 로딩이 완료되면 GNB를 노출시킵니다. //
window.onload = function() {
setTimeout(function() {
    $('.tab-container').animate({
        bottom: 0
    }, 300, function() {
        $('.tab-container').find('.active-tab-container').find('.tab').eq(0).addClass('active');
    });
}, 0);
}
$window.on('load', function() {
    // 화면 로드가 완료되면 tab_width와 middle_width 값을 갱신합니다. //
    tab_width = $tab_button.find('.tab').outerWidth();
    middle_width = $tabbar.find('.middle').outerWidth();
    oversize = middle_width - tab_width - 30;
}).smartresize(function() {
    // 화면의 크기가 변경되면 tab_width와 middle_width 값을 갱신합니다. //
    tab_width = $tab_button.find('.tab').outerWidth();
    middle_width = $tabbar.find('.middle').outerWidth();
    oversize = middle_width - tab_width - 30;

    $tabbar.find('.caption').css({
        'flex-basis': 15
    });

    // Active tab의 width가 tab 버튼의 width 보다 클 경우 //
    if (oversize > 0) {
        // 탭바에 big 클래스를 제거합니다 //
        $active_tab.removeClass('large');
        $tab_button.removeClass('large');

        // 탭바를 화면 밖으로 이동시킵니다. //
        $tabbar.css({
            'width': 'calc(100vw + ' + oversize + 'px)',
            'margin-left': -(oversize / 2)
        });

        $active_tab.css({
            'width': 'calc(100vw + ' + oversize + 'px)',
            'margin-left': -(oversize / 2)
        });

        $active_label.css({
            'width': 'calc(100vw + ' + oversize + 'px)',
            'margin-left': -(oversize / 2)
        });
    }

    // Active tab의 width가 tab 버튼의 width 보다 작을 경우 //
    else {
        // 탭바에 big 클래스를 추가합니다 //
        $active_tab.addClass('large');
        $tab_button.addClass('large');

        // $active_tab.find('.active').css('width', $tabbar.find('.middle').outerWidth());

        // 탭바의 width를 화면 너비만큼 늘립니다. //
        $tabbar.css({
            'width': '100vw',
            'margin': 0
        });
        // $tabbar.find('.caption').css({
        //   'flex-basis':15
        // });
    }
}).resize();

// Tab 버튼의 클릭 이벤트 //
$tab_button.find('.tab').on('click', function(e) {
    var $this = $(this);

    // 탭 버튼의 index를 구합니다. //
    var index = $tab_button.find('.tab').index(this);

    // 이미 활성화 된 버튼을 다시 클릭한 경우 콜백함수를 종료합니다. //
    if (active_tab == index) {
        return false;
    }

    // goto_position(index);
    // 해당 index의 슬라이드를 이동시킵니다. //

    goto_position(index);
});

// Active 탭바 이동 함수 //
function goto_position(index) {
    // flex의 여백 분배 비율을 구합니다. //
    /*
    탭바는 아래와 같이 구성되어 있습니다.
    === left-side === ((middle)) === right-side ===
    Active index별 각 비율은 
    0:4, 1:3, 2:2, 3:1, 4:0 입니다.
    */
    var left_flex_grow = index;
    var right_flex_grow = (tab_length - 1) - index;

    fadeInOut_tabs(active_tab, index, 250);

    $tabbar.find('.left-side').css({
        'flex-grow': left_flex_grow,
        '-webkit-box-flex': left_flex_grow
    });
    $tabbar.find('.right-side').css({
        'flex-grow': right_flex_grow,
        '-webkit-box-flex': right_flex_grow
    });

    active_tab = index;
}

function fadeInOut_tabs(begin, end, delay) {
    // Fade out //
    setTimeout(function() {
        $active_tab.find('.tab').eq(begin).removeClass('active right left');
        $active_label.find('.label').eq(begin).removeClass('active');
        // 시작탭이 종료탭 보다 앞에 있을 경우 -> //
        if (begin < end) {
            $active_tab.removeClass('from-right');
            $active_tab.addClass('from-left');
            // 시작 지점부터 끝 지점까지 해당하는 tab 버튼에 hide 클래스를 추가합니다. //
            for (var i = begin; i <= end; i++) {
                $tab_button.find('.tab').eq(i).addClass('hide');
            }
        }

        // 시작탭이 종료탭 보다 뒤에 있을 경우 <- //
        else {
            $active_tab.removeClass('from-left');
            $active_tab.addClass('from-right');
            for (var i = begin; i >= end; i--) {
                // 시작 지점부터 끝 지점의 바로 전 탭 까지 해당하는 tab 버튼에 hide 클래스를 추가합니다. //
                $tab_button.find('.tab').eq(i).addClass('hide');
            }
        }
    }, 0);

    // Fade In //
    setTimeout(function() {
        $tab_button.find('.tab').removeClass('active');
        // 시작탭이 종료탭 보다 앞에 있을 경우 -> //
        if (begin < end) {
            // 시작 지점부터 끝 지점까지 해당하는 tab 버튼에 hide 클래스를 삭제합니다. //
            for (var i = begin; i < end; i++) {
                $tab_button.find('.tab').eq(i).removeClass('hide');
            }
            $active_label.find('.label').eq(end).addClass('active');
        }

        // 시작탭이 종료탭 보다 뒤에 있을 경우 <- //
        else {
            for (var i = begin; i > end; i--) {
                // 시작 지점부터 끝 지점의 바로 전 탭 까지 해당하는 tab 버튼에 hide 클래스를 추가합니다. //
                $tab_button.find('.tab').eq(i).removeClass('hide');
            }
            $active_label.find('.label').eq(end).addClass('active');
        }
    }, delay);

    // Active //
    setTimeout(function() {
        var date = new Date();
        $active_tab.find('.tab').eq(end).addClass('active');
        // $active_tab.find('.tab').eq(end).find('.circle').empty();
        // $active_tab.find('.tab').eq(end).find('.circle').append('<div class="img-box"><img src="../assets/images/' + active_list[end] +'?' + date.getTime() + '"></div>');

    }, delay - 0);
};