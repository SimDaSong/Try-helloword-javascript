## Part 09. 반복문

### 21. while 반복문

c++와 동일

### 22. do while 반복문

c++와 동일

### 23. for 반복문

c++와 동일

### 24. for in 반복문

객체의 각 속성을 알고자 할 때엔 **Object.keys()** 함수를 이용. 이 함수는 객체를 인자로 받아서 객체 속성의 이름을 배열로 반환함

```js
var obj = {
    name: "object",
    weight: 30,
    isObject: true,
    arr: [1,2,3],
    obj: {property:1}
}; // undefined
Object.keys(obj); // (5) ["name", "weight", "isObject", "arr", "obj"]
```

이 배열을 for 반복문으로 반복 실행하면서 순차적으로 객체의 속성 이름을 얻어내고, 그 이름을 이용해 객체의 속성 값에 접근하기 => **for in 반복문**을 사용하면 이 과정을 간단하게 바꿀 수 있음

```js
var obj = {
    name: "object",
    weight: 30,
    isObject: true,
    arr: [1,2,3],
    obj: {property:1}
}; // undefined

// for 구문으로 object property 반복하기
var property_list = Object.keys(obj);

for (var i=0; ;i<property_list.length; i++) {
    var propertyName = property_list[i];
    console.log("\t", propertyName, ": ", obj[propertyName]);
}

/// for in 구문으로 object property 반복하기
for (var propertyNAme in obj)
    console.log("\t", propertyName, ": ", obj[propertyName]);
```



for in 반복문은 배열에도 활용 가능. 이때는 배열의 인덱스가 변수에 순서대로 저장됨. for 문 대신 for in 반복문을 사용하면 더 효율적으로 코드를 작성할 수 있음. 

for in 반복문이 아닌 곳에는 in이 연산자로 동작함. **in 연산자**는 해당 속성의 이름이 객체에 존재하는지 검사하는 연산자. 결과는 true/false

```js
"name" in obj; // true
"age" in obj; // false	
```



속성의 이름에 접근하기 전에 in 연산자를 활용하면 객체에 해당 속성이 있는지 미리 확인할 수 있다.