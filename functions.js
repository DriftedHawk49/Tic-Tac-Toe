var player = function(index,name,choice,icon){
	this.index = index;
	this.name = name;
	this.choice = choice;
	this.icon = icon;
	this.gridpos = [];
}


var win_game = function(pl1,pl2){
	if(pl1[0]==1&&pl1[1]==1&&pl1[2]==1){
		return "p1w";
	}
	else if(pl2[0]==1&&pl2[1]==1&&pl2[2]==1){
		return "p2w";
	}
	else if(pl1[3]==1&&pl1[4]==1&&pl1[5]==1){
		return "p1w";
	}
	else if(pl2[3]==1&&pl2[4]==1&&pl2[5]==1){
		return "p2w";
	}
	else if(pl1[6]==1&&pl1[7]==1&&pl1[8]==1){
		return "p1w";
	}
	else if(pl2[6]==1&&pl2[7]==1&&pl2[8]==1){
		return "p2w";
	}
	else if(pl1[0]==1&&pl1[3]==1&&pl1[6]==1){
		return "p1w";
	}
	else if(pl2[0]==1&&pl2[3]==1&&pl1[6]==1){
		return "p2w";
	}
	else if(pl1[1]==1&&pl1[4]==1&&pl1[7]==1){
		return "p1w";
	}
	else if(pl2[1]==1&&pl2[4]==1&&pl2[7]==1){
		return "p2w";
	}
	else if(pl1[2]==1&&pl1[5]==1&&pl1[8]==1){
		return "p1w";
	}
	else if(pl2[2]==1&&pl2[5]==1&&pl2[8]==1){
		return "p2w";
	}
	else if(pl1[0]==1&&pl1[4]==1&&pl1[8]==1){
		return "p1w";
	}
	else if(pl2[0]==1&&pl2[4]==1&&pl2[8]==1){
		return "p2w";
	}
	else if(pl1[2]==1&&pl1[4]==1&&pl1[6]==1){
		return "p1w";
	}
	else if(pl2[2]==1&&pl2[4]==1&&pl2[6]==1){
		return "p2w";
	}
	else return "none";
}


var game_end = function(pl1,pl2){
	if(pl1[0]==1||pl2[0]==1){
		if(pl1[1]==1||pl2[1]==1){
			if(pl1[2]==1||pl2[2]==1){
				if(pl1[3]==1||pl2[3]==1){
					if(pl1[4]==1||pl2[4]==1){
						if(pl1[5]==1||pl2[5]==1){
							if(pl1[6]==1||pl2[6]==1){
								if(pl1[7]==1||pl2[7]==1){
									if(pl1[8]==1||pl2[8]==1){
										return true;
									}else return false;
								}else return false;
							}else return false;
						}else return false;
					}else return false;
				}else return false;
			}else return false;
		}else return false;
	}else return false;
}