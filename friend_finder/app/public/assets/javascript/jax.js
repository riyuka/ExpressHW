function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var gender = document.forms["myForm"]["gender"].value;
    var one = document.forms["myForm"]["q_one"].value;
    var two = document.forms["myForm"]["q_two"].value;
    var three = document.forms["myForm"]["q_three"].value;
    var four = document.forms["myForm"]["q_four"].value;
    var five = document.forms["myForm"]["q_five"].value;
    var six = document.forms["myForm"]["q_six"].value;
    var seven = document.forms["myForm"]["q_seven"].value;
    var eight = document.forms["myForm"]["q_eight"].value;
    var nine = document.forms["myForm"]["q_nine"].value;
    var ten = document.forms["myForm"]["q_ten"].value;
    if (name == "" ) {
        alert("All field must be filled out");
        return false;
    }
    if (gender == "" ) {
        alert("All field must be filled out");
        return false;
    }
    if (one == "" ) {
        alert("All field must be filled out");
        return false;
    }
    if (two == "" ) {
        alert("All field must be filled out");
        return false;
    }
    if (three == "" ) {
        alert("All field must be filled out");
        return false;
    }
    if (four == "" ) {
        alert("All field must be filled out");
        return false;
    }
    if (five == "" ) {
        alert("All field must be filled out");
        return false;
    }
    if (six == "" ) {
        alert("All field must be filled out");
        return false;
    }
    if (seven == "" ) {
        alert("All field must be filled out");
        return false;
    }
    if (eight == "" ) {
        alert("All field must be filled out");
        return false;
    }
    if (nine == "" ) {
        alert("All field must be filled out");
        return false;
    }
    if (ten == "" ) {
        alert("All field must be filled out");
        return false;
    }
    return true;
    }

$.ajax({
	url: '/questions',
	method: 'GET'
}).then(function(data){
    //variables end with D means difference, user means current user
    var obj, userObj, userName, objD, matchId, matchName;
    
    var userArr = [];
    var smallestArr =[];
    var objDArr= [];
    
    userObj = data[data.length - 1];
    userName = data[data.length - 1].name;
    userArr.push(userObj.q_one, userObj.q_two, userObj.q_three, userObj.q_four, userObj.q_five, userObj.q_six, userObj.q_seven, userObj.q_eight, userObj.q_nine, userObj.q_ten);
    console.log(userObj.id, userArr);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    //the other users' data
	for (var i=0; i<data.length -1; i++){
		obj = data[i];
        var arr = [];
        var arrD = [];
        arr.push(obj.q_one, obj.q_two, obj.q_three, obj.q_four, obj.q_five, obj.q_six, obj.q_seven, obj.q_eight, obj.q_nine, obj.q_ten);

        console.log(obj.id, arr);

        function difference(a, b) {
            return Math.abs(a - b);
        }
        
        //find each question's score difference
        arrD.push(difference(obj.q_one, userObj.q_one), difference(obj.q_two ,userObj.q_two), difference(obj.q_three, userObj.q_three), difference(obj.q_four , userObj.q_four), difference(obj.q_five ,userObj.q_five), difference(obj.q_six , userObj.q_six), difference(obj.q_seven , userObj.q_seven), difference(obj.q_eight,userObj.q_eight), difference(obj.q_nine , userObj.q_nine), difference(obj.q_ten , userObj.q_ten));

        console.log(obj.id, arrD);
        console.log(obj.id, arrD.reduce(reducer));

        //the object of other users' id and total difference
         objD = {
            idD: obj.id,
            differenceD: arrD.reduce(reducer)
        };
    
        smallestArr.push(arrD.reduce(reducer));
        objDArr.push(objD);
    }

    console.log(objDArr);
    console.log(smallestArr);

    var smallest = Math.min.apply(null, smallestArr);

    for (var i=0; i<objDArr.length; i++) {
        if (objDArr[i].differenceD == smallest) {
            matchId = objDArr[i].idD;
        //console.log(matchId, objDArr[i].differenceD);
        //console.log(data[objDArr[i].idD].name, objDArr[i].differenceD);
      }
    }
    console.log(matchId);

    for (var i=0; i<data.length; i++) {
        if (data[i].id == matchId) {
            matchName = data[i].name;
        }
    }
    console.log(`Dear ${userName}, your match is ${matchName}`);
    $("#user-name").text(userName);
    $("#match-name").text(matchName);
});


$('.checkbox').on('click', function(){
  $(this).siblings().removeClass("active");
  $(this).addClass("active");
})