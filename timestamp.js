
const regexUTC=/^(([1-2][0-9]|3[0-1]|0*[1-9])(\s|\-|\/)([0]*[0-9]|1[1-2])(\s|\-|\/)[0-9]{4,})|^(([1-2][0-9]|3[0-1]|0*[1-9])(\s|\-|\/)([1-2][0-9]|3[0-1]|0*[1-9])(\s|\-|\/)[0-9]{4,})|((^([1-2][0-9]|3[0-1]|0*[1-9])\s[Jan|Feb|Mar|Apr|May|Jun|jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|july|August|September|October|November|December]+\s[0-9]{4,})|^())/gmi;
const regexTS = '^[0-9]+$';

function input_format_check(date){
  if (date){
    return date.match(regexTS) ? 'unix':date.match(regexUTC)?'utc':false;
  }
  return false;
}

function validate_format(date){
  if (!(date)||!(date.match(regexUTC)) && !(date.match(regexTS)))
  {
    return false;
  }
  return date;
}

function is_input_utc(date){
  if (input_format_check(date)=='utc'){return true;}
  return false;
}

function is_input_unix(date){
  if (input_format_check(date)=='unix'){return true;}
  return false;
}

function to_UTC(date){
  if (date){
    const d = new Date(Number(date));
    return d.toUTCString();
  }
  return false;
}

function to_Unix (date){
  if (date) {
    const d = new Date(date).getTime();
    return d;
  }
  return false;
}

function get_unix(date){
  if (is_input_unix(date)){
    return date;
  }else if (is_input_utc(date)){
    return to_Unix(validate_format(date));
  }
  return false;
}

function get_utc(date){
  if (is_input_unix(date)){
    return to_UTC(validate_format(date));
  }else if (is_input_utc(date)){
    return to_UTC(to_Unix(validate_format(date)));
  }
  return false;
}

function TimeStamp(date){
  if (is_input_unix(date)){
    return to_UTC(to_Unix(validate_format(date)));
  }else if (is_input_utc(date)){
    return to_Unix(validate_format(date));
  }
    return false;
}

function TimeStamp_Json(date){
  if (date=='now'){
    return { unix: Date.now(), utc: Date().toString() };
  }
  if ((get_unix(date))&&(get_utc(date))){
    return { unix: Number(get_unix(date)), utc: get_utc(date).toString() };
  }
  return { error: "Invalid Date" };
}

module.exports = { TimeStamp, TimeStamp_Json, input_format_check, get_utc, get_unix,validate_format };


