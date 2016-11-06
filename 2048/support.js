function getPosTop(i,j){
	return 20+120*i;
}
function getPosLeft(i,j){
	return 20+120*j;
}
function getBackgroundColor(number){
	    switch(number){
    	case 2:return "#eee4da";
    	break;
    	case 4:return "#ede0c8";
    	break;
    	case 8:return "#f2b179";
    	break;
    	case 16:return "#f59563";
    	break;
    	case 32:return "#f67c5f";
    	break;
    	case 64:return "#f65e3b";
    	break;
    	case 128:return "#edcf72";
    	break;
    	case 258:return "#edcc61";
    	break;
    	case 512:return "#9c0";
    	break;
    	case 1024:return "#33b5e5";
    	break;
    	case 2048:return "#09c";
    	break;
    }
}
function getNumberColor(number){
	if(number<=4){
		return "#776e65";
	}
	else{
		return "white";
	}
}

function nospace(arr){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			arr[i][j]==0;
			return false;
		}
	}
	return true;
}
function canMoveLeft(borad){
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
			if(borad[i][j]!=0){
				if(borad[i][j-1]==0||borad[i][j]==borad[i][j-1]){
					return true;
				}
			}
		}
	}
	return false;
}

function canMoveRight(borad){
	for(var i=0;i<4;i++){
		for(var j=2;j>=0;j--){
			if(borad[i][j]!=0){
				if(borad[i][j+1]==0||borad[i][j]==borad[i][j+1]){
					return true;
				}
			}
		}
	}
	return false;
}


function noBlockHorizontal(row,col1,col2,borad){
	for(var i=col1+1;i<col2;i++){
		if (borad[row][i]!=0) {
			return false;
		}
	}
	return true;
}

function canMoveUp( board ){

    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 1 ; i < 4 ; i ++ )
            if( borad[i][j] != 0 )
                if( borad[i-1][j] == 0 || borad[i-1][j] == borad[i][j] )
                    return true;

    return false;
}


function canMoveDown( board ){

    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 2 ; i >= 0 ; i -- )
            if( borad[i][j] != 0 )
                if( borad[i+1][j] == 0 || borad[i+1][j] == borad[i][j] )
                    return true;

    return false;
}
function noBlockHorizontal2(col,row1,row2,borad){
	for(var i=row1+1;i<row2;i++){
		if (borad[i][col]!=0) {
			return false;
		}
	}
	return true;
}
function nomove(borad){
	if (canMoveLeft(borad)||canMoveRight(borad)||canMoveUp(board)||canMoveDown(board)) {
		return false;
	}
	else{
		return true;
	}
}

function updateScore(score){
	$("span").text(score);
}