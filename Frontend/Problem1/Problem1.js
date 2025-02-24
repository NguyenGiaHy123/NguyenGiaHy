// 1. Sử dụng vòng lặp for (cách tiếp cận lặp)
var sum_to_n_a = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

// 2. Sử dụng công thức toán học Gauss (O(1) thời gian chạy)
var sum_to_n_b = function(n) {
    return (n * (n + 1)) / 2;
};

// 3. Sử dụng đệ quy (cách tiếp cận đệ quy, không tối ưu cho n lớn)
var sum_to_n_c = function(n) {
    if (n === 1) return 1;
    return n + sum_to_n_c(n - 1);
}; 

// Kiểm tra kết quả với n = 5
console.log(sum_to_n_a(5)); // Output: 15
console.log(sum_to_n_b(5)); // Output: 15
console.log(sum_to_n_c(5)); // Output: 15