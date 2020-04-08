var floatUI = (function() {
	let pTop;
    return {
        "init": function(prevTop) {
			pTop = prevTop.offsetHeight;
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
				pTop = prevTop.offsetHeight;
				floatUI.onScroll(last_st);
			});
        },
		"onScroll": function(st) {
			const ela = document.querySelectorAll('.fix');
			const tit = document.querySelector('.page_title_wrap');
			ela.forEach(function (el) {
				if (pTop > el.getBoundingClientRect().top) {
					el.children[0].style.position = 'fixed';
					el.children[0].style.top = pTop + 'px';
					el.children[0].style.zIndex = '10';
					tit.classList.remove('shadow');
				} else if (pTop <= el.getBoundingClientRect().top && st > 0) {
					el.children[0].style.position = '';
					el.children[0].style.top = '';
					el.children[0].style.zIndex = '';
					tit.classList.add('shadow');
				} else {
					el.children[0].style.position = '';
					el.children[0].style.top = '';
					el.children[0].style.zIndex = '';
					tit.classList.remove('shadow');
				}
			});
		}
    }
})();
