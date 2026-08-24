// 台灣測試資料產生器 - 地址資料
// 包含台灣各县市、行政區與對應郵遞區號，以及隨機組合用的路名詞彙表。
// 註：郵遞區號為各行政區代表碼，地址為隨機組合，不保證為真實門牌。

const ADDRESS_DATA = {
  counties: [
    { name: '臺北市', letter: 'A', region: '北部', districts: [
      { name: '中正區', postal: '100' }, { name: '大同區', postal: '103' },
      { name: '中山區', postal: '104' }, { name: '松山區', postal: '105' },
      { name: '大安區', postal: '106' }, { name: '萬華區', postal: '108' },
      { name: '信義區', postal: '110' }, { name: '士林區', postal: '111' },
      { name: '北投區', postal: '112' }, { name: '文山區', postal: '116' }
    ]},
    { name: '新北市', letter: 'F', region: '北部', districts: [
      { name: '板橋區', postal: '220' }, { name: '三重區', postal: '221' },
      { name: '永和區', postal: '234' }, { name: '中和區', postal: '235' },
      { name: '土城區', postal: '236' }, { name: '三峽區', postal: '237' },
      { name: '樹林區', postal: '238' }, { name: '鶯歌區', postal: '239' },
      { name: '烏山區', postal: '233' }, { name: '新店區', postal: '231' },
      { name: '深坑區', postal: '222' }, { name: '汐止區', postal: '226' },
      { name: '泰山區', postal: '245' }, { name: '淡水區', postal: '251' },
      { name: '八里區', postal: '255' }, { name: '林口區', postal: '244' }
    ]},
    { name: '桃園市', letter: 'H', region: '中部', districts: [
      { name: '中壢區', postal: '320' }, { name: '桃園區', postal: '330' },
      { name: '蘆竹區', postal: '325' }, { name: '平鎮區', postal: '324' },
      { name: '龍潭區', postal: '325' }, { name: '大溪區', postal: '321' },
      { name: '八德區', postal: '334' }, { name: '龜山區', postal: '333' },
      { name: '大園區', postal: '337' }, { name: '楊梅區', postal: '326' },
      { name: '觀音區', postal: '327' }, { name: '石門區', postal: '328' }
    ]},
    { name: '臺中市', letter: 'B', region: '中部', districts: [
      { name: '中西區', postal: '400' }, { name: '東區', postal: '401' },
      { name: '西區', postal: '403' }, { name: '南區', postal: '404' },
      { name: '北區', postal: '406' }, { name: '南屯區', postal: '408' },
      { name: '北屯區', postal: '409' }, { name: '西屯區', postal: '413' },
      { name: '烏日區', postal: '414' }, { name: '潭梓區', postal: '406' },
      { name: '霧峰區', postal: '413' }, { name: '大肚區', postal: '451' }
    ]},
    { name: '臺南市', letter: 'D', region: '南部', districts: [
      { name: '中西區', postal: '700' }, { name: '東區', postal: '701' },
      { name: '南區', postal: '702' }, { name: '北區', postal: '704' },
      { name: '安平區', postal: '708' }, { name: '安南區', postal: '709' },
      { name: '永康區', postal: '710' }, { name: '歸仁區', postal: '711' },
      { name: '新市區', postal: '714' }, { name: '善化區', postal: '733' },
      { name: '鹽水區', postal: '726' }, { name: '佳里區', postal: '724' },
      { name: '麻豆區', postal: '723' }
    ]},
    { name: '高雄市', letter: 'E', region: '南部', districts: [
      { name: '新興區', postal: '800' }, { name: '前金區', postal: '801' },
      { name: '苓雅區', postal: '802' }, { name: '鹽埗區', postal: '803' },
      { name: '鼓山區', postal: '804' }, { name: '三民區', postal: '806' },
      { name: '楠梓區', postal: '811' }, { name: '小港區', postal: '812' },
      { name: '左營區', postal: '813' }, { name: '鳥松區', postal: '830' },
      { name: '鳳山區', postal: '830' }, { name: '岡山區', postal: '820' },
      { name: '仁武區', postal: '821' }, { name: '大樹區', postal: '840' }
    ]},
    { name: '宜蘭縣', letter: 'G', region: '東部', districts: [
      { name: '宜蘭區', postal: '260' }, { name: '羅東區', postal: '267' },
      { name: '蘇澳區', postal: '268' }, { name: '礁溪區', postal: '262' },
      { name: '壯圍區', postal: '263' }, { name: '五結區', postal: '262' },
      { name: '冬山區', postal: '262' }, { name: '員山區', postal: '264' },
      { name: '北山區', postal: '262' }, { name: '大同區', postal: '265' }
    ]},
    { name: '花蓮縣', letter: 'U', region: '東部', districts: [
      { name: '花蓮區', postal: '970' }, { name: '瑞穗區', postal: '978' },
      { name: '鳳林區', postal: '976' }, { name: '玉里區', postal: '981' },
      { name: '新城區', postal: '973' }, { name: '光復區', postal: '974' },
      { name: '萬榮區', postal: '974' }, { name: '富里區', postal: '985' }
    ]},
    { name: '臺東縣', letter: 'V', region: '東部', districts: [
      { name: '臺東區', postal: '950' }, { name: '卑南區', postal: '956' },
      { name: '長安區', postal: '951' }, { name: '太麻里區', postal: '957' },
      { name: '金峰區', postal: '958' }, { name: '達仁區', postal: '952' },
      { name: '延平區', postal: '953' }
    ]},
    { name: '苗栗縣', letter: 'K', region: '中部', districts: [
      { name: '苗栗區', postal: '360' }, { name: '頭份區', postal: '355' },
      { name: '竹南區', postal: '356' }, { name: '後龍區', postal: '358' },
      { name: '公館區', postal: '364' }, { name: '大湖區', postal: '367' },
      { name: '苑裡區', postal: '367' }, { name: '寶山區', postal: '361' },
      { name: '造橋區', postal: '365' }
    ]},
    { name: '彰化縣', letter: 'N', region: '中部', districts: [
      { name: '彰陽區', postal: '500' }, { name: '花壇區', postal: '503' },
      { name: '鹿港區', postal: '505' }, { name: '福興區', postal: '506' },
      { name: '大村區', postal: '510' }, { name: '員林区', postal: '515' },
      { name: '社頭區', postal: '512' }, { name: '溪湖區', postal: '514' },
      { name: '田心區', postal: '511' }, { name: '二林區', postal: '516' }
    ]},
    { name: '南投縣', letter: 'M', region: '中部', districts: [
      { name: '南投區', postal: '540' }, { name: '中興區', postal: '541' },
      { name: '草屯區', postal: '542' }, { name: '埔里區', postal: '545' },
      { name: '魚池區', postal: '545' }, { name: '集景區', postal: '551' },
      { name: '信義區', postal: '556' }
    ]},
    { name: '雲林縣', letter: 'P', region: '南部', districts: [
      { name: '斗六區', postal: '640' }, { name: '虎尾區', postal: '642' },
      { name: '斗南區', postal: '646' }, { name: '西螺區', postal: '648' },
      { name: '北港區', postal: '651' }, { name: '古坑區', postal: '652' },
      { name: '元長區', postal: '653' }, { name: '麥田區', postal: '655' }
    ]},
    { name: '嘉義市', letter: 'I', region: '南部', districts: [
      { name: '東區', postal: '600' }, { name: '西區', postal: '601' },
      { name: '南區', postal: '602' }, { name: '北區', postal: '600' }
    ]},
    { name: '嘉義縣', letter: 'Q', region: '南部', districts: [
      { name: '太保區', postal: '607' }, { name: '朴子區', postal: '608' },
      { name: '民雄區', postal: '609' }, { name: '大林區', postal: '606' },
      { name: '新港區', postal: '611' }, { name: '梅山區', postal: '612' }
    ]},
    { name: '屏東縣', letter: 'T', region: '南部', districts: [
      { name: '屏東區', postal: '900' }, { name: '潮州區', postal: '920' },
      { name: '萬丹區', postal: '908' }, { name: '長治區', postal: '907' },
      { name: '麟洛區', postal: '905' }, { name: '竹山區', postal: '906' },
      { name: '東港區', postal: '929' }, { name: '滿洲區', postal: '928' }
    ]},
    { name: '澎湖縣', letter: 'X', region: '外島', districts: [
      { name: '馬賽區', postal: '880' }, { name: '湖西區', postal: '881' },
      { name: '龍山區', postal: '885' }, { name: '西嶼區', postal: '887' },
      { name: '望安區', postal: '886' }, { name: '七美區', postal: '888' }
    ]},
    { name: '金門縣', letter: 'W', region: '外島', districts: [
      { name: '金城區', postal: '891' }, { name: '金寧區', postal: '892' },
      { name: '烈嶼區', postal: '894' }, { name: '金沙區', postal: '896' }
    ]},
    { name: '連江縣', letter: 'Z', region: '外島', districts: [
      { name: '南竿鄉', postal: '20900' }, { name: '東蘭鄉', postal: '20903' },
      { name: '烏坵鄉', postal: '20999' }
    ]}
  ]
};

const ROAD_BASES = [
  '和平', '文化', '中山', '中華', '自由', '忠孝', '仁愛', '復興', '成功',
  '光華', '民族', '正義', '博愛', '大同', '光明', '自強', '文昌', '勝利',
  '永樂', '保安', '三民', '建國', '中正', '復國', '仁智', '信義', '爱国'
];
const ROAD_DIRECTIONS = ['', '東', '西', '南', '北'];
const ROAD_TYPES = ['路', '街', '大道'];
