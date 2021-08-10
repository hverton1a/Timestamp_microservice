var altDate = '2015-12-25';
var altDate2 = '1451001600000';
const regexUTC = ('[0-9]{4,}-[0-9]{2,}-[0-9]{2,}');
const regexTS = ('[0-9]+');



testDate=altDate2;





if (testDate.match(regexUTC)){
  var date = new Date(altDate);
  var unixTimestamp = 1451001600000;
  var dateNow = Date.now();
  var date2 = new Date(altDate).getTime();
  console.log(dateNow);
  console.log(date2);
}else if (testDate.match(regexTS)){
  const d = new Date(Number(testDate));
  var f = d.toISOString();
  console.log(f.slice(0,10) );
}


//console.log(date.toISOString());
//console.log(date.toUTCString());
//console.log(date.toTimeString());
//console.log(date.toString());

