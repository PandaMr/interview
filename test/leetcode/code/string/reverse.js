export default (str) => {
	// 557题 leetCode 
	// 知识点：
	// String对象： 
	// split(‘,’) 对一个字符串分割为数组，可选参数为分割符

	// Array对象：
	// reverse() 反转数组顺序
	// map() 遍历数组，将传入一个函数，将处理后的数组进行返回
	//join() 将数组拼接为一个字符串


  //给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
  // 输入: "Let's take LeetCode contest"
  // 输出: "s'teL ekat edoCteeL tsetnoc"
	// 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
	
	//思路：
	// 1. 将字符串转为数组，按照空格进行分割 split（‘ ’），数组中存的是每个单词
	// 2. 对数组进行遍历 map()，将每个单词进行分割，反转数组中的字符 reverse()，拼接数组中的字符返回字符串 join()
	

	let arr = str.split(' ');
	let result = arr.map((item) => {
		return item.split('').reverse().join('');
	});
	return result.join(' ');

	// 优化
	// return str.split(' ').map((item) => {
	// 	return item.split('').reverse().join('');
	// }).join(' ');
	

};
