import { defineStore } from 'pinia' //引入pinia
 import {default2} from '../assets/second'
//这里官网是单独导出  是可以写成默认导出的  官方的解释为大家一起约定仓库用use打头的单词 固定统一小仓库的名字不易混乱
export const useBlood=defineStore("test",{ 
	state: () =>{
		return  ({
			bloodJSon:default2,
			name:"小狮子",
			age:18
			}) //为了避免出错，返回的值用()包起来
	} 
})