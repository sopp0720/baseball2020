var chreerUi = (function() {
	let lastScrollTop = 0;
	let bfocusvent; 
    return {
		"chatlayout": function(obj) {
			let dummy = document.getElementById('dummy');
			let timer;
			let container = document.getElementById('chat_wrap');
			obj.addEventListener('focus', function(){
				bfocusvent = true;
				setTimeout(function(){
					document.querySelector('.chat_inner').scrollTop = (document.querySelector('.chat_inner').scrollHeight - document.querySelector('.chat_inner').offsetHeight);
				}, 100);
				timer = setInterval(function(){
					if (dummy.value == ''){
						container.querySelector('.ic_chat_send').style.display = 'none';
					} else {
						container.querySelector('.ic_chat_send').style.display = 'block';
					}
					dummy.value = obj.value;
					obj.style.height = (dummy.scrollHeight) + 'px';
					container.querySelector('.chat_inner').style.paddingBottom = (document.querySelector('.chat_input').scrollHeight)+"px";
					container.querySelector('.chreer_selection').style.bottom = (document.querySelector('.chat_input').scrollHeight)+"px";
					container.querySelector('.ic_chat_down').style.bottom = (document.querySelector('.chat_input').scrollHeight)+"px";
				}, 100);
			});
			obj.addEventListener('blur', function(){
				clearInterval(timer);
				bfocusvent = false;
			});
        },
		"ChreerScroll" : function() {
			if (bfocusvent) {
				return;				
			}
			let container = document.getElementById('chat_wrap');
			webUI.debounce(function() {
				let st = window.scrollY;
				if (st > lastScrollTop && Math.abs(st - lastScrollTop) > 5){
					container.classList.remove('down');
				} else if (st < lastScrollTop && Math.abs(st - lastScrollTop) > 5){
					container.classList.add('down');
				}
				lastScrollTop = st;
			}, 100);
		}
    }
})();