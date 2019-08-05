var empty_obj = {}; // 빈 객체 생성
typeof(empty_obj); // 빈 객체의 데이터 타입 확인
				   // 결과 : "object"

var man = {name: "홍길동", age: 20, height: 180}; // 이름, 나이, 키라는 속성을 갖는 객체 생성
typeof(man) // "object"

// 객체의 속성에 접근하기 위한 방법 두 개
man.name // "홍길동"
man["name"] // 이렇게 접근하려면 속성 이름은 문자열로 적어야 함

man; // {name: "이몽룡", age: 15, height: 180}