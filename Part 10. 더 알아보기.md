## Part 10. 더 알아보기

### 25. 변수의 유효 범위(scope)

**scope.js**

```js
function a() {
    var v_a = "a";
    
    function b() {
        var v_b = "b";
        console.log("b: ", typeof(v), typeof(v_a), typeof(v_b));
    }
    
    b();
    console.log("a: ", typeof(v), typeof(v_a), typeof(v_b));
}

var v = "v";
a();
console.log("o: ", typeof(v), typeof(v_a), typeof(v_b));

// b: string string string
// a: string string undefined
// o: string undefined undefined
```



**블록의 유효 범위**

초기의 자바스크립트에서는 변수의 유효 범위가 함수의 유효 범위를 따랐지만 현재의 자바스크립트에서는 변수의 유효 범위가 블록의 유효 범위를 따를 수도 있음. 블록의 유효 범위는 따른 다는 것은 변수가 선언되면 그 변수는 자신이 선언된 블록 안에서만 접근할 수 있다는 말. 자바스크립트에서 변수를 블록의 유효 범위를 따르도록 선언하려면 var 대신 let을 사용함

```js
function shadowing_example() {
    var val = 0;
    // 함수 안쪽에서 바깥에서 선언한 변수와 이름이 같은 변수 val을 선언하고 초기화
    console.log("F", val);
    var++; // val 값을 1 증가
}

var val = 0; // 함수의 바깥에서는 변수 val을 선언하고 0으로 초기화
shadowing_example(); // 함수 호출
console.log("0", val); // 가장 바깥에서 변수 val의 값을 출력

// F 0
// 0 0
```



### 27. 메서드와 this

객체는 여러 속성을 가질 수 있으며 함수 역시 객체의 속성이 될 수 있다. 함수가 객체의 속성 값이 될 경우 그 함수를 **메서드(method)**라고 부른다. 

#### this.js

```js
function f() {
    console.log(this); // 함수 안에 this 키워드 사용 가능
    console.log("f is called");
}

var o = {name: "object", method: f}; // 함수 바깥에서 변수 o의 객체를 생성

f(); // f() 함수를 바로 호출할 수도 있고
o.method(); // 객체의 속성에 바인드된 함수로 호출할 수도 있음

// f is called
// {name: "object", method: f}
// f is called
```

**this** 키워드는 f() 함수가 호출되었을 때 어떤 객체에 바인드된 혹성으로 호출될 것인지를 보여줌

브라우저에서 코드를 실행하면 가장 바깐, 즉 전역에 선언한 함수들은 모두 window라는 객체에 바인드됨



#### this.js

```js
function f() {
    console.log(this)
    console.log("f is called");
}

function setName(name) { // 새 함수 추가
	this.name = name // this의 이름을 name으로 변경
}

// 객체 o를 만들고 setName 속성에 방금 정의한 함수를 지정
var o = {name: "object", method: f, setName: setName};
// 비슷한 객체 o2를 만들고 name 속성의 값은 비워 둠
var o2 = {name: "", setName: setName};

o.setName("object1"); // 첫 번째 객체의 메서드 호출
					  // 첫 번째 객체의 이름이 object1으로 바뀜
o2.setName("object2"); // 두 번째 객체의 메서드 호출
					   // 두 번째 객체의 이름이 object2로 바뀜

console.log(o, o2);
```



### 28. 클로저

**클로저**는 자바스크립트의 함수와 그 함수가 선언될 때의 환경(environment)으로 이루어짐



#### closure.js

```js
function makeCounterFunction(initVal) {
    var count = initVal;
    function Increase() {
        count ++;
        console.log(count);
    }
    return Increase;
}

var counter1 = makeCounterFunction(0);
var counter2 = makeCounterFunction(10);

counter1();
counter2();

// 1
// 11
```

counter1() 함수가 호출되었을 때 count 변수와 counter2() 함수가 호출되었을 때의 count 변수는 다른 것인데 이는 **클로저** 때문. makeCounterFunction(0)을 호출했을 때 Increase() 함수가 만들어지면서 이 때 count 변수를 포함하는 환경이 하나의 클로저로 만들어짐. 그리고 다음에 makeCounterFunction(10)을 호출했을 때 이 함수의 환경이 새로 만들어지고 Increase() 함수가 만들어지면서 이때 환경이 새로운 클로저로 만들어 지는 것

클로저를 이용하면 다른 객체 지향 언어에 있는 private이나 public 같은 개념을 구현할 수 있음.