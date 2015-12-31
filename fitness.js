

function start() {
	var numExercises = document.getElementById('numExercises').value;
	var numCycles = document.getElementById('numCycles').value;
	var myList = new ExerciseList();
	myList.populateList();
	var myWorkout = new Workout(myList.exerciseList, numExercises, numCycles);
	console.log(myWorkout.workout);

}

function Exercise(name){
	this.name  = name;
}


function ExerciseList(){
	this.exerciseNames = ["jump rope", "jumping jacks", "push ups", "push up death spinner", "mountain climbers", "bicycles", "crunches", "leg raises", "bird dog", "squats", "toe touch", "bicep curls", "skull crushers", "dumbell butterflies", "dumbell overhead lift", "dual leg raises", "shoulder shredders", "thrusters", "weighted sit ups", "planks", "side planks", "shadow boxing", "ski jumps", "foot fire", "burpees", "jump squats", "lunges", "hydrants", "yoga trees", "down dog"];
	
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

    this.display = function(){
    	var exDisplay = document.getElementById('exerciseName');
    	var whut = this.workout[0][0].name;
    	var text = document.createTextNode(whut);

    	exDisplay.appendChild(text);
    }
    this.display();

}






function Timer(duration) {
    var time = duration;
    console.log('Go!!!');
    
    var timeInt = setInterval(function(){
        console.log(timer);
        timer--;
        if (timer < 0) {
            console.log('wee');
            clearInterval(timeBit);
        }
    }, 1000);
}



















