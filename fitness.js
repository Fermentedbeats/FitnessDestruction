function Exercise(name){
	this.name  = name;
}


function ExerciseList(){
	this.exerciseNames = ["jump rope", "jumping jacks", "push ups", "push up death spinner", "mountain climbers", "bicycles", "crunches", "leg raises", "bird dog", "squats", "toe touch", "bicep curls", "skull crushers", "dumbell butterflys", "dumbell overhead lift", "dual leg raises", "shoulder shredder", "thrusters", "weighted sit ups", "planks", "side planks", "shadow boxing", "ski jumps", "foot fire", "burpees", "jump squats", "lunges", "hydrants", "yoga trees", "down dog"];
	
  this.exerciseList = [];
  this.populateList = function(){
	  for(var i = 0; i < this.exerciseNames.length; i++){
		  var a = new Exercise(this.exerciseNames[i]);
		  this.exerciseList.push(a);
		}

	};
}


function Workout(list, quantity){
	this.exerciseList = list;
	this.quantity = quantity;
	
// 	this.repeat = repeat;
	this.workout = [];

	this.select = function(numberLoops){

		for(var i = 0; i < numberLoops; i++){
			randNum = Math.floor((Math.random() * this.exerciseList.length));
			if(this.workout.indexOf(this.exerciseList[randNum]) === -1 ){
				this.workout.push(this.exerciseList[randNum]);
			} else {
				i--;
			}
		}
	};
    this.select(this.quantity);
}

// Hey Scott - here's what was in JSBin:

var i = 10;

for (i; i > 0; i--) {
  var fuckOff = setTimeout(dick, 1000);
   
}



function dick(){
    console.log(i);
      
  }


// TIME SHIT
// random duration per exercise
// countdown clock + breaks + cycle breaks














