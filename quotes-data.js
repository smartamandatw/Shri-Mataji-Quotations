/* ===========================================================
   靈性語錄 共用資料來源
   index.html 與各篇語錄頁面都讀取這份檔案。
   日後新增／修改標題、標籤、日期，只需要改這裡一個地方，
   首頁清單、篩選標籤、單頁的標籤顯示都會自動同步。

   新增一篇語錄時，複製下面任一組物件，貼在陣列最後，
   依實際內容修改各欄位即可：
     id          唯一識別碼，通常等於檔名（不含 .html）
     file        實際的 html 檔名
     zhTitle     中文標題
     enTitle     英文標題
     date        日期（YYYY.MM.DD，若只知道年份就填 YYYY，不確定可留空字串）
     tags        標籤陣列，中文
     spotlightZh 首頁「專屬於你的今日靈性滋養」隨機摘句（中）
     spotlightEn 同上（英）
   =========================================================== */
const QUOTES_DATA = [
  {
    id: "19780408_On the Eyes and the Agnya Chakra",
    file: "19780408_On the Eyes and the Agnya Chakra.html",
    zhTitle: "清澈之眼",
    enTitle: "On the Eyes and the Agnya Chakra",
    date: "1978.04.08",
    tags: ["額輪", "眼睛", "靈體"],
    spotlightZh: "眼睛應該絕對地清澈，只朝外流動，不從他人那裡接收任何東西進入眼睛。",
    spotlightEn: "Eyes should be absolutely clear, going outward, not receiving anything into the eyes from others."
  },
  {
    id: "19800927_Let's Pay Attention to Our Spiritual Life",
    file: "19800927_Let's Pay Attention to Our Spiritual Life.html",
    zhTitle: "靈性優先",
    enTitle: "Let's Pay Attention to Our Spiritual Life",
    date: "1980.09.27",
    tags: ["物質", "惰性", "自我"],
    spotlightZh: "如果你習慣坐椅子，你就無法坐在地上；如果你習慣了舒適的生活，你就再也過不了不舒適的生活。物質，就是這樣在不知不覺間奴役著你。",
    spotlightEn: "If you use a chair then you cannot sit on the ground. If you are used to a comfortable life, you cannot live in an uncomfortable life. Sort of it slaves you."
  },
  {
    id: "19801116_The Banner of New Age",
    file: "19801116_The Banner of New Age.html",
    zhTitle: "新時代的旗幟",
    enTitle: "The Banner of New Age",
    date: "1980.11.16",
    tags: ["覺醒", "轉化", "光"],
    spotlightZh: "就像一棵樹，當它盛開時，花朵的香氣會在周圍形成一種獨特的氛圍，吸引所有的蜜蜂前來採蜜。",
    spotlightEn: "Like a tree, when it is blossoming, the fragrance of the blossom creates a different type of aura around itself such that it attracts all the bees around to gather the honey."
  },
  {
    id: "19801130_It's An Actualization",
    file: "19801130_It's An Actualization.html",
    zhTitle: "親身的實證",
    enTitle: "It's An Actualization",
    date: "1980.11.30",
    tags: ["集體意識", "心", "靈"],
    spotlightZh: "棲息在那顆心裡、在那心蓮之中的，是你的靈，是你的阿特瑪。",
    spotlightEn: "What resides in that heart, in the lotus of that heart is your Spirit, is your Atma."
  },
  {
    id: "19810406_It Depends on What Sort of Runway You Have",
    file: "19810406_It Depends on What Sort of Runway You Have.html",
    zhTitle: "覺醒的跑道",
    enTitle: "It Depends on What Sort of Runway You Have",
    date: "1981.04.06",
    tags: ["昆達里尼", "覺醒", "跑道"],
    spotlightZh: "你開始看見覺醒，或者說，感覺到覺醒。但這一切發生得非常快，只在一瞬之間，快到有時候你什麼都沒察覺，只感覺到一股清涼的微風開始在你身體裡流動。",
    spotlightEn: "You just start seeing the awakening, or you can say, feel the awakening. But it is such a quick thing, a split of a second, that sometimes you miss everything except that you see the cool breeze has started flowing through you."
  },
  {
    id: "19821101_The Time Has Come",
    file: "19821101_The Time Has Come.html",
    zhTitle: "時候已經到了",
    enTitle: "The Time Has Come",
    date: "1982.11.01",
    tags: ["抉擇", "恩典", "物質"],
    spotlightZh: "你要嘛，過著一種在物質層面上奢華的生活；要嘛，過著一種充滿神恩寵的、真正富足的生活。這兩者，你必須擇一而行。",
    spotlightEn: "Either you lead a life which is luxurious on the material level or you lead a luxurious life of God's blessings. One of these two you have to choose."
  },
  {
    id: "19830512_Wisdom",
    file: "19830512_Wisdom.html",
    zhTitle: "智慧",
    enTitle: "Wisdom",
    date: "1983.05.12",
    tags: ["智慧", "才智", "明辨"],
    spotlightZh: "要明白，智慧高於才智，明辨高於爭辯。",
    spotlightEn: "Understand that wisdom is higher than intellect and discretion is higher than debating."
  },
  {
    id: "19840710_Truth Not Ego",
    file: "19840710_Truth Not Ego.html",
    zhTitle: "真理，不是自我",
    enTitle: "Truth Not Ego",
    date: "1984.07.10",
    tags: ["真理", "自我", "才智"],
    spotlightZh: "覺醒之後，來到你面前的真理，才是真正純粹的真理，而不是你的自我。",
    spotlightEn: "After Realization, the truth that comes to you is the real, pure truth and is not your ego."
  },
  {
    id: "19850329_The Realisation Is Just, to Begin With",
    file: "19850329_The Realisation Is Just, to Begin With.html",
    zhTitle: "覺醒只是開始",
    enTitle: "The Realisation Is Just, to Begin With",
    date: "1985.03.29",
    tags: ["覺醒", "謙卑", "救贖"],
    spotlightZh: "如果你想要成為更偉大的人，就先讓自己謙卑下來。謙卑，是非常非常重要的。",
    spotlightEn: "If you have to be something greater humble down yourself. Humbling down is very very important."
  },
  {
    id: "19851215_Let's Do It Together",
    file: "19851215_Let's Do It Together.html",
    zhTitle: "同心協力",
    enTitle: "Let's Do It Together",
    date: "1985.12.15",
    tags: ["合作", "集體", "善意"],
    spotlightZh: "這不是關於個人的興旺，而是需要大家齊心協力，帶著合作、愛、友誼，以及對所有人的善意，共同完成的集體事業。",
    spotlightEn: "It's not about individual prosperity, it's collective work to be done together with cooperation, love, friendship and benevolence for all."
  },
  {
    id: "19851231_Three Mantras",
    file: "19851231_Three Mantras.html",
    zhTitle: "三句箴言",
    enTitle: "Three Mantras",
    date: "1985.12.31",
    tags: ["喜悅", "無念", "臣服"],
    spotlightZh: "在情緒上，你應該洋溢著喜悅——喜悅，就是你的情緒。在行動上，你應該保持無念；在提升的過程中，你應該保持臣服。",
    spotlightEn: "In emotions you should be bubbling with joy. Joy is your emotion. In action you should be thoughtless and in ascent you should be surrendered."
  },
  {
    id: "19891008_The Content Within Us",
    file: "19891008_The Content Within Us.html",
    zhTitle: "我們內在的內涵",
    enTitle: "The Content Within Us",
    date: "1989.10.08",
    tags: ["內涵", "生命能量", "溫柔謙遜"],
    spotlightZh: "那麼，重點究竟是什麼？非常重要的一點——是我們內在的內涵。我們內在擁有什麼，這才是重點。這一切都是我們內在所擁有的外在表現……所以，我們內在的內涵，是我們必須去看見的。",
    spotlightEn: "Then what is it? Very important – it's the content within us. What do we have within us is the point."
  },
  {
    id: "19901212_The Divine Logic",
    file: "19901212_The Divine Logic.html",
    zhTitle: "神聖的邏輯",
    enTitle: "The Divine Logic",
    date: "1990.12.12",
    tags: ["神聖的邏輯", "Brahmachaitanya", "生命能量"],
    spotlightZh: "你所在的，是無所不在的生命能量(Brahmachaitanya)運作的層次，而它有它自己的邏輯。所以，不要試圖用邏輯去解決任何事情。",
    spotlightEn: "You are at a level where Brahmachaitanya works, and it has its own logic. So do not try to resolve anything by logic."
  },
  {
    id: "19920303_You Get the Answer on Your Finger-tips",
    file: "19920303_You Get the Answer on Your Finger-tips.html",
    zhTitle: "答案就在指尖",
    enTitle: "You Get the Answer on Your Finger-tips",
    date: "1992.03.03",
    tags: ["注意力", "無疑惑的境界", "生命能量"],
    spotlightZh: "這份注意力，無論你放在哪裡，就像遙控器一樣，都會發揮效用。",
    spotlightEn: "This attention, wherever you put it, like a remote control it works."
  },
  {
    id: "19940724_Truth Is Love",
    file: "19940724_Truth Is Love.html",
    zhTitle: "真理即是愛",
    enTitle: "Truth Is Love",
    date: "1994.07.24",
    tags: ["真理", "愛", "頂輪"],
    spotlightZh: "而當真理真正進來的那一刻，你會驚訝地發現：真理就是愛，愛就是真理，是純粹的愛。",
    spotlightEn: "And when the truth comes in, you are surprised that truth is love and love is truth, pure love."
  },
  {
    id: "19941002_The Spirit Enlightens the Brain",
    file: "19941002_The Spirit Enlightens the Brain.html",
    zhTitle: "頭腦受靈所啟迪",
    enTitle: "The Spirit Enlightens the Brain",
    date: "1994.10.02",
    tags: ["靈", "覺悟", "臣服"],
    spotlightZh: "頭腦完全臣服於靈，於是靈便照亮了頭腦。",
    spotlightEn: "The brain gets surrendered completely to the Spirit, so that the Spirit enlightens the brain."
  },
  {
    id: "1996_The Greatest Truths for a Sahaja Yogi",
    file: "1996_The Greatest Truths for a Sahaja Yogi.html",
    zhTitle: "至高真理",
    enTitle: "The Greatest Truths for a Sahaja Yogi",
    date: "1996",
    tags: ["自我", "集體意識", "信心"],
    spotlightZh: "對一位霎哈嘉瑜伽士而言，最大的損失是什麼？在心中失去母親的形象。",
    spotlightEn: "What is the greatest loss for a Sahaja Yogi? To lose the image of Mother in your heart."
  },
  {
    id: "20000912_A Cleansing Force",
    file: "20000912_A Cleansing Force.html",
    zhTitle: "淨化的力量",
    enTitle: "A Cleansing Force",
    date: "2000.09.12",
    tags: ["昆達里尼", "純淨", "靈"],
    spotlightZh: "這是因為人類仍處於無知之中——但一旦他們知道自己真正是什麼，他們會驚訝於自己：原來他們是純淨的靈！",
    spotlightEn: "It is because human beings are ignorant – but once they know what they are, they'll be surprised at themselves: they are pure Spirit!"
  },
  {
    id: "20010321_Shuddha-Iccha",
    file: "20010321_Shuddha-Iccha.html",
    zhTitle: "純潔的欲望",
    enTitle: "Shuddha-Iccha",
    date: "2001.03.21",
    tags: ["純潔的欲望", "昆達里尼", "左脈"],
    spotlightZh: "它有一種特質，就是無論你做什麼，都會反彈回到你自己身上。唯有靈性上的成長不會如此。它會綻放，它芬芳，它美麗。與自己同在，是如此美好的一種體驗，彷彿你走進了一座美麗的天堂花園。",
    spotlightEn: "It has a quality that whatever you do, repels back on you. Only the spiritual growth does not. It flowers, it is fragrant, it is beautiful."
  },
  {
    id: "Flirting Gives Home to Spirits",
    file: "Flirting Gives Home to Spirits.html",
    zhTitle: "眉來眼去，靈體棲身",
    enTitle: "Flirting Gives Home to Spirits",
    date: "",
    tags: ["額輪", "調情", "集體潛意識"],
    spotlightZh: "現代社會並不把調情視為一種惡習，但事實上，沒有什麼比這個習慣更具傷害性了。",
    spotlightEn: "Modern society does not regard flirting as a vice, but nothing is more grievously harmful than this habit."
  }
];
