const choose = document.querySelectorAll('.choose');
const bingoTable = document.querySelector('.bingo__table');

function tableDraw(){
	const tableView = [];			
	const extantNumbers = [];  // Holder of number ready to use
	const currentNumbers = []; // To use numbers holder
	
	let rows = this.dataset.row; 
	let cols = this.dataset.col;
	let numOfRandomNumbers = this.dataset.random;
	const bingoTitle = document.querySelector('.bingoTitle');
	
	(function getProperRandomNumbers(){      //Pushing every random number allowed in this type of game
		for (i=1; i<=numOfRandomNumbers; i++){
		extantNumbers.push(i);
		}	
	})();

	(function (){														//Pushing "to use" numbers
		for (i=1; i<=(rows*cols)-1;i++){
			findRandomEl = Math.floor(Math.random()*extantNumbers.length);
			randomEl = extantNumbers[findRandomEl]
			extantNumbers.splice(findRandomEl, 1);
			currentNumbers.push(randomEl);
		}
	})();

	(function preparingView(){   					//Pushing HTML code to tableView Array
		bingoTitle.classList.add('display')
		for (i=1; i<=rows; i++){
			tableView.push('<tr>');
			for(j=1; j<=cols; j++){
				tableView.push(`<td class="field${i}${j} toFill"></td>`);
			}
			tableView.push('</tr>');
		}
		bingoTable.innerHTML = tableView.join(' ').toString();
	})();

	(function makingFreeField(){				
		let freeFieldHTML; 
		freeFieldHTML=document.querySelector(`.field${Math.ceil(rows/2)}${Math.ceil(cols/2)}`);
		freeFieldHTML.classList.replace(`field${Math.ceil(rows/2)}${Math.ceil(cols/2)}`, "Free" );
		freeFieldHTML.classList.remove("toFill");
		freeFieldHTML.innerHTML= "Free";
	})();
	
	(function tableInputs(){              //Pushing "ready to use" numbers to HTML code
		let toFill = document.querySelectorAll('.toFill');
		for (i=0; i<=toFill.length-1;i++){
			toFill[i].innerText=currentNumbers[i]
		}
	})();
}
	choose.forEach(choose=>choose.addEventListener('click', tableDraw));