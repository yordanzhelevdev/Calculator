$(document).ready(function(){
	var displayCalc = $('.display-nums'); 
	var calc = '';
	var current = '';
	var result;
	var checkForSigns =  0;
	var checkForDot = 0;
	var showError = false;
	
	$('.nums').click(function(){
		displayCalc.append($(this).prop('value'));
		current += $(this).prop('value');
		console.log('Current entered numbers are: ' + current);
		checkForSigns = 0; // here i reset the signs
		console.log(displayCalc.text().length);

		if(displayCalc.text().length > 13){
			$('.error').css('background-color', 'rgb(53, 18, 18)');
			$('.error').text('Digit Limit Met');
			$(displayCalc).text('');
			current = '';
		}
		else{
			$('.error').text('OK');
			$('.error').css('background-color','green');
		}
	});

	//Float to two numbers
	function roundToTwo(num) {    
    	return +(Math.round(num + "e+2")  + "e-2");
	};	


	function signs(sign){
		if(displayCalc.text() == ''){
			return;
		}

		else if (checkForSigns == 0){
			checkForDot = 0;
			displayCalc.append(sign);
			current = '';
			checkForSigns++;
		}	
	}

	$('.plus').click(function(){
		signs('+');
	});

	$('.minus').click(function(){
		signs('-');
	});

	$('.multiplication').click(function(){
		signs('*');
	});

	$('.divide').click(function(){
		signs('/');
	});
	
	$('.float').click(function(){

		if(displayCalc.text() == '' || current == ''){
			return;
		}

		else if (Number.isInteger(+current) && checkForDot == 0){
			displayCalc.append('.');
			current += $(this).prop('value')
			checkForDot++;
		}
		
		else{
			return;
		}		
});	
	
	$('.clear').click(function(){
		displayCalc.text('');
		current = '';
		checkForDot = 0;
	});


	function digitLimit(txt){
		if(txt.scrollWidth > txt.clientWidth){
			alert('Digit limit met');
		}
	}


//displayCalc.text(eval(displayCalc.text()));


	//Calculations
	$('.calc').click(function(){
		if(displayCalc.text() === ''){
			return;
		}
		else{
			checkForDot = 0;
			result = eval(displayCalc.text());
			if(!isFinite(result)){
				displayCalc.text('0');
				current = displayCalc.text();

			}
			else{
				displayCalc.text(roundToTwo(result));
				current = displayCalc.text();
				console.log('My final result is: ' + current);
			}
			
		}
	})
		
	
});