const filter = (fx, [n, ...rest]) => n === undefined
	? [] :
	fx(n)
	? (fx, [n, ...filter(fx, rest)])
	: (fx, filter(fx, rest))
;


/* ********** 使い方 ********** */

console.log(filter(n => n < 10, [2, 12, 5, 15, 18, 8, 5, 10, 0])); // 10未満の数字を抽出
// -> Array(5) [ 2, 5, 8, 5, 0 ]

console.log(filter(n => n % 2 === 0, [2, 12, 5, 15, 18, 8, 5, 10, 0])); // 偶数を抽出
// -> Array(6) [ 2, 12, 18, 8, 10, 0 ]
