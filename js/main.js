window.onload = function(){
	
		$('.my_out').click(function(){
			var onf = confirm('客官，忍心退出吗');
			if(onf){
				location = 'login.html'
			}
		})
		
		var slider = mui("#slider");
		slider.slider({
			interval: 2000
		});
		var $index = null;	
		$('.fl_menu a').click(function(){
			$index = $(this).index();
			$(this).css({
				background:'white',
				borderRight:'none'
			}).siblings().css({
				background:'#F2F2F2',
				borderRight:'1px solid #E4E4E4'
			});
			$('.fl_right div').eq($index).css('display','block').siblings().css('display','none');
		})
		
		$('.gwc_show').click(function(){$(this).css('display','none').siblings().css('display','block');})
		$('.gwc_hide').click(function(){$(this).css('display','none').siblings().css('display','block');})
		$('.gwc_show1').click(function(){
			$('.gwc_hide').css('display','block');
			$('.gwc_show').css('display','none');
			$(this).css('display','none').siblings().css('display','block');
		})
		$('.gwc_hide1').click(function(){ 
			$('.gwc_hide').css('display','none');
			$('.gwc_show').css('display','block');
			$(this).css('display','none').siblings().css('display','block');
		})
		
		
		

//		var ii = document.getElementById('gwc_show');
//		ii.onclick = function(){
//			this.src = 'images/gwc_xz@3x.png';
//		}

//		var aa = document.getElementById('my_charac')
//		aa.onmousemove = function(e){
//			e = e || window.event;
//			var x = e.clientX;
//			var y = e.clientY;
//			console.log(x+'+'+y);
//		}
//		$('.my_charac').mousemove(function(e){
//			alert(1)
//			e = e || window.event;
//			var x = e.clientX;
//			var y = e.clientY;
//			console.log(x+'+'+y);
//		})
		
		
		var $count = $('.gwc_co').text();
		$('.gwc_de').click(function(){
			if($(this).siblings('.gwc_co').text() != 0){
				$count = $(this).siblings('.gwc_co').text()-1;
			}
			$(this).siblings('.gwc_co').text($count);
		})
		$('.gwc_ad').click(function(){
			$count = $(this).siblings('.gwc_co').text()-0+1;
			$(this).siblings('.gwc_co').text($count);
		}) 
		
		var myPhoto = document.getElementById('myPhoto');
		var myPh = document.getElementById('my_ph');
		var myCircle = document.getElementById('myCircle');
		var myCharac = document.getElementById('my_charac');
		var myBox = document.getElementById('tabbar-with-map');
		var onbottom = true;
		myPhoto.onclick = function(){
//			console.log($('.my_circle').css('top'));
			console.log(myCircle.offsetTop);
			if(onbottom){
				myPh.style.top = '5rem';
				myCircle.style.top = '-5rem';
				myCharac.style.transform = 'rotate(360deg)';
				myCharac.style.opacity = '1';
				myCharac.style.transition = '2s';
				myCharac.style.transitionDelay = '.5s'; 
				myBox.style.height = '11.8rem';
				onbottom = false;
			}
			else{
				myPh.style.top = '0.96rem';
				myCircle.style.top = '-16.2rem';
				myCharac.style.transform = 'rotate(0deg)';
				myCharac.style.opacity = '0';
				myCharac.style.transition = '.5s';
				myBox.style.height = 'auto';
				onbottom = true;
			}
		}
		

		
		
//		var gwc_de = document.getElementById('gwc_decrease'),
//			gwc_co = document.getElementById('gwc_count'),
//			gwc_ad = document.getElementById('gwc_add');
//		var gwc_count = gwc_co.innerHTML;
//		gwc_de.onclick = function(){
//			if(gwc_count != 0){
//				gwc_count--;
//			}
//			gwc_co.innerHTML = gwc_count;
//		}
//		gwc_ad.onclick = function(){
//			gwc_count++;
//			gwc_co.innerHTML = gwc_count;
//		}
}
