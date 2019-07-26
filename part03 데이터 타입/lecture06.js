var height_int = parseInt(height); // 입력받은 키 값을 정수로 변환
console.log(height_int, typeof(height_int)); // height_int 값과 데이터 타입 출력
var height_float = parseFloat(height); // 키 값을 다시 실수로 변환
console.log(height_float, typeof(height_float)); // height_int 값과 데이터 타입 출력

/*
	입력으로 "제 키는 185입니다."가 들어오면 값이 바르게 인식되지 않고 NaN으로 표시됨.
	이는 Not a Number의 약자로 "숫자가 아니다"라는 뜻
	parseInt()와 parseFloat() 명령은 숫자형만 인식하므로 우리가 입력한 문자열의 앞부분은 정상적으로 동작하지 않음

	! 자바스크립트의 숫자형은 허수(i)를 지원하지 않음
	
	이외에도 숫자형의 특수한 종류에는 Infinity가 있음(1/0) 
	=> 수학적 오류가 있는 구문이 실행되거나 너무 큰 값을 계산하는 경우	
*/