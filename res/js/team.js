var teamUi = (function() {
    let teamlistnav;
	let circle;
	let myTeam;
	let circleAnimation;
	let subtab;
    return {
        "init": function() {
			teamlistnav = document.getElementById('teamlistnav');
			circle = {"v":"5.6.5","fr":30,"ip":0,"op":15,"w":145,"h":145,"nm":"Comp 2","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[100,100,0],"ix":2},"a":{"a":0,"k":[-7.125,-14.125,0],"ix":1},"s":{"a":0,"k":[84.5,84.5,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[157.25,157.25],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.121568627451,0.278431372549,0.482352941176,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-7.125,-14.125],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":479,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 1","tt":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[100,100,0],"ix":2},"a":{"a":0,"k":[-7.125,-14.125,0],"ix":1},"s":{"a":0,"k":[92.1,92.1,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[157.25,157.25],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.121568627451,0.278431372549,0.482352941176,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-7.125,-14.125],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":479,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"nc 선","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[72.5,72.5,0],"ix":2},"a":{"a":0,"k":[73,-2884,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[140,140],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.121568634931,0.278431372549,0.482352971096,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[73,-2884],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":100,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":1,"s":[100]},{"t":14,"s":[0]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":-100,"op":776,"st":-100,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Pre-comp 1","tt":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[72.5,72.5,0],"ix":2},"a":{"a":0,"k":[100,100,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":200,"h":200,"ip":0,"op":479,"st":0,"bm":0}],"markers":[]}
			myTeam = teamlistnav.querySelectorAll('li')[0].querySelector('.circle');
			circleAnimation = bodymovin.loadAnimation({
				animationData: circle,
				container: myTeam,
				renderer: 'svg',
				loop: false,
				autoplay: false
			});
			setTimeout(function() {
				circleAnimation.play();
			}, 500);

			let tabItem = teamlistnav.querySelectorAll('li');
			tabItem.forEach(function(item) {
				item.addEventListener('click', function(e){
					e.preventDefault();
					if (!e.target.classList.contains('active')) {
						let indexNum = webUI.getChildIndex(e.target.closest('li'));
						teamlistnav.querySelectorAll('li').forEach(function(item) {
							item.classList.remove('active');
						});
						item.classList.add('active');
						webUI.animatedScrollTo(teamlistnav, teamlistnav.querySelectorAll('li')[indexNum].offsetLeft - (teamlistnav.clientWidth * 0.5), 300);
						teamlistnav.querySelector('svg').remove();
						myTeam = teamlistnav.querySelectorAll('li')[indexNum].querySelector('.circle');
						circleAnimation = bodymovin.loadAnimation({
							animationData: circle,
							container: myTeam,
							renderer: 'svg',
							loop: false,
							autoplay: true
						});
					}

				}, true);
			});
        },
		"initSubTab": function(container) {
			let subtab = container;
			let tabItem = container.querySelectorAll('.tab_item');
			teamUi.activeBar(0,subtab);
			tabItem.forEach(function(item) {
				item.addEventListener('click', function(e){
					e.preventDefault();
					if (!e.target.classList.contains('active')) {
						let indexNum = webUI.getChildIndex(e.target.closest('li'));
						subtab.querySelector('.active').classList.remove('active');
						e.target.closest('li').classList.add('active');
						teamUi.activeBar(indexNum,subtab);
					}
				});
			});
			window.addEventListener('resize', function(e) {
				webUI.debounce(function() {
					let indexNum = webUI.getChildIndex(subtab.querySelector('.active'));
					teamUi.activeBar(indexNum,subtab);					
				}, 100);
			});
        },
		"activeBar" : function(index, container) {
			let subtab = container;
			let bar = subtab.querySelector('.active_bar');
			let initPos = container.querySelectorAll('li')[index].lastElementChild;
			bar.style.left = initPos.offsetLeft + 'px';
			bar.style.width = initPos.offsetWidth + 'px';
		},
		"initDepthTab": function(container) {
			let subtab = container;
			let tabItem = container.querySelectorAll('.tab_item');
			teamUi.activeFill(0,subtab);
			tabItem.forEach(function(item) {
				item.addEventListener('click', function(e){
					e.preventDefault();
					if (!e.target.classList.contains('active')) {
						let indexNum = webUI.getChildIndex(e.target);
						subtab.querySelector('.active').classList.remove('active');
						e.target.classList.add('active');
						teamUi.activeFill(indexNum,subtab);
					}
				});
			});
			window.addEventListener('resize', function(e) {
				let indexNum = webUI.getChildIndex(subtab.querySelector('.active'));
				teamUi.activeFill(indexNum,subtab);					
			});
        },
		"activeFill" : function(index, container) {
			let subtab = container;
			let fill = subtab.querySelector('.active_fill');
			let initPos = container.querySelectorAll('li')[index];
			fill.style.left = initPos.offsetLeft + 'px';
			fill.style.width = initPos.offsetWidth + 'px';
		},
		"init3DepthTab": function(container) {
			let subtab = container;
			let tabItem = container.querySelectorAll('.tab_item');
			tabItem.forEach(function(item) {
				item.addEventListener('click', function(e){
					e.preventDefault();
					if (!e.target.classList.contains('active')) {
						let indexNum = webUI.getChildIndex(e.target);
						subtab.querySelector('.active').classList.remove('active');
						e.target.classList.add('active');
						webUI.animatedScrollTo(subtab, subtab.querySelectorAll('li')[indexNum].offsetLeft - (subtab.clientWidth * 0.5), 300);
					}
				});
			});
        }
    }
})();