<template>
  <div>
    <!--帮助中心-->
    <div class="banner">
      <img src="~/assets/images/banner.jpg" alt="" />
    </div>
    <div class="content help-content">
      <dl>
        <dt>
          <ul class="content-tab">
            <li :class="{ sel: show === 1 }" @click="change(1)">麦类作物</li>
            <li :class="{ sel: show === 2 }" @click="change(2)">豆类作物</li>
            <li :class="{ sel: show === 3 }" @click="change(3)">稻类作物</li>
            <li :class="{ sel: show === 4 }" @click="change(4)">粗粮类作物</li>
            <li :class="{ sel: show === 5 }" @click="change(5)">薯类作物</li>
            <li :class="{ sel: show === 6 }" @click="change(6)">经济作物</li>
          </ul>
        </dt>
        <dd v-if="show === 1" class="question-list-wrap" style="display:block">
          <!-- <h3>小麦作物</h3> -->
          <ul>
            <h1 class="font-h1">一、小麦 </h1>
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
                  href="https://www.51dongshi.com/eedfbsgbdch.html">1.你不知道的小麦的事</a>
              </p>

              <p style="text-indent:4em;" class="font-h2"><a
                  href="http://www.doc88.com/p-1932127222935.html">2.小麦生产中存在的问题及对策</a></p>
              <p style="text-indent:4em;" class="font-h2"><a
                  href="http://www.doc88.com/p-1932127222935.html">3.小麦种子销售过程出现的问题及对策</a></p>
            </li>
          </ul>
          <div class="container">
            <div class="card">
              <div class="card__header">
                <img src="../assets/images/bpic22920.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="http://www.doc88.com/p-1932127222935.html">
                  <span class="tag tag-blue">麦类作物</span>
                  <h4><a href="http://www.doc88.com/p-1932127222935.html">小麦生产中存在的问题及对策</a></h4>
                  <p style="text-indent:2em;" class="font-h2">为什么有的农民朋友即使买了优良品种，但最终也没有丰收丰产呢？请通过我们的一些调查来走进这一现象，详细为您如何种植高产小麦
                  </p>
                </a>
              </div>
              <div class="card__footer">

              </div>
            </div>

            <div class="card">
              <div class="card__header">
                <img src="https://tppic.chinaz.net/files/tupian/pic9/202102/bpic22525_1920.jpg" alt="card__image"
                  class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="http://www.doc88.com/p-1932127222935.html">
                  <span class="tag tag-blue">麦类作物</span>
                  <h4><a href="http://www.doc88.com/p-1932127222935.html">小麦种子销售过程出现的问题及对策</a></h4>
                  <p style="text-indent:2em;" class="font-h2">近年来，面临着电商平台的大规模爆发，如何将种子销售出去也成了一大问题。</p>
                </a>
              </div>
            </div>
            <div class="card">
              <div class="card__header">
                <img src="https://scpic.chinaz.net/files/pic/pic9/201608/apic22850.jpg" alt="card__image"
                  class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://www.51dongshi.com/eedfbsgbdch.html">
                  <span class="tag tag-blue">麦类作物</span>
                  <h4><a href="https://www.51dongshi.com/eedfbsgbdch.html">带你见到不一样的小麦</a></h4>
                  <p style="text-indent:2em;" class="font-h2">你真的了解小麦这一农作物吗？你知道他是如何播种、孕穗、开花、结实这一系列的生长发育过程吗？</p>
                </a>
              </div>
              <div class="card__footer">
              </div>
            </div>

            <ul>
              <h1 class="font-h1">二、大麦 </h1>
              <li class="font-h2">
                <p style="text-indent:2em;" class="font-h2">(一) 百度百科</p>
                <p style="text-indent:4em;" class="font-h2">大麦（Hordeum vulgare
                  L.）是禾本科大麦属一年生草本植物。秆粗壮，光滑无毛，直立；叶鞘松弛抱茎，多无毛或基部具柔毛；叶舌膜质，叶片扁平，穗状花序，小穗稠密，每节着生三枚发育的小穗，小穗均无柄；颖线状披针形，外被短柔毛；颖果熟时粘着于稃内，不脱出。种下主要分为青稞和藏青稞两个变种。
                </p>


                <p style="text-indent:2em;" class="font-h2">(二) 植物学史</p>
                <p style="text-indent:4em;" class="font-h2">
                  大麦起源于如今仍旧可以在中东发现的野生大麦（Hordeum vulgare subsp.
                  spontaneum）。两种大麦都是双倍染色体（2n=14个染色体）。所有不同种类的大麦拥有大量的杂交品种，如今它们都被看作是一个种类。大麦和其野生品种的主要区别是后者由于自花授粉而产生的易碎叶轴。
                  最早的大麦发现于地中海东部累范特的旧石器时代遗址。最早的驯化大麦出现于新石器时代的叙利亚地区。大麦的驯化似乎是与小麦同时的。
                  在中国，大麦作物传播到中国的时间要早于丝绸之路。 [7] 早在新石器时代中期就已经有栽培，距今已有五千年的历史。
                  大麦的变种青稞，自5世纪成为藏菜主食，以其磨粉制成的糌粑现今仍是藏族主食。
                </p>


                <p style="text-indent:2em;" class="font-h2">(三) 形态特征</p>
                <p style="text-indent:4em;" class="font-h2">
                  茎：大麦秆粗壮，光滑无毛，直立，高50~100厘米。
                  叶：大麦叶鞘松弛抱茎，多无毛或基部具柔毛；两侧有两披针形叶耳；叶舌膜质，长1~2毫米；叶片长9~20厘米，宽7~20毫米，扁平。
                  花：穗状花序长3~8厘米（芒除外），径约1.5厘米，小穗稠密，每节着生三枚发育的小穗；小穗均无柄，长1~1.5厘米（芒除外）；颖线状披针形，外被短柔毛，先端常延伸为8~14毫米的芒；外稃具5脉，先端延伸成芒，芒长8~15厘米，边棱具细刺；内稃与外稃几等长。颖果熟时粘着于稃内，不脱出。
                </p>


              </li>

            </ul>

            <div class="container">
              <div class="card">
                <div class="card__header">
                  <img src="https://tppic.chinaz.net/files/default/imgs/2023-04-26/1cc34663616920c0_big.jpg"
                    alt="card__image" class="card__image" width="400">
                </div>
                <div class="card__body">
                  <a href="https://baijiahao.baidu.com/s?id=1618523950831264330&wfr=spider&for=pc">
                    <span class="tag tag-blue">麦类作物</span>
                    <h4><a href="">大麦生产中存在的问题及对策</a></h4>
                    <p style="text-indent:2em;" class="font-h2">
                      大麦在我们的日常生活中是最常见的几种作物之一，它的适应性很强，比较容易生存，但如果使用不正确的种植方法可能仍会面临亩产低，品质不佳等问题</p>
                  </a>
                </div>
                <div class="card__footer">
                </div>
              </div>

              <div class="card">
                <div class="card__header">
                  <img src="https://scpic.chinaz.net/files/pic/pic9/201610/fpic8224.jpg" alt="card__image"
                    class="card__image" width="400">
                </div>
                <div class="card__body">
                  <a href="https://baijiahao.baidu.com/s?id=1618523950831264330&wfr=spider&for=pc">
                    <span class="tag tag-blue">麦类作物</span>
                    <h4><a href="https://scpic.chinaz.net/files/pic/pic9/201808/bpic7818.jpg">大麦种植容易发生什么病害</a></h4>
                    <p style="text-indent:2em;" class="font-h2">农田里土地肥沃，病虫害问题频发，严重影响到产品的质量，所以需要及时处理</p>
                  </a>
                </div>
                <div class="card__footer">

                </div>
              </div>
              <div class="card">
                <div class="card__header">
                  <img src="https://scpic.chinaz.net/files/pic/pic9/201807/zzpic12906.jpg" alt="card__image"
                    class="card__image" width="400">
                </div>
                <div class="card__body">
                  <a href="https://m.baidu.com/bh/m/detail/ylchm_16495544864134101103">
                    <span class="tag tag-blue">麦类作物</span>
                    <h4><a href="https://m.baidu.com/bh/m/detail/ylchm_16495544864134101103">大麦的功效与作用</a></h4>
                    <p style="text-indent:2em;" class="font-h2">
                      大麦可以缓解便秘、促进生长，改善消化和减轻便秘的功能，在食用大麦后，肠蠕动规则，胀气消失，腹痛减轻，便秘可以减轻和消除。</p>
                  </a>
                </div>
                <div class="card__footer">
                </div>
              </div>

            </div>

          </div>

        </dd>
        <dd v-if="show === 2" class="question-list-wrap" style="display:block">
          <ul>
            <h1 class="font-h1">一、 绿豆</h1>
            <li class="font-h2">
              <p style="text-indent:2em;" class="font-h2">(一) 百度百科</p>
              <p style="text-indent:4em;" class="font-h2">绿豆（Vigna radiata (L.) R.
                Wilczek），是豆科豇豆属一年生直立草本植物，高20~60厘米。羽状复叶，托叶盾状着生，卵形；小托叶显著，披针形；小叶卵形，全缘，先端渐尖，基部阔楔形或浑圆。总状花序腋生；种子淡绿色或黄褐色，短圆柱形，种脐白色而不凹陷。花期为初夏，果期为6~8月。
                绿豆在中国各地均产，皆为栽培。 喜温，不耐霜冻。适于在丘陵同各种旱作物间作套种。用种子繁殖。
                绿豆可作为杂粮、蔬菜作物。种子供食用、亦可提取淀粉，制作豆沙，粉丝等。洗净置流水中，遮光发芽，可制成芽菜，供蔬食。种子入药，有清凉解毒、利尿明目的功效。全株也是很好的夏季绿肥。
              </p>


              <p style="text-indent:2em;" class="font-h2">(二) 植物学史</p>
              <p style="text-indent:4em;" class="font-h2">
                一年生直立草本，高20~60厘米。茎被褐色长硬毛。羽状复叶具3小叶；托叶盾状着生，卵形，长0.8~1.2厘米，具缘毛；小托叶显著，披针形；小叶卵形，长5~16厘米，宽3~12厘米，侧生的多少偏斜，全缘，先端渐尖，基部阔楔形或浑圆，两面多少被疏长毛，基部三脉明显；叶柄长5~21厘米；叶轴长1.5~4厘米；小叶柄长3~6毫米。
                总状花序腋生，有花4至数朵，最多可达25朵；总花梗长2.5~9.5厘米；花梗长2~3毫米；小苞片线状披针形或长圆形，长4~7毫米，有线条，近宿存；萼管无毛，长3~4毫米，裂片狭三角形，长1.5~4毫米，具缘毛，上方的一对合生成一先端2裂的裂片；旗瓣近方形，长1.2厘米，宽1.6厘米，外面黄绿色，里面有时粉红，顶端微凹，内弯，无毛；翼瓣卵形，黄色；龙骨瓣镰刀状，绿色而染粉红，右侧有显著的囊。
              </p>


              <p style="text-indent:2em;" class="font-h2">(三) 生长习性</p>
              <p style="text-indent:4em;" class="font-h2">
                绿豆喜温，适宜的出苗和生长温度为摄氏15~18度，生育期间需要较高的温度。在8至12度时开始发芽。在开花结荚期间需要温度一般在18至20度最为适宜。温度过高，茎叶生长过旺，会影响开花结荚。绿豆在生育后期不耐霜冻，气温降至0℃以下，植株会冻死，种子的发芽率也低。
              </p>
            </li>

          </ul>

          <div class="container">
            <div class="card">
              <div class="card__header">
                <img src="../assets/images/绿豆.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://baijiahao.baidu.com/s?id=1739885206108025127&wfr=spider&for=pc">
                  <span class="tag tag-blue">豆类作物</span>
                  <h4><a href="">关于绿豆你知道多少</a></h4>
                  <p style="text-indent:2em;" class="font-h2">提起夏天，我们除了想到西瓜，还有个不可忽略的食物就是绿豆了。

                    当然绿豆不是夏天专属，一年四季都可以吃。它是咱们老百姓家里常备的粮食之一，几千年来，绿豆被制成花式多样，风味独特的各色食品。</p>
                </a>
              </div>
              <div class="card__footer">

              </div>
            </div>

            <div class="card">
              <div class="card__header">
                <img src="../assets/images/绿豆2.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://jingyan.baidu.com/article/fec4bce28eb4ccf2618d8bb7.html">
                  <span class="tag tag-blue">豆类作物</span>
                  <h4><a href="https://jingyan.baidu.com/article/fec4bce28eb4ccf2618d8bb7.html">绿豆食用的一些小知识</a></h4>
                  <p style="text-indent:2em;" class="font-h2">
                    绿豆是一个好东西，很多人都喜欢吃绿豆糖水或者绿豆沙，绿豆常用来解暑和清热解毒，对于我们食用的话，也可以用于做糖水和绿豆饼，都是非常美味的。下面，我就给大家介绍一些绿豆的小常识吧。</p>
                </a>
              </div>
              <div class="card__footer">

              </div>
            </div>


            <div class="card">
              <div class="card__header">
                <img src="https://scpic.chinaz.net/files/pic/pic9/202010/bpic21578.jpg" alt="card__image"
                  class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://www.maigoo.com/goomai/158657.html">
                  <span class="tag tag-blue">豆类作物</span>
                  <h4><a href="https://www.maigoo.com/goomai/158657.html">绿豆的功效有很多你知道多少呢？</a></h4>
                  <p>17个你可能还不知道 JS 技巧！ 17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！17个你可能还不知道 JS 技巧！</p>
                </a>
              </div>
              <div class="card__footer">
              </div>
            </div>

          </div>
          <Pagination />

        </dd>
        <dd v-if="show === 3" class="question-list-wrap" style="display:block">
          <ul>
            <h1 class="font-h1"> 水稻 </h1>
            <li class="font-h2">
              <p style="text-indent:2em;" class="font-h2">(一) 百度百科</p>
              <p style="text-indent:4em;" class="font-h2">稻（Oryza sativa
                L.）通称水稻，是禾本科一年生水生草本（已有多年生稻品种）。秆直立，高0.5-1.5米，随品种而异。叶鞘无毛、松弛；叶舌披针形；叶片线状披针形，宽约1厘米，无毛，粗糙。圆锥花序大型疏展，棱粗糙；小穗含1成熟花；颖极小，仅在小穗柄先端留下半月形的痕迹，锥刺状；两侧孕性花外稃质厚，具5脉，中脉成脊，表面有方格状小乳状突起，厚纸质，遍布细毛端毛较密，有芒或无芒；内稃与外稃同质，具3脉，先端尖而无喙；雄蕊花药长2-3毫米。颖果长约5毫米，宽约2毫米；胚比约为颖果长的1/4。
              </p>
              <p style="text-indent:2em;" class="font-h2">(二) 植物学史</p>
              <p style="text-indent:4em;" class="font-h2">
                水稻是人类重要的粮食作物之一，耕种与食用的历史都相当悠久。全世界有一半的人口食用稻，主要在亚洲、欧洲南部和热带美洲及非洲部分地区。稻的总产量占世界粮食作物产量第三位，低于玉米和小麦，但能维持较多人口的生活，所以联合国将2004年定为“国际稻米年”。
                伊朗西南部、伊拉克西北部和土耳其东南部地区，是栽培一粒小麦和提莫菲维小麦最早被驯化之地。以色列西北部、叙利亚西南部和黎巴嫩东南部是野生二粒小麦的分布中心和栽培二粒小麦的起源地。普通小麦的出现晚于一粒小麦和二粒小麦，一般认为约在8000年前，起源于里海的西南部。
              </p>


              <p style="text-indent:2em;" class="font-h2">(三) 形态特征</p>
              <p style="text-indent:4em;" class="font-h2">
                一年生水生草本。秆直立，高0.5-1.5米，随品种而异。叶鞘松弛，无毛；叶舌披针形，长10-25厘米，两侧基部下延长成叶鞘边缘，具2枚镰形抱茎的叶耳；叶片线状披针形，长40厘米左右，宽约1厘米，无毛，粗糙。
                圆锥花序大型疏展，长约30厘米，分枝多，棱粗糙，成熟期向下弯垂；小穗含1成熟花，两侧甚压扁，长圆状卵形至椭圆形，长约10毫米，宽2-4毫米；颖极小，仅在小穗柄先端留下半月形的痕迹，退化外稃2枚，锥刺状，长2-4毫米；两侧孕性花外稃质厚，具5脉，中脉成脊，表面有方格状小乳状突起，厚纸质，遍布细毛端毛较密，有芒或无芒；内稃与外稃同质，具3脉，先端尖而无喙；雄蕊6枚，花药长2-3毫米。
              </p>
            </li>
          </ul>
          <div class="container">
            <div class="card">
              <div class="card__header">
                <img src="../assets/images/水稻1.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://baijiahao.baidu.com/s?id=1665087490245440898&wfr=spider&for=pc">
                  <span class="tag tag-blue">稻类作物</span>
                  <h4><a
                      href="https://baijiahao.baidu.com/s?id=1665087490245440898&wfr=spider&for=pc">水稻栽培中存在哪些问题？如何提高水稻种植效益，快来学几招！</a>
                  </h4>
                  <p style="text-indent:2em;" class="font-h2">
                    我国水稻栽培技术大量出现，呈现出科技创新发展的趋势。以水稻为研究对象，详细阐述水稻栽培的具体技术，希望对今后水稻种植有所帮助。
                  </p>
                </a>
              </div>
              <div class="card__footer">

              </div>
            </div>

            <div class="card">
              <div class="card__header">
                <img src="../assets/images/水稻2.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://baijiahao.baidu.com/s?id=1717727600914065634&wfr=spider&for=pc">
                  <span class="tag tag-blue">稻类作物</span>
                  <h4><a href="https://baijiahao.baidu.com/s?id=1717727600914065634&wfr=spider&for=pc">浅析水稻种植中的问题及措施</a>
                  </h4>
                  <p style="text-indent:2em;" class="font-h2">现阶段在水稻栽培过程中，相关种植人员需 要对优良食味水稻种植加大重视，并合理采取绿色高质高效 栽培技术</p>
                </a>
              </div>
            </div>
            <div class="card">
              <div class="card__header">
                <img src="../assets/images/水稻3.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://zhuanlan.zhihu.com/p/377840232">
                  <span class="tag tag-blue">稻类作物</span>
                  <h4><a href="https://zhuanlan.zhihu.com/p/377840232">关于杂交水稻常规水稻之间几个常见误区</a></h4>
                  <p style="text-indent:2em;" class="font-h2">你真的了解杂交水稻和常规水稻吗？你知道该如何区分二者吗？</p>
                </a>
              </div>
              <div class="card__footer">
              </div>
            </div>

          </div>
        </dd>
        <dd v-if="show === 4" class="question-list-wrap" style="display:block">
          <ul>
            <h1 class="font-h1">一、玉米 </h1>
            <li class="font-h2">
              <p style="text-indent:2em;" class="font-h2">(一) 百度百科</p>
              <p style="text-indent:4em;" class="font-h2">
                玉蜀黍，禾本科玉蜀黍属一年生草本作物植物，属于根系作物，地下节根是根系主体，入土较深；茎秆由节与节间组成，呈圆筒形，组织坚硬；玉米叶由叶片和叶鞘组成；花序雌雄同株；籽粒常呈黄色、白色、紫色。 [30]
                玉蜀黍7到8月开花，8到10月结果。 [31] 明朝李时珍在《本草纲目·古二·玉蜀黍》中记载：“玉蜀黍释名：玉高粱”，故玉蜀黍也称玉高粱。
              </p>
              <p style="text-indent:2em;" class="font-h2">(二) 形态特征</p>
              <p style="text-indent:4em;" class="font-h2">
                一年生高大草本。秆直立，通常不分枝，高1-4米，基部各节具气生支柱根。
                叶鞘具横脉；叶舌膜质，长约2毫米；叶片扁平宽大，线状披针形，基部圆形呈耳状，无毛或具疵柔毛，中脉粗壮，边缘微粗糙。
                顶生雄性圆锥花序大型，主轴与总状花序轴及其腋间均被细柔毛；雄性小穗孪生，长达1厘米，小穗柄一长一短，分别长1-2毫米及2-4毫米，被细柔毛；两颖近等长，膜质，约具10脉，被纤毛；外稃及内稃透明膜质，稍短于颖；花药橙黄色；长约5毫米。雌花序被多数宽大的鞘状苞片所包藏；雌小穗孪生，成16-30纵行排列于粗壮之序轴上，两颖等长，宽大，无脉，具纤毛；外稃及内稃透明膜质，雌蕊具极长而细弱的线形花柱。
              </p>


              <p style="text-indent:2em;" class="font-h2">(三) 主要品种</p>
              <p style="text-indent:4em;" class="font-h2">
                玉蜀黍的品种类型很多，按用途分，有粮用饲用品种、菜用品种（包括糯质型、甜质型、玉蜀黍笋型）、加工品种（甜玉蜀黍、玉蜀黍笋）、爆粒型品种（爆米花专用品种）、成单922等。
              </p>
            </li>
          </ul>
          <div class="container">
            <div class="card">
              <div class="card__header">
                <img src="../assets/images/玉米1.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://baijiahao.baidu.com/s?id=1706516564282258437&wfr=spider&for=pc">
                  <span class="tag tag-blue">粗粮作物</span>
                  <h4><a
                      href="https://baijiahao.baidu.com/s?id=1706516564282258437&wfr=spider&for=pc">玉米种植存在的问题及高产种植技术</a>
                  </h4>
                  <p style="text-indent:2em;" class="font-h2">
                    现阶段，玉米高产种植技术的实施应用对于提高单位面积农作物产量意义重大，有效利用并改进传统技术是提高玉米种植效益的关键途径。</p>
                </a>
              </div>
              <div class="card__footer">

              </div>
            </div>

            <div class="card">
              <div class="card__header">
                <img src="../assets/images/玉米2.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="http://news.sohu.com/a/671141170_121682987">
                  <span class="tag tag-blue">粗粮作物</span>
                  <h4><a href="http://news.sohu.com/a/671141170_121682987">玉米种植7大错，问题出在哪一个？产量不高，快来对照！</a></h4>
                  <p style="text-indent:2em;" class="font-h2">种的玉米不高产？自己身上找原因。很多农民将玉米不高产归结为天气、品种、肥料等客观因素，其实更要找找自己犯的错。</p>
                </a>
              </div>
              <div class="card__footer">

              </div>
            </div>

            <div class="card">
              <div class="card__header">
                <img src="../assets/images/玉米4.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://www.bilibili.com/read/cv23002004/">
                  <span class="tag tag-blue">粗粮作物</span>
                  <h4><a href="">玉米常见的病害，学会辨别和预防，来年丰收不用愁！</a></h4>
                  <p style="text-indent:2em;" class="font-h2">玉米生病可能会受到多种病害的侵袭，其中比较常见的病害包括玉米锈病、大小叶斑病、黑粉病、病毒病等。</p>
                </a>
              </div>
              <div class="card__footer">

              </div>
            </div>
          </div>

          <ul>
            <h1 class="font-h1">二、燕麦 </h1>
            <li class="font-h2">
              <p style="text-indent:2em;" class="font-h2">(一) 百度百科</p>
              <p style="text-indent:4em;" class="font-h2">
                燕麦（Avena sativa L.）是禾本科、燕麦属一年生草本植物。叶鞘松弛，叶舌透明膜质，叶片扁平，微粗糙，圆锥花序开展，金字塔形，小穗含小花。
                圆锥花序开展，金字塔形，长10~25厘米，分枝具棱角，粗糙。颖果被淡棕色柔毛，腹面具纵沟，4~9月开花结果。燕麦在《本草纲目》中有记载：“燕麦多为野生，因燕雀所食，故名”。
              </p>
              <p style="text-indent:2em;" class="font-h2">(二) 形态特征</p>
              <p style="text-indent:4em;" class="font-h2">
                一年生草本 [2]
                。须根较坚韧。秆直立，光滑无毛，高60-120厘米，具2-4节。叶鞘松弛，光滑或基部者被微毛；叶舌透明膜质，长1-5毫米；叶片扁平，长10-30厘米，宽4-12毫米，微粗糙，或上面和边缘疏生柔毛。
              </p>


              <p style="text-indent:2em;" class="font-h2">(三) 生长环境</p>
              <p style="text-indent:4em;" class="font-h2">
                燕麦的生长环境与一般谷物不同，喜爱高寒、干燥的气候，中国内蒙古自治区中部阴山北麓被誉为世界黄金燕麦的主要产区，这里海拔约2000米，年日照时间超过3000小时，昼夜温差大，平均3米/秒的季风常年吹过。
              </p>
            </li>
          </ul>
          <div class="container">
            <div class="card">
              <div class="card__header">
                <img src="../assets/images/燕麦1.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://baijiahao.baidu.com/s?id=1740845034533597752&wfr=spider&for=pc">
                  <span class="tag tag-blue">粗粮作物</span>
                  <h4><a
                      href="https://baijiahao.baidu.com/s?id=1740845034533597752&wfr=spider&for=pc">这文章让你成为燕麦专家！关于燕麦的问题答案都在里面了</a>
                  </h4>
                  <p style="text-indent:2em;" class="font-h2">燕麦有哪些功效，为什么受到越来越多的人追捧呢？</p>
                </a>
              </div>
              <div class="card__footer">

              </div>
            </div>

            <div class="card">
              <div class="card__header">
                <img src="../assets/images/燕麦2.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://www.bohe.cn/iask/view/tn1amzzhckdzug4.html">
                  <span class="tag tag-blue">粗粮作物</span>
                  <h4><a href="https://www.bohe.cn/iask/view/tn1amzzhckdzug4.html">长期吃燕麦坏处！</a></h4>
                  <p style="text-indent:2em;" class="font-h2">
                    一长期吃燕麦容易出现消化不良的症状，因为燕麦片富含膳食纤维素，这些膳食纤维素本身就不容易被消化，如果我们长时间食用，就容易导致消化不良，出现恶心、呕吐、胃痉挛、肠痉挛的症状。</p>
                </a>
              </div>
              <div class="card__footer">

              </div>
            </div>

            <div class="card">
              <div class="card__header">
                <img src="../assets/images/燕麦3.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="hhttps://www.jkwshk.tv/bkjx/20230226/1119418.html">
                  <span class="tag tag-blue">粗粮作物</span>
                  <h4><a href="https://www.jkwshk.tv/bkjx/20230226/1119418.html">七种人不宜吃燕麦片</a></h4>
                  <p style="text-indent:2em;" class="font-h2">
                    关于七种人不宜吃燕麦片，燕麦的营养成分表这个问题很多朋友还不知道，今天小六来为大家解答以上的问题，现在让我们一起来看看吧！</p>
                </a>
              </div>
              <div class="card__footer">

              </div>
            </div>
          </div>
        </dd>
        <dd v-if="show === 5" class="question-list-wrap" style="display:block">
          <ul>
            <ul>
              <h1 class="font-h1"> 红薯</h1>
              <li class="font-h2">
                <p style="text-indent:2em;" class="font-h2">(一) 百度百科</p>
                <p style="text-indent:4em;" class="font-h2">番薯（Ipomoea batatas (L.) Lam.），是旋花科虎番薯属多年生草质藤本植物， [13]
                  具有乳汁。块根为白、红或黄色；茎生不定根；叶呈宽卵形或卵状心形，叶色有浓绿、黄绿、紫绿等， [14] 前端渐尖，基部呈心形或近平截；花冠为粉红、白、淡紫或紫色，呈钟状或漏斗状，无毛；菊果呈卵形或扁圆形；
                  [1] 由于番薯属于异花授粉，自花授粉常不结实，所以有时只见开花不见结果。
                </p>


                <p style="text-indent:2em;" class="font-h2">(二) 形态特征</p>
                <p style="text-indent:4em;" class="font-h2">
                  一年生草本，地下部分具圆形、椭圆形或纺锤形的块根，块根的形状、皮色和肉色因品种或土壤不同而异。茎平卧或上升，偶有缠绕，多分枝，圆柱形或具棱，绿或紫色，被疏柔毛或无毛，茎节易生不定根。
                  叶片形状、颜色常因品种不同而异，也有时在同一植株上具有不同叶形，通常为宽卵形，长4-13厘米，宽3-13厘米，全缘或3-5（-7）裂，裂片宽卵形、三角状卵形或线状披针形，叶片基部心形或近于平截，顶端渐尖，两面被疏柔毛或近于无毛，叶色有浓绿、黄绿、紫绿等，顶叶的颜色为品种的特征之一；叶柄长短不一，长2.5-20厘米，被疏柔毛或无毛。
                </p>


                <p style="text-indent:2em;" class="font-h2">(三) 生长习性</p>
                <p style="text-indent:4em;" class="font-h2">
                  温度：番薯喜温、怕冷、不耐寒，适宜的生长温度为22-30℃，温度低于15℃时停止生长。不同生长期对温度要求也有不同，芽期温度宜在18-22℃，温度过高过低都会影响出芽率。苗期温度宜在22-25℃，茎叶期宜在22-30℃，茎叶期温度不宜低于16℃，否则会阻碍其生长，甚至停长；若是低于8℃，则会造成植株经霜枯萎死亡。根块期温度宜在22-25℃。适宜的温度可以促进植株各生长期长势良好，确保根块数量及膨大。
                  [7]
                  光照：番薯喜光，是短日照作物。植株生长过程中对光能要求高，属不耐阴的作物，从茎叶期开始光能时间长生长期就长、光合效率就越高，反之则会降低光合效率，影响植株生长。每天日照时间宜在8-10小时，充足的光照不仅可以促进开花、形成根块，而且良好的光照还可以使较多的养分积累到块根上，促使根块膨大。
                  [7]
                  水分：番薯耐旱适应性强，土壤持水量宜控制在60-70%，适宜的水分条件可以满足不同生长期的需求。芽期、苗期、茎叶期、分枝结薯期等阶段土壤持水量宜在60-80%，持水量过低会造成根系生长迟缓，造成弱苗、矮苗、病苗的出现；根块期土壤持水量宜在60-70%，可有效促进根块形成、膨大。此期水分不宜过大，如遇雨天要加强管理，注意减少田间积水现象，提高排水能力。
                </p>
              </li>
            </ul>
          </ul>
          <div class="container">
            <div class="card">
              <div class="card__header">
                <img src="../assets/images/红薯1.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://baijiahao.baidu.com/s?id=1746471270603767224&wfr=spider&for=pc">
                  <span class="tag tag-blue">薯类作物</span>
                  <h4><a
                      href="https://baijiahao.baidu.com/s?id=1746471270603767224&wfr=spider&for=pc">街边的烤红薯会致癌？吃红薯必问的7个问题，一文说清！</a>
                  </h4>
                  <p style="text-indent:2em;" class="font-h2">
                    蒸红薯、烤红薯、空气炸锅红薯、红薯粥、红薯饼……这些有没有你的最爱呀？红薯可是我们餐桌上的常见食材，甜蜜软糯，很多人都特别爱吃。
                  </p>
                </a>
              </div>
              <div class="card__footer">

              </div>
            </div>

            <div class="card">
              <div class="card__header">
                <img src="../assets/images/红薯2.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://m.thepaper.cn/baijiahao_15580607">
                  <span class="tag tag-blue">薯类作物</span>
                  <h4><a href="https://m.thepaper.cn/baijiahao_15580607">关于红薯的小知识，现在知道还不晚！</a></h4>
                  <p style="text-indent:2em;" class="font-h2">
                    最近正值红薯上市，很多人家都有储存红薯的习惯。但是，红薯储存起来却不容易，今天，给大家带来一个保存红薯的小妙招，放一年都不会坏哦~~</p>
                </a>
              </div>
              <div class="card__footer">

              </div>
            </div>

            <div class="card">
              <div class="card__header">
                <img src="../assets/images/红薯3.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://www.sodocs.net/doc/6c6772652.html">
                  <span class="tag tag-blue">薯类作物</span>
                  <h4><a href="https://www.sodocs.net/doc/6c6772652.html">吃红薯应该要注意哪些方面问题</a></h4>
                  <p style="text-indent:2em;" class="font-h2">
                    红薯是典型的高钾低钠食物，其膳食纤维含量很高，比看着有筋的大白菜高很多。既然这样，在吃红薯的时候我们到底应该要注意哪些方面的问题呢?！</p>
                </a>
              </div>
              <div class="card__footer">

              </div>
            </div>
          </div>
        </dd>

        <dd v-if="show === 6" class="question-list-wrap" style="display:block">
          <ul>
            <h1 class="font-h1">一、西红柿 </h1>
            <li class="font-h2">
              <p style="text-indent:2em;" class="font-h2">(一) 百度百科</p>
              <p style="text-indent:4em;" class="font-h2">番茄（Solanum lycopersicum
                L.）是茄科茄属的一年生草本植物，植株高达2米。茎易倒伏；叶为羽状复叶，基部呈楔形，较偏斜，具有不规则的锯齿；花冠呈辐状，黄色，裂片为窄长圆形；浆果呈扁球形或近球形，肉质多汁液，为桔黄或鲜红色，表面光滑，花果期夏秋季；种子黄色，覆盖柔毛。
              </p>


              <p style="text-indent:2em;" class="font-h2">(二) 植物学史</p>
              <p style="text-indent:4em;" class="font-h2">
                番茄起源中心是南美洲的安第斯山地带。在秘鲁、厄瓜多尔、玻利维亚等地仍有大面积野生种的分布。茄属分为有色番茄亚种（Eulycopsic）和绿色番茄亚种（Eriopersicon）。前者果实成熟时有多种颜色，后者果实成熟时为绿色。茄属由普通栽培种番茄及与栽培种番茄有密切关系的几个种组成，大体上又分为普通番茄和秘鲁番茄两个复合体种群。普通番茄群中包括：普通番茄、细叶番茄、奇士曼尼番茄、小花番茄和奇美留斯凯番茄、多毛番茄；秘鲁番茄群中包括智利番茄和秘鲁番茄。
              </p>


              <p style="text-indent:2em;" class="font-h2">(三) 形态特征</p>
              <p style="text-indent:4em;" class="font-h2">
                番茄是茄科一年生草本植物，株高0.6-2米，全体生粘质腺毛，有强烈气味。茎易倒伏。叶羽状复叶或羽状深裂，长10-40厘米，小叶极不规则，大小不等，常5-9枚，卵形或矩圆形，长5-7厘米，边缘有不规则锯齿或裂片。
              </p>
            </li>

          </ul>

          <div class="container">
            <div class="card">
              <div class="card__header">
                <img src="../assets/images/西红柿1.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://zhuanlan.zhihu.com/p/55882073">
                  <span class="tag tag-blue">经济作物</span>
                  <h4><a href="https://zhuanlan.zhihu.com/p/55882073">一分钟，解答你对番茄的疑问？</a></h4>
                  <p style="text-indent:2em;" class="font-h2">
                    对于第一年种大棚西红柿的农户来说，玩棚可不是件容易的事。虽然他们事先已向有经验的菜农详细请教了管理环节，可到了实际操作中，还是出了不少问题。</p>
                </a>
              </div>
              <div class="card__footer">

              </div>
            </div>

            <div class="card">
              <div class="card__header">
                <img src="../assets/images/西红柿2.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://www.my478.com/question/20211129/450175.html">
                  <span class="tag tag-blue">经济作物</span>
                  <h4><a href="https://www.my478.com/question/20211129/450175.html">西红柿果期都有哪些方面问题？</a></h4>
                  <p style="text-indent:2em;" class="font-h2">
                    西红柿处于结果期间的时候：①需要及时的进行追肥，要施加高钾肥，但是肥量要控制好。</p>
                </a>
              </div>
              <div class="card__footer">

              </div>
            </div>


            <div class="card">
              <div class="card__header">
                <img src="../assets/images/西红柿3.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://zhuanlan.zhihu.com/p/140330490?utm_id=0">
                  <span class="tag tag-blue">豆类作物</span>
                  <h4><a href="https://zhuanlan.zhihu.com/p/140330490?utm_id=0">12个西红柿难缠的问题，分分钟搞定！</a></h4>
                  <p>西红柿是日光温室中栽培较多的蔬菜之一。根据西红柿植株的长相，判断西红柿健康状况，对栽培措施进行相应的调整，能起到事半功倍的效果。</p>
                </a>
              </div>
              <div class="card__footer">
              </div>
            </div>
          </div>

          <ul>
            <h1 class="font-h1">二、黄瓜 </h1>
            <li class="font-h2">
              <p style="text-indent:2em;" class="font-h2">(一) 百度百科</p>
              <p style="text-indent:4em;" class="font-h2">黄瓜（Cucumis sativus
                L.）葫芦科黄瓜属一年生攀援草本植物，茎部细长和糙硬毛；叶片呈宽卵状心形或裂片三角形；花呈微柔毛黄白色；果实长圆形或圆柱形熟时黄绿色；种子呈狭卵形白色；花果期为夏季。 [1]
                黄瓜是汉朝张骞出使西域时带回来的，后赵王朝的建立者石勒，一律严禁出现“胡”字，胡瓜更名为黄瓜。
              </p>


              <p style="text-indent:2em;" class="font-h2">(二) 生长环境</p>
              <p style="text-indent:4em;" class="font-h2">
                温度：黄瓜喜温暖，不耐寒冷。生育适温为10～32℃。一般白天25～32℃，夜间15～18℃生长最好；最适宜地温为20～25℃，最低为15℃左右。最适宜的昼夜温差10～15℃。黄瓜高温35℃光合作用不良，45℃出现高温障碍，低温-2～0℃冻死，如果低温炼苗可承受3℃的低温。
                光照：华北型品种对日照的长短要求不严格，已成为日照中性植物，其光饱和点为5.5万勒克斯，光补偿点为1500勒克斯，多数品种在8～11小时的短日照条件下，生长良好。
                水分：黄瓜产量高，需水量大。适宜土壤湿度为60%～90%，幼苗期水分不宜过多，土壤湿度60%～70%，结果期必须供给充足的水分，土壤湿度80%～90%。黄瓜适宜的空气相对湿度为60%～90%，空气相对湿度过大很容易发病，造成减产。
                土壤：黄瓜喜湿而不耐涝、喜肥而不耐肥，宜选择富含有机质的肥沃土壤。一般喜欢pH5.5～7.2之间的土壤，但以pH值为6.5最好。
              </p>
              <p style="text-indent:2em;" class="font-h2">(三) 形态特征</p>
              <p style="text-indent:4em;" class="font-h2">
                一年生蔓生或攀援草本；茎、枝伸长，有棱沟，被白色的糙硬毛。卷须细，不分歧，具白色柔毛。
                叶柄稍粗糙，有糙硬毛，长10～16（～20）厘米；叶片宽卵状心形，膜质，长、宽均7～20厘米，两面甚粗糙，被糙硬毛，3～5个角或浅裂，裂片三角形，有齿，有时边缘有缘毛，先端急尖或渐尖，基部弯缺半圆形，宽2～3厘米，深2～2.5厘米，有时基部向后靠合。
              </p>
            </li>
          </ul>
          <div class="container">
            <div class="card">
              <div class="card__header">
                <img src="../assets/images/黄瓜1.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://baijiahao.baidu.com/s?id=1640569311499917415&wfr=spider&for=pc">
                  <span class="tag tag-blue">经济作物</span>
                  <h4><a href="https://baijiahao.baidu.com/s?id=1640569311499917415&wfr=spider&for=pc">黄瓜的各种问题，你知道多少？</a>
                  </h4>
                  <p style="text-indent:2em;" class="font-h2">
                    种植黄瓜的农户都知道，黄瓜有比较多的病虫害以及影响植株正常生长发育的问题，尤其是因为施肥不当而导致的一些常见问题，比如坐果率低、早衰、化瓜、畸形、落花落果等问题。</p>
                </a>
              </div>
              <div class="card__footer">

              </div>
            </div>

            <div class="card">
              <div class="card__header">
                <img src="../assets/images/黄瓜2.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://baijiahao.baidu.com/s?id=1689777504796977324&wfr=spider&for=pc">
                  <span class="tag tag-blue">经济作物</span>
                  <h4><a
                      href="https://baijiahao.baidu.com/s?id=1689777504796977324&wfr=spider&for=pc">黄瓜出现这“18种”问题，你会如何解决？</a>
                  </h4>
                  <p style="text-indent:2em;" class="font-h2">
                    1、土地选择
                    选择大气环境质量优、土壤肥沃、疏松、排灌条件好，两季以上未种过葫芦科作物的田块。</p>
                </a>
              </div>
              <div class="card__footer">

              </div>
            </div>


            <div class="card">
              <div class="card__header">
                <img src="../assets/images/黄瓜3.jpg" alt="card__image" class="card__image" width="400">
              </div>
              <div class="card__body">
                <a href="https://jingyan.baidu.com/article/29697b913e322aab20de3c21.html">
                  <span class="tag tag-blue">经济作物</span>
                  <h4><a href="https://jingyan.baidu.com/article/29697b913e322aab20de3c21.html">关于黄瓜那些事</a></h4>
                  <p style="text-indent:2em;" class="font-h2">黄瓜是餐桌上的“平民”蔬菜，以其营养、价廉大受青睐，尤其是女性朋友。
                    黄瓜果肉脆甜多汁，清香可口，它含有胶质、果酸和生物活性酶，可促进机体代谢，能治疗晒伤、雀斑和皮肤过敏。黄瓜还能清热利尿、预防便秘。</p>
                </a>
              </div>
              <div class="card__footer">
              </div>
            </div>
          </div>


        </dd>
      </dl>

    </div>
  </div>
</template>

<script>
import '~/assets/css/help.css'
import Pagination from './Pagination.vue'
import PaginationVue from './Pagination.vue'
export default {
  name: "help",
  components: { Pagination },
  data() {
    return { show: 1 }
  },
  props: [Pagination],
  components: { Pagination },

  methods: {
    change(value) {
      this.show = value
    },

  },
}
</script>


<style>
.banner{
  margin-top: 55px;
}
.font-h1 {
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-left: 20px;

}

.font-h2 {
  font-size: 18px;
  margin-left: 20px;
  line-height: 32px;
  margin-right: 20px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  max-width: 1200px;
  margin-block: 2rem;
  gap: 2rem;
}


.card {
  display: flex;
  flex-direction: column;
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  background: #ECE9E6;
  background: linear-gradient(to right, #FFFFFF, #ECE9E6);
  margin: 15px 1px
}

.card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

.card__body a {
  margin: 0px, 5px;
}


.tag {
  align-self: flex-start;
  padding: .25em .75em;
  border-radius: 1em;
  font-size: .75rem;
}

.tag+.tag {
  margin-left: .5em;
}

.tag-blue {
  background: #56CCF2;
  background: linear-gradient(to bottom, #2F80ED, #56CCF2);
  color: #fafafa;
}

.tag-brown {
  background: #D1913C;
  background: linear-gradient(to bottom, #FFD194, #D1913C);
  color: #fafafa;
}

.tag-red {
  background: #cb2d3e;
  background: linear-gradient(to bottom, #ef473a, #cb2d3e);
  color: #fafafa;
}

.card__body h4 {
  font-size: 1.5rem;
  text-transform: capitalize;
}
</style>
