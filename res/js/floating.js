var floatUI = (function() {
	let pTop;
    return {
        "init": function(prevTop) {
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
			const ela = document.querySelectorAll('.fix');
			if (!ela.length){
				return;
			}
			const tit = document.querySelector('.page_title_wrap');
			if (tit != null){
				if (st > 0){
					tit.classList.add('shadow');
				} else {
					tit.classList.remove('shadow');
				}
			}
			ela.forEach(function (el) {
				if (pTop > el.getBoundingClientRect().top) {
					el.children[0].style.position = 'fixed';
					el.children[0].style.top = pTop + 'px';
					el.children[0].style.zIndex = '10';
				} else {
					el.children[0].style.position = '';
					el.children[0].style.top = '';
					el.children[0].style.zIndex = '';
				}
			});
		}
    }
})();
