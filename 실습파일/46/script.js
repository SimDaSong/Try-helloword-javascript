var sum=0;

// 1부터 50까지의 합을 구하고
for (var i=1; i<=50; i++) {
	sum += i;
}

// 여기에서 1부터 5까지의 값을 출력하고자 함
for (var i=1; i<=5; i++) {
    console.log(i);
}

// 51부터 100까지의 합을 추가로 계산
for (; i<=100; i++) {
	sum += i;
}

console.log(sum);