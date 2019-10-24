var now = new Date();
var ttt = '<script src="js_t/js.js?';
ttt += String(now.getMonth()+1);
ttt += String(now.getDate());
ttt += String(now.getHours());
ttt += String(now.getMinutes());
ttt += '"></script>';
document.write(ttt);