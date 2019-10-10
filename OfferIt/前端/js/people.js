var peopleSpeeds = 0
var peopleFlag = true
function PeopleSwimming(ctx,width,height,distance,angle,WAVE_HEIGHT,boatRun,boatDown){
	console.log("PeopleSwimming")
	// var jumpTime = width-1
	var people = new Image()
	var people_talk = new Image()
	if(boatRun<=width-1200){
		people.src = "../img/people/people_swimming_jump1.png"
		ctx.drawImage(people,width - 550,height * 0.55 + distance(-WAVE_HEIGHT, angle, 0), 200, 100)	
		if(boatRun<=width-1160){
			people_talk.src = "../img/people/people_talk.png"
			ctx.drawImage(people_talk,width - 550,height * 0.55 + distance(-WAVE_HEIGHT, angle, 0)-200, 400, 200)
		}
	}else if(boatRun<=width-1100){
		people.src = "../img/people/people_swimming_jump2.png"
		ctx.drawImage(people,width - 650,height * 0.55 + distance(-WAVE_HEIGHT, angle, 0)-50, 200, 100)
	}else if(boatRun<=width-900){
		people.src = "../img/people/people_swimming_jump3.png"
		ctx.drawImage(people,width - 650,height * 0.55 + distance(-WAVE_HEIGHT, angle, 0)+55, 200, 100)
	}else if(boatRun<=width-850){
		people.src = "../img/people/people_swimming1.png"
		ctx.drawImage(people,width - 650,height * 0.55 + distance(-WAVE_HEIGHT, angle, 0)+80, 200, 100)
	}else if(boatRun<=width-830){
		people.src = "../img/people/people_swimming1.png"
		ctx.drawImage(people,width - 650,height * 0.55 + distance(-WAVE_HEIGHT, angle, 0)+200, 200, 100)
	}else{
		console.log("boatDown",boatDown)
		peopleSpeeds+=10
		if (boatDown >= 199) {
			peopleSpeeds = 0
		}
		if(peopleFlag){
			people.src = "../img/people/people_swimming2.png"
			var Timeout = setTimeout(function(){
				peopleFlag = false
			},50)	
			// clearTimeout(Timeout)
		}else{
			people.src = "../img/people/people_swimming1.png"
			var Timeout = setTimeout(function(){
				peopleFlag = true
			},50)
			// clearTimeout(Timeout)
		}
		
		ctx.drawImage(people,width - 650 - peopleSpeeds,height * 0.55 + distance(-WAVE_HEIGHT, angle, 0)+200, 200, 100)
	}
	
	
}