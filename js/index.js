$(function(){
// 选中所有按钮添加事件
	$(".tab .anniu-box .anniu").click(function(){
		// 所有内容隐藏
		$(".tab .content-box ul").hide();
		// num表示点击的按钮是哪个
		var num = $(".tab .anniu-box .anniu").index($(this));
		// 把对应的内容显示出来
		$(".tab .content-box ul").eq(num).show();
		// 把所有按钮背景色去掉
		$(".tab .anniu-box .anniu").css({
			"background":"rgba(0,0,0,0)",
		})
		// 把对应按钮背景色添加
		$(this).css({
			"background":"#4eb2d6"
		})
	})

//$(".backtop") 返回按钮父容器
		$(".backtop").backTop();
})