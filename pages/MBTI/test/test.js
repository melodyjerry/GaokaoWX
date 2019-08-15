// pages/MBTI/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1,
    ee:0,
    i:0,
    s:0,
    n:0,
    t:0,
    f:0,
    j:0,
    p:0,
    result:'',
    items: [
      {name: 'J', value: 'A：计划你要做什么和在什么时候做'},
      {name: 'P', value: 'B：说去就去'},
    ],
    items2: [
      {name: 'P', value: 'A:较为随兴所至的人'},
      {name: 'J', value: 'B:较为有条理的人'},
    ],
    items3: [
      {name: 'S', value: 'A:以事实为主的课程'},
      {name: 'N', value: 'B:涉及理论的课程'},
    ],
    items4: [
      {name: 'E', value: 'A:与人容易混熟'},
      {name: 'I', value: 'B:比较沉静或矜持'},
    ],
    items4: [
      {name: 'S', value: 'A:富于想象力的人'},
      {name: 'N', value: 'B:现实的人'},
    ],
    items5: [
      {name: 'N', value: 'A:富于想象力的人'},
      {name: 'S', value: 'B:现实的人'},
    ],
    items6: [
      {name: 'F', value: 'A:你的情感支配你的理智'},
      {name: 'T', value: 'B:你的理智主宰你的情感'},
    ],
    items7: [
      {name: 'P', value: 'A:凭兴所至行事'},
      {name: 'J', value: 'B:按照计划行事'},
    ],
    items8: [
      {name: 'E', value: 'A:容易让人了解'},
      {name: 'I', value: 'B:难于让人了解'},
    ],
    items9: [
      {name: 'J', value: 'A:合你心意'},
      {name: 'P', value: 'B:令你感到束缚'},
    ],
    items10: [
      {name: 'J', value: 'A:开始前小心组织计划'},
      {name: 'P', value: 'B:边做边找须做什么'},
    ],
    items11: [
      {name: 'P', value: 'A:顺其自然'},
      {name: 'J', value: 'B:按程序表做事'},
    ],
    items12: [
      {name: 'I', value: 'A:重视自我隐私的人'},
      {name: 'E', value: 'B:非常坦率开放的人'},
    ],
    items13: [
      {name: 'S', value: 'A:实事求是的人'},
      {name: 'N', value: 'B:机灵的人'},
    ],
    items14: [
      {name: 'E', value: 'A:你介绍大家认识'},
      {name: 'I', value: 'B:别人介绍你'},
    ],
    items15: [
      {name: 'N', value: 'A:常提出新主意的'},
      {name: 'S', value: 'B:脚踏实地的'},
    ]
    ,
    items16: [
      {name: 'F', value: 'A:重视感情多于逻辑'},
      {name: 'T', value: 'B:重视逻辑多于感情'},
    ],
    items17: [
      {name: 'P', value: 'A:坐观事情发展才作计划'},
      {name: 'J', value: 'B:很早就作计划'},
    ],
    items18: [
      {name: 'I', value: 'A:一个人独处'},
      {name: 'E', value: 'B:合别人在一起'},
    ],
    items19: [
      {name: 'E', value: 'A:一个人独处'},
      {name: 'I', value: 'B:合别人在一起'},
    ],
    items20: [
      {name: 'J', value: 'A:很早便把约会、社交聚集等事情安排妥当'},
      {name: 'P', value: 'B:无拘无束，看当时有什么好玩玩什么'},
    ]
    ,
    items21: [
      {name: 'P', value: 'A:大部分的时间都是跟当天的感觉行事'},
      {name: 'J', value: 'B:事先知道大部分的日子会做什么'},
    ],
    items22: [
      {name: 'I', value: 'A:有时感到郁闷'},
      {name: 'E', value: 'B:常常乐在其中'},
    ],
    items23: [
      {name: 'E', value: 'A:和别人容易混熟'},
      {name: 'I', value: 'B:趋向自处一隅'},
    ],
    items24: [
      {name: 'N', value: 'A:一个思想敏捷及非常聪颖的人'},
      {name: 'S', value: 'B:实事求是，具丰富常识的人'},
    ],
    items25: [
      {name: 'P', value: 'A:颇为喜欢处理迫使你分秒必争的突发'},
      {name: 'J', value: 'B:通常预先计划，以免要在压力下工作'},
    ],
    items26: [
      {name: 'I', value: 'A:要花很长时间才认识你'},
      {name: 'E', value: 'B:用很短的时间便认识你'},
    ],
    items27: [
      {name: 'I', value: 'A:注重隐私'},
      {name: 'E', value: 'B:坦率开放'},
    ],
    items28: [
      {name: 'J', value: 'A:预先安排的'},
      {name: 'P', value: 'B:无计划的'},
    ]
    ,
    items29: [
      {name: 'S', value: 'A:抽象'},
      {name: 'N', value: 'B:具体'},
    ] ,
    items30: [
      {name: 'F', value: 'A:温柔'},
      {name: 'T', value: 'B:坚定'},
    ],
    items31: [
      {name: 'T', value: 'A:思考'},
      {name: 'F', value: 'B:感受'},
    ],
    items32: [
      {name: 'S', value: 'A:事实'},
      {name: 'N', value: 'B:意念'},
    ],
    items33: [
      {name: 'P', value: 'A:冲动'},
      {name: 'J', value: 'B:决定'},
    ],
    items34: [
      {name: 'E', value: 'A:热衷'},
      {name: 'I', value: 'B:文静'},
    ],
    items35: [
      {name: 'I', value: 'A:文静'},
      {name: 'E', value: 'B:外向'},
    ],
    items36: [
      {name: 'J', value: 'A:有系统'},
      {name: 'P', value: 'B:随意'},
    ],
    items37: [
      {name: 'N', value: 'A:理论'},
      {name: 'S', value: 'B:肯定'},
    ]
    ,
    items38: [
      {name: 'F', value: 'A:敏感'},
      {name: 'T', value: 'B:公正'},
    ],
    items39: [
      {name: 'T', value: 'A:令人信服'},
      {name: 'F', value: 'B:感人的'},
    ],
    items40: [
      {name: 'S', value: 'A:声明'},
      {name: 'N', value: 'B:概念'},
    ],
    items41: [
      {name: 'P', value: 'A:不受约束'},
      {name: 'J', value: 'B:预先安排'},
    ],
    items42: [
      {name: 'I', value: 'A:矜持'},
      {name: 'E', value: 'B:健谈'},
    ],
    items43: [
      {name: 'J', value: 'A:有条不紊'},
      {name: 'P', value: 'B:不拘小节'},
    ]
    ,
    items44: [
      {name: 'N', value: 'A:意念'},
      {name: 'S', value: 'B:实况'},
    ],
    items45: [
      {name: 'F', value: 'A:同情怜悯'},
      {name: 'T', value: 'B:远见'},
    ],
    items46: [
      {name: 'T', value: 'A:利益'},
      {name: 'F', value: 'B:祝福'},
    ],
    items47: [
      {name: 'S', value: 'A:务实的'},
      {name: 'N', value: 'B:理论的'},
    ],
    items48: [
      {name: 'I', value: 'A:朋友不多'},
      {name: 'E', value: 'B:朋友众多'},
    ]
    ,
    items49: [
      {name: 'J', value: 'A:有系统'},
      {name: 'P', value: 'B:即兴'},
    ],
    items50: [
      {name: 'N', value: 'A:富想象的'},
      {name: 'S', value: 'B:以事论事'},
    ],
    items51: [
      {name: 'F', value: 'A:亲切的'},
      {name: 'T', value: 'B:客观的'},
    ],
    items52: [
      {name: 'T', value: 'A:客观的'},
      {name: 'F', value: 'B:热情的'},
    ],
    items53: [
      {name: 'S', value: 'A:建造'},
      {name: 'N', value: 'B:发明'},
    ],
    items54: [
      {name: 'I', value: 'A:文静'},
      {name: 'E', value: 'B:爱合群'},
    ],
    items55: [
      {name: 'N', value: 'A:理论'},
      {name: 'S', value: 'B:事实'},
    ],
    items56: [
      {name: 'F', value: 'A:富同情'},
      {name: 'T', value: 'B:合逻辑'},
    ],
    items57: [
      {name: 'T', value: 'A:具分析力'},
      {name: 'F', value: 'B:多愁善感'},
    ]
    ,
    items58: [
      {name: 'S', value: 'A:合情合理'},
      {name: 'N', value: 'B:令人着迷'},
    ],
    items59: [
      {name: 'J', value: 'A:把要做的不同工作依次列出'},
      {name: 'P', value: 'B:马上动工'},
    ],
    items60: [
      {name: 'I', value: 'A:与某些人很难打开话匣儿和保持对话'},
      {name: 'E', value: 'B:与多数人都能从容地长谈'},
    ],
    items61: [
      {name: 'S', value: 'A:按照一般认可的方法去做'},
      {name: 'N', value: 'B:构想一个自己的想法'},
    ],
    items62: [
      {name: 'E', value: 'A:马上可以'},
      {name: 'I', value: 'B:待他们真正了解你之后才可以'},
    ],
    items63: [
      {name: 'N', value: 'A:讲授概念和原则的'},
      {name: 'S', value: 'B:讲授事实和数据的'},
    ],
    items64: [
      {name: 'F', value: 'A:一贯感性的人'},
      {name: 'T', value: 'B:一贯理性的人'},
    ],
    items65: [
      {name: 'P', value: 'A:有时是需要的，但一般来说你大不喜欢这样做'},
      {name: 'J', value: 'B：大多数情况是有帮助的且是你喜欢做的'},
    ],
    items66: [
      {name: 'I', value: 'A:跟你很熟悉的个别人谈话'},
      {name: 'E', value: 'B：参与大伙的谈话'},
    ],
    items67: [
      {name: 'E', value: 'A:是说话很多的一个'},
      {name: 'I', value: 'B:让别人多说话'},
    ] ,
    items68: [
      {name: 'J', value: 'A:合你意'},
      {name: 'P', value: 'B:使你提不起劲'},
    ] ,
    items69: [
      {name: 'T', value: 'A:能干的'},
      {name: 'F', value: 'B:富有同情心'},
    ] ,
    items70: [
      {name: 'J', value: 'A:事先安排你的社交约会'},
      {name: 'P', value: 'B:随兴之所至做事'},
    ]  ,
    items71: [
      {name: 'P', value: 'A:边做边想该做什么'},
      {name: 'J', value: 'B:首先把工作按步细分'},
    ],
    items72: [
      {name: 'I', value: 'A:只限于跟你有共同兴趣的人'},
      {name: 'E', value: 'B:几乎跟任何人都可以'},
    ],
    items73: [
      {name: 'S', value: 'A:跟随一些证明有效的方法'},
      {name: 'N', value: 'B:分析还有什么毛病，及针对尚未解决'},
    ],
    items74: [
      {name: 'N', value: 'A:喜欢奇特或创新的表达方式'},
      {name: 'S', value: 'B:喜欢作者直话直说'},
    ]  ,
    items75: [
      {name: 'F', value: 'A:天性淳良，但常常前后不一的'},
      {name: 'T', value: 'B:言词尖锐但永远合乎逻辑的'},
    ],
    items76: [
      {name: 'P', value: 'A:按当天心情去做'},
      {name: 'J', value: 'B:照拟好的程序表去做'},
    ] ,
    items77: [
      {name: 'E', value: 'A:可以和任何人按需求从容地交谈'},
      {name: 'I', value: 'B:只是对某些人或在某种情况下才可以'},
    ] ,
    items78: [
      {name: 'T', value: 'A:据事实衡量'},
      {name: 'F', value: 'B:考虑他人的感受和意见'},
    ],
    items79: [
      {name: 'N', value: 'A:想象的'},
      {name: 'S', value: 'B:真实的'},
    ] ,
    items80: [
      {name: 'F', value: 'A:仁慈慷慨的'},
      {name: 'T', value: 'B:意志坚定的'},
    ],
    items81: [
      {name: 'T', value: 'A:公正的'},
      {name: 'F', value: 'B:有关怀心'},
    ],
    items82: [
      {name: 'S', value: 'A:制作'},
      {name: 'N', value: 'B:设计'},
    ],
    items83: [
      {name: 'N', value: 'A:可能性'},
      {name: 'S', value: 'B:必然性'},
    ],
    items84: [
      {name: 'F', value: 'A:温柔'},
      {name: 'T', value: 'B:力量'},
    ],
    items85: [
      {name: 'T', value: 'A:实际'},
      {name: 'F', value: 'B:多愁善感'},
    ],
    items86: [
      {name: 'S', value: 'A:制造'},
      {name: 'N', value: 'B:创造'},
    ],
    items87: [
      {name: 'N', value: 'A:新颖的'},
      {name: 'S', value: 'B:已知的'},
    ],
    items88: [
      {name: 'F', value: 'A:同情'},
      {name: 'T', value: 'B:分析'},
    ],
    items89: [
      {name: 'T', value: 'A:坚持己见'},
      {name: 'F', value: 'B:温柔有爱心'},
    ],
    items90: [
      {name: 'S', value: 'A:具体的'},
      {name: 'N', value: 'B:抽象的'},
    ],
    items91: [
      {name: 'F', value: 'A:全心投入'},
      {name: 'T', value: 'B:有决心的'},
    ],
    items92: [
      {name: 'T', value: 'A:能干'},
      {name: 'F', value: 'B:仁慈'},
    ],
    items93: [
      {name: 'S', value: 'A:实际'},
      {name: 'N', value: 'B:创新'},
    ]                          
  },
  radioChange(e) {
    /**
     * 求值处理
     */
    const val = e.detail.value;
    // console.log('radio发生change事件，携带value值为：', val);
    if(val == "J"){
      let j = this.data.j++;
      this.setData({
        j: this.data.j++,
      })
    }
    else if(val == 'E'){
      let ee = this.data.ee++;
      this.setData({
        ee: this.data.ee++,
      })
    }
    else if(val == 'I'){
      let i = this.data.i++;
      this.setData({
        i: this.data.i++,
      })
    }
    else if(val == 'S'){
      let s = this.data.s++;
      this.setData({
        s: this.data.s++,
      })
    }
    else if(val == 'N'){
      let n = this.data.n++;
      this.setData({
        n: this.data.n++,
      })
    }
    else if(val == 'T'){
      let t = this.data.t++;
      this.setData({
        t: this.data.t++,
      })
    }
    else if(val == 'F'){
      let f = this.data.f++;
      this.setData({
        f: this.data.f++,
      })
    }
    else if(val == 'P'){
      let p = this.data.p++;
      this.setData({
        p: this.data.p++,
      })
    }
    else{
      console.log("error");
    }
    /**
     * 页面跳转
     */
    let num = this.data.num++
    this.setData({
      num: this.data.num++,
    })
    /**
     * 断点测试
     */
    // console.log(this.data.num+'num');
    // console.log(this.data.ee+'e');
    // console.log(this.data.i+'i');
    // console.log(this.data.s+'s');
    // console.log(this.data.n+'n');
    // console.log(this.data.t+'t');
    // console.log(this.data.f+'f');
    // console.log(this.data.j+'j');
    // console.log(this.data.p+'p');
  },
  radioChang(e){
    /**
     * 求值处理
     */
    const val = e.detail.value;
    // console.log('radio发生change事件，携带value值为：', val);
    if(val == "J"){
      let j = this.data.j++;
      this.setData({
        j: this.data.j++,
      })
    }
    else if(val == 'E'){
      let ee = this.data.ee++;
      this.setData({
        ee: this.data.ee++,
      })
    }
    else if(val == 'I'){
      let i = this.data.i++;
      this.setData({
        i: this.data.i++,
      })
    }
    else if(val == 'S'){
      let s = this.data.s++;
      this.setData({
        s: this.data.s++,
      })
    }
    else if(val == 'N'){
      let n = this.data.n++;
      this.setData({
        n: this.data.n++,
      })
    }
    else if(val == 'T'){
      let t = this.data.t++;
      this.setData({
        t: this.data.t++,
      })
    }
    else if(val == 'F'){
      let f = this.data.f++;
      this.setData({
        f: this.data.f++,
      })
    }
    else if(val == 'P'){
      let p = this.data.p++;
      this.setData({
        p: this.data.p++,
      })
    }
    else{
      console.log("error");
    }
  },
  /**
   * 结果处理函数
   */
  final(){
    if(this.data.ee <= this.data.i){
      let result = this.data.result;
      this.setData({
        result:this.data.result += 'I',
      })
    }
    else{
      let result = this.data.result;
      this.setData({
        result:this.data.result += 'E',
      })
    }

    if(this.data.s <= this.data.n){
      let result = this.data.result;
      this.setData({
        result:this.data.result += 'N',
      })
    }
    else{
      let result = this.data.result;
      this.setData({
        result:this.data.result += 'S',
      })
    }

    if(this.data.t <= this.data.f){
      let result = this.data.result;
      this.setData({
        result:this.data.result += 'F',
      })
    }
    else{
      let result = this.data.result;
      this.setData({
        result:this.data.result += 'T',
      })
    }

    if(this.data.j <= this.data.p){
      let result = this.data.result;
      this.setData({
        result:this.data.result += 'J',
      })
    }
    else{
      let result = this.data.result;
      this.setData({
        result:this.data.result += 'P',
      })
    }
    console.log(this.data.result);
    let result = this.data.result;
    //   this.setData({
    //     result:this.data.result = '',
    //   })
    wx.setStorage({
      key: 'result',
      data: result
    })
    wx.redirectTo({
      url: '../finally/finally?result=this.data.result'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})