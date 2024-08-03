
// 1. **forEach()**
//    - **Masala:** Berilgan sonlar massividagi har bir elementni 2 ga ko'paytirib, natijani konsolga chiqazuvchi funksiyani yozing.
// let arr = [1,2,3,4,5];
// function test(arg) {
//     let res = []
//     arg.forEach(function(v , i , a) {
//         res.push(v*2); 
//     });
//     return res;
// }
// let res = test(arr);
// console.log(res);


// 2. **forEach()**
//    - **Masala:** Berilgan so'zlar massividagi har bir so'zni katta harflarda konsolga chiqazuvchi funksiyani yozing.
// let arr = ['salom' , 'hello' , 'hayr'];
// function test(arg) {
//     let res = []
//     arg.forEach(function(v , i , a) {
//         res.push(v.toUpperCase()); 
//     });
//     return res;
// }
// let res = test(arr);
// console.log(res);


// 3. **forEach()**
//    - **Masala:** Berilgan raqamlar massividagi har bir elementga 5 qo'shib, yangi massiv yaratadigan va uni konsolga chiqazuvchi funksiyani yozing.
// let arr = [1,2,3,4,5];
// function test(arg) {
//     let res = []
//     arg.forEach(function(v , i , a) {
//         res.push(v+5); 
//     });
//     return res;
// }
// let res = test(arr);
// console.log(res);


// 1 - **Masala:** Berilgan sonlar massividagi har bir elementni 2 ga ko'paytirib, yangi massiv qaytaruvchi funksiyani yozing.
// let arr = [1,2,3,4,5];
// function test(arg) {
//    let res = arg.map(function (v) {
//     return v * 2
//    }) 
//    return res
// }
// let res = test(arr);
// console.log(res);

// 2. **map()**
//    - **Masala:** Berilgan so'zlar massividagi har bir so'zni katta harflarga aylantirib, yangi massiv qaytaruvchi funksiyani yozing.
// let arr = ['salom' , 'hello' , 'hayr'];
// function test(arg) {
//     let res = arg.map(function (v) {
//         return v.toUpperCase()
//     })
//     return res;
// }
// let res = test(arr);
// console.log(res);

// 3. **map()**
//    - **Masala:** Berilgan sonlar massividagi har bir elementga 5 qo'shib, yangi massiv qaytaruvchi funksiyani yozing.
// let arr = [1,2,3,4,5];
// function test(arg) {
//    let res = arg.map(function (v) {
//     return v + 5
//    }) 
//    return res
// }
// let res = test(arr);
// console.log(res);


// 1. **filter()**
//    - **Masala:** Berilgan sonlar massividan faqat juft sonlarni chiqarib, yangi massiv yaratadigan funksiyani yozing.
// let arr = [1,2,3,4,5];
// function test(arg) {
// let res = arg.filter(function(v) {
//   if (v%2==0) {
//     return v
//   }  
// })
// return res;
// }

// 2. **filter()**
//    - **Masala:** Berilgan so'zlar massivida uzunligi 5 dan katta bo'lgan so'zlarni chiqarib, yangi massiv yaratadigan funksiyani yozing.
// let arr = ['salomat' , 'hello' , 'hayrli kech'];
// function test(arg) {
//     let res = arg.filter(function (v) {
//         if (v.length > 5) {
//             return v
//         }
//     })
//     return res;
// }
// let res = test(arr);
// console.log(res);

// 3. **filter()**
//    - **Masala:** Berilgan yoshlar massividan faqat 18 yoshdan katta bo'lganlarni chiqarib, yangi massiv yaratadigan funksiyani yozing
// let arr = [14,24,17,19];
// function test(arg) {
//     let res = arg.filter(function (v) {
//         if (v > 18) {
//             return v
//         }
//     })
//     return res;
// }
// let res = test(arr);
// console.log(res);


// 1. **find()**
//    - **Masala:** Berilgan sonlar massividan qiymati 10 dan katta bo'lgan birinchi sonni topuvchi funksiyani yozing. Agar bunday son topilmasa, `undefined` qaytarilsin.
// let arr = [14,24,17,19];
// function test(arg) {
//     return arg.find(arg => arg > 10);
//   }
//   let res = test(arr);
// console.log(res);

// 1. **some()**
//    - **Masala:** Berilgan sonlar massivida kamida bitta musbat son bor-yo'qligini tekshiruvchi funksiyani yozing.
// let arr = [-14,-24,17,-19];
// function test(arg) {
//     return arg.some(function(v) {
//         return v > 0
//     });
//   }
//   let res = test(arr);
// console.log(res);

// 2. **some()**
//    - **Masala:** Berilgan so'zlar massivida kamida bitta uzunligi 5 dan katta bo'lgan so'z bor-yo'qligini tekshiruvchi funksiyani yozing.
// let arr = ['dskwbvw', 'ldvhb', 'eins'];
// function test(arg) {
//     return arg.some(function(v) {
//         return v.length > 5
//     });
//   }
//   let res = test(arr);
// console.log(res);

// 3. **every()**
//    - **Masala:** Berilgan sonlar massivida barcha sonlar musbat ekanligini tekshiruvchi funksiyani yozing.
// let arr = [14,24,17,19];
// function test(arg) {
//     return arg.every(function(v) {
//         return v > 0
//     });
//   }
//   let res = test(arr);
// console.log(res);

// let arr = [1,2,3,4,5,6];
// let raqam = 5;
// let res = arr.indexOf(raqam);
// console.log(res);