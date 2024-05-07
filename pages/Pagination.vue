<template>
  <div>
    <div class="content help-content">
      <div class="header">

        <button :class="{ sel: show === 2 }" @click="updated(2)" id="more">查看更多</button>

      </div>
    </div>
    <dd v-if="show === 2" class="question-list-wrap" style="display:block">

      <ul>
        <h1 class="font-h1">二、花生 </h1>
        <li class="font-h2">
          <p style="text-indent:2em;" class="font-h2">(一) 百度百科</p>
          <p style="text-indent:4em;" class="font-h2">落花生（Arachis hypogaea
            L.），豆科落花生属一年生草本植物，根部具根瘤；茎直立或匍匐，有棱；托叶被毛，小叶卵状长圆形或倒卵形，先端钝，基部近圆，全缘；花冠为黄色或金黄色；花柱伸出萼管外；荚果长，膨胀，果皮厚； [9]
            花期6到7月；果期9到10月。 [13] 落花生开花受精之后，子房要落到黑暗的地里去暗暗地生长结果，因此得名落花生。 [12] [14]
            落花生原产于南美洲巴西，现世界各地广泛栽培，落花生在中国以山东、河北、河南，苏、皖两省北部等地区种植较多。 [2] 落花生性喜高温干燥， [15]
            适宜生于气候温暖、生长季节较长、雨量适中的沙质土上。落花生的繁殖方法为种子繁殖。 [16]
          </p>


          <p style="text-indent:2em;" class="font-h2">(二) 植物学史</p>
          <p style="text-indent:4em;" class="font-h2">
            落花生为豆科作物，优质食用油主要油料品种之一，又名“花生”或“长生果”。落花生是一年生草本植物。起源于南美洲热带、亚热带地区。约于十六世纪传入中国，十九世纪末有所发展。又自20世纪50年代以来，中国2次出土了炭化花生种子，提供了远在新石器时代已存在花生的实物资料。因此，花生的起源问题，还需进步一探索.关于花生的原产地，文献记载有原产巴西、原产中国、原产埃及等三种说法。据Brukill记载（A.
            Dictionary of the Economic Products of the Malay Peninsula, 206.
            1966），哥伦布在1492年发现美洲，不久，西班牙派出Oviedo到海地任管理资源长官，Ovido于1513-1524年在海地。他记载在当时印第安人园圃中已大量种植花生。林奈的植物种志（1753）记载，花生产地为巴西、秘鲁Hutchinson
            （Evolution and Phylogeny of Flowering Plants, 1964）记载花生原产于热带美洲。又据J. C. Willis原著A Dictionary of Flowering
            Plants and Ferns, 8 ed. 1973:花生属有15种，产于巴西及巴拉圭。可见花生原产于南美洲巴西一说较为可信。在中国，山东生长最佳。现世界各地广泛栽培。
          </p>


          <p style="text-indent:2em;" class="font-h2">(三) 分布范围</p>
          <p style="text-indent:4em;" class="font-h2">
            中国花生分布很广，各地都有种植。主产地区为山东、辽宁东部、广东雷州半岛、黄淮河地区以及东南沿海的海滨丘陵和沙土区。其中以北方的河北、河南，苏、皖两省北部等地区较多，山东半岛、鲁中南丘陵、冀东滦河下游、豫东黄泛区以及苏皖两省淮北地区是中国北方花生的重点产区。
          </p>
        </li>

      </ul>

      <div class="container">
        <div class="card">
          <div class="card__header">
            <img src="../assets/images/花生1.jpg" alt="card__image" class="card__image" width="400">
          </div>
          <div class="card__body">
            <a href="https://weibo.com/ttarticle/p/show?id=2309404586322953109632">
              <span class="tag tag-blue">豆类作物</span>
              <h4><a href="https://weibo.com/ttarticle/p/show?id=2309404586322953109632">关于花生你应该知道的知识点</a></h4>
              <p style="text-indent:2em;" class="font-h2">花生的基本情况、花生的种类、花生的种植周期以及影响因素</p>
            </a>
          </div>
          <div class="card__footer">

          </div>
        </div>

        <div class="card">
          <div class="card__header">
            <img src="../assets/images/花生3.jpg" alt="card__image" class="card__image" width="400">
          </div>
          <div class="card__body">
            <a href="https://www.cnhnb.com/xt/article-46405.html">
              <span class="tag tag-blue">豆类作物</span>
              <h4><a href="https://www.cnhnb.com/xt/article-46405.html">花生种植中产生的一些问题及解决方法</a></h4>
              <p style="text-indent:2em;" class="font-h2">虽然我国每年的花生产量持续增加, 但是在花生种植中仍然存在着很多问题, 严重影响了我国的花生产量。因此,
                需要提出一些解决措施和建议, 提高花生的产量</p>
            </a>
          </div>
          <div class="card__footer">

          </div>
        </div>


        <div class="card">
          <div class="card__header">
            <img src="../assets/images/花生2.jpg" alt="card__image" class="card__image" width="400">
          </div>
          <div class="card__body">
            <a href="https://baijiahao.baidu.com/s?id=1653426577095181709&wfr=spider&for=pc">
              <span class="tag tag-blue">豆类作物</span>
              <h4><a href="">花生发芽到底能不能吃呢？</a></h4>
              <p style="text-indent:2em;" class="font-h2">花生发芽可以吃，但是霉变的花生芽是绝对不可以吃的。</p>
            </a>
          </div>
          <div class="card__footer">
          </div>
        </div>

      </div>


    </dd>

    <dd v-if="show === 3" class="question-list-wrap" style="display:block">

      <ul>
        <h1 class="font-h1">三、小麦 </h1>
        <li class="font-h2">
          <p style="text-indent:2em;" class="font-h2">(一) 百度百科</p>
          <p style="text-indent:4em;" class="font-h2">小麦（Triticum aestivum
            L.）是小麦属植物的统称，代表种为普通小麦是禾本科植物，是一种在世界各地广泛种植的谷类作物，小麦的颖果是人类的主食之一，磨成面粉后可制作面包、馒头、饼干、面条等食物，发酵后可制成啤酒、酒精、白酒（如伏特加），或生物质燃料。
          </p>


          <p style="text-indent:2em;" class="font-h2">(二) 植物学史</p>
          <p style="text-indent:4em;" class="font-h2">
            小麦是新石器时代的人类对其野生祖先进行驯化的产物，栽培历史已有1万年以上。中亚的广大地区，曾在史前原始社会居民点上发掘出许多残留的实物，其中包括野生和栽培的小麦小穗、籽粒，炭化麦粒、麦穗和麦粒在硬泥上的印痕。早在公元前7000-前6000年，在土耳其、伊朗、巴勒斯坦、伊拉克、叙利亚、以色列就已广泛栽培小麦；公元前6000年在巴基斯坦，公元前6000—前5000年在欧洲的希腊和西班牙，公元前5000-前4000年在苏联的外高加索和土库曼，公元前4000年在非洲的埃及，公元前3000±159年在中国（详情见下），公元前3000年在印度，都已先后种植小麦。中国的小麦是由黄河中游逐渐扩展到长江以南各地，并传入朝鲜、日本。公元15世纪至17世纪间，欧洲殖民者将小麦传播至南、北美洲；18世纪，小麦传播到大洋洲。
            伊朗西南部、伊拉克西北部和土耳其东南部地区，是栽培一粒小麦和提莫菲维小麦最早被驯化之地。以色列西北部、叙利亚西南部和黎巴嫩东南部是野生二粒小麦的分布中心和栽培二粒小麦的起源地。普通小麦的出现晚于一粒小麦和二粒小麦，一般认为约在8000年前，起源于里海的西南部。
          </p>


          <p style="text-indent:2em;" class="font-h2">(三) 种植方法</p>
          <p style="text-indent:4em;" class="font-h2"> <a
              href="https://mp.weixin.qq.com/s?__biz=MzAxMzI3MjAwMA==&mid=2650613872&idx=2&sn=899a65e1f4b8721952067bae372f5c5e&chksm=83ac9edfb4db17c9e6032cae93ef89b96c5b90847da3b5f7afa82315cf2baec7f38b0f2bead2&scene=27">1.小麦什么时候种?怎么种？要注意哪些细节？</a>
          </p>
          <p style="text-indent:4em;" class="font-h2"><a
              href="https://mp.weixin.qq.com/s?__biz=MzUxNDAyMTUzNw==&mid=2247485848&idx=1&sn=538c6ac15e3cca13b6d6d3823a94e5f7&chksm=f94d0856ce3a81401c1f2769f7a4732c14b149805c9fb200742fdfc4674d96ba74de1938eed8&scene=27">2.15种小麦常见病害防治方法</a>
          </p>
          <p style="text-indent:4em;" class="font-h2"><a
              href="http://www.doc88.com/p-1932127222935.html">3.小麦生产中存在的问题及对策</a></p>
          <p style="text-indent:4em;" class="font-h2"><a
              href="http://www.doc88.com/p-1932127222935.html">4.小麦种子销售过程出现的问题及对策</a></p>
        </li>

      </ul>

      <div class="container">
        <div class="card">
          <div class="card__header">
            <img src="../assets/images/bpic22920.jpg" alt="card__image" class="card__image" width="400">
          </div>
          <div class="card__body">
            <span class="tag tag-blue">麦类作物</span>
            <h4><a href="">3.小麦生产中存在的问题及对策</a></h4>
            <p>17个你可能还不知道 JS 技巧！ 17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！</p>
          </div>
          <div class="card__footer">

          </div>
        </div>

        <div class="card">
          <div class="card__header">
            <img src="../assets/images/bpic22920.jpg" alt="card__image" class="card__image" width="400">
          </div>
          <div class="card__body">
            <span class="tag tag-blue">麦类作物</span>
            <h4><a href="http://www.doc88.com/p-1932127222935.html">小麦种子销售过程出现的问题及对策</a></h4>
            <p>17个你可能还不知道 JS 技巧！ 17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！</p>
          </div>
          <div class="card__footer">

          </div>
        </div>


        <div class="card">
          <div class="card__header">
            <img src="../assets/images/bpic22920.jpg" alt="card__image" class="card__image" width="400">
          </div>
          <div class="card__body">
            <span class="tag tag-blue">麦类作物</span>
            <h4><a href="">带你见到不一样的小麦</a></h4>
            <p>17个你可能还不知道 JS 技巧！ 17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！</p>
          </div>
          <div class="card__footer">
          </div>
        </div>

      </div>


    </dd>

    <dd v-if="show === 4" class="question-list-wrap" style="display:block">

      <ul>
        <h1 class="font-h1">四、小麦 </h1>
        <li class="font-h2">
          <p style="text-indent:2em;" class="font-h2">(一) 百度百科</p>
          <p style="text-indent:4em;" class="font-h2">小麦（Triticum aestivum
            L.）是小麦属植物的统称，代表种为普通小麦是禾本科植物，是一种在世界各地广泛种植的谷类作物，小麦的颖果是人类的主食之一，磨成面粉后可制作面包、馒头、饼干、面条等食物，发酵后可制成啤酒、酒精、白酒（如伏特加），或生物质燃料。
          </p>


          <p style="text-indent:2em;" class="font-h2">(二) 植物学史</p>
          <p style="text-indent:4em;" class="font-h2">
            小麦是新石器时代的人类对其野生祖先进行驯化的产物，栽培历史已有1万年以上。中亚的广大地区，曾在史前原始社会居民点上发掘出许多残留的实物，其中包括野生和栽培的小麦小穗、籽粒，炭化麦粒、麦穗和麦粒在硬泥上的印痕。早在公元前7000-前6000年，在土耳其、伊朗、巴勒斯坦、伊拉克、叙利亚、以色列就已广泛栽培小麦；公元前6000年在巴基斯坦，公元前6000—前5000年在欧洲的希腊和西班牙，公元前5000-前4000年在苏联的外高加索和土库曼，公元前4000年在非洲的埃及，公元前3000±159年在中国（详情见下），公元前3000年在印度，都已先后种植小麦。中国的小麦是由黄河中游逐渐扩展到长江以南各地，并传入朝鲜、日本。公元15世纪至17世纪间，欧洲殖民者将小麦传播至南、北美洲；18世纪，小麦传播到大洋洲。
            伊朗西南部、伊拉克西北部和土耳其东南部地区，是栽培一粒小麦和提莫菲维小麦最早被驯化之地。以色列西北部、叙利亚西南部和黎巴嫩东南部是野生二粒小麦的分布中心和栽培二粒小麦的起源地。普通小麦的出现晚于一粒小麦和二粒小麦，一般认为约在8000年前，起源于里海的西南部。
          </p>


          <p style="text-indent:2em;" class="font-h2">(三) 种植方法</p>
          <p style="text-indent:4em;" class="font-h2"> <a
              href="https://mp.weixin.qq.com/s?__biz=MzAxMzI3MjAwMA==&mid=2650613872&idx=2&sn=899a65e1f4b8721952067bae372f5c5e&chksm=83ac9edfb4db17c9e6032cae93ef89b96c5b90847da3b5f7afa82315cf2baec7f38b0f2bead2&scene=27">1.小麦什么时候种?怎么种？要注意哪些细节？</a>
          </p>
          <p style="text-indent:4em;" class="font-h2"><a
              href="https://mp.weixin.qq.com/s?__biz=MzUxNDAyMTUzNw==&mid=2247485848&idx=1&sn=538c6ac15e3cca13b6d6d3823a94e5f7&chksm=f94d0856ce3a81401c1f2769f7a4732c14b149805c9fb200742fdfc4674d96ba74de1938eed8&scene=27">2.15种小麦常见病害防治方法</a>
          </p>
          <p style="text-indent:4em;" class="font-h2"><a
              href="http://www.doc88.com/p-1932127222935.html">3.小麦生产中存在的问题及对策</a></p>
          <p style="text-indent:4em;" class="font-h2"><a
              href="http://www.doc88.com/p-1932127222935.html">4.小麦种子销售过程出现的问题及对策</a></p>
        </li>

      </ul>

      <div class="container">
        <div class="card">
          <div class="card__header">
            <img src="../assets/images/bpic22920.jpg" alt="card__image" class="card__image" width="400">
          </div>
          <div class="card__body">
            <span class="tag tag-blue">麦类作物</span>
            <h4><a href="">3.小麦生产中存在的问题及对策</a></h4>
            <p>17个你可能还不知道 JS 技巧！ 17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！</p>
          </div>
          <div class="card__footer">

          </div>
        </div>

        <div class="card">
          <div class="card__header">
            <img src="../assets/images/bpic22920.jpg" alt="card__image" class="card__image" width="400">
          </div>
          <div class="card__body">
            <span class="tag tag-blue">麦类作物</span>
            <h4><a href="http://www.doc88.com/p-1932127222935.html">小麦种子销售过程出现的问题及对策</a></h4>
            <p>17个你可能还不知道 JS 技巧！ 17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！</p>
          </div>
          <div class="card__footer">

          </div>
        </div>


        <div class="card">
          <div class="card__header">
            <img src="../assets/images/bpic22920.jpg" alt="card__image" class="card__image" width="400">
          </div>
          <div class="card__body">
            <span class="tag tag-blue">麦类作物</span>
            <h4><a href="">带你见到不一样的小麦</a></h4>
            <p>17个你可能还不知道 JS 技巧！ 17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！</p>
          </div>
          <div class="card__footer">
          </div>
        </div>

      </div>


    </dd>

  </div>
</template>

<script>
export default {
  name: "Pagination",
  // components:{Pagination}
  data() {
    return { show: 1 }
  },
  methods: {
    updated(value) {
      this.show = value;
    }
  },
}
</script>

<style>
.header {
  text-align: center;
}

 #more {
  width: 600px;
  --timing: 2s;
  border: 0;
  width: var(width);
  padding-block: 1em;
  color: #fff;
  font-weight: bold;
  font-size: 1em;
  background: rgb(64, 192, 87);
  transition: all 0.2s;
  border-radius: 3px;
}

 #more:hover {
  background-image: linear-gradient(to right, rgb(250, 82, 82), rgb(250, 82, 82) 16.65%, rgb(190, 75, 219) 16.65%, rgb(190, 75, 219) 33.3%, rgb(76, 110, 245) 33.3%, rgb(76, 110, 245) 49.95%, rgb(64, 192, 87) 49.95%, rgb(64, 192, 87) 66.6%, rgb(250, 176, 5) 66.6%, rgb(250, 176, 5) 83.25%, rgb(253, 126, 20) 83.25%, rgb(253, 126, 20) 100%, rgb(250, 82, 82) 100%);
  animation: var(--timing) linear dance6123 infinite;
  transform: scale(1.1) translateY(-1px);
}

@keyframes dance6123 {
  to {
    background-position: 600px;
  }
}


.help-content {
  margin-top: 35px;
  margin-bottom: 60px;
}
</style>