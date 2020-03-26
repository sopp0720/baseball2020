var relayUi = (function() {
    return {
		"initSubTab": function(container) {
			let subtab = container;
			let tabItem = container.querySelectorAll('.tab_item');
			relayUi.activeBar(0,subtab);
			tabItem.forEach(function(item) {
				item.addEventListener('click', function(e){
					e.preventDefault();
					if (!e.target.classList.contains('active')) {
						let indexNum = webUI.getChildIndex(e.target.closest('li'));
						subtab.querySelector('.active').classList.remove('active');
						e.target.closest('li').classList.add('active');
						relayUi.activeBar(indexNum,subtab);
						webUI.animatedScrollTo(subtab, subtab.querySelectorAll('li')[indexNum].offsetLeft - (subtab.clientWidth * 0.5), 300);
					}
				});
			});
			window.addEventListener('resize', function(e) {
				let indexNum = webUI.getChildIndex(subtab.querySelector('.active'));
				relayUi.activeBar(indexNum,subtab);					
			});
        },
		"activeBar" : function(index, container) {
			let subtab = container;
			let bar = subtab.querySelector('.active_bar');
			let initPos = container.querySelectorAll('li')[index].lastElementChild;
			bar.style.left = initPos.offsetLeft + 'px';
			bar.style.width = initPos.offsetWidth + 'px';
		},
		"initscrollTab": function(container) {
			let subtab = container;
			let tabItem = container.querySelectorAll('li');
			tabItem.forEach(function(item) {
				item.addEventListener('click', function(e){
					e.preventDefault();
					if (!e.target.classList.contains('current')) {
						let indexNum = webUI.getChildIndex(e.target.closest('li'));
						subtab.querySelector('.current').classList.remove('current');
						e.target.closest('li').classList.add('current');
						webUI.animatedScrollTo(subtab, (subtab.querySelectorAll('li')[indexNum].offsetLeft + subtab.querySelectorAll('li')[indexNum].clientWidth * 0.5) - (subtab.clientWidth * 0.5), 300);
					}
				});
			});
        }
    }
})();