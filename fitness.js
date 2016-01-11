

function start() {
	var numExercises = document.getElementById('numExercises').value;
	var numCycles = document.getElementById('numCycles').value;
	var myList = new ExerciseList();
	myList.populateList();
	var myWorkout = new Workout(myList.exerciseList, numExercises, numCycles);
	// console.log(myWorkout.workout);
	buttonBits()
	myWorkout.nextExercise();

}

function Exercise(name){
	this.name  = name;
}


function ExerciseList(){
	this.exerciseNames = ["jump rope", "jumping jacks", "push ups", "push up death spinner", "mountain climbers", "bicycles", "crunches", "leg raises", "bird dog", "squats", "toe touch", "bicep curls", "skull crushers", "dumbell butterflies", "dumbell overhead lift", "dual leg raises", "shoulder shredders", "thrusters", "weighted sit ups", "planks", "side planks", "shadow boxing", "ski jumps", "foot fire", "burpees", "jump squats", "lunges", "hydrants", "yoga trees", "down dog", "jack knife situps", "V-ups"];
	
	this.exerciseList = [];
	this.populateList = function(){
		for(var i = 0; i < this.exerciseNames.length; i++){
			var a = new Exercise(this.exerciseNames[i]);
			this.exerciseList.push(a);
		}

	};
}



function Workout(list, numExercises, numCycles){

	this.workout = [];

	this.select = function(numExercises){
		var cycle = [];
		for(var i = 0; i < numExercises; i++){
			randNum = Math.floor((Math.random() * list.length));
			if(cycle.indexOf(list[randNum]) === -1 ){
				cycle.push(list[randNum]);
			} else {
				i--;
			}
		}
		this.workout.push(cycle);
	};

	for (var j = 0; j < numCycles; j++){
		this.select(numExercises);
	}

	this.display = function(exercise){
		var exDisplay = document.getElementById('exerciseName');
		var old = exDisplay.firstChild;
		var name = exercise.name;
		var text = document.createTextNode(name);

		exDisplay.replaceChild(text, old);
	}

	this.displayClock = function(time){
		var exDisplay = document.getElementById('countdown');
		exDisplay.innerHTML = time;
    	// var old = exDisplay.firstChild;
    	// var name = exercise.name;
    	// var text = document.createTextNode(name);

    	// exDisplay.replaceChild(text, old);
    }
    
    this.nextExercise = function (){
    	if (this.workout[0].length === 0){
    		this.workout.shift();
    		if (this.workout.length === 0){
    			console.log("You're done")
    		} else {
    			this.timerBreak();
    		}
    		
    	} else {
    		this.display(this.workout[0][0]);  
    		this.timerShort();
    	}
    }

    this.timer = function() {
    	var self = this;
    	var timer = Math.floor((Math.random() * 30) + 30);
    	document.getElementById('whatamidoing').innerHTML = 'SUFFER';

    	console.log('Go!!!');

    	var timeBit = setInterval(function () {
    		console.log(timer);
    		self.displayClock(timer);
    		timer--;
    		if (timer < 0) {

    			clearInterval(timeBit);
    			self.workout[0].shift()
    			self.nextExercise();

    		}
    	}, 1000);
    }

    this.timerShort = function() {
    	var self = this;
    	console.log('Short Rest');
    	document.getElementById('whatamidoing').innerHTML = 'REST';
    	var timer = 15

    	var timeBit = setInterval(function () {
    		console.log(timer);
    		self.displayClock(timer)
    		timer--;
    		if (timer < 0) {
    			clearInterval(timeBit);
    			self.timer();

    		}
    	}, 1000);
    }

    this.timerBreak = function() {
    	var self = this;
    	console.log('Long Rest');
    	var timer = 60

    	var timeBit = setInterval(function () {
    		console.log(timer);
    		timer--;
    		if (timer < 0) {
    			clearInterval(timeBit);
    			self.nextExercise();

    		}
    	}, 1000);
    }


}




// Front-End Goodies

function buttonBits(){
	 var first = document.getElementById('first');
	 var second = document.getElementById('second');
	 first.style.zIndex = -1;
}

















