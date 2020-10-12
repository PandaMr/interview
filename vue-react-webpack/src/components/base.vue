<template>
  <div class="root">
      <!-- 插值表达式 -->
      <p>{{massage}}</p>
      <!-- 表达式 -->
      <p>{{flag ? 'ok':'false'}}</p>
      <!-- 动态属性 -->
      <p :id='userId'></p>
      <p v-html="htmlTemplate"></p>
      <p :class="{red:isRed}">red</p>
      <p :class="[blue]">blue</p>
      <p :style="style">style</p>
      <!-- watch 监听书数据 -->
      <input type="text" v-model="name">
      <input type="text" v-model="info.city">

      <!-- computed 监听数据 -->
      <p>{{age}}</p>
      <p>{{ageChange}}</p>
      <input type="text" v-model="ageCount">

      <!-- 列表循环 -->
      <ul>
        <li v-for="(item,index) in arr" :key="index">
          {{item}}
        </li>
      </ul>
      <p v-for="(item, key, index) in obj" :key="index">
        {{key}}: {{item}}
      </p>

      <!-- 事件 -->
      <p>{{number}}</p>
      <button v-on:click="add">+1</button>
      <button v-on:click="addDouble(2, $event)">+2</button>
      <br>
      
      <!-- 表单 -->
      <textarea v-model="text" cols="30" rows="10"></textarea>
      <!-- 单选框 -->
      <p>{{radio}}</p>
      <input type="radio" id="man" value="man" v-model="radio">
      <label for="man">男</label>
      <input type="radio" id="wuman" value="wuman" v-model="radio">
      <label for="wuman">女</label>

      <!-- 复选框 -->
      <p>{{checkList}}</p>
      <input type="checkbox" id="jack" value="jack" v-model="checkList">
      <label for="jack">jack</label>
      <input type="checkbox" id="panda" value="panda" v-model="checkList">
      <label for="panda">panda</label>
      <br>
      <!-- 下拉列表 -->
      <p>{{selected}}</p>
      <select v-model="selected">
        <option disabled >请选择</option>
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </select>
      <!-- 多选 -->
      <p>{{selectList}}</p>
      <select v-model="selectList" multiple>
        <option disabled >请选择</option>
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </select>

  </div>
</template>

<script>
export default {
    data(){
        return {
            massage: 'hello vue',
            flag: true,
            userId: 'panda',
            htmlTemplate: '<h2>v-html</h2>',
            isRed: true,
            blue: 'blue',
            style: {
              fontSize: '20px',
              color: 'pink'
            },
            // watch and computed data 
            name: 'PandaMr',
            info: {
              city: 'henan'
            },
            age: 20,

            // 列表循环
            arr: [16,18,20,36],
            obj: {
              a: 10,
              b: 20,
              c: 30
            },

            // 事件
            number: 0,

            // 表单
            text: '熊猫先生',
            checkList: [],
            radio: 'man',
            selected: '',
            selectList: []
        }
    },
    methods: {
      add(event){
        console.log(event);
        console.log(event.target);
        this.number++;
      },
      addDouble(val, event){
        console.log(event.target);
        this.number += val;
      }
    },
    computed: {
      ageChange(){
        return this.age+1
      },
      // 数据双向绑定一定要有get和set
      ageCount: {
        get() {
          return this.age * 2;
        },
        set (val){
          this.age = val/2;
        }
        
      }

    },
    watch: {
      name(newVal, oldVal){
        console.log('watch name', newVal, oldVal);
      },
      info: {
        handler(newVal, oldVal){
          console.log('watch info', oldVal, val);
        },
        deep: true  // 深度监听
      }
    }
}
</script>

<style>
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
</style>