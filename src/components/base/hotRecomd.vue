<template>
  <div class="dota">
    <h1><em>{{flagid == 4?'热门推荐':flagid == 512?'新手推荐':''}}</em></h1>
    <ul class="model01">
      <li
        v-for="(item, index) in lts"
        v-bind:key="index"
        v-bind:style="{
          'margin-right': (index + 1) % 5 == 0 ? '0px' : '10px',
        }"
      >
        <shopItem v-bind:item="item" />
      </li>
    </ul>
  </div>
</template>
<script>
import shopItem from "../base/shop-item.vue";
export default{
    props:{
        lts:{
            type:Array,
            default:[]
        },
        flagid:{
          type:Number,
          default:4
        }
    },
    mounted(){
        //console.log('lyl')
       // console.log(this.lts)
    },
    components:{
        shopItem
    }
}
</script>
