var ts = require('./timestamp.js') ;

const regexUTC = '(^(Jan|Feb|Mar|Apr|May|Jun|jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|jule|August|September|October|November|December)\s{1,}([1-2][0-9]|[3][0-1]|[0]*[0-9]|)\s{1,}[0-9]{4,})|^(([1-2][0-9]|[3][0-1]|[0]*[0-9])\s{1,}(Jan|Feb|Mar|Apr|May|Jun|jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|july|August|September|October|November|December)\s{1,}[0-9]{4,})|^([0-9]{4,}(-|\/|\s){1,1}([1][0-2]|[0]*[0-9])(-|\/|\s)([1-2][0-9]|[3][0-1]|[0]*[0-9]|))|^(([1][0-2]|[0]*[0-9])(-|\/|\s){1,1}([1-2][0-9]|[3][0-1]|[0]*[0-9]|)(-|\/|\s)[0-9]{4,})';
const regexTS = ('^[0-9]+$');
const rgx='^(?:[1-2][0-9]|[3][0-1]|[0]*[0-9])\s{1,}(?:Jan|Feb|Mar|Apr|May|Jun|jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|july|August|September|October|November|December)\s{1,}[0-9]{4,}';


var sec=4;


function d (date){


  console.log('-----------');
  console.log(' '+a+' '+date.toString());
  console.log('-----------');
  console.log('\n');

  console.log(ts.input_format_check(date));

  console.log(ts.TimeStamp_Json(date));
  
  var djson;

  console.log(ts.TimeStamp_Json(date));

  djson=ts.TimeStamp_Json(date);
  console.log(' '+a+' '+'utc json unix:'+ djson.unix);
  console.log(' '+a+' '+'utc json utc:'+ djson.utc);
  console.log(' '+a+' '+'new date mili json unix:'+ new Date(djson.unix));
  console.log(' '+a+' '+'new date mili json utc:'+ new Date(djson.utc));

  var dat = new Date(ts.get_unix(date));

  console.log(' '+a+' '+dat);
  console.log('-----------');
  console.log('\n');
a++;
}



if (sec==1){
var mili="1451001600000";
var utc="2015-12-25";
var date = new Date(ts.get_utc(mili));

console.log(date);
console.log(ts.TimeStamp_Json(mili));
console.log(ts.TimeStamp_Json(utc));

var djson=ts.TimeStamp_Json(mili);
console.log('mili json unix:'+ djson.unix);
console.log('mili json utc:'+ djson.utc);
console.log('new date mili json unix:'+ new Date(djson.unix));
console.log('new date mili json utc:'+ new Date(djson.utc));

djson=ts.TimeStamp_Json(utc);
console.log('utc json unix:'+ djson.unix);
console.log('utc json utc:'+ djson.utc);
console.log('new date mili json unix:'+ new Date(djson.unix));
console.log('new date mili json utc:'+ new Date(djson.utc));

var date = new Date(ts.get_unix(utc));

console.log(date);
}else if (sec==2){

  var dt1,dt2,dt3,dt4,dt5,dt6,dt7,dt8,dt9,dt10,dt11,dt12,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14;
  
  t1='Mar 25 2015';
  t2='25 Mar 2015';
  t3='January 25 2015';
  t4='Jan 25 2015';
  t5='03/25/2015';
  t6='03/25/2015';
  t7='2015-3-25';
  t8='2015/03/25';
  t9='25 Mar 2015';
  t10='25 January 2015';
  t11='January 25 2015';
  t12='Mar 25 2015';
  t13='05 October 202011';
  t14='05%20October%20202011';

var a=1;

    console.log(dt1=new Date(t1));
    console.log(dt2=new Date(t2));
    console.log(dt3=new Date(t3));
    console.log(dt4=new Date(t4));
    console.log(dt5=new Date(t5));
    console.log(dt6=new Date(t6));
    console.log(dt7=new Date(t7));
    console.log(dt8=new Date(t8));
    console.log(dt9=new Date(t9));
    console.log(dt10=new Date(t10));
    console.log(dt11=new Date(t11));
    console.log(dt12=new Date(t12));
    console.log(dt13=new Date(t13));
    console.log(dt14=new Date(t14));
  
 // var date = dt1;
  d(t1);
  d(t2);
  d(t3);
  d(t4);
  d(t5);
  d(t6);
  d(t7);
  d(t8);
  d(t9);
  d(t10);
  d(t11);
  d(t12);
  d(t13);
  d(t14);
}



if (sec==3){
date='05%20October%20202011';
date='05 October 202011';
date=date.replace(/%20/g,' ');
//console.log(date.match(regexUTC));
//console.log(new Date(date));
//console.log(ts.validate_format(date));
//console.log(ts.input_format_check(date));

var k = "05 October 202011";
var l = '05/08/202011';
var m = '05-08-202011';
var n = '05 08 202011';
var o = '14 14 202011';
var p = '05 October 202011';
var q = '05 Oct 202011';
var rg=/^(([1-2][0-9]|3[0-1]|0*[1-9])(\s|\-|\/)([0]*[0-9]|1[1-2])(\s|\-|\/)[0-9]{4,})|^(([1-2][0-9]|3[0-1]|0*[1-9])(\s|\-|\/)([1-2][0-9]|3[0-1]|0*[1-9])(\s|\-|\/)[0-9]{4,})|((^([1-2][0-9]|3[0-1]|0*[1-9])\s[Jan|Feb|Mar|Apr|May|Jun|jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|july|August|September|October|November|December]+\s[0-9]{4,})|^())/gmi;
console.log(k.match(rg));
console.log(l.match(rg));
console.log(m.match(rg));
console.log(n.match(rg));
console.log(o.match(rg));
console.log(p.match(rg));
console.log(q.match(rg));
}else if (sec==4){
  var dt1,dt2,dt3,dt4,dt5,dt6,dt7,dt8,dt9,dt10,dt11,dt12,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14;
  
  t1='Mar 25 2015';
  t2='25 Mar 2015';
  t3='6312708183600000';
  t4='Jan 25 2015';
  t5='03/25/2015';
  t6='03/25/2015';
  t7='1427252400000';
  t8='2015/03/25';
  t9='1422151200000';
  t10='25 January 2015';
  t11='January 25 2015';
  t12='1422151200000';
  t13='05 October 202011';
  t14='05%20October%20202011';

var a=1;

console.log(dt3=new Date(t3));
console.log(dt7=new Date(t7));
console.log(dt9=new Date(t9));
console.log(dt12=new Date(t12));
    console.log(dt1=new Date(t1));
    console.log(dt2=new Date(t2));
    console.log(dt4=new Date(t4));
    console.log(dt5=new Date(t5));
    console.log(dt6=new Date(t6));
    console.log(dt8=new Date(t8));
    console.log(dt10=new Date(t10));
    console.log(dt11=new Date(t11));
    console.log(dt13=new Date(t13));
    console.log(dt14=new Date(t14));
  
 // var date = dt1;
 d(t3);
 d(t7);
 d(t9);
 d(t12);
 d(t1);
  d(t2);
  d(t4);
  d(t5);
  d(t6);
  d(t8);
  d(t10);
  d(t11);
  d(t13);
  d(t14);


}