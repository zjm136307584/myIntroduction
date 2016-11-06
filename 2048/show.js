function showNumberWithAnimation(i, j, number){
	var NumberCell=$("#number-cell-"+i+"-"+j);
	NumberCell.css("background",getBackgroundColor(number));
	NumberCell.css("color",getNumberColor(number));
	NumberCell.text(number);

	NumberCell.animate({
		"width":"100px",
		"height":"100px",
		"Top":getPosTop(i, j),
		"left":getPosLeft(i, j)
	},50);
}
function showMoveAnimation(fromx,fromy,tox,toy){
	var NumberCell=$("#number-cell-"+fromx+"-"+fromy);
	NumberCell.animate({
		"Top":getPosTop(tox, toy),
		"left":getPosLeft(tox, toy)
	},200);
}