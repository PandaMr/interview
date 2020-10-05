export default (str) => {
    // 696.计数二进制子串
    // 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
    // 重复出现的子串要计算它们出现的次数。

    // 示例 1 :
    // 输入: "00110011"
    // 输出: 6
    // 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
    // 请注意，一些重复出现的子串要计算它们出现的次数。
    // 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。

    // 思路
    // 如何判断有多少个对称的 0 和 1
    // 用一个数组统计有多少个连续的0 和 1
    // 遍历累加数组中的相邻的元素小的值  i i+1
    
    let arr = [];
    let count = 1;
    for(let i=1; i<str.length; i++){
        if(str[i]===str[i-1]){
            count++;
        }else{
            arr.push(count);
            count = 1;
        }
    }
    arr.push(count);

    // 遍历数组，找出相邻中最小的累加
    let result = 0;
    for(let i=1; i<arr.length; i++){
        result += Math.min(arr[i], arr[i-1]);
    }
    return result;





//     解题思路
// 如何判断有多少个对称01
// 就是拿一个数组统计下有多少个连续的0和1
// for循环 i i-1 下标的数组中哪个少加哪个 加到最后就是结果了

    // var countBinarySubstrings = function(s) {
    //     if(s==='')return 0
    //     let arr = []
    //     let conte=1
    //     for(let i=1;i<s.length;i++){
    //         if(s[i]===s[i-1]){
    //             conte++
    //         }else{
    //             arr.push(conte)
    //             conte=1
    //         }
    //     }
    //     arr.push(conte)
    //     let result =0
    //     for(let i=1;i<arr.length;i++){
    //         result += Math.min(arr[i],arr[i-1])
    //     }
    //     return result
    //     console.log(result)
    // };

}