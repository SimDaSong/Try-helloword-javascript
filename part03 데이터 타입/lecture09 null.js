var uninitialized_var; // 초기화를 하지 않으면 
typeof(uninitialized_var); // "undefined"

// 객체의 정의되지 않은 속성에 접근하기
var obj = {
	x: 1,
	y: 2
};

obj.x; // 1
obj.y; // 2
obj.z; // undefined
typeof(obj.z); // "undefined"

// undefined는 주로 시스템에서 어떤 벼눗나 속성이 정의되지 않은 경우를 표현하는 데 사용됨
// 반면 null은 개발자가 비어 있는 상태에 해당하는 無를 의도적으로 표현하고자 할 때 사용

var null_var; // undefined
null_var = null; // null
null_var; // null
typeof(null_var); // "object"