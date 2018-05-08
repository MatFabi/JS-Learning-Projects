const questions =[
{
	number:"1",
	question:"2*2=?",
	correct:"4",
	a:"4",
	b:"3",
	c:"2",
	d:"1"
},
{
	number:"2",
	question:"2-2=?",
	correct:"0",
	a:"0",
	b:"3",
	c:"2",
	d:"1"
},
{
	number:"3",
	question:"2+6=?",
	correct:"8",
	a:"4",
	b:"9",
	c:"2",
	d:"8"
},
{
	number:"4",
	question:"2+4=?",
	correct:"6",
	a:"4",
	b:"3",
	c:"6",
	d:"1"
},
{
	number:"5",
	question:"2+2=?",
	correct:"4",
	a:"7",
	b:"3",
	c:"4",
	d:"1"
}]

const container = document.querySelector('.container');
container.innerHTML = 
	`
		${questions.map(e=> `<div class="question ${e.number}">
						<div class="question-txt">
							<p class="question-txt-${e.number}">${e.question}</p>
						</div>
						<div class="answer-a answer">${e.a}</div>
						<div class="answer-b answer">${e.b}</div>
						<div class="answer-c answer">${e.c}</div>
						<div class="answer-d answer">${e.d}</div>
						</div>`).join('')}
	`;   // Write whole code in HTML from obj. above

let counter=0;						//count whole answer click
let counterCorrect=0;     //count only correct answers

function correctAnswer(){
	
	if (!this.parentNode.firstElementChild.classList.value.includes('correct') && !this.parentNode.firstElementChild.classList.value.includes('mistake')){     //Check if questions in not answered
		if (this.innerText == questions[this.parentNode.classList[1]-1].correct){  // Check is the answer correct
				this.parentNode.firstElementChild.classList.add('correct');
				this.classList.add('correct')                                // if answer is correct, add 'correct' class to elements 
				counter++;
				counterCorrect++;
		}
			else {
				console.log("niestety nieprawidlowa odpowiedź");                    //if answer is not correct, add 'mistake' class to elements
				this.parentNode.firstElementChild.classList.add('mistake');
				this.classList.add('mistake')
				counter++;
			}
		if(counter==questions.length){																				//if every question is answered, make some alert
		alert("udzieliłeś "+counterCorrect+"/"+counter+" poprawnych odpowiedzi")
		}
	}	
		else return;
}


let answer = document.querySelectorAll('.answer');
[].forEach.call(answer, function(e){e.addEventListener('click',correctAnswer)});


