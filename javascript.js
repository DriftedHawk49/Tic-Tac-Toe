var cross = "<i class=\"insert fas fa-times\"></i>"; // For Cross Symbol
var circle = "<i class=\"insert far fa-circle\"></i>"; // For Circle Synbol

var pcross = "<i class=\"fas fa-times\"></i>"; // For Cross Symbol
var pcircle = "<i class=\"far fa-circle\"></i>";

var pres,status;
var player1 = new player(1,"player1");
var player2 = new player(2,"player2");
var p1_arr = [];
var p2_arr = [];




$(".submitNames").on("click",function(){
	if($("#p1")[0].value!="" && $("#p2")[0].value!=""){
	player1.name = $("#p1")[0].value;// Put player 1 object specification here.
	player2.name = $("#p2")[0].value;// Put player 2 object specification here.
	$(".p1name")[0].innerText = player1.name;
		$(".info").css("display","none");
		$(".choose").css("display","inline-block");
		// put animation here , hide the name box slowly & show the choose symbol box
}
else {alert("Please Enter Names To Continue !");
console.log("else Section");}

});


$(".choice").on("click",function(){
	if($(this)[0].innerHTML === "<i class=\"gicons far fa-circle\"></i>"){
		player1.choice = "circle";
		player1.icon = "<i class=\"insert far fa-circle\"></i>";
		player2.choice = "cross";
		player2.icon = "<i class=\"insert fas fa-times\"></i>";
	}
	else {
		player1.choice = "cross";
		player1.icon = "<i class=\"insert fas fa-times\"></i>";
		player2.choice = "circle";
		player2.icon = "<i class=\"insert far fa-circle\"></i>";
	}
	pres = player1.choice;
	$("#turn_card")[0].innerText = "Turn : "+player1.name;
		// Insert Animation to hide initial box & display game box;
		$(".initial").css("display","none");
		$(".status").css("display","block");
		$(".game-box").css("display","block");

		$(".p1mark")[0].innerHTML = player1.name;
		$(".p2mark")[0].innerHTML = player2.name;
		if(player1.choice=="cross"){
			$(".p1mark")[0].innerHTML += "&nbsp" + pcross;
			$(".p2mark")[0].innerHTML += "&nbsp" + pcircle;
		}else {
			$(".p2mark")[0].innerHTML += pcross;
			$(".p1mark")[0].innerHTML += pcircle;
		}


});



$(".tiles").on("click",function(){

	if($(this)[0].innerHTML == ""){
		if(pres === player1.choice){
			$(this)[0].innerHTML = player1.icon;
			pres = player2.choice;
			$("#turn_card")[0].innerText = "Turn : "+player2.name;
			p1_arr[$(this)[0].id[1]] = 1;
		}
		else{
			$(this)[0].innerHTML = player2.icon;
			pres = player1.choice;
			$("#turn_card")[0].innerText = "Turn : "+player1.name;
			p2_arr[$(this)[0].id[1]] = 1;
		}
	status = win_game(p1_arr,p2_arr);
	if(status==="p1w"){  // If player 1 wins the game
		$(".winner")[0].innerText = "Winner : "+player1.name;
		$(".loser")[0].innerText = "Loser : "+player2.name;
		$(".game-box").css("display","none");
		$(".status").css("display","none");
		$(".game-end").css("display","block");
	}
	else if(status==="p2w"){ // If Player 2 Wins the game
		$(".winner")[0].innerText = "Winner : "+player2.name;
		$(".loser")[0].innerText = "Loser : "+player1.name;
		$(".game-box").css("display","none");
		$(".status").css("display","none");
		$(".game-end").css("display","block");
	}
	else {  // If no player wins.
		if(game_end(p1_arr,p2_arr)){
			$(".game-box").css("display","none");
			$(".game-end").css("display","block");
			$(".status").css("display","none");
			$(".cards").css("display","none");
			$(".draw").append("You Both Should Learn the Game,"+"<br>"+"Nobody Loses Right Now"+"<br>"+"Its a Damn Draw !");
		}
	}


	}
});