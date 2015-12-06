var wechat = require('wechat');
var config = {
  token: '552f3076112eb1de16e8184f',
  appid: 'wx50b97d02c86f6c26',
  encodingAESKey: 'GWyB77KX9tQYjtxDIF2lTWCkhcMQn0q02dAxvU7vgz9'
};


var express = require('express');
var router = express.Router();
var List = require('wechat').List;


/* GET users listing. */
router.all('/', wechat(config, function (req, res, next) {
    List.add('view', [
      ['回复{a}查看我的性别', function (info, req, res) {
        res.reply('我是个妹纸哟');
      }],
      ['回复{b}查看我的年龄', function (info, req, res) {
        res.reply('我今年18岁');
      }],
      ['回复{c}查看我的性取向', '这样的事情怎么好意思告诉你啦- -']
    ]);

  // 微信输入信息都在req.weixin上
  var message = req.weixin;
  console.log(message)
  if (message.Content === 'list') {
      console.log('list')
    return res.wait('view');
  } else {
    return res.reply('hehe');
    // 或者中断等待回复事务
    // res.nowait('hehe');
  }
  
  if (message.Content === '菜单') {
    // 回复屌丝(普通回复)
    res.reply('hehe');
  } else if (message.Content === 'text') {
    //你也可以这样回复text类型的信息
    res.reply({
      content: 'text object',
      type: 'text'
    });
  } else if (message.Content === 'music') {
    // 回复一段音乐
    res.reply({
      type: "music",
      content: {
        title: "来段音乐吧",
        description: "河流",
        musicUrl: "http://7xowbe.com1.z0.glb.clouddn.com/heliu.mp3",
        hqMusicUrl: "http://7xowbe.com1.z0.glb.clouddn.com/heliu.mp3",
        thumbMediaId: "thisThumbMediaId323232"
      }
    });
  } else {
    // 回复高富帅(图文回复)
    res.reply([
      {
        title: 'Nodejs微信开发',
        description: 'by StuQ 桑世龙',
        picurl: 'http://images.51cto.com/files/uploadimg/20111110/1113010.png',
        url: 'https://cnodejs.org/'
      }
    ]);
  }
})
);

module.exports = router;

