var floatUI = (function() {
	let pTop;
	let before_st;
    return {
        "init": function(prevTop) {
			before_st = 0;
			if (prevTop !== undefined){
				pTop = prevTop.offsetHeight;
			} else {
				pTop = 0;
			}
			let last_st = 0;
			let ticking = false;
			window.addEventListener('scroll', function(e) {
			  last_st = window.scrollY;

			  if (!ticking) {
				window.requestAnimationFrame(function() {
				  floatUI.onScroll(last_st);
				  ticking = false;
				});

				ticking = true;
			  }
			});
			window.addEventListener('resize', function(e) {
				if (prevTop !== undefined){
					pTop = prevTop.offsetHeight;
				} else {
					pTop = 0;
				}
				floatUI.onScroll(last_st);
			});
        },
		"onScroll": function(st) {
			const elaTop = document.querySelector('.tab_teamlist_wrap');
			const ela = document.querySelectorAll('.fix');
			const tit = document.querySelector('.page_title_wrap');
			const srh = document.querySelector('.srh_empty_box');			
			const chat = document.querySelector('.chat_inner');

			if (tit != null){
				if (st > 0){
					tit.classList.add('shadow');
				} else {
					tit.classList.remove('shadow');
				}
			}
			if (srh != null){
				if (st > 0){
					srh.classList.add('shadow');
				} else {
					srh.classList.remove('shadow');
				}
			}
			if (ela.length){
				ela.forEach(function (el) {
					if (pTop > el.getBoundingClientRect().top) {
						el.children[0].style.position = 'fixed';
						el.children[0].style.top = pTop + 'px';
						el.children[0].style.zIndex = '10';
						if (elaTop != null){
							if (st > before_st){
								elaTop.classList.remove('on');
								elaTop.classList.add('off');
							} else {
								elaTop.classList.add('on');
								elaTop.classList.remove('off');
							}
						}
					} else {
						el.children[0].style.position = '';
						el.children[0].style.top = '';
						el.children[0].style.zIndex = '';
						if (elaTop != null){
							elaTop.classList.remove('on');
							elaTop.classList.remove('off');
						}
					}
					before_st = st;
				});
			}
			if (chat != null){
				videoUI.content_scroll();
				chreerUi.ChreerScroll();
			}
		}
    }
})();
