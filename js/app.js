/* ============================================

   Staying Bifzixkar - Main Application

   土家族文化档案网站 · 重构版

   ============================================ */

(function () {

  'use strict';

  // Auto-refresh on version change to bypass GitHub Pages CDN cache
  var APP_VERSION = '202609010911';
  try {
    var storedVer = localStorage.getItem('bifzixkar_app_version');
    if (storedVer && storedVer !== APP_VERSION) {
      localStorage.setItem('bifzixkar_app_version', APP_VERSION);
      window.location.reload(true);
    } else if (!storedVer) {
      localStorage.setItem('bifzixkar_app_version', APP_VERSION);
    }
  } catch(e) {}



  let currentLang = 'zh';



  /* ====== 中文数据 ====== */

  const dataZh = {
  "hero": {
    "title": "Staying Bifzixkar",
    "subtitle": "一部活着的土家族文化档案",
    "description": "\"毕兹卡\"（Bifzixkar）是土家族的自称，意为\"本地人\"。这里的内容由本地人定义，而非为外来观看者表演。",
    "cta1": "项目背景",
    "cta2": "文化档案",
    "cta3": "文创产品"
  },
  "projectBg": {
    "sectionTitle": "项目背景",
    "sectionSubtitle": "Project Background",
    "image": "images/project-bg.jpg",
    "paragraphs": [
      "本项目起于一个在彭家寨反复可见的困境：土家族年轻人面临的选择空间极度收窄——留在当地，意味着进入旅游服务业，以低薪换取被凝视的位置；离开去城市，则意味着与文化根脉的断裂。两条路之间，没有第三条。",
      "与此同时，土家族文化正在以一种特定方式\"被保存\"：织锦纹样变成景区装饰，梯玛仪式变成节庆节目，哭嫁歌变成舞台表演。这些保存的结果是文化形式的留存，却是文化意义的空洞化。",
      "Staying Bifzixkar 试图提供另一种可能：让本地年轻人成为自己文化的记录者与叙述者，同时通过文化周边产品的销售创造实际经济收益，使\"留在家乡\"成为一个有尊严、有可持续收入的选择。"
    ]
  },
  "cultureArchive": {
    "sectionTitle": "文化档案",
    "sectionSubtitle": "Culture Archive",
    "paragraphs": [
      "这里的文化档案不以“展示民族文化”为目的，而以“记录真实生活经验”为导向——包括正在消失的、被误解的、从未被讲述的部分。档案是周边产品的内容来源与叙事依据，周边产品是档案可持续运营的经济基础。"
    ]
  },
  "weave": {
    "sectionTitle": "织·西兰卡普",
    "sectionSubtitle": "Weave-Xilankapu",
    "description": "记录西兰卡普织锦纹样的图案、色彩与象征含义。",
    "patterns": [
      {
        "name": "单八勾",
        "nameEn": "Eight-Hook",
        "tujiaName": "土家语：谢谢",
        "image": "images/weave/danbagou.jpg",
        "symbolism": "平安、团圆、财富、光明、丰饶、顺利。对土家族人民而言：温暖、光明、生命和力量。",
        "oralHistory": "蜘蛛崇拜：土家族的原始信仰和神话传说中，蜘蛛是拯救民族于危难的吉祥物。传说一只蜘蛛在洞口结网，掩护了躲避追兵的土家族先民，使其得以幸存和繁衍。因此，蜘蛛纹样被视为护身符，寓意辟邪消灾、保佑平安。"
      },
      {
        "name": "四十八勾",
        "nameEn": "Forty-Eight Hook",
        "tujiaName": "",
        "image": "images/weave/sibashigou.jpg",
        "symbolism": "吉祥、顺利互助、驱秽辟邪、消灾纳吉、祈子求昌。对土家族人民而言：\"多子多福，子孙昌盛\"。",
        "oralHistory": "\"太阳与生命的崇拜\"：\"四十八勾\"常被解读为太阳和火焰的象征，暗含土家族人对生命繁衍与永续的渴望。其放射状的勾纹结构类似太阳光芒，寓意光明、温暖和族群繁荣。\"族群团结与吉祥寓意\"：勾纹的层层相连、环环相扣，象征族人紧密团结与生生不息。在婚俗文化中，\"四十八勾\"常用于嫁衣或婚庆织锦，既寄托驱邪纳吉的愿望，也隐喻婚姻的稳固与多子多福。"
      },
      {
        "name": "阳雀花",
        "nameEn": "Sparrow Flower",
        "tujiaName": "",
        "image": "images/weave/yangquehua.jpg",
        "symbolism": "守护平安丰收、家庭和睦、吉祥祈福。对土家族人民而言：\"报春的天使\"。",
        "oralHistory": "\"西兰的化身\"：西兰因为痴迷织锦技艺被误解而亡化做阳雀鸟，每年春分时期啼鸣催促农耕，象征着对技艺与自然的忠诚，也赋予了对织锦技艺的守护和传承。"
      },
      {
        "name": "椅子花",
        "nameEn": "Chair Flower",
        "tujiaName": "土家语：克毕卡",
        "image": "images/weave/yizihua.jpg",
        "symbolism": "子孙满堂、温馨幸福、权利、家族繁衍兴旺。对土家族人民而言：新娘嫁妆有没有椅子花织锦，直接显示女方家族的地位和织女水平。",
        "oralHistory": "\"太师椅的符号转化\"，源于土司时期象征权力的\"太师椅\"。在土司统治结构中，椅子是土王权威的具象载体——土司审判、祭祀时端坐雕花大椅，平民则只能站立或席地。织女将太师椅的平面形态解构为几何模块\"十人织九垮的技艺神话\""
      },
      {
        "name": "粑粑架",
        "nameEn": "Bakery Stand",
        "tujiaName": "\"烤糯糍粑的工具\"",
        "image": "images/weave/babajia.jpg",
        "symbolism": "食禄满盘、家宅平安、事业糕蒸、财源滚滚、五谷丰登。对土家族人民而言：\"器物衍生\"，族群精神图腾。",
        "oralHistory": "粑粑架是土家人用来烧烤糯糍粑时的一种铁质工具。其状有三脚半月形和四脚方形，置放粑粑的烤面多为\"牛眼睛\"或菱形图案。"
      },
      {
        "name": "锯齿花",
        "nameEn": "Sawtooth Flower",
        "tujiaName": "土家语：泽卡毕兹（意为刀锋纹）",
        "image": "images/weave/juchihua.jpg",
        "symbolism": "开垦的坚韧、以锐破厄、力量与守护。对土家族人民而言：用经纬线锻造的生存宣言！",
        "oralHistory": "\"自然与生存的锐化\"：它是劈开荆棘的生存之刃，铭刻族群与自然的搏斗。齿峰与齿谷的交替，诠释土家族\"向死而生\"的价值观。它从血染的绑腿化作防弹纤维与生态建筑，完成从物理防御到精神图腾的升华。锯齿角度严格保持52°，与鄂西出土战国青铜钺刃角一致，暗喻土家族历史上\"以锐破厄\"的战斗精神。"
      },
      {
        "name": "桶盖花",
        "nameEn": "Bucket Lid Flower",
        "tujiaName": "土家语：桶巴堵咱（意为桶盖子）",
        "image": "images/weave/tonggaihua.jpg",
        "symbolism": "吉祥、富贵、家财万贯、财富积累、丰收。对土家族人民而言：对自然的感激之情。",
        "oralHistory": "桶盖花取材于日常生活器物，因形似民间装米用的扁形木桶盖而得名。民间的木桶以圆形和扁形为主，尤以扁形最为独特。桶盖花一扁形变体菱形为主体，组成了繁复和大小相同的图案，设色约丽典雅，编织精美，这是土家妇女长期观察生活的结果。"
      },
      {
        "name": "凤穿牡丹",
        "nameEn": "Phoenix Through Peony",
        "tujiaName": "",
        "image": "images/weave/fengchuanmudan.jpg",
        "symbolism": "吉祥富贵、人丁兴旺、平安顺遂、雍容华贵。对土家族人民而言：牡丹居中，双凤向对翩飞。",
        "oralHistory": "土家族古歌《摆手歌》中记载，凤凰是巴人迁徙途中的引路神鸟，指引族群找到栖身之所。而牡丹作为武陵山区常见花卉，象征土地肥沃与丰饶。凤穿牡丹纹样的形成，是巴人图腾记忆与楚地花卉崇拜融合的产物，既承载族群迁徙的历史记，也表达对定居生活的珍视。"
      },
      {
        "name": "梅花纹",
        "nameEn": "Plum Blossom Pattern",
        "tujiaName": "土家语：朋友们（阿哥得）",
        "image": "images/weave/meihuawen.jpg",
        "symbolism": "传春报喜、吉祥平安、幸福、美好、如意、一帆风顺。对土家族人民而言：激励人面对逆境时坚持不懈。",
        "oralHistory": "梅花象征着冰清玉洁，是土家人心中的花魁，有梅花报春之寓意。梅花花团锦簇，以九朵为最，极具写意。同时，斜向排列着菱形九朵梅花主体纹样，并以红色为底色，更加热烈喜庆。"
      },
      {
        "name": "老鼠娶亲",
        "nameEn": "The Mouse’s Wedding",
        "tujiaName": "土家语：晚安",
        "image": "images/weave/laoshuquqin.jpg",
        "symbolism": "家宅安宁、五谷丰登。对土家族人民而言：对美好生活的执着追求。",
        "oralHistory": "相传正月初三晚上是\"老鼠娶亲\"的大日子，会听到老鼠吱吱叫的声音。为了不打扰老鼠娶亲的好事，在该晚都会尽量提早熄灯就寝，并且在家中的厨房或老鼠常出入的角落，撒上一些米盐、糕饼与老鼠共享新婚的欢乐和年来的收成，这些东西俗称\"米妆\"，或称\"老鼠分钱\"，希望与老鼠打好交道以求今年的鼠害少一些。"
      }
    ]
  },
  "custom": {
    "sectionTitle": "俗·习俗与禁忌",
    "sectionSubtitle": "Custom · Customs and Taboos",
    "description": "这里包括习俗、节气、饮食禁忌、建房讲究、婚丧仪式中的细节。内容取材于老人记忆，有些从未被系统记录，也无法在非遗认定体系中找到位置。",
    "customs": [
      {
        "title": "拦门酒",
        "subtitle": "最隆重的欢迎礼",
        "content": "当你走进土家山寨或参加节庆时，常会遇到\"拦门酒\"。这是土家人待客的最高礼仪。身着盛装的阿哥阿妹会唱着山歌，端着米酒在寨门口迎接。通常要喝三碗（或三口），寓意\"三阳开泰\"。双手接过酒碗，沾唇示意并真诚道谢，赢得主人的欢笑与尊重。"
      },
      {
        "title": "女儿会",
        "subtitle": "土家族的\"情人节\"",
        "content": "每年农历七月十二，会举办盛大的\"女儿会\"。这天，土家姑娘会盛装出行，通过买卖货物、对唱山歌来寻觅意中人，大胆而浪漫。"
      }
    ],
    "solarTitle": "节气",
    "solarContent": "<p>每年腊月，寨子里会响起年猪的啼叫声，这是\"刨汤宴\"民俗盛宴的序曲。土家人遵循古礼，将新鲜猪肉烹制成热气腾腾的菜肴，摆开数十米长的长桌宴，土家姑娘唱着敬酒歌，以\"高山流水\"般的仪式将米酒倒入客人口中。</p>",
    "taboos": [
      {
        "title": "火塘神圣",
        "content": "在传统土家吊脚楼里，火塘是家庭中心，被视为祖先神灵所在。不能用脚踩踏火塘的三脚架，也不能朝火塘吐痰、扔污物。"
      },
      {
        "title": "过年禁止猫进屋",
        "content": "俗称\"猪来穷，狗来富，猫来穿丧服\"；祭祀时，也避开猫的气味，禁止猫靠近。"
      },
      {
        "title": "饮食禁忌",
        "content": "土家人忌讳食用已经死亡的动物。新年忌鱼，农历新年期间忌食鱼，避不吉寓意。"
      }
    ]
  },
  "homeConstruction": {
    "sectionTitle": "房屋建造",
    "sectionSubtitle": "Home Construction",
    "image": "images/home-construction.jpg",
    "paragraphs": [
      "彭家寨的吊脚楼建造遵循严格的传统规矩。材料只取阳坡杉木，正屋采用\"三柱四骑\"结构，象征天地人三才。\"吊脚楼全凭榫卯相连，不用一钉一铆，修旧如旧时必须用传统的榫卯结构修复，不动建筑筋骨。建筑布局上，彭家寨依山就势，单户多为正屋三间、厢房吊层的格局，常以一正一横为主，一正两横的\"撮箕口\"为辅，与院坝相围成小庭院式，各自成为独立封闭的空间。"
    ],
    "subItems": [
      {
        "title": "吊脚楼",
        "image": "images/home/diaojiaolou.jpg",
        "content": "吊脚楼底层架空，隔离地面，有助于通风防潮，避免蛇虫野兽侵扰。同时，吊脚楼分层利用空间，下层饲养牲畜，堆放杂物，上层居住，储藏粮食。"
      }
    ]
  },
  "weddingFuneral": {
    "sectionTitle": "婚丧仪式",
    "sectionSubtitle": "Wedding & Funeral Rituals",
    "branches": [
      {
        "title": "哭嫁",
        "titleEn": "Crying-wedding",
        "image": "images/custom/kuojia.jpg",
        "content": "女人在结婚前7-20天就开始哭，有的哭一个多月，至少三五天。婚礼歌曲有哭父母，哭哥哥嫂子，哭叔叔，哭姐姐，哭媒人，哭梳头，哭戴花，哭告别爸爸妈妈，哭祭祖，哭上轿子等。开始轻声唱歌，越接近结婚的日子越难过。诉说父母养育之恩、兄弟姐妹的深厚情谊和离别之感，或者是表达自己对未来生活的一种担心，女方在要出嫁的前一天和第二天上轿前哭嫁达到了高潮，哭声伴随着铜锣声，鞭炮声，场面非常震撼。哭嫁不是嚎啕大哭，乱哭一通，而是要哭的好听，哭的感人，哭的让人共情。"
      },
      {
        "title": "跳丧舞",
        "titleEn": "Jumping funeral dance",
        "image": "images/custom/tiaosangwu.jpg",
        "content": "豁达的生命礼赞。土家老人寿终正寝后，亲友会通宵达旦地跳\"撒叶儿嗬\"，用雄健的舞蹈和歌谣来送别亡者，庆祝其圆满的一生。这绝非悲伤，而是土家人\"欢欢喜喜送亡人\"的豁达生死观。若在旅行中偶遇，请保持肃穆与尊重。"
      }
    ]
  },
  "object": {
    "sectionTitle": "物·日常器物",
    "sectionSubtitle": "Object · Daily-use Items",
    "description": "记录土家族日常生活中的具体物件——农具、食器、节庆用品、家族传物等。",
    "items": [
      {
        "name": "吊炉",
        "image": "images/object/diaolu.jpg",
        "usage": "山区潮湿，冬天大家围坐着烤火，上面可以放水壶或烤物，屋顶板有挂钩，挂着腊肉，兼具烤火和熏肉的功能。能上下调节高度，",
        "location": "火镗屋子火堆上",
        "status": "在用"
      },
      {
        "name": "蓑衣",
        "image": "images/object/suoyi.jpg",
        "usage": "下雨天，村民穿着去地里干活",
        "location": "挂在屋子外屋檐下面的墙上",
        "status": "不用"
      },
      {
        "name": "背篓",
        "image": "images/object/beilou.jpg",
        "usage": "村民下地干活，背农产品进集市",
        "location": "放在屋内或屋外屋檐下",
        "status": "在用"
      },
      {
        "name": "药碾子",
        "image": "images/object/yaonianzi.jpg",
        "usage": "用于捻碎草药。彭家寨人靠山吃饭，山上有很多草药，村民会上山采",
        "location": "在存储室",
        "status": "在用"
      },
      {
        "name": "酒坛子",
        "image": "images/object/jiutanzi.jpg",
        "usage": "盛酒用的坛子",
        "location": "屋内厨房",
        "status": "在用"
      },
      {
        "name": "摔碗",
        "image": "images/object/shuaiwan.jpg",
        "usage": "摔碗酒用的土碗，碗很小很浅，碗里的酒喝完摔地上",
        "location": "厨房内",
        "status": "在用"
      },
      {
        "name": "婚床",
        "image": "images/object/hunchuang.jpg",
        "usage": "老式新人结婚用的婚床",
        "location": "老房子里",
        "status": "不用了，村子里现在年轻人很少了"
      },
      {
        "name": "窗户",
        "image": "images/object/chuangling.jpg",
        "usage": "窗户的花纹",
        "location": "吊脚楼窗户",
        "status": "在用"
      },
      {
        "name": "蜂蜜桶",
        "image": "images/object/fengmitong.jpg",
        "usage": "家家户户屋檐下都放着这样的桶，自然收集山上峰蜜的峰蜜",
        "location": "屋檐下",
        "status": "在用"
      },
      {
        "name": "窗棂雕刻",
        "image": "images/object/chuangling2.jpg",
        "usage": "窗户",
        "location": "窗户",
        "status": "在用"
      },
      {
        "name": "压板",
        "image": "images/object/yaban.jpg",
        "usage": "压豆腐用的，村民自己种黄豆，会做豆皮。豆皮是村里的特色产品",
        "location": "挂在房间之间过道的墙上",
        "status": "在用"
      },
      {
        "name": "灯具",
        "image": "images/object/dengju.jpg",
        "usage": "现在是通电的马灯",
        "location": "在房子过道里",
        "status": "在用"
      }
    ]
  },
  "sound": {
    "sectionTitle": "声·方言与歌",
    "sectionSubtitle": "Sound · Dialect and Songs",
    "description": "此模块采集正在消失的梯玛仪式唱腔、哭嫁歌片段、摆手歌等声音材料。",
    "entries": [
      {
        "category": "梯玛歌",
        "performer": "彭继龙，土家族，湖南龙山人，国家级非物质文化遗产代表性项目土家族梯玛歌代表性传承人。",
        "description": "\"梯\"在土家族的意思是\"敬神\"，\"玛\"的意思是\"人们\"，\"梯玛\"就是\"敬神的人们\"。梯玛又称为\"土老司\"，是土家族中的宗教职业者，负责祭祀活动并且兼修医术。\"梯玛歌\"是土家族长篇史诗，以\"梯玛日\"仪式为实践载体，世代口耳相传，集诗、歌、乐、舞为一体，表现开天辟地、人类繁衍、民族祭祀、民族迁徙、狩猎农耕及饮食起居等历史和社会生活内容。",
        "audio": "videos/timage.mp4",
        "audioNote": "彭继龙综述片",
        "videoLink": "http://ich.nlc.cn/video/301"
      },
      {
        "category": "摆手舞",
        "performer": "张明光，土家族，湖南龙山人，国家级非物质文化遗产项目土家族摆手舞代表性传承人。摆手舞第二十五代掌堂师。",
        "description": "摆手舞，土家语称为\"舍巴\"、\"舍巴格痴\"，意为敬神跳，是一种祭祀性舞蹈。其特点是摆边手，躬腰屈膝，以身体扭动带动手的甩动，表演内容多为生产生活动作，以狩猎、农事、军事和社会生活为主要表现内容，表演中歌、乐、舞浑然一体，间有锣鼓伴奏和摆手歌穿唱。摆手舞最大特征在于甩同边手、走同边脚，摆手动作主要包括\"单摆\"、\"双摆\"、\"回旋摆\"等几种，以\"顺拐、屈膝、颤动、下沉\"为动作要领。摆手舞是土家人世代传承的精神财富，具有祭祀、娱乐、教育、交际等多方面的社会功能。",
        "audio": "videos/baishouwu.mp4",
        "audioNote": "土家族摆手舞",
        "videoLink": "http://ich.nlc.cn/video/5579"
      }
    ]
  },
  "people": {
    "sectionTitle": "人·当代土家人",
    "sectionSubtitle": "People · Contemporary Tujia People",
    "description": "记录今天真实生活中的土家族人——不是表演者，不是非遗传人，而是普通的年轻人、小商户、农业劳动者、留守者。",
    "profiles": [
      {
        "name": "彭茂林",
        "age": "47岁",
        "role": "返乡农家乐餐馆主",
        "image": "images/people/pengmaolin.jpg",
        "quote": "我是彭家寨人，媳妇是隔壁村的，这个房子我们自己家的。以前在外面打工。前年回来，在外面干不动体力活了，家里老人身体也不行了，需要有人照顾。现在管着自家吊脚楼里开着的餐馆。主屋的位置好，靠近寨子口。游客量蛮大。游客来了，爱问'你们土家族现在还有什么特别的规矩吗？'我有时候会照着爷爷教我的，腊月杀年猪、打糍粑、唱敬酒歌。但说实话，我自己过年都不一定搞那么全了。杀年猪、刨汤宴我们这里现在还搞的人少了，有些游客会来看，成为了\"旅游产品\"。我理解的文化，可能不再是那些必须遵守的'规矩'，而是一种…底色、本能？比如，我还是会忌讳正月里说不吉利的话。"
      },
      {
        "name": "龙梅",
        "age": "32岁",
        "role": "寨口小超市老板娘",
        "image": "images/people/longmei.jpg",
        "quote": "我这家店，卖水、零食、纸巾，也卖点土家织锦的杯垫、小钱包，都是寨里婶娘们手作的。你说文化？我天天打交道的就是'钱'和'货'。外地游客来买织锦，总会问图案什么意思。我妈教过我，那是'台台花'，是保佑小孩的；那是'万字纹'，代表福气连绵。我现在解释这些，比卖货还顺溜。我女儿八岁，放学回来帮我看店，她会指着'卍'字说，'妈妈，这个我们美术书上也有'。我信我妈说的，经期不碰祭祀的东西，心里图个安稳。"
      },
      {
        "name": "杨春秀",
        "age": "49岁",
        "role": "留守主妇",
        "image": "images/people/yangchunxiu.jpg",
        "quote": "我男人和儿子都在浙江打工，寨里像我这样的妇女，多了去了。我的生活就是这一日三餐，和逢年过节。再忙再累，该做的祭祀一点不能少。男人不在，我就代表家里上香、摆饭、烧纸。我也知道，年轻人不信这个了。我女儿视频时说，'妈，你那套太麻烦了'。麻烦吗？是麻烦。但我不做，心里就空一块。前年隔壁家奶奶走了，按规矩，我们这些相邻的妇女都去帮忙，给老人擦身、换衣，她的贴身衣服慢慢烧掉，不能乱扔。你说这是文化还是迷信？我觉得是情分。是咱们土家人对自己人，从生到死的一套'照顾'。现在寨子成了景点，这份'照顾'还在我们这些留下的人手里攥着，没丢。"
      },
      {
        "name": "彭老汉",
        "age": "68岁",
        "role": "种地兼管护古建筑",
        "image": "images/people/penglaohan.jpg",
        "quote": "我这一辈子，没离开过这山。年轻时跟着父辈学造吊脚楼，阳坡的杉木，三柱四骑，榫卯对榫卯，不用一根铁钉。现在没人盖新的了，我的活变成了'修旧的'，旅游局给钱，要求'修旧如旧'。老祖宗的规矩都在木头里。哪根梁能换，哪片瓦必须留着，我心里有本账。我老伴去世了，女儿结婚嫁出去了，但跟女婿在寨子口开个民宿，挺大的。我还种着地里的活，经济上完全没问题。"
      }
    ]
  },
  "products": {
    "sectionTitle": "文创产品",
    "sectionSubtitle": "Cultural and Creative Products",
    "description": "西兰卡普是土家族女红文化的代表，在土家族女性眼中，所见到的的万事万物都有美的一面，都叫\"花\"，连生活中最不起眼的家私，都是她们心目中最漂亮的花。所以，西兰卡普纹样中出现了大量的生活器物，比如说粑粑架、椅子花等等，通过这一类纹样，我们可以看到土家人世世代代的生活方式。",
    "softFabrics": {
      "title": "纺织织物",
      "items": [
        {
          "name": "杯垫",
          "price": "RMB 22.00",
          "image": "images/products/soft1.jpg",
          "link": "https://item.taobao.com/item.htm?id=628063842837"
        },
        {
          "name": "鼠标垫",
          "price": "RMB 22.00",
          "image": "images/products/soft2.jpg",
          "link": "https://item.taobao.com/item.htm?id=628063842837"
        },
        {
          "name": "杯垫",
          "price": "RMB 15.80",
          "image": "images/products/soft3.jpg",
          "link": "https://item.taobao.com/item.htm?id=675204951754"
        },
        {
          "name": "杯垫",
          "price": "RMB 38.00",
          "image": "images/products/soft4.jpg",
          "link": "https://item.taobao.com/item.htm?id=652347307170"
        },
        {
          "name": "袜子",
          "price": "RMB 12.80",
          "image": "images/products/soft5.jpg",
          "link": "https://item.taobao.com/item.htm?id=624728753988"
        },
        {
          "name": "手提袋",
          "price": "RMB 78.00",
          "image": "images/products/soft6.jpg",
          "link": "https://item.taobao.com/item.htm?id=971914888481"
        },
        {
          "name": "手提袋",
          "price": "RMB 698.00",
          "image": "images/products/soft7.jpg",
          "link": "https://item.taobao.com/item.htm?id=802307868244"
        },
        {
          "name": "帆布袋",
          "price": "RMB 128.00",
          "image": "images/products/soft8.jpg",
          "link": "https://item.taobao.com/item.htm?id=923194563111"
        },
        {
          "name": "口罩",
          "price": "RMB 38.00",
          "image": "images/products/soft9.jpg",
          "link": "https://item.taobao.com/item.htm?id=668139295069"
        },
        {
          "name": "手提袋",
          "price": "RMB 188.00",
          "image": "images/products/soft10.jpg",
          "link": "https://item.taobao.com/item.htm?id=1061891602674"
        },
        {
          "name": "手提袋",
          "price": "RMB 288.00",
          "image": "images/products/soft11.jpg",
          "link": "https://item.taobao.com/item.htm?id=1061671514287"
        },
        {
          "name": "手提袋",
          "price": "RMB 298.00",
          "image": "images/products/soft12.jpg",
          "link": "https://item.taobao.com/item.htm?id=1062875249228"
        },
        {
          "name": "手提袋",
          "price": "RMB 698.00",
          "image": "images/products/soft13.jpg",
          "link": "https://item.taobao.com/item.htm?id=854406983345"
        },
        {
          "name": "手提袋",
          "price": "RMB 100.00",
          "image": "images/products/soft14.jpg",
          "link": "https://item.taobao.com/item.htm?id=789696610540"
        },
        {
          "name": "手提袋",
          "price": "RMB 698.00",
          "image": "images/products/soft15.jpg",
          "link": "https://item.taobao.com/item.htm?id=789708686139"
        },
        {
          "name": "手提袋",
          "price": "RMB 798.00",
          "image": "images/products/soft16.jpg",
          "link": "https://item.taobao.com/item.htm?id=678078484549"
        },
        {
          "name": "手提袋",
          "price": "RMB 688.00",
          "image": "images/products/soft17.jpg",
          "link": "https://item.taobao.com/item.htm?id=1002842715965"
        },
        {
          "name": "公文包",
          "price": "RMB 298.00",
          "image": "images/products/soft18.jpg",
          "link": "https://item.taobao.com/item.htm?id=873848120160"
        }
      ]
    },
    "homeFurnishings": {
      "title": "家居软装",
      "items": [
        {
          "name": "拖鞋",
          "price": "RMB 288.00",
          "image": "images/products/home1.jpg",
          "link": "https://item.taobao.com/item.htm?id=624528913455"
        },
        {
          "name": "靠枕",
          "price": "RMB 258.00",
          "image": "images/products/home2.jpg",
          "link": "https://item.taobao.com/item.htm?id=713611655993"
        },
        {
          "name": "桌旗",
          "price": "RMB 398.00",
          "image": "images/products/home3.jpg",
          "link": "https://item.taobao.com/item.htm?id=929647215619"
        },
      ]
    },
    "stationery": {
      "title": "文具小物件",
      "items": [
        {
          "name": "马克杯",
          "price": "RMB 58.00",
          "image": "images/products/stationery1.jpg",
          "link": "https://item.taobao.com/item.htm?id=623381950351"
        },
        {
          "name": "橡皮",
          "price": "RMB 15.00",
          "image": "images/products/stationery2.jpg",
          "link": "https://item.taobao.com/item.htm?id=667650847464"
        },
        {
          "name": "数据线",
          "price": "RMB 38.00",
          "image": "images/products/stationery3.jpg",
          "link": "https://item.taobao.com/item.htm?id=623616742631"
        },
        {
          "name": "书签",
          "price": "RMB 29.00",
          "image": "images/products/stationery4.jpg",
          "link": "https://item.taobao.com/item.htm?id=1072291854006"
        },
        {
          "name": "发箍",
          "price": "RMB 128.00",
          "image": "images/products/stationery5.jpg",
          "link": "https://item.taobao.com/item.htm?id=1048313935673"
        }
      ]
    },
    "outdoor": {
      "title": "户外生活方式",
      "items": [
        {
          "name": "鸭舌帽",
          "price": "RMB 38.00",
          "image": "images/products/outdoor1.jpg",
          "link": "https://item.taobao.com/item.htm?id=654794513896"
        },
        {
          "name": "折叠椅",
          "price": "RMB 7.50",
          "image": "images/products/outdoor2.jpg",
          "link": "https://item.taobao.com/item.htm?id=740207275006"
        },
        {
          "name": "带靠背折叠椅",
          "price": "RMB 14.50",
          "image": "images/products/outdoor3.jpg",
          "link": "https://item.taobao.com/item.htm?id=718022547088"
        },
        {
          "name": "户外野餐垫",
          "price": "RMB 15.80",
          "image": "images/products/outdoor4.jpg",
          "link": "https://item.taobao.com/item.htm?id=1055922485747"
        }
      ]
    }
  },
  "footer": {
    "text": "Staying Bifzixkar · 一部活着的土家族文化档案"
  }
};



  /* ====== English Data ====== */

  const dataEn = {
  "hero": {
    "title": "Staying Bifzixkar",
    "subtitle": "A Living Archive of Tujia Culture",
    "description": "\"Bifzixkar\" is the self-designation of the Tujia ethnic group, meaning \"local people\". The project *Staying Bifzixkar* is defined by local people, rather than being performed for external observers.",
    "cta1": "Project Background",
    "cta2": "Culture Archive",
    "cta3": "Products"
  },
  "projectBg": {
    "sectionTitle": "Project Background",
    "sectionSubtitle": "Project Background",
    "image": "images/project-bg.jpg",
    "paragraphs": [
      "The project stems from a recurring dilemma in Pengjiazhai: youth of the Tujia ethnic group face an extremely narrow range of choices：remaining in the local communities means entering the tourism service sector, trading a low salary for a position of being gazed upon; leaving the homeland for the cities means severing their connection with their cultural roots. Between these two paths, there is no third option.",
      "Simultaneously, Tujia culture is being \"preserved\" in a particular manner: brocade patterns are incorporated into scenic area decorations, the Tima ritual is adapted into festival performances,  and the \"Crying at Marriage\" song is transformed into stage productions. These preservation efforts ensure the survival of cultural forms,  simultaneously leading to the hollowing out of cultural meaning.",
      "\"Staying Bifzixkar\" seeks to offer an alternative approach: empowering local youth to serve as recorders and narrators of their own culture, while generating tangible economic benefits through the sale of cultural merchandise, thereby making \"staying in the hometown\" a dignified and financially sustainable choice."
    ]
  },
  "cultureArchive": {
    "sectionTitle": "Culture Archive",
    "sectionSubtitle": "Culture Archive",
    "paragraphs": [
      "Archives are not intended for \"displaying national culture,\" but are guided by the aim of \"recording real-life experiences\", including those aspects that are disappearing, misunderstood, or never before recounted. Archives serve as the source of content and the basis of narrative for peripheral products; in turn, peripheral products constitute the economic foundation for the sustainable operation of archives."
    ]
  },
  "weave": {
    "sectionTitle": "Weave · Xilankapu",
    "sectionSubtitle": "Weave · Xilankapu",
    "description": "This module records the patterns, colors, and symbolic meanings of Xilankapu brocade designs.",
    "patterns": [
      {
        "name": "Eight-Hook",
        "nameEn": "Eight-Hook",
        "tujiaName": "Tujia Language: Thank you",
        "image": "images/weave/danbagou.jpg",
        "symbolism": "Peace, family reunion, wealth, prosperity, abundance, and smooth progress. For the Tujia people: warmth, light, life, and strength.",
        "oralHistory": "Spider Worship: In the primitive beliefs and mythological tales of the Tujia people, the spider is regarded as a mascot that saves the ethnic group from dire crises. According to legend, a spider spun a web at the entrance of a cave, shielding the ancestors of the Tujia people who were fleeing pursuing enemies, thereby enabling them to survive and reproduce. Consequently, spider motifs are viewed as amulets that symbolize warding off evil forces, averting disasters and ensuring peace and safety."
      },
      {
        "name": "Forty-Eight Hook",
        "nameEn": "Forty-Eight Hook",
        "tujiaName": "",
        "image": "images/weave/sibashigou.jpg",
        "symbolism": "Auspiciousness; Smooth progress and mutual support; Dispelling evil and warding off malevolent forces; Eliminating misfortunes and bringing good fortune; Praying for the prosperity of one's children. For the Tujia people: numerous descendants and abundant blessings.",
        "oralHistory": "\"The Worship of the Sun and Life\": The \"Forty-Eight Hook\" are often interpreted as symbols of the sun and fire, reflecting the Tujia people's yearning for life reproduction and sustainability. Their radial groove patterns resemble the rays of the sun, symbolizing light, warmth, and the prosperity of the ethnic group. \"Ethnic Unity and Auspicious Symbolism\": The layered interconnections and interlocking loops of the \"hook\" pattern symbolize the close unity and enduring vitality of the community. In wedding customs, the \"Forty-Eight Hook\" is frequently employed in bridal garments or wedding brocade fabrics; it not only expresses the wish to ward off evil and attract good fortune but also serves as a metaphor for the stability of marriage and the hope for numerous descendants and abundant blessings."
      },
      {
        "name": "Sparrow Flower",
        "nameEn": "Sparrow Flower",
        "tujiaName": "",
        "image": "images/weave/yangquehua.jpg",
        "symbolism": "Safeguarding peace and abundant harvests, fostering family harmony and auspicious blessings. For the Tujia people: \"The Angel Who Brings Spring\".",
        "oralHistory": "\"The Incarnation of Xilan\": Due to being misunderstood for her obsession with the art of weaving, Xilan passed away and transformed into the Yangque Bird. Each year during the Spring equinox, the bird sings to herald the start of the farming season—symbolizing loyalty to both craftsmanship and nature, while also embodying the duty to safeguard and perpetuate the art of weaving."
      },
      {
        "name": "Chair Flower",
        "nameEn": "Chair Flower",
        "tujiaName": "Tujia language: \"Kebika\"",
        "image": "images/weave/yizihua.jpg",
        "symbolism": "Abundant descendants, warmth and happiness, authority, and a thriving family lineage. For the Tujia people: whether the bride's dowry includes a \"Chair Flower\" brocade directly reflects the status of the bride's family and the skill level of the brocade weaver.",
        "oralHistory": "\"The Symbolic Transformation of the Grand Tutor's Chair\", a symbol of power during the Tusi era. Within the Tusi governance system, chairs served as tangible embodiments of the Tusi ruler's authority—during judicial proceedings or sacrificial ceremonies, the ruler would sit upon a intricately carved large chair, whereas commoners were only permitted to stand or sit on a mat. The designer deconstructed the planar form of the Grand Tutor's Chair into geometric modules, giving rise to the \"Mythology of the `Ten Weavers Creating Nine Weaving Sections` Technique.\""
      },
      {
        "name": "Baba Rack",
        "nameEn": "Baba Rack",
        "tujiaName": "\"Tool for Grilling Glutinous Rice Cakes\"",
        "image": "images/weave/babajia.jpg",
        "symbolism": "A full table of auspicious offerings, a peaceful home, thriving career prospects, abundant wealth, and bountiful harvests. For the Tujia people: \"Derivation from objects\", the spiritual totem of their ethnic group.",
        "oralHistory": "The Baba Frame is an iron utensil used by the Tujia people when grilling glutinous rice cakes. It comes in two designs: a three-legged crescent-shaped version and a four-legged square version; the baking surface of these frames often features \"cow-eye\" or diamond-shaped patterns."
      },
      {
        "name": "Sawtooth Flower",
        "nameEn": "Sawtooth Flower",
        "tujiaName": "Tujia language: \"Zekabiz\" (meaning \"blade pattern\")",
        "image": "images/weave/juchihua.jpg",
        "symbolism": "Tenacity in land reclamation; using sharpness to overcome adversity; strength and guardianship. For the Tujia people: A manifesto for survival forged from warp and weft threads.",
        "oralHistory": "\"The Sharpening of Nature and Existence\": It is a blade of survival that cleaves through thorns, etching the struggle between the Tujia people and nature; the alternation of jagged peaks and deep valleys embodies the Tujia value system of \"living in the face of death.\" Evolving from blood-stained legbinds into bulletproof fibers and eco-architecture, it achieves a sublimation—from physical defense to spiritual totem. The serrated edge maintains a precise 52-degree angle, aligning with the cutting edge angle of a Warring States-period bronze battleaxe unearthed in western Hubei—symbolizing the Tujia people's historical combat spirit of \"using sharpness to overcome adversity.\""
      },
      {
        "name": "Bucket Lid Flower",
        "nameEn": "Bucket Lid Flower",
        "tujiaName": "Tujia language: \"Bengba Duzhan\"",
        "image": "images/weave/tonggaihua.jpg",
        "symbolism": "Good fortune, prosperity, immense wealth, accumulation of riches, and a bountiful harvest. For the Tujia people: a profound sense of gratitude toward nature.",
        "oralHistory": "The \"Bucket Lid Pattern\" draws its inspiration from everyday objects; it derives its name from its resemblance to flat wooden bucket lids commonly used in folk customs for storing rice. Traditional wooden buckets are predominantly circular or flat, with the flat type being particularly distinctive. The Bucket Lid Pattern features a rhombus-shaped variant of the flat bucket lid as its central motif, forming intricate patterns composed of identical-sized elements; its color palette is elegant and refined, and its weaving technique is exquisite—representing the culmination of the long-term observations made by Tujia women regarding their daily lives."
      },
      {
        "name": "Phoenix Through Peony",
        "nameEn": "Phoenix Through Peony",
        "tujiaName": "",
        "image": "images/weave/fengchuanmudan.jpg",
        "symbolism": "Good fortune, prosperity, peace and smooth life, as well as elegance and nobility. For the Tujia people: the peony is positioned at the center, while two phoenixes soar in a graceful pair.",
        "oralHistory": "The ancient Tujia song \"Hand-waving Song\" records that the phoenix was a guiding divine bird during the migration of the Ba people, leading their community to find a place of refuge. The peony, as a common flower in the Wuling Mountain region, symbolizes fertile land and abundance. The formation of the phoenix crossing peony motif is the result of the fusion between the Ba people's totemic memory and the floral worship prevalent in the Chu region; it not only carries the historical record of the community's migration but also expresses their deep cherish for settled life."
      },
      {
        "name": "Plum Blossom Pattern",
        "nameEn": "Plum Blossom Pattern",
        "tujiaName": "Tujia Language: Friends",
        "image": "images/weave/meihuawen.jpg",
        "symbolism": "Bringing good news in spring, auspiciousness and peace, happiness, beauty, fulfillment, and smooth sailing.For the Tujia people: reminder to persevere and remain steadfast in adversity.",
        "oralHistory": "The plum blossom symbolizes purity and integrity; it is revered as the \"Flower Queen\" in the hearts of the Tujia people, embodying the symbolism of the plum blossom heralding spring. The plum blossoms bloom in clusters, with nine blossoms often representing a complete set. Meanwhile, nine diamond-shaped motifs are arranged at an oblique angle. The plum blossom serves as the primary decorative motif, set against a red background for a more vibrant look."
      },
      {
        "name": "The Mouse’s Wedding",
        "nameEn": "The Mouse’s Wedding",
        "tujiaName": "Tujia language: Goodnight!",
        "image": "images/weave/laoshuquqin.jpg",
        "symbolism": "A peaceful home life and abundant harvests. For the Tujia people: pursuit of a better life.",
        "oralHistory": "Legend is that on the evening of the third day of the first lunar month, it is the auspicious day for \"the rat's wedding,\" during which one may hear squeaking sounds from rats. To avoid disturbing this auspicious event, people on this night will try their best to turn off their lights and go to bed as early as possible; additionally, they will sprinkle some rice, salt, pastries, or other treats in the kitchen or in corners where rats frequently pass through, sharing these offerings with the rats to celebrate their newlywed happiness and the harvest of the past year—these items are commonly known as \"rice offerings\" or \"rat-sharing money.\" The hope is to build a harmonious relationship with the rats in order to reduce any rodent-related nuisances this year."
      }
    ]
  },
  "custom": {
    "sectionTitle": "Custom · Customs and Taboos",
    "sectionSubtitle": "Custom · Customs and Taboos",
    "description": "Organizing local lifestyle practices, such as customs, solar terms, dietary taboos, building construction traditions, and details within wedding and funeral ceremonies. These elements are extensively preserved in the memories of older generations. However, they have never been systematically documented nor can they be incorporated into the intangible cultural heritage recognition framework.",
    "customs": [
      {
        "title": "Gate-blocking Wine",
        "subtitle": "The Most Solemn Form of Welcome",
        "content": "When you enter a Tujia mountain village or attend a festival, you will often encounter the \"Gate-blocking Wine\", the highest etiquette practice among the Tujia people for welcoming guests. Dressed in festive attire, the men and women will sing folk songs while carrying rice wine to greet you at the village entrance. Typically, one drinks three bowls (or three sips) of the wine, symbolizing \"Three Yangs bringing auspicious fortune.\" By accepting the wine bowl with both hands, touching the lips as a gesture, and offering sincere thanks, you will earn the laughter and respect of the hosts."
      },
      {
        "title": "Daughter's Festival",
        "subtitle": "The Tujia People's \"Valentine's Day\"",
        "content": "On the 12th day of the seventh lunar month each year, a grand \"Daughter's Festival\" is held. During this occasion, Tujia young women don their finest attire and set out on a journey to find their beloveds, whether by trading goods or performing mountain songs, a bold and romantic endeavor."
      }
    ],
    "solarTitle": "Solar Terms",
    "solarContent": "<p>The 12th lunar month and the \"Pao Tang Ban\" (Soup-Preparing Banquet). </p><p>Every year during the 12th lunar month, the sounds of pigs crowing can be heard throughout the village, marking the prelude to the folk feast known as the \"Pao Tang Ban.\" Following ancient traditions, the Tujia people prepare fresh pork into steaming hot dishes and set up a banquet table spanning dozens of meters. Tujia young women sing ceremonial drinking songs, while rice wine is poured into the guests' mouths through a ritual reminiscent of the classical composition \"High Mountains and Flowing Water.\"</p>",
    "taboos": [
      {
        "title": "The Fire Pit is Sacred and Must Not Be Desecrated",
        "content": "In traditional Tujia stilted houses, the fire pit serves as the heart of the household and is regarded as the dwelling place of the ancestral spirits. It is forbidden to step on the tripod supporting the fire pit, nor is it appropriate to spit or discard waste near it."
      },
      {
        "title": "During the New Year period, cats should not be allowed inside the home",
        "content": "A belief known locally as \"if a pig enters, poverty follows; if a dog enters, wealth follows; if a cat enters, it should wear mourning attire.\" During sacrificial rituals, the scent of cats should also be avoided, and cats should not be permitted to approach."
      },
      {
        "title": "Dietary Restrictions",
        "content": "The Tujia people avoid consuming animals that have died. During the Lunar New Year, fish is avoided in meals as a way to ward off bad luck."
      }
    ]
  },
  "homeConstruction": {
    "sectionTitle": "House-Building Conventions",
    "sectionSubtitle": "House-Building Conventions",
    "paragraphs": [
      "The stilt-house dwellings of Pengjiazhai were constructed in strict accordance with traditional building principles. The construction materials were exclusively sourced from fir wood harvested from the sunny slopes. The main house employs a \"three-pillar, four-ride\" structural design, symbolizing the three fundamental elements of heaven, earth, and humanity. These stilt houses are entirely assembled using mortise-and-tenon joints—no nails or rivets are used; when restoring these structures to their original condition, the traditional mortise-and-tenon technique must be employed without altering the building's structural framework. In terms of architectural layout, Pengjiazhai is built in harmony with the natural contours of the mountain terrain. Most individual households feature a layout consisting of a three-bay main house flanked by side rooms on a raised platform; this configuration typically follows a \"one main, one cross\" pattern, supplemented by a \"strainer-mouth\" layout (one main house with two cross wings), all together forming a small courtyard-style compound where each unit constitutes an independent, enclosed space."
    ],
    "subItems": [
      {
        "title": "Stilt House",
        "image": "images/home/diaojiaolou.jpg",
        "content": "The ground floor of the stilt-house is elevated above the ground, creating a barrier that enhances ventilation and prevents moisture buildup, while also deterring snakes, insects and wild animals. Additionally, the stilt-house makes efficient use of its multi-level layout: the lower level is used for raising livestock and storing miscellaneous items, whereas the upper level serves as the living space and storage area for food."
      }
    ]
  },
  "weddingFuneral": {
    "sectionTitle": "Wedding and Funeral Rituals",
    "sectionSubtitle": "Wedding and Funeral Rituals",
    "branches": [
      {
        "title": "Crying-wedding",
        "titleEn": "Crying-wedding",
        "image": "images/custom/kuojia.jpg",
        "content": "Women begin sobbing 7–20 days before their wedding. Some may sob for over a month, or at least three to five days. The wedding songs often include lamentations for their parents, their elder brothers and sisters-in-law, their uncles, their elder sisters, the matchmaker, the process of braiding their hair, wearing the wedding flowers, bidding farewell to their parents, paying respects to their ancestors, and entering the bridal sedan chair. At first, they sing softly. However, as the wedding date approaches, their sorrow intensifies. During these songs, the bride expresses gratitude for her parents' nurturing care, reminisces about the deep bonds with her siblings, and reflects on the sense of parting. She may also voice her concerns regarding her future life. The sobbing ceremony reaches its climax on the day before the wedding and just before entering the bridal sedan chair. The cries are accompanied by the sound of gongs and firecrackers, creating a profoundly moving scene. The wedding crying ceremony is not about loud, uncontrollable weeping. It requires sobbing in a beautiful, touching manner that evokes empathy from all present."
      },
      {
        "title": "Jumping funeral dance",
        "titleEn": "Jumping funeral dance",
        "image": "images/custom/tiaosangwu.jpg",
        "content": "A celebration of a broad-minded approach to life. When a Tujia elder passes away, relatives and friends will perform the 'Sa Ye Er He' dance throughout the night, using vigorous dance movements and traditional songs to bid farewell to the deceased and celebrate their fulfilling life. This is by no means sadness. It reflects the Tujia people's open-minded perspective on life and death, characterized by \"joyfully bidding farewell to the departed.\" If you encounter this ritual during your travels, please maintain solemnity and respect."
      }
    ]
  },
  "object": {
    "sectionTitle": "Object · Daily-use Items",
    "sectionSubtitle": "Object · Daily-use Items",
    "description": "This collection documents specific objects from the daily life of the Tujia people, such as farming tools, dining utensils, festive supplies, and family heirlooms.",
    "items": [
      {
        "name": "Induction Furnace",
        "image": "images/object/diaolu.jpg",
        "usage": "The mountainous areas are humid. During winter, people gather around a fire for warmth, A kettle or other items can be placed on top of the roof. The roof slats have hooks where cured meat can be hung, making this space serve both as a place to keep warm and as a spot to smoke meat. It can be adjusted in height.",
        "location": "On the fire",
        "status": "In use"
      },
      {
        "name": "Coir Raincoat",
        "image": "images/object/suoyi.jpg",
        "usage": "On rainy days, villagers wear their clothes and go to the fields to work.",
        "location": "Hang on the wall beneath the eaves of the exterior room",
        "status": "Out of use"
      },
      {
        "name": "Back Basket",
        "image": "images/object/beilou.jpg",
        "usage": "Villagers work in the fields and carry their agricultural products to the market.",
        "location": "Place indoors or under the eaves of an exterior building.",
        "status": "In use"
      },
      {
        "name": "Medicine Mill",
        "image": "images/object/yaonianzi.jpg",
        "usage": "Used for crushing herbal medicines. The people of Pengjiazhai rely on the mountains for their livelihood. The hills are abundant in medicinal herbs. Villagers often climb up the mountains to gather them.",
        "location": "In the storage room",
        "status": "In use"
      },
      {
        "name": "Wine Jar",
        "image": "images/object/jiutanzi.jpg",
        "usage": "Vessel for storing wine.",
        "location": "In the kitchen",
        "status": "In use"
      },
      {
        "name": "Bowls for Crushing",
        "image": "images/object/shuaiwan.jpg",
        "usage": "A simple, small, shallow bowl; once the wine is finished, the bowl is thrown onto the ground.",
        "location": "In the kitchen",
        "status": "In use"
      },
      {
        "name": "Marriage Bed",
        "image": "images/object/hunchuang.jpg",
        "usage": "Traditional wedding bed for newlyweds.",
        "location": "The old house",
        "status": "No need; there are very few young people left in the village now."
      },
      {
        "name": "Window",
        "image": "images/object/chuangling.jpg",
        "usage": "Window pattern.",
        "location": "Window of the stilted house",
        "status": "In use"
      },
      {
        "name": "Honey Bucket",
        "image": "images/object/fengmitong.jpg",
        "usage": "Every household keeps such buckets under their eaves to naturally collect mountain bee honey.",
        "location": "Under the eaves",
        "status": "In use"
      },
      {
        "name": "Window Lattice",
        "image": "images/object/chuangling2.jpg",
        "usage": "Window.",
        "location": "Window.",
        "status": "In use"
      },
      {
        "name": "Pressplate",
        "image": "images/object/yaban.jpg",
        "usage": "This is used for making pressed tofu. The villagers grow soybeans themselves and know how to make soybean skin. Soybean skin is a specialty product of the village.",
        "location": "Hanging on the wall in the hallway between rooms and kitchen",
        "status": "In use"
      },
      {
        "name": "Lamp",
        "image": "images/object/dengju.jpg",
        "usage": "An electric kerosene lamp.",
        "location": "In the hallway between rooms and kitchen",
        "status": "In use"
      }
    ]
  },
  "sound": {
    "sectionTitle": "Sound · Dialect and Songs",
    "sectionSubtitle": "Sound · Dialect and Songs",
    "description": "This module collects audio materials—including disappearing Tima ritual chants, hand-waving singing styles, and more.",
    "entries": [
      {
        "category": "Tima ritual chants",
        "performer": "Peng Jilong, Tujia ethnic person, from Longshan Hunan Province, is the representative successor of the \"Tujia Tima Song,\" a national-level intangible cultural heritage representative project.",
        "description": "In the Tujia language, \"Tima\" means \"to worship deities,\" while \"Ma\" means \"people\"; thus, \"Tima\" refers to \"the people who worship deities.\" The Tima is also known as a \"Tulaozi\" —a religious practitioner within the Tujia community responsible for conducting sacrificial rituals while also practicing traditional medicine. The \"Tima Song\" is a long-form epic of the Tujia people; it uses the \"Tima Ri\" ceremony as its practical vehicle and has been passed down orally through generations. This epic integrates poetry, song, music, and dance to depict various aspects of historical and social life—ranging from the creation of the world and the proliferation of humanity to ethnic sacrificial rites, migrations, hunting and farming activities, as well as daily dietary and living practices.",
        "audio": "videos/timage.mp4",
        "audioNote": "Peng Jilong documentary (to be supplemented)",
        "videoLink": "http://ich.nlc.cn/video/301"
      },
      {
        "category": "Hand-Waving Dance",
        "performer": "Zhang Mingguang, the Tujia ethnic person from Longshan, Hunan Province, is a representative inheritor of the Tujia Hand-Waving Dance, a national-level intangible cultural heritage project, and the 25th-generation master instructor of Hand-Waving Dance.",
        "description": "The Hand-Waving Dance, known in the Tujia language as \"Sheba\" or \"Shebagechi,\" means \"dance of reverence for deities\". It is a ritual dance. Its distinctive features include swinging hands, bending the waist, and flexing the knees. The body torsion drives the movement of hands. Its performances typically depict actions related to production and daily life, with hunting, farming, military activities, and social life serving as its primary themes. During the performance, singing, music, and dancing are seamlessly integrated, often accompanied by gongs, drums, and interwoven Hand-Waving songs. The most prominent characteristic of the Hand-Waving Dance lies in the simultaneous swinging of both hands and walking on both sides; the hand-swinging movements primarily consist of \"single swing,\" \"double swing,\" and \"spiral swing,\" with the core movement principles being \"progressive bending, knee flexion, tremor, and downward descent.\" The Hand-Waving Dance represents a spiritual heritage passed down through generations among the Tujia people, fulfilling various social functions including ritual worship, entertainment, education, and social interaction.",
        "audio": "videos/baishouwu.mp4",
        "audioNote": "Tujia Hand-Waving Dance",
        "videoLink": "http://ich.nlc.cn/video/5579"
      }
    ]
  },
  "people": {
    "sectionTitle": "People · Contemporary Tujia People",
    "sectionSubtitle": "People · Contemporary Tujia People",
    "description": "This documentary captures the Tujia people in their everyday lives, not as performers or intangible cultural heritage bearers, but as ordinary young people, small business owners, agricultural workers, or those left behind in rural communities.",
    "profiles": [
      {
        "name": "Peng Maolin",
        "age": "47 years old",
        "role": "Owner of a rural farmstay restaurant",
        "image": "images/people/pengmaolin.jpg",
        "quote": "I'm from Pengjiazhai. My wife comes from the neighboring village. This house is our own. I used to work away from home. I returned two years ago, because I couldn't keep up with the physical labor anymore and the elderly in our family were also in poor health, requiring care. Now I run the restaurant that's open in our stilted house. The main house is ideally located right near the entrance to the village. There's quite a lot of tourists. When tourists arrive, they often ask, 'Do the Tujia people still have any special traditions or customs?' Sometimes I follow the practices my grandfather taught me, slaughtering the New Year pig in the twelfth lunar month, making rice cakes, and singing celebratory songs. But to be honest, even when celebrating the New Year myself, I don't always follow every tradition in full. Nowadays, fewer people here actually slaughter the New Year pig or host a soup banquet. Some tourists simply come to see these events, turning them into a kind of 'tourist attraction.' The culture I understand may no longer consist of rigid 'rules' to be strictly followed, but rather something like a cultural backdrop or an instinct? For example, I still avoid saying anything considered unlucky during the first lunar month."
      },
      {
        "name": "Long Mei",
        "age": "32 years old",
        "role": "The Owner of a Small Supermarket",
        "image": "images/people/longmei.jpg",
        "quote": "My shop sells water, snacks, tissues, as well as some Tujia brocade placemats and small wallets, handmade by the women in our village. You might think this is about culture? But every day, all I deal with are 'money' and 'goods.' When tourists from other places come to buy the brocade, they always ask what the patterns mean. My mother once told me that one pattern represents 'Taitai Flower,' which brings protection to children. Now, when I explain these patterns, it's even more natural than just selling goods. My daughter is eight years old. When she comes home from school to help look after the shop, she'll point to the swastika and say, 'Mom, we see this in our art book too!' I trust my mother's words—during my menstrual period, I avoid touching any ritual objects, simply to feel at peace."
      },
      {
        "name": "Yang Chunxiu",
        "age": "49 years old",
        "role": "A stay-at-home woman",
        "image": "images/people/yangchunxiu.jpg",
        "quote": "Both my husband and son work away from home in Zhejiang. There are many women like me in our village. My life consists mainly of having three meals a day and observing traditional festivals. No matter how busy or tired I am, I never skip any of the ritual offerings required for these occasions. When my husband is away, I represent the family by lighting incense, setting out food, and burning paper offerings. I whisper to my ancestors, asking them to bless the people living outside with safety. I know that younger generations no longer believe in these practices. During a video call with my daughter, she said, ’Mom, your way of doing things is too complicated.’ Is it complicated? Yes, it is. But if I don’t follow it, a void fills my heart. The year before last, the grandmother from the next-door household passed away; according to tradition, all the women living nearby helped care for her, wiping her body and changing her clothes. Her personal garments were slowly burned rather than thrown away carelessly. Do you think this is part of our culture or mere superstition? To me, it’s simply a bond, a way for us Tujia people to show care and support for one another, from birth until death. Now that our village has become a tourist attraction. This tradition of care is still held tightly by those of us who remain here. It hasn’t been lost."
      },
      {
        "name": "Mr. Peng",
        "age": "68 years old",
        "role": "Farms the land while also overseeing ancient buildings",
        "image": "images/people/penglaohan.jpg",
        "quote": "Throughout my life, I have never left these mountains. In my youth, I learned how to build stilted houses from my parents and elders, using cedar wood for the slopes, with three pillars supporting four eaves, joined by mortise-and-tenon joints without a single iron nail. Nowadays, no one builds new houses anymore. My work has shifted to 'restoring old structures.' The Tourism Bureau provides funding and requires that the restoration should 'maintain the original appearance.' The ancestral traditions are all embedded in the wood, knowing which beams can be replaced and which tiles must be kept. I keep a detailed record in my mind. My wife has passed away. My daughter has married and moved away. She and her husband have opened a fairly large guesthouse at the village entrance. I still farm the land myself, so financially, everything is perfectly fine."
      }
    ]
  },
  "products": {
    "sectionTitle": "Cultural and Creative Products",
    "sectionSubtitle": "Cultural and Creative Products",
    "description": "Xilankapu represents the Tujia women's embroidery culture. In the eyes of Tujia women, every object and phenomenon possesses an element of beauty. These are all referred to as \"flowers.\" Even the most unremarkable household items are regarded as the most beautiful flowers. As a result, Xilankapu patterns feature a wide variety of everyday objects, such as rice cooker stands, chair motifs, etc. Through these designs, we can glimpse the lifestyle of the Tujia people across generations.",
    "softFabrics": {
      "title": "Soft Fabrics",
      "items": [
        {
          "name": "Placemat",
          "price": "RMB 22.00",
          "image": "images/products/soft1.jpg",
          "link": "https://item.taobao.com/item.htm?id=628063842837"
        },
        {
          "name": "Mousemat",
          "price": "RMB 22.00",
          "image": "images/products/soft2.jpg",
          "link": "https://item.taobao.com/item.htm?id=628063842837"
        },
        {
          "name": "Placemat",
          "price": "RMB 15.80",
          "image": "images/products/soft3.jpg",
          "link": "https://item.taobao.com/item.htm?id=675204951754"
        },
        {
          "name": "Placemat",
          "price": "RMB 38.00",
          "image": "images/products/soft4.jpg",
          "link": "https://item.taobao.com/item.htm?id=652347307170"
        },
        {
          "name": "Socks",
          "price": "RMB 12.80",
          "image": "images/products/soft5.jpg",
          "link": "https://item.taobao.com/item.htm?id=624728753988"
        },
        {
          "name": "Hand Bag",
          "price": "RMB 78.00",
          "image": "images/products/soft6.jpg",
          "link": "https://item.taobao.com/item.htm?id=971914888481"
        },
        {
          "name": "Hand Bag",
          "price": "RMB 698.00",
          "image": "images/products/soft7.jpg",
          "link": "https://item.taobao.com/item.htm?id=802307868244"
        },
        {
          "name": "Canvas Bag",
          "price": "RMB 128.00",
          "image": "images/products/soft8.jpg",
          "link": "https://item.taobao.com/item.htm?id=923194563111"
        },
        {
          "name": "Mask",
          "price": "RMB 38.00",
          "image": "images/products/soft9.jpg",
          "link": "https://item.taobao.com/item.htm?id=668139295069"
        },
        {
          "name": "Hand Bag",
          "price": "RMB 188.00",
          "image": "images/products/soft10.jpg",
          "link": "https://item.taobao.com/item.htm?id=1061891602674"
        },
        {
          "name": "Hand Bag",
          "price": "RMB 288.00",
          "image": "images/products/soft11.jpg",
          "link": "https://item.taobao.com/item.htm?id=1061671514287"
        },
        {
          "name": "Hand Bag",
          "price": "RMB 298.00",
          "image": "images/products/soft12.jpg",
          "link": "https://item.taobao.com/item.htm?id=1062875249228"
        },
        {
          "name": "Hand Bag",
          "price": "RMB 698.00",
          "image": "images/products/soft13.jpg",
          "link": "https://item.taobao.com/item.htm?id=854406983345"
        },
        {
          "name": "Hand Bag",
          "price": "RMB 100.00",
          "image": "images/products/soft14.jpg",
          "link": "https://item.taobao.com/item.htm?id=789696610540"
        },
        {
          "name": "Hand Bag",
          "price": "RMB 698.00",
          "image": "images/products/soft15.jpg",
          "link": "https://item.taobao.com/item.htm?id=789708686139"
        },
        {
          "name": "Hand Bag",
          "price": "RMB 798.00",
          "image": "images/products/soft16.jpg",
          "link": "https://item.taobao.com/item.htm?id=678078484549"
        },
        {
          "name": "Hand Bag",
          "price": "RMB 688.00",
          "image": "images/products/soft17.jpg",
          "link": "https://item.taobao.com/item.htm?id=1002842715965"
        },
        {
          "name": "Office Bag",
          "price": "RMB 298.00",
          "image": "images/products/soft18.jpg",
          "link": "https://item.taobao.com/item.htm?id=873848120160"
        }
      ]
    },
    "homeFurnishings": {
      "title": "Home Soft Furnishings",
      "items": [
        {
          "name": "Slippers",
          "price": "RMB 288.00",
          "image": "images/products/home1.jpg",
          "link": "https://item.taobao.com/item.htm?id=624528913455"
        },
        {
          "name": "Cushion",
          "price": "RMB 258.00",
          "image": "images/products/home2.jpg",
          "link": "https://item.taobao.com/item.htm?id=713611655993"
        },
        {
          "name": "Table Flag",
          "price": "RMB 398.00",
          "image": "images/products/home3.jpg",
          "link": "https://item.taobao.com/item.htm?id=929647215619"
        },
      ]
    },
    "stationery": {
      "title": "Stationery & Small Items",
      "items": [
        {
          "name": "Cup",
          "price": "RMB 58.00",
          "image": "images/products/stationery1.jpg",
          "link": "https://item.taobao.com/item.htm?id=623381950351"
        },
        {
          "name": "Rubber",
          "price": "RMB 15.00",
          "image": "images/products/stationery2.jpg",
          "link": "https://item.taobao.com/item.htm?id=667650847464"
        },
        {
          "name": "Data Cable",
          "price": "RMB 38.00",
          "image": "images/products/stationery3.jpg",
          "link": "https://item.taobao.com/item.htm?id=623616742631"
        },
        {
          "name": "Bookmark",
          "price": "RMB 29.00",
          "image": "images/products/stationery4.jpg",
          "link": "https://item.taobao.com/item.htm?id=1072291854006"
        },
        {
          "name": "Hair Band",
          "price": "RMB 128.00",
          "image": "images/products/stationery5.jpg",
          "link": "https://item.taobao.com/item.htm?id=1048313935673"
        }
      ]
    },
    "outdoor": {
      "title": "Outdoor & Lifestyle",
      "items": [
        {
          "name": "Cap",
          "price": "RMB 38.00",
          "image": "images/products/outdoor1.jpg",
          "link": "https://item.taobao.com/item.htm?id=654794513896"
        },
        {
          "name": "Folding Seat",
          "price": "RMB 7.50",
          "image": "images/products/outdoor2.jpg",
          "link": "https://item.taobao.com/item.htm?id=740207275006"
        },
        {
          "name": "Folding Seat",
          "price": "RMB 14.50",
          "image": "images/products/outdoor3.jpg",
          "link": "https://item.taobao.com/item.htm?id=718022547088"
        },
        {
          "name": "Picnic Blanket",
          "price": "RMB 15.80",
          "image": "images/products/outdoor4.jpg",
          "link": "https://item.taobao.com/item.htm?id=1055922485747"
        }
      ]
    }
  },
  "footer": {
    "text": "Staying Bifzixkar · A Living Archive of Tujia Culture"
  }
};



  let data = dataZh;



  const bilingualLabels = {

    '习俗 Customs': { zh: '习俗', en: 'Customs' },

    '节气 Solar Terms': { zh: '节气', en: 'Solar Terms' },

    '禁忌 Taboos': { zh: '禁忌', en: 'Taboos' },

    '建房讲究 Building': { zh: '建房讲究', en: 'Home Construction' },

    '婚丧仪式 Wedding & Funeral': { zh: '婚丧仪式', en: 'Wedding & Funeral' }

  };



  const navLabels = {

    projectBg: { zh: '项目背景', en: 'Culture' },

    cultureArchive: { zh: '文化档案', en: 'Culture Archive' },

    weave: { zh: '织·西兰卡普', en: 'Weave' },

    custom: { zh: '俗·习俗与禁忌', en: 'Custom' },

    customs: { zh: '习俗', en: 'Customs' },

    solarTerms: { zh: '节气', en: 'Solar Terms' },

    taboos: { zh: '禁忌', en: 'Taboos' },

    building: { zh: '建房讲究', en: 'Home Construction' },

    weddingFuneral: { zh: '婚丧仪式', en: 'Wedding & Funeral' },

    object: { zh: '物·日常器物', en: 'Object' },

    sound: { zh: '声·方言与歌', en: 'Sound' },

    people: { zh: '人·当代土家人', en: 'People' },

    products: { zh: '文创产品', en: 'Products' },

    softFabrics: { zh: '纺织织物', en: 'Soft Textiles' },

    homeFurnishings: { zh: '家居软装', en: 'Home D\u00e9cor' },

    stationery: { zh: '文具小物件', en: 'Stationery' },

    outdoor: { zh: '户外生活方式', en: 'Outdoor & Living' }

  };



  function renderNavLabels() {

    var lang = currentLang;

    document.querySelectorAll('[data-nav-key]').forEach(function(el) {

      var key = el.getAttribute('data-nav-key');

      if (navLabels[key]) {

        el.textContent = navLabels[key][lang];

      }

    });

  }



  /* ====== Auto Language Detection ====== */

  function detectLanguage() {

    var lang = (navigator.languages && navigator.languages[0]) || navigator.language || 'zh';

    if (lang && lang.toLowerCase().indexOf('zh') === 0) {

      currentLang = 'zh';

      data = dataZh;

    } else {

      currentLang = 'en';

      data = dataEn;

      var btn = document.getElementById('langSwitch');

      if (btn) btn.textContent = '中文';

    }

    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';

  }



  /* ====== Language Switch ====== */

  function initLangSwitch() {

    var btn = document.getElementById('langSwitch');

    if (!btn) return;

    btn.addEventListener('click', function() {

      if (currentLang === 'zh') {

        currentLang = 'en';

        data = dataEn;

        btn.textContent = '中文';

      } else {

        currentLang = 'zh';

        data = dataZh;

        btn.textContent = 'EN';

      }

      renderAll();

      // Re-init scroll spy after re-render

      initScrollSpy();

      initFadeIn();

      initModal();

    });

  }



  /* ====== Init ====== */

  function init() {

    try {

      detectLanguage();

      initLangSwitch();

      renderAll();

      initNavbar();

      initMobileNav();

      initBackToTop();

      initSmoothScroll();

      initScrollSpy();

      initFadeIn();

      initModal();

      setTimeout(function() {

        document.querySelectorAll('.fade-in:not(.visible)').forEach(function(el) {

          el.classList.add('visible');

        });

      }, 800);

    } catch (e) {

      console.error('Staying Bifzixkar init error:', e);

    }

  }



  /* ====== Render All ====== */

  function renderAll() {

    renderHero();

    renderProjectBg();

    renderCultureArchive();

    renderWeave();

    renderCustom();

    renderObjects();

    renderSounds();

    renderPeople();

    renderProducts();

    renderFooter();

    renderBilingualLabels();

    renderNavLabels();

    updatePageTitle();

  }



  /* ====== Hero ====== */

  function renderHero() {

    setText('[data-i18n="hero.title"]', data.hero.title);

    setText('[data-i18n="hero.subtitle"]', data.hero.subtitle);

    setText('[data-i18n="hero.description"]', data.hero.description);

    setText('[data-i18n="hero.cta1"]', data.hero.cta1);

    setText('[data-i18n="hero.cta2"]', data.hero.cta2);

    setText('[data-i18n="hero.cta3"]', data.hero.cta3);

  }



  /* ====== Project Background ====== */

  function renderProjectBg() {

    setText('[data-i18n="projectBg.sectionTitle"]', data.projectBg.sectionTitle);

    setText('[data-i18n="projectBg.sectionSubtitle"]', data.projectBg.sectionSubtitle);

    var imgContainer = document.getElementById('projectBgImage');

    if (imgContainer) {

      imgContainer.innerHTML = '';

      var img = document.createElement('img');

      img.src = resolveImg(data.projectBg.image, 'images/');

      img.alt = data.projectBg.sectionTitle;

      img.loading = 'lazy';

      img.onerror = function() { imgContainer.style.display = 'none'; };

      imgContainer.appendChild(img);

    }

    var content = document.getElementById('projectBgContent');

    if (content) {

      content.innerHTML = '';

      data.projectBg.paragraphs.forEach(function(text) {

        var p = document.createElement('p');

        p.className = 'project-bg-paragraph fade-in';

        p.textContent = text;

        content.appendChild(p);

      });

    }

  }



  /* ====== Culture Archive ====== */

  function renderCultureArchive() {

    setText('[data-i18n="cultureArchive.sectionTitle"]', data.cultureArchive.sectionTitle);

    setText('[data-i18n="cultureArchive.sectionSubtitle"]', data.cultureArchive.sectionSubtitle);

    var content = document.getElementById('cultureArchiveContent');

    if (content) {

      content.innerHTML = '';

      data.cultureArchive.paragraphs.forEach(function(text) {

        var p = document.createElement('p');

        p.className = 'culture-archive-paragraph fade-in';

        p.textContent = text;

        content.appendChild(p);

      });

    }

  }



  /* ====== Weave (Patterns) ====== */

  function renderWeave() {

    setText('[data-i18n="weave.sectionTitle"]', data.weave.sectionTitle);

    setText('[data-i18n="weave.sectionSubtitle"]', data.weave.sectionSubtitle);

    setText('[data-i18n="weave.description"]', data.weave.description);

    var grid = document.getElementById('patternGrid');

    if (!grid) return;

    grid.innerHTML = '';

    data.weave.patterns.forEach(function(pattern, index) {

      var card = document.createElement('div');

      card.className = 'pattern-card fade-in';

      card.dataset.index = index;

      var imageDiv = document.createElement('div');

      imageDiv.className = 'pattern-card-image';

      var img = document.createElement('img');

      img.src = resolveImg(pattern.image, 'images/weave/');

      img.alt = pattern.name;

      img.loading = 'lazy';

      img.onerror = function() { imageDiv.innerHTML = '<span class="placeholder-icon">&#x2726;</span>'; };

      imageDiv.appendChild(img);

      card.appendChild(imageDiv);

      var body = document.createElement('div');

      body.className = 'pattern-card-body';

      var nameEl = document.createElement('div');

      nameEl.className = 'pattern-card-name';

      nameEl.textContent = pattern.name;

      body.appendChild(nameEl);

      if (pattern.tujiaName) {

        var tujiaEl = document.createElement('div');

        tujiaEl.className = 'pattern-card-tujia';

        tujiaEl.textContent = pattern.tujiaName;

        body.appendChild(tujiaEl);

      }

      var symEl = document.createElement('div');

      symEl.className = 'pattern-card-symbolism';

      symEl.textContent = pattern.symbolism;

      body.appendChild(symEl);

      var moreEl = document.createElement('span');

      moreEl.className = 'pattern-card-more';

      moreEl.textContent = currentLang === 'zh' ? '查看详情 →' : 'View Details →';

      body.appendChild(moreEl);

      card.appendChild(body);

      card.addEventListener('click', function() { openPatternModal(index); });

      grid.appendChild(card);

    });

  }



  /* ====== Custom (Folkways) ====== */

  function renderCustom() {

    setText('[data-i18n="custom.sectionTitle"]', data.custom.sectionTitle);

    setText('[data-i18n="custom.sectionSubtitle"]', data.custom.sectionSubtitle);

    setText('[data-i18n="custom.description"]', data.custom.description);

    // Customs cards

    var customCards = document.getElementById('customCards');

    if (customCards) {

      customCards.innerHTML = '';

      data.custom.customs.forEach(function(c) {

        var card = document.createElement('div');

        card.className = 'custom-card fade-in';

        var h4 = document.createElement('h4');

        h4.textContent = c.title;

        card.appendChild(h4);

        if (c.subtitle) {

          var sub = document.createElement('div');

          sub.className = 'custom-subtitle';

          sub.textContent = c.subtitle;

          card.appendChild(sub);

        }

        var p = document.createElement('p');

        p.textContent = c.content;

        card.appendChild(p);

        customCards.appendChild(card);

      });

    }

    // Solar terms

    var solarContent = document.getElementById('solarContent');

    if (solarContent) {

      solarContent.innerHTML = data.custom.solarContent;

      solarContent.classList.add('fade-in');

    }

    // Taboos

    var tabooList = document.getElementById('tabooList');

    if (tabooList) {

      tabooList.innerHTML = '';

      data.custom.taboos.forEach(function(t) {

        var item = document.createElement('div');

        item.className = 'taboo-item fade-in';

        var h4 = document.createElement('h4');

        h4.textContent = t.title;

        item.appendChild(h4);

        var p = document.createElement('p');

        p.textContent = t.content;

        item.appendChild(p);

        tabooList.appendChild(item);

      });

    }

    // Building (建房讲究)

    var buildingContent = document.getElementById('buildingContent');

    if (buildingContent) {

      buildingContent.innerHTML = '';

      if (data.homeConstruction.image) {

        var imgWrap = document.createElement('div');

        imgWrap.className = 'home-image fade-in';

        var img = document.createElement('img');

        img.src = resolveImg(data.homeConstruction.image, 'images/');

        img.alt = data.homeConstruction.sectionTitle;

        img.loading = 'lazy';

        img.onerror = function() { imgWrap.style.display = 'none'; };

        imgWrap.appendChild(img);

        buildingContent.appendChild(imgWrap);

      }

      data.homeConstruction.paragraphs.forEach(function(text) {

        var p = document.createElement('p');

        p.className = 'home-paragraph fade-in';

        p.textContent = text;

        buildingContent.appendChild(p);

      });

      if (data.homeConstruction.subItems) {

        data.homeConstruction.subItems.forEach(function(sub) {

          var subDiv = document.createElement('div');

          subDiv.className = 'home-sub-item fade-in';

          var subTitle = document.createElement('h4');

          subTitle.className = 'home-sub-title';

          subTitle.textContent = sub.title;

          subDiv.appendChild(subTitle);

          if (sub.image) {

            var subImgWrap = document.createElement('div');

            subImgWrap.className = 'home-sub-image';

            var subImg = document.createElement('img');

            subImg.src = resolveImg(sub.image, 'images/');

            subImg.alt = sub.title;

            subImg.loading = 'lazy';

            subImg.onerror = function() { subImgWrap.style.display = 'none'; };

            subImgWrap.appendChild(subImg);

            subDiv.appendChild(subImgWrap);

          }

          var subP = document.createElement('p');

          subP.className = 'home-sub-paragraph';

          subP.textContent = sub.content;

          subDiv.appendChild(subP);

          buildingContent.appendChild(subDiv);

        });

      }

    }

    // Wedding & Funeral (婚丧仪式)

    var weddingContent = document.getElementById('weddingContent');

    if (weddingContent) {

      weddingContent.innerHTML = '';

      data.weddingFuneral.branches.forEach(function(branch) {

        var branchDiv = document.createElement('div');

        branchDiv.className = 'wf-branch fade-in';

        var branchTitle = document.createElement('h4');

        branchTitle.className = 'wf-branch-title';

        branchTitle.textContent = currentLang === 'zh' ? branch.title : branch.titleEn;

        branchDiv.appendChild(branchTitle);

        if (branch.image) {

          var branchImgWrap = document.createElement('div');

          branchImgWrap.className = 'wf-image';

          var branchImg = document.createElement('img');

          branchImg.src = resolveImg(branch.image, 'images/');

          branchImg.alt = currentLang === 'zh' ? branch.title : branch.titleEn;

          branchImg.loading = 'lazy';

          branchImg.onerror = function() { branchImgWrap.style.display = 'none'; };

          branchImgWrap.appendChild(branchImg);

          branchDiv.appendChild(branchImgWrap);

        }

        var p = document.createElement('p');

        p.className = 'wf-paragraph fade-in';

        p.textContent = branch.content;

        branchDiv.appendChild(p);

        weddingContent.appendChild(branchDiv);

      });

    }

  }



  /* ====== Objects ====== */

  function renderObjects() {

    setText('[data-i18n="object.sectionTitle"]', data.object.sectionTitle);

    setText('[data-i18n="object.sectionSubtitle"]', data.object.sectionSubtitle);

    setText('[data-i18n="object.description"]', data.object.description);

    var grid = document.getElementById('objectGrid');

    if (!grid) return;

    grid.innerHTML = '';

    data.object.items.forEach(function(item, index) {

      var card = document.createElement('div');

      card.className = 'object-card fade-in';

      card.style.cursor = 'pointer';

      var imageDiv = document.createElement('div');

      imageDiv.className = 'object-card-image';

      var img = document.createElement('img');

      img.src = resolveImg(item.image, 'images/object/');

      img.alt = item.name;

      img.loading = 'lazy';

      img.onerror = function() { imageDiv.innerHTML = '<span class="placeholder-icon">&#x2606;</span>'; };

      imageDiv.appendChild(img);

      card.appendChild(imageDiv);

      var nameEl = document.createElement('div');

      nameEl.className = 'object-card-name';

      nameEl.textContent = item.name;

      card.appendChild(nameEl);

      // Detail fields - each on a separate line

      var detailsDiv = document.createElement('div');

      detailsDiv.className = 'object-card-details';

      if (item.usage) {

        var usageRow = document.createElement('div');

        usageRow.className = 'object-detail-row';

        var usageLabel = document.createElement('span');

        usageLabel.className = 'object-detail-label';

        usageLabel.textContent = currentLang === 'zh' ? '用途：' : 'Usage: ';

        var usageValue = document.createElement('span');

        usageValue.className = 'object-detail-value';

        usageValue.textContent = item.usage;

        usageRow.appendChild(usageLabel);

        usageRow.appendChild(usageValue);

        detailsDiv.appendChild(usageRow);

      }

      if (item.location) {

        var locRow = document.createElement('div');

        locRow.className = 'object-detail-row';

        var locLabel = document.createElement('span');

        locLabel.className = 'object-detail-label';

        locLabel.textContent = currentLang === 'zh' ? '摆放位置：' : 'Location: ';

        var locValue = document.createElement('span');

        locValue.className = 'object-detail-value';

        locValue.textContent = item.location;

        locRow.appendChild(locLabel);

        locRow.appendChild(locValue);

        detailsDiv.appendChild(locRow);

      }

      if (item.status) {

        var statusRow = document.createElement('div');

        statusRow.className = 'object-detail-row';

        var statusLabel = document.createElement('span');

        statusLabel.className = 'object-detail-label';

        statusLabel.textContent = currentLang === 'zh' ? '使用情况：' : 'Status: ';

        var statusValue = document.createElement('span');

        statusValue.className = 'object-detail-value';

        var isInUse = item.status.includes('在用') || item.status.toLowerCase().includes('in use');

        statusValue.className += isInUse ? ' status-in-use' : ' status-not-in-use';

        statusValue.textContent = item.status;

        statusRow.appendChild(statusLabel);

        statusRow.appendChild(statusValue);

        detailsDiv.appendChild(statusRow);

      }

      card.appendChild(detailsDiv);

      var moreEl = document.createElement('span');

      moreEl.className = 'object-card-more';

      moreEl.textContent = currentLang === 'zh' ? '查看详情 →' : 'View Details →';

      card.appendChild(moreEl);

      card.addEventListener('click', function() { openObjectModal(index); });

      grid.appendChild(card);

    });

  }



  /* ====== Sounds ====== */

  function renderSounds() {

    setText('[data-i18n="sound.sectionTitle"]', data.sound.sectionTitle);

    setText('[data-i18n="sound.sectionSubtitle"]', data.sound.sectionSubtitle);

    setText('[data-i18n="sound.description"]', data.sound.description);

    var list = document.getElementById('soundList');

    if (!list) return;

    list.innerHTML = '';

    data.sound.entries.forEach(function(entry) {

      var card = document.createElement('div');

      card.className = 'sound-card fade-in';

      var catEl = document.createElement('div');

      catEl.className = 'sound-card-category';

      catEl.textContent = entry.category;

      card.appendChild(catEl);

      if (entry.performer) {

        var perfEl = document.createElement('div');

        perfEl.className = 'sound-card-performer';

        perfEl.textContent = entry.performer;

        card.appendChild(perfEl);

      }

      var descEl = document.createElement('div');

      descEl.className = 'sound-card-description';

      descEl.textContent = entry.description;

      card.appendChild(descEl);

      var mediaDiv = document.createElement('div');

      mediaDiv.className = 'sound-card-media';

      if (entry.videoLink) {

        var linkBtn = document.createElement('a');

        linkBtn.className = 'sound-video-btn';

        linkBtn.href = entry.videoLink;

        linkBtn.target = '_blank';

        linkBtn.rel = 'noopener noreferrer';

        linkBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>'

          + '<span>' + (currentLang === 'zh' ? '观看视频' : 'Watch Video') + '</span>';

        mediaDiv.appendChild(linkBtn);

        if (entry.audioNote) {

          var note = document.createElement('span');

          note.className = 'media-placeholder';

          note.textContent = entry.audioNote;

          mediaDiv.appendChild(note);

        }

      } else if (entry.audio) {

        var video = document.createElement('video');

        video.controls = true;

        video.preload = 'metadata';

        video.innerHTML = '<source src="' + entry.audio + '">';

        mediaDiv.appendChild(video);

        if (entry.audioNote) {

          var note = document.createElement('span');

          note.className = 'media-placeholder';

          note.textContent = entry.audioNote;

          mediaDiv.appendChild(note);

        }

      } else {

        var note = document.createElement('span');

        note.className = 'media-placeholder';

        note.textContent = entry.audioNote || (currentLang === 'zh' ? '暂无音视频资料' : 'No audio/video available');

        mediaDiv.appendChild(note);

      }

      card.appendChild(mediaDiv);

      list.appendChild(card);

    });

  }



  /* ====== People ====== */

  function renderPeople() {

    setText('[data-i18n="people.sectionTitle"]', data.people.sectionTitle);

    setText('[data-i18n="people.sectionSubtitle"]', data.people.sectionSubtitle);

    setText('[data-i18n="people.description"]', data.people.description);

    var grid = document.getElementById('peopleGrid');

    if (!grid) return;

    grid.innerHTML = '';

    data.people.profiles.forEach(function(profile) {

      var card = document.createElement('div');

      card.className = 'people-card fade-in';

      // Skip image area — no person photos available

      var body = document.createElement('div');

      body.className = 'people-card-body';

      var nameEl = document.createElement('div');

      nameEl.className = 'people-card-name';

      nameEl.textContent = profile.name + (profile.age ? ' · ' + profile.age : '');

      body.appendChild(nameEl);

      var roleEl = document.createElement('div');

      roleEl.className = 'people-card-role';

      roleEl.textContent = profile.role;

      body.appendChild(roleEl);

      var quoteEl = document.createElement('div');

      quoteEl.className = 'people-card-quote';

      quoteEl.textContent = profile.quote;

      body.appendChild(quoteEl);

      card.appendChild(body);

      grid.appendChild(card);

    });

  }



  /* ====== Products (4 sub-grids) ====== */

  function renderProducts() {

    setText('[data-i18n="products.sectionTitle"]', data.products.sectionTitle);

    setText('[data-i18n="products.sectionSubtitle"]', data.products.sectionSubtitle);

    setText('[data-i18n="products.description"]', data.products.description);

    // Category titles

    setText('[data-i18n="products.softFabrics.title"]', data.products.softFabrics.title);

    setText('[data-i18n="products.homeFurnishings.title"]', data.products.homeFurnishings.title);

    setText('[data-i18n="products.stationery.title"]', data.products.stationery.title);

    setText('[data-i18n="products.outdoor.title"]', data.products.outdoor.title);

    // Render 4 sub-grids

    renderProductGrid('productSoftGrid', data.products.softFabrics.items);

    renderProductGrid('productHomeGrid', data.products.homeFurnishings.items);

    renderProductGrid('productStationeryGrid', data.products.stationery.items);

    renderProductGrid('productOutdoorGrid', data.products.outdoor.items);

  }



  function renderProductGrid(gridId, items) {

    var grid = document.getElementById(gridId);

    if (!grid) return;

    grid.innerHTML = '';

    items.forEach(function(product) {

      var card = document.createElement('div');

      card.className = 'product-card fade-in';

      card.style.cursor = 'pointer';

      var imageDiv = document.createElement('div');

      imageDiv.className = 'product-card-image';

      var img = document.createElement('img');

      img.src = resolveImg(product.image, 'images/products/');

      img.alt = product.name;

      img.loading = 'lazy';

      img.onerror = function() { imageDiv.innerHTML = '<span class="placeholder-icon">&#x2606;</span>'; };

      imageDiv.appendChild(img);

      card.appendChild(imageDiv);

      var body = document.createElement('div');

      body.className = 'product-card-body';

      var nameEl = document.createElement('div');

      nameEl.className = 'product-card-name';

      nameEl.textContent = product.name;

      body.appendChild(nameEl);

      var priceEl = document.createElement('div');

      priceEl.className = 'product-card-price';

      priceEl.textContent = product.price;

      body.appendChild(priceEl);

      if (product.link) {

        card.addEventListener('click', function() { window.open(product.link, '_blank'); });

      } else {

        card.addEventListener('click', function() {

          alert(currentLang === 'zh' ? '购买链接即将上线，敬请期待！' : 'Purchase link coming soon!');

        });

      }

      card.appendChild(body);

      grid.appendChild(card);

    });

  }



  /* ====== Footer ====== */

  function renderFooter() {

    setText('[data-i18n="footer.text"]', data.footer.text);

  }



  /* ====== Bilingual Labels ====== */

  function renderBilingualLabels() {

    document.querySelectorAll('[data-i18n-label]').forEach(function(el) {

      var key = el.getAttribute('data-i18n-label');

      if (bilingualLabels[key]) {

        el.textContent = bilingualLabels[key][currentLang];

      }

    });

  }



  /* ====== Page Title ====== */

  function updatePageTitle() {

    if (currentLang === 'zh') {

      document.title = 'Staying Bifzixkar · 一部活着的土家族文化档案';

      document.documentElement.lang = 'zh-CN';

    } else {

      document.title = 'Staying Bifzixkar · A Living Archive of Tujia Culture';

      document.documentElement.lang = 'en';

    }

  }



  /* ====== Utility ====== */

  function setText(selector, text) {

    var el = document.querySelector(selector);

    if (el && text !== undefined && text !== null) {

      el.textContent = text;

    }

  }



  // Resolve image path: if value has no '/', prepend subdirectory

  function resolveImg(val, subdir) {

    if (!val) return '';

    return val.indexOf('/') >= 0 ? val : subdir + val;

  }



  /* ====== Navbar Scroll ====== */

  function initNavbar() {

    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {

      if (window.scrollY > 80) {

        navbar.classList.add('scrolled');

      } else {

        navbar.classList.remove('scrolled');

      }

    });

  }



  /* ====== Mobile Nav ====== */

  function initMobileNav() {

    var toggle = document.getElementById('navToggle');

    var links = document.getElementById('navLinks');

    if (!toggle || !links) return;

    toggle.addEventListener('click', function() {

      toggle.classList.toggle('active');

      links.classList.toggle('active');

    });

    links.addEventListener('click', function(e) {

      if (e.target.tagName === 'A') {

        toggle.classList.remove('active');

        links.classList.remove('active');

      }

    });

  }



  /* ====== Back to Top ====== */

  function initBackToTop() {

    var btn = document.getElementById('backToTop');

    if (!btn) return;

    window.addEventListener('scroll', function() {

      if (window.scrollY > 400) {

        btn.classList.add('visible');

      } else {

        btn.classList.remove('visible');

      }

    });

    btn.addEventListener('click', function() {

      window.scrollTo({ top: 0, behavior: 'smooth' });

    });

  }



  /* ====== Smooth Scroll ====== */

  function initSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {

      anchor.addEventListener('click', function(e) {

        e.preventDefault();

        var targetId = this.getAttribute('href').substring(1);

        var target = document.getElementById(targetId);

        if (target) {

          var offset = 80;

          var top = target.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({ top: top, behavior: 'smooth' });

        }

      });

    });

  }



  /* ====== Scroll Spy ====== */

  function initScrollSpy() {

    var sections = document.querySelectorAll('section[id], .custom-subsection[id], .product-subsection[id]');

    var navLinks = document.querySelectorAll('#navLinks a[data-section]');

    function onScroll() {

      var scrollPos = window.scrollY + 120;

      sections.forEach(function(section) {

        var top = section.offsetTop;

        var height = section.offsetHeight;

        var id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {

          navLinks.forEach(function(link) {

            link.classList.remove('active');

            if (link.dataset.section === id) {

              link.classList.add('active');

            }

          });

        }

      });

    }

    window.addEventListener('scroll', onScroll);

    onScroll();

  }



  /* ====== Fade-in ====== */

  function initFadeIn() {

    var elements = document.querySelectorAll('.fade-in');

    if ('IntersectionObserver' in window) {

      var observer = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add('visible');

            observer.unobserve(entry.target);

          }

        });

      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      elements.forEach(function(el) { observer.observe(el); });

    } else {

      elements.forEach(function(el) { el.classList.add('visible'); });

    }

  }



  /* ====== Pattern Modal ====== */

  function initModal() {

    var modal = document.getElementById('patternModal');

    if (!modal) return;

    var closeBtn = document.getElementById('modalClose');

    var overlay = modal.querySelector('.modal-overlay');

    closeBtn.addEventListener('click', closePatternModal);

    overlay.addEventListener('click', closePatternModal);

    document.addEventListener('keydown', function(e) {

      if (e.key === 'Escape') {

        if (modal.classList.contains('active')) closePatternModal();

        var lb = document.getElementById('lightbox');

        if (lb && lb.classList.contains('active')) closeLightbox();

      }

    });

  }



  function openPatternModal(index) {

    var pattern = data.weave.patterns[index];

    var modal = document.getElementById('patternModal');

    var body = document.getElementById('modalBody');

    body.innerHTML = '';

    var h3 = document.createElement('h3');

    h3.textContent = pattern.name;

    body.appendChild(h3);

    if (pattern.nameEn && pattern.nameEn !== pattern.name) {

      var enName = document.createElement('p');

      enName.style.cssText = 'font-size:0.95rem;color:#666;margin-bottom:8px;';

      enName.textContent = pattern.nameEn;

      body.appendChild(enName);

    }

    if (pattern.tujiaName) {

      var tujia = document.createElement('div');

      tujia.className = 'modal-tujia';

      tujia.textContent = pattern.tujiaName;

      body.appendChild(tujia);

    }

    if (pattern.image) {

      var imgWrap = document.createElement('div');

      imgWrap.style.cssText = 'position:relative;width:100%;padding-bottom:66.67%;border-radius:8px;margin:20px 0;background:#f5f0e8;overflow:hidden;';

      var img = document.createElement('img');

      img.src = resolveImg(pattern.image, 'images/weave/');

      img.alt = pattern.name;

      img.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;cursor:zoom-in;';

      img.onclick = function() { openLightbox(resolveImg(pattern.image, 'images/weave/')); };

      img.onerror = function() {

        imgWrap.innerHTML = '<div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#999;font-size:0.9rem;">' + (currentLang === 'zh' ? '图片待上传' : 'Image pending') + '</div>';

      };

      imgWrap.appendChild(img);

      body.appendChild(imgWrap);

    }

    var symTitle = document.createElement('div');

    symTitle.className = 'modal-section-title';

    symTitle.textContent = currentLang === 'zh' ? '象征寓意' : 'Symbolism';

    body.appendChild(symTitle);

    var symP = document.createElement('p');

    symP.textContent = pattern.symbolism;

    body.appendChild(symP);

    var histTitle = document.createElement('div');

    histTitle.className = 'modal-section-title';

    histTitle.textContent = currentLang === 'zh' ? '口述历史' : 'Oral History';

    body.appendChild(histTitle);

    var histP = document.createElement('p');

    histP.textContent = pattern.oralHistory;

    body.appendChild(histP);

    modal.classList.add('active');

    document.body.style.overflow = 'hidden';

  }



  function closePatternModal() {

    var modal = document.getElementById('patternModal');

    if (modal) {

      modal.classList.remove('active');

      document.body.style.overflow = '';

    }

  }



  function openObjectModal(index) {

    var item = data.object.items[index];

    var modal = document.getElementById('patternModal');

    var body = document.getElementById('modalBody');

    body.innerHTML = '';

    var h3 = document.createElement('h3');

    h3.textContent = item.name;

    body.appendChild(h3);

    if (item.image) {

      var imgWrap = document.createElement('div');

      imgWrap.style.cssText = 'position:relative;width:100%;padding-bottom:66.67%;border-radius:8px;margin:20px 0;background:#f5f0e8;overflow:hidden;';

      var img = document.createElement('img');

      img.src = resolveImg(item.image, 'images/object/');

      img.alt = item.name;

      img.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;cursor:zoom-in;';

      img.onclick = function() { openLightbox(resolveImg(item.image, 'images/object/')); };

      img.onerror = function() {

        imgWrap.innerHTML = '<div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#999;font-size:0.9rem;">' + (currentLang === 'zh' ? '图片待上传' : 'Image pending') + '</div>';

      };

      imgWrap.appendChild(img);

      body.appendChild(imgWrap);

    }

    var fields = [

      { label: currentLang === 'zh' ? '用途' : 'Usage', value: item.usage },

      { label: currentLang === 'zh' ? '摆放位置' : 'Location', value: item.location },

      { label: currentLang === 'zh' ? '使用情况' : 'Status', value: item.status }

    ];

    fields.forEach(function(field) {

      if (field.value) {

        var title = document.createElement('div');

        title.className = 'modal-section-title';

        title.textContent = field.label;

        body.appendChild(title);

        var p = document.createElement('p');

        p.textContent = field.value;

        body.appendChild(p);

      }

    });

    modal.classList.add('active');

    document.body.style.overflow = 'hidden';

  }



  /* ====== Lightbox ====== */

  function openLightbox(src) {

    var lb = document.getElementById('lightbox');

    var img = document.getElementById('lightboxImg');

    if (lb && img) {

      img.src = src;

      lb.classList.add('active');

    }

  }

  function closeLightbox() {

    var lb = document.getElementById('lightbox');

    if (lb) lb.classList.remove('active');

  }

  var _lbEl = document.getElementById('lightbox');

  if (_lbEl) {

    _lbEl.addEventListener('click', function(e) {

      if (e.target === this || e.target.id === 'lightboxImg') closeLightbox();

    });

  }



  /* ====== Start ====== */

  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', init);

  } else {

    init();

  }

})();

