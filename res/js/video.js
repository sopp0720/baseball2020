var videoUI = (function() {
    return {
		"init": function() {
			window.addEventListener('resize', function(e) {
				videoUI.content_scroll();
			});
			let last_st = 0;
			let ticking = false;
			document.querySelector('.content_scroll').addEventListener('scroll', function(e) {
			  last_st = this.scrollTop;

			  if (!ticking) {
				window.requestAnimationFrame(function() {
				  videoUI.onScroll(last_st);
				  ticking = false;
				});

				ticking = true;
			  }
			});
			videoUI.content_scroll();
		},
        "content_scroll": function() {
			if (document.querySelector('.chat_inner') != null){
				let scMh = window.innerHeight - document.querySelector('.video_wrap').clientHeight - document.querySelector('.btn_player_view').clientHeight - document.querySelector('.page_title_wrap').clientHeight - document.querySelector('.tab_1depth_wrap').clientHeight - 1;
				let scBm = document.querySelector('.scroll_bottom');
				if (scBm != null){
					if (scBm.clientHeight < scMh){
						document.querySelector('.chat_inner').style.height = scMh + 'px';
					} else {
						document.querySelector('.chat_inner').style.height = '';
					}
				} else {
					document.querySelector('.chat_inner').style.height = scMh + 'px';
				}
			}
        },
		"onScroll": function(st) {
			const tit = document.querySelector('.page_title_wrap');
			if (st > 0){
				tit.classList.add('shadow');
			} else {
				tit.classList.remove('shadow');
			}

		}
    }
})();
