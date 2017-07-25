var friendsData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
    console.log(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    // console.log("req.body.scores++", req.body.scores);
    friendsData.push(req.body);
    res.json(true);

// To find best match:       
	
	var newScores = req.body.scores;
    var compFriendsArr = [];


    //Find a compatible friend
    for(var i=0; i<friendsData.length; i++){
    	// console.log(friendsData[i].scores);
    	var frScores = friendsData[i].scores;
    	var tot = 0;

    	//Loop through the scores and add the absolute difference in scores
    	for(var j=0; j<frScores.length; j++){
    		tot += Math.abs(newScores[j] - frScores[j]);
    		// console.log("new_scores:" + newScores[j] + "frScores: " + frScores[j] + "total " + tot);
    	}

    	compFriendsArr.push({name: friendsData[i].name, photo: friendsData[i].photo, total: tot});
    }

	console.log(compFriendsArr);
	// Was able to find total differences but not able to sort the array to find best match
		

		// var newArray = compFriendsArr.sort(function (a, b) {
  // 				return a.total - b.total;
		// });
		// console.log("best match++++", newArray);

	

    });
  

 
};