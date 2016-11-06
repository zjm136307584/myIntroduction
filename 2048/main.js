var borad=new Array();
var score=0;
var hasConflict=new Array();
$(document).ready(function(){
	newGame();
});
function newGame(){
	//初始化棋盘
	init();
	//生成数字
	score=0;
	updateScore(score);
	generateOneNumber();
	generateOneNumber();
}

function init(){
	//使16个格子归位
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			var gridCell=$("#grid-cell-"+i+"-"+j);
			gridCell.css("top",getPosTop(i,j));
			gridCell.css("left",getPosLeft(i,j));
		}
	}
	//为数组赋值
	for(var i=0;i<4;i++){
		borad[i]=new Array();
		for(var j=0;j<4;j++){
			borad[i][j]=0;
		}
	}
	for(var i=0;i<4;i++){
		hasConflict[i]=new Array();
		for(var j=0;j<4;j++){
			hasConflict[i][j]=false;
		}
	}
	//动态添加number-cell元素
	upDateBoradView();

}

function upDateBoradView(){

	$(".number-cell").remove();
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			$("#grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
			var theNumberCell=$("#number-cell-"+i+"-"+j);

			if(borad[i][j]==0){
				theNumberCell.css("width","0px");
				theNumberCell.css("height","0px");
				theNumberCell.css("top",getPosTop(i,j));
				theNumberCell.css("left",getPosLeft(i,j));
			}	
			else{
				theNumberCell.css("width","100px");
				theNumberCell.css("height","100px");
				theNumberCell.css("top",getPosTop(i,j));
				theNumberCell.css("left",getPosLeft(i,j));
				theNumberCell.css("background",getBackgroundColor(borad[i][j]));
				theNumberCell.css("color",getNumberColor(borad[i][j]));
				theNumberCell.text(borad[i][j]);
			}	
			hasConflict[i][j]=false;
		}
	}
}
//在随机一个位子，生成一个数字
function generateOneNumber(){
	if(nospace(borad)){
		return false;
	}
	else{
		//随机一个位子
		var positionX=parseInt( Math.floor( Math.random()  * 4 ) );
		var positionY=parseInt( Math.floor( Math.random()  * 4 ) );
		while(true){
			if(borad[positionX][positionY]==0){
				break;
			}
			else{
				positionX=parseInt( Math.floor( Math.random()  * 4 ) );
				positionY=parseInt( Math.floor( Math.random()  * 4 ) );
			}
		}
		//随机一个数字
		var randNum=Math.random()>0.5?2:4;

		//在随机的位子显示随机的数字
		borad[positionX][positionY]=randNum;
		showNumberWithAnimation(positionX,positionY,randNum);
	}
}

//键盘事件
$(document).keydown(function(e){

	switch( e.keyCode ){
        case 37: //left
        	e.preventDefault();
            if( moveLeft() ){
                setTimeout("generateOneNumber()",210);
                setTimeout("isgameover()",300); 
            }
            break;
        case 38: //up
        	e.preventDefault();
            if( moveUp() ){
                setTimeout("generateOneNumber()",210);
                setTimeout("isgameover()",300);
            }
            break;
        case 39: //right
        	e.preventDefault();
            if( moveRight() ){
                setTimeout("generateOneNumber()",210);
                setTimeout("isgameover()",300);
            }
            break;
        case 40: //down
        	e.preventDefault();
            if( moveDown() ){
                setTimeout("generateOneNumber()",210);
                setTimeout("isgameover()",300);
            }
            break;
        default: //default
            break;
    }
});

function moveLeft(){
	if (!canMoveLeft(borad)) {
		return false;
	}
	else{
		for(var i=0;i<4;i++){
			for(var j=1;j<4;j++){
				if(borad[i][j]!=0){
					for(var k=0;k<j;k++){
						if(borad[i][k]==0&&noBlockHorizontal(i,k,j,borad)){
							//move
							showMoveAnimation(i,j,i,k);
							borad[i][k]=borad[i][j];
							borad[i][j]=0;
							break;
						}
						else if (borad[i][k]==borad[i][j]&&noBlockHorizontal(i,k,j,borad)&&!hasConflict[i][k]) {
							//move
							showMoveAnimation(i,j,i,k);
							borad[i][k]+=borad[i][j];
							borad[i][j]=0;						
							//add
							score+=borad[i][k];
							updateScore(score);
							hasConflict[i][k]=true;
							break;
						}
					}
				}
			}
		}		
	setTimeout("upDateBoradView()",200);
	return true;
	}
}

function moveRight(){
	if (!canMoveRight(borad)) {
		return false;
	}
	else{
		for(var i=0;i<4;i++){
			for(var j=2;j>=0;j--){
				if(borad[i][j]!=0){
					for(var k=3;k>j;k--){
						if(borad[i][k]==0&&noBlockHorizontal(i,j,k,borad)){
							//move
							showMoveAnimation(i,j,i,k);
							borad[i][k]=borad[i][j];
							borad[i][j]=0;
							break;
						}
						else if (borad[i][k]==borad[i][j]&&noBlockHorizontal(i,j,k,borad)&&!hasConflict[i][k]) {
							//move
							showMoveAnimation(i,j,i,k);
							borad[i][k]+=borad[i][j];
							borad[i][j]=0;						
							//add
							score+=borad[i][k];
							updateScore(score);

							hasConflict[i][k]=true;
							break;
						}
					}
				}
			}
		}		
	setTimeout("upDateBoradView()",200);
	return true;
	}
}

function moveUp(){
	if (!canMoveUp(borad)) {
		return false;
	}
	else{
		for(var j=0;j<4;j++){
			for(var i=1;i<4;i++){
				if (!borad[i][j]==0) {
					for(var k=0;k<i;k++){
						if (borad[k][j]==0&&noBlockHorizontal2(j,k,i,borad)) {
							showMoveAnimation(i, j, k, j);
							borad[k][j]=borad[i][j];
							borad[i][j]=0;
							break;
						}
						else if (borad[k][j]==borad[i][j]&&noBlockHorizontal2(j,k,i,borad)&&!hasConflict[k][j]) {
							showMoveAnimation(i, j, k, j);
							borad[k][j]+=borad[i][j];
							borad[i][j]=0;

							score+=borad[k][j];
							updateScore(score);
							hasConflict[k][j]=true;
							break;
					}
				}
			}
		}
		}		
	setTimeout("upDateBoradView()",200);
	return true;
	}
}


function moveDown(){
	if (!canMoveDown(borad)) {
		return false;
	}
	else{
		for(var j=0;j<4;j++){
			for(var i=2;i>=0;i--){
				if (!borad[i][j]==0) {
					for(var k=3;k>i;k--){
						if (borad[k][j]==0&&noBlockHorizontal2(j,k,i,borad)) {
							showMoveAnimation(i,j,k,j);
							borad[k][j]=borad[i][j];
							borad[i][j]=0;
							break;
						}
						else if (borad[k][j]==borad[i][j]&&noBlockHorizontal2(j,k,i,borad)&&!hasConflict[k][j]) {
							showMoveAnimation(i,j,k,j);
							borad[k][j]+=borad[i][j];
							borad[i][j]=0;
							score+=borad[k][j];
							updateScore(score);
							hasConflict[k][j]=true;
							break;
						}
					}
				}
			}
		}
		setTimeout("upDateBoradView()",200);
		return true;
	}
}

function isgameover(){
	if (nospace(borad)&&nomove(borad)) {
		gameover();
	}
}

function gameover(){
	alert("游戏结束");
}