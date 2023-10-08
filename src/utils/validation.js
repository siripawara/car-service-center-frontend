export const validator = (pattern,input)=>{
    const patternOb = new RegExp(pattern);
    if(patternOb.test(input)){
        return true
    }else{
        return false
    }
}
export const styleValidator = (name)=>{
    if(name===""){
        return ""
    }else{
        if(name === "ok"){
            return "is-valid"
        }else{
            return "is-invalid"
        }
    }
}
