/*
** Lottie Animation을 위한 js
*/


/*
** body 클래스에 들어있는 팀 이름
** 10개의 구단 + default
** (defalut, doosan, hanhwa, kia, kiwoom, kt, lg, lotte, nc, samsung, sk)
*/
var team = $('body').attr('class');              
var teamPath = 'assets/json/team/team_' + team + '.json';
var data;

$('#teamSelect').on("change", function(){
	$('body').removeAttr('class');
	$('body').addClass($(this).val());
	$('.tab-team-info').find('svg').remove();
	// teamPath = 'assets/json/team/team_' + $(this).val() + '.json';
	
	if($(this).val() == 'default') {
		data = team_default;
	}
	else if($(this).val() == 'lg') {
		data = team_lg;
	}
	else if($(this).val() == 'doosan') {
		data = team_doosan;
	}
	else if($(this).val() == 'kia') {
		data = team_kia;
	}
	else if($(this).val() == 'hanhwa') {
		data = team_hanhwa;
	}
	else if($(this).val() == 'kiwoom') {
		data = team_kiwoom;
	}
	else if($(this).val() == 'kt') {
		data = team_kt;
	}
	else if($(this).val() == 'nc') {
		data = team_nc;
	}
	else if($(this).val() == 'lotte') {
		data = team_lotte;
	}
	else if($(this).val() == 'sk') {
		data = team_sk;
	}
	else if($(this).val() == 'samsung') {
		data = team_samsung;
	}


	animation2 = bodymovin.loadAnimation({
		animationData: data,
		container: document.getElementById('circle2'), // svg가 들어갈 컨테이너
		renderer: 'svg',                               // 변환
		loop: false,                                   // 반복 실행 여부
		autoplay: true,                                // 자동 실행
		// path: teamPath                           			 // Json 데이터 경로
	})
});


/* 홈 아이콘 */
var animation1 = bodymovin.loadAnimation({
	animationData: home,
	container: document.getElementById('circle1'), // svg가 들어갈 컨테이너
	renderer: 'svg',                               // 변환
	loop: false,                                   // 반복 실행 여부
	autoplay: true,                                // 자동 실행
	// path: 'assets/json/home.json'                      // Json 데이터 경로
})

/* 팀정보 아이콘 */
var animation2 = bodymovin.loadAnimation({
	animationData: team_default,
	container: document.getElementById('circle2'), // svg가 들어갈 컨테이너
	renderer: 'svg',                               // 변환
	loop: false,                                   // 반복 실행 여부
	autoplay: false,                               // 자동 실행
	// path: teamPath                           			 // Json 데이터 경로
})

/* 중계 아이콘 */
var animation3 = bodymovin.loadAnimation({
	animationData:broadcast,
	container: document.getElementById('circle3'), // svg가 들어갈 컨테이너
	renderer: 'svg',                               // 변환
	loop: false,                                   // 반복 실행 여부
	autoplay: false,                               // 자동 실행
	// path: 'assets/json/broadcast.json'                 // Json 데이터 경로
})

/* 게임 아이콘 */
var animation4 = bodymovin.loadAnimation({
	animationData:game,
	container: document.getElementById('circle4'), // svg가 들어갈 컨테이너
	renderer: 'svg',                               // 변환
	loop: false,                                   // 반복 실행 여부
	autoplay: false,                               // 자동 실행
	// path: 'assets/json/game.json'                      // Json 데이터 경로
})

/* MY 아이콘 */
var animation5 = bodymovin.loadAnimation({
	animationData:my,
	container: document.getElementById('circle5'), // svg가 들어갈 컨테이너
	renderer: 'svg',                               // 변환
	loop: false,                                   // 반복 실행 여부
	autoplay: false,                               // 자동 실행
	// path: 'assets/json/my.json'                        // Json 데이터 경로
})


/*
** 탭 버튼을 클릭하면 탭 버튼의 순서와 동일한 애니메이션 재생
*/
$('.tab-button').find('.tab').on('click', function(){
	var idx = $(this).index();                      // 클릭 한 탭의 Index
	eval('var $animation = animation' + idx);       // 재생 할 애니메이션 변수 선언
	$animation.stop();
	setTimeout(function() {
		$animation.play();
	}, 100);
});