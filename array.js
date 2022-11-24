let arr = [1, 2, 3, 4, 5]

// (1) Push，從尾端push的一個元素，並回傳長度
let arr1 = [...arr]
console.log("Push")
console.log(arr1.push(5))
console.log(arr1)

// (2) Pop，從尾端pop一個元素，並回傳pop出來的value
let arr2 = arr.slice()
console.log("Pop")
console.log(arr2.pop())
console.log(arr2)

// (3) Shift，從begin刪除一個元素
let arr3 = [...arr]
console.log("Shift")
console.log(arr3.shift())
console.log(arr3)

// (4) Unshift，從begin增加一個元素
let arr4 = [...arr]
console.log("Unshift")
console.log(arr4.unshift(2))
console.log(arr4)

// (5) Splice(i, n)，刪除從i開始之後的n個元素，傳回值是被刪除的元素(array)
let arr5 = [...arr]
console.log("Splice")
console.log(arr5.splice(2, 2))
console.log(arr5)

// (6) Concat(arr)，連接兩個陣列，回傳連接過後的陣列
let arr6 = arr.slice()
console.log("Concat")
console.log(arr6.concat([1, 2]))
console.log(arr6)

// (7) Split，將字串轉化為陣列
let str = '123456'
console.log("Split")
console.log(str.split())
console.log(str.split(''))

// (8) Sort，將陣列進行排序，
console.log("Sort")
let arr7 = [2, 10, 6, 1, 4, 22, 3]
console.log(arr7.sort())
let arr8 = arr7.sort((a, b) => a - b)
console.log(arr8)
let arr9 = arr7.sort((a, b) => b - a)
console.log(arr9)

// (9) Reserve，陣列反轉，反轉後的陣列
console.log("Reserve")
let arr10 = [1, 2, 3, 4, 5]
console.log(arr10.reverse())
console.log(arr10)

// (10) Slice(start, end)，刪除索引值start到索引值end的陣列，不包含end的值，回傳值是刪除之後的陣列
console.log("Slice")
let arr11 = [1, 2, 3, 4, 5]
console.log(arr11.slice(1, 3))
console.log(arr11)

// (11) forEach(callback)，檢查陣列，無回傳值
console.log("forEach")
let arr12 = [1, 2, 3, 4, 5]
arr12.forEach((value, index, array) => {
    console.log(`value:${value}  index:${index}  array:${array}`)
})

console.log("forEach, value * 2")
let arr13 = [1, 2, 3, 4, 5]
arr13.forEach((value, index, array) => {
    value = value * 2
    console.log(`value:${value}  index:${index}  array:${array}`)
})

// (12) map
console.log("map")
let arr14 = [1, 2, 3, 4, 5]
let arr15 = arr14.map((value, index, array) => {
    value = value * 2
    console.log(`value:${value}  index:${index}  array:${array}`)
    return value
})
console.log(arr14)
console.log(arr15)

// (13) filter，回傳滿足要求的新陣列
console.log("filter")
let arr16 = [...arr]
let arr17 = arr16.filter((i, v) => i < 3)
console.log(arr17)

// (14) every，判斷陣列的元素是否滿足，若滿足，則傳回true
console.log("every")
let arr18 = [1, 2, 3, 4, 5]
let arr19 = arr18.every((i, v) => i < 3)
console.log(arr19)
let arr20 = arr18.every((i, v) => i < 10)
console.log(arr20)

// (15) some，判斷陣列元素是否有一個滿足
console.log("some")
let arr21 = [1, 2, 3, 4, 5]
let arr22 = arr21.some((i, v) => i < 3)
console.log(arr22)
let arr23 = arr21.some((i, v) => i > 10)
console.log(arr23)

// (16) reduce，反覆運算陣列的所有項，是一個累加器，陣列中的每個值(從左到右)合併，最後計算為一個值
console.log("reduce")
let arr24 = [0, 1, 2, 3, 4]
let arr25 = arr24.reduce((preValue, curValue) => preValue + curValue)
console.log(arr25)
let arr26 = arr24.reduce((preValue, curValue) => preValue + curValue, 5)
console.log(arr26)

// (17) from，將偽陣列變成陣列，就是只要有length就可以轉成陣列
console.log("from")
let str2 = '12345'
console.log(Array.from(str2))
let obj = { 0: 'a', 1: 'b', length: 2 }
console.log(Array.from(obj))

// (18) of()，將一組值轉換成陣列，類似宣告陣列
console.log("of")
let str3 = '11'
console.log(Array.of(str3))

// (19) copyWithin()，在目前陣列內部，將指定位置的陣列複製到其他位置，會覆蓋原陣列項，傳回目前陣列
console.log("copyWidthin")
let arr27 = [1, 2, 3, 4, 5, 6, 7]
let arr28 = [...arr27]
let arr29 = [...arr27]
console.log(arr27.copyWithin(1))
console.log(arr28.copyWithin(1, 2))
console.log(arr29.copyWithin(1, 2, 4))

// (20) find(callback)，找到第一個符合條件的陣列成員
console.log("find")
let arr30 = [1, 2, 3, 4, 5, 2, 4]
let arr31 = arr30.find((value, index, array) => value > 2)
console.log(arr31)

// (21) findIndex(callback)，找到第一個符合條件的陣列成員的索引值
console.log("findIndex")
let arr32 = [, 1, 2, 3, 4, 5]
let arr33 = arr.findIndex((value, index, array) => value > 3)
console.log(arr33)

// (22) fill(target, start, end)使用指定的值，填充一個陣列，填充完後會改變原陣列
console.log("fill")
let arr34 = [1, 2, 3, 4, 5]
let arr35 = [...arr34]
let arr36 = [...arr34]
let arr37 = [...arr34]
console.log(arr35.fill(5))
console.log(arr36.fill(5, 2))
console.log(arr37.fill(5, 1, 3))

// (23) includes()，判斷數據中是否包含指定的值
console.log("includes")
let arr38 = [1, 2, 3, 4, 5]
let isIncludes = arr38.includes(2)
console.log(isIncludes)
isIncludes = arr38.includes(9)
console.log(isIncludes)
isIncludes = [1, 2, 3, NaN].includes(NaN)
console.log(isIncludes)

// (24) keys()，檢查陣列的鍵名
console.log("keys")
let arr40 = arr.keys()
for (let key of arr40) {
    console.log(key)
}

// (25) values()，檢查陣列鍵值
console.log("values")
let arr41 = arr.values()
for (let val of arr41) {
    console.log(val)
}

// (26) entries()，檢查陣列的鍵名和鍵值
console.log("entries")
let arr42 = arr.entries()
for (let e of arr42) {
    console.log(e)
}