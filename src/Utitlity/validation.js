
const validate = (val , rules,connectedValue)=>{
    
    let isValid = true;
    for(let rule in rules)
    {
        // ToastAndroid.show(rule,.1);
        switch(rule)
        {
            case "isEmail":
            isValid = isValid && emailValidator(val);
            break
            case "minLength":
            isValid = isValid && minLengthValidator(val,rules[rule])
            break
            case "equalTo":
            isValid = isValid && equalToValidator(val,connectedValue[rule])
            break
            default:
            isValid = true;
        }
    }
    return isValid;
}

const emailValidator = val => {
    const res = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        val
      );
      ToastAndroid.show(res+"",.1);
    return  res;
  };

const minLengthValidator = (val,minLength)=>{
    return val.length>=minLength;

}
const equalToValidator = (val,checkVal)=>{
    return val === checkVal
}

export default validate;