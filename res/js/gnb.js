var bnbUi = (function() {
    let home;
    let team;
    let relay;
    let invite;
    let my;
    let homePath;
    let teamPath;
    let relayPath;
    let invitePath;
    let myPath;
    let animation1;
    let animation2;
    let animation3;
    let animation4;
    let animation5;
    let tabbar;
    let tab_button;
    let active_tab_container;
    let active_label_container;
    let active_tab;
    let tab_length;
    let activeIndex;
	let bStartEvent;
    return {
        "init": function() {
            tabbar = document.getElementById('tab_bar');
            tab_button = document.getElementById('tab_button');
            active_tab_container = document.getElementById('active_tab_container');
            active_label_container = document.getElementById('active_label_container');
            active_tab = 0;
            tab_length = tab_button.querySelectorAll('.tab').length
            activeIndex = 0;
			bStartEvent = false;
			tabbar.querySelector('.left_side').addEventListener('transitionend', bnbUi.resetTransitionEndHandler);
            tab_button.addEventListener("click", function(e) {
                e.preventDefault();
                if (e.target.classList.contains('tab')) {
					if (e.target.classList.contains('hide')) {
						return;
					}
					if (bStartEvent) {
						return;
					}
					bStartEvent = true;
                    const index = webUI.getChildIndex(e.target);
                    if (active_tab == index) {
                        return false;
                    }
                    bnbUi.gotoPosition(index);
                    const idx = index + 1;
                    eval('var $animation = animation' + idx);
                    $animation.stop();
                    setTimeout(function() {
                        $animation.play();
                    }, 100);
                }
            }, true);

            setTimeout(function() {
                document.getElementById('footer').classList.add('on');
            }, 0);
            setTimeout(function() {
                active_tab_container.querySelectorAll('.tab')[0].classList.add('active');
            }, 300);
        },
        "initLottie": function() {
            home = document.getElementById('wrap').getAttribute('data-theme');
            team = document.getElementById('wrap').getAttribute('data-theme');
            relay = document.getElementById('wrap').getAttribute('data-theme');
            invite = document.getElementById('wrap').getAttribute('data-theme');
            my = document.getElementById('wrap').getAttribute('data-theme');
            homePath = 'res/json/2021_GNB_json/home/home_' + home + '.json';
            teamPath = 'res/json/2021_GNB_json/team/team_' + team + '.json';
            relayPath = 'res/json/2021_GNB_json/relay/relay_' + relay + '.json';
            invitePath = 'res/json/2021_GNB_json/invite/invite_' + invite + '.json';
            myPath = 'res/json/2021_GNB_json/my/my_' + my + '.json';
            animation1 = bodymovin.loadAnimation({
                container: document.getElementById('circle1'),
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: homePath
            });
            animation2 = bodymovin.loadAnimation({
                container: document.getElementById('circle2'),
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: teamPath
            });
            animation3 = bodymovin.loadAnimation({
                container: document.getElementById('circle3'),
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: relayPath
            });
            animation4 = bodymovin.loadAnimation({
                container: document.getElementById('circle4'),
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: invitePath
            });
            animation5 = bodymovin.loadAnimation({
                container: document.getElementById('circle5'),
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: myPath
            });
        },
		"homeLottie": function() { //홈 변경시 실행
            document.querySelector('.tab_home svg').remove();
            home = document.getElementById('wrap').getAttribute('data-theme');
            teamPath = 'res/json/2021_GNB_json/home/home_' + home + '.json';
            animation2 = bodymovin.loadAnimation({
                container: document.getElementById('circle1'),
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: homePath
            });
        },
        "teamLottie": function() { //팀 변경시 실행
            document.querySelector('.tab_team_info svg').remove();
            team = document.getElementById('wrap').getAttribute('data-theme');
            teamPath = 'res/json/2021_GNB_json/team/team_' + team + '.json';
            animation2 = bodymovin.loadAnimation({
                container: document.getElementById('circle2'),
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: teamPath
            });
        },
		"teamLottie": function() { //중계 변경시 실행
            document.querySelector('.tab_relay svg').remove();
            team = document.getElementById('wrap').getAttribute('data-theme');
            teamPath = 'res/json/2021_GNB_json/relay/relay_' + relay + '.json';
            animation2 = bodymovin.loadAnimation({
                container: document.getElementById('circle3'),
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: relayPath
            });
        },
		"teamLottie": function() { //초대 변경시 실행
            document.querySelector('.tab_invite svg').remove();
            team = document.getElementById('wrap').getAttribute('data-theme');
            teamPath = 'res/json/2021_GNB_json/invite/invite_' + invite + '.json';
            animation2 = bodymovin.loadAnimation({
                container: document.getElementById('circle4'),
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: invitePath
            });
        },
		"teamLottie": function() { //마이 변경시 실행
            document.querySelector('.tab_my svg').remove();
            team = document.getElementById('wrap').getAttribute('data-theme');
            teamPath = 'res/json/2021_GNB_json/my/my_' + my + '.json';
            animation2 = bodymovin.loadAnimation({
                container: document.getElementById('circle5'),
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: myPath
            });
        },
        "fadeInOut": function(begin, end, delay) {
            setTimeout(function() {
                active_tab_container.querySelectorAll('.tab')[begin].classList.remove('active');
                active_label_container.querySelectorAll('.label')[begin].classList.remove('active');
                if (begin < end) {
                    for (let i = begin; i <= end; i++) {
                        tab_button.querySelectorAll('.tab')[i].classList.add('hide');
                    }
                } else {
                    for (let i = begin; i >= end; i--) {
                        tab_button.querySelectorAll('.tab')[i].classList.add('hide');
                    }
                }
            }, 0);
            setTimeout(function() {
                tab_button.querySelectorAll('.tab').forEach(function(item) {
                    item.classList.remove('active');
                });
                if (begin < end) {
                    for (let i = begin; i < end; i++) {
                        tab_button.querySelectorAll('.tab')[i].classList.remove('hide');
                    }
                    active_label_container.querySelectorAll('.label')[end].classList.add('active');
                } else {
                    for (let i = begin; i > end; i--) {
                        tab_button.querySelectorAll('.tab')[i].classList.remove('hide');
                    }
                    active_label_container.querySelectorAll('.label')[end].classList.add('active');
                }
            }, delay);

            setTimeout(function() {
                active_tab_container.querySelectorAll('.tab')[end].classList.add('active');
            }, delay - 0);
        },
        "gotoPosition": function(index) {
            const left_flex_grow = index;
            const right_flex_grow = (tab_length - 1) - index;
            bnbUi.fadeInOut(active_tab, index, 250);
            tabbar.querySelector('.left_side').style.cssText = '-webkit-box-flex:' + left_flex_grow + ';flex-grow:' + left_flex_grow + ';';
            tabbar.querySelector('.right_side').style.cssText = '-webkit-box-flex:' + right_flex_grow + ';flex-grow:' + right_flex_grow + ';';
            active_tab = index;
        },
        "resetTransitionEndHandler": function() {
	        bStartEvent = false;
		}
    }
})();