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
			let scMh = window.innerHeight - document.querySelector('.video_wrap').clientHeight - document.querySelector('.btn_player_view').clientHeight - document.querySelector('.page_title_wrap').clientHeight - document.querySelector('.tab_1depth_wrap').clientHeight - 1;
			if (document.querySelector('.scroll_bottom').clientHeight < scMh){
				document.querySelector('.chat_inner').style.height = scMh + 'px';
			} else {
				document.querySelector('.chat_inner').style.height = '';
			}
//			var scrollH = 
//			scrollH = (window.innerHeight - document.querySelector('.video_wrap').clientHeight - document.querySelector('.btn_player_view').clientHeight - document.querySelector('.page_title_wrap').clientHeight - document.querySelector('.tab_1depth_wrap').clientHeight - 1) + 'px';
//			document.getElementById('chreerScroll').style.minHeight = scrollH;
//			document.querySelector('.chreerScroll').style.height = scrollH;

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
