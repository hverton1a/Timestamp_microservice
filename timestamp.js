
function input_format_check(date){
  const regexUTC = ('[0-9]{4,}-[0-9]{2,}-[0-9]{2,}$');
  const regexTS = ('^[0-9]+$');
  if (date){
    return date.match(regexUTC) ? 'utc':date.match(regexTS)?'unix':false;
  }
  return false;
}

function validate_format(date){
  const regexUTC = ('[0-9]{4,}-[0-9]{2,}-[0-9]{2,}');
  const regexTS = ('[0-9]+');
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
  //console.log(date);
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
  if ((get_unix(date))&&(get_utc(date))){
    return `{ unix: ${get_unix(date).toString()}, utc: "${get_utc(date)}" }`;
  }
  return {"message":"something went wrong, please, try again later"};
}

module.exports = { TimeStamp, TimeStamp_Json, input_format_check};


