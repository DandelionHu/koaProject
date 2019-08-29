const Validator=require('validator') //验证

const validatorTools={
    //注册验证
    registerInput(data){
        let errors={}
        if(Validator.isEmpty(data.account)){
            errors.msg="账号不能为空！";
            return errors
        }
        if(!Validator.isLength(data.account,{min:2,max:30})){
            //验证 account 最小长度2 最大长度30
            errors.msg="账号的长度不能小于2位且不能超过30位";
            return errors
        } 

        if(Validator.isEmpty(data.email)){
            errors.msg="邮箱不能为空！";
            return errors
        }
        if(!Validator.isEmail(data.email)){
            errors.msg="邮箱不合法！";
            return errors
        }

        if(Validator.isEmpty(data.password)){
            errors.msg="密码不能为空！";
            return errors
        }
        if(!Validator.isLength(data.password,{min:6,max:30})){
            //验证 password 最小长度6 最大长度30
            errors.msg="密码的长度不能小于6位且不能超过30位";
            return errors
        } 

        if(Validator.isEmpty(data.passwords)){
            errors.msg="重复密码不能为空！";
            return errors
        }
        if(!Validator.equals(data.password,data.passwords)){
            //验证 password 最小长度6 最大长度30
            errors.msg="两次密码不一致";
            return errors
        }

        return errors
    },
    //判断是否为空
    isEmpty(value){
        //判断value 值是否为 undefined  或null 或空对象 或去除空格的空字符串
        const res=(value==undefined || value===null ||
            (typeof value==="object" && Object.keys(value).length==0) ||
            (typeof value==="string" && value.trim().length==0))
        return res;
    },
    //登录验证
    loginInput(data){
        let errors={}
        if(Validator.isEmpty(data.account)){
            errors.msg="账号不能为空！";
            return errors
        }
        if(!Validator.isLength(data.account,{min:2,max:30})){
            //验证 account 最小长度2 最大长度30
            errors.msg="账号的长度不能小于2位且不能超过30位";
            return errors
        } 

        if(Validator.isEmpty(data.password)){
            errors.msg="密码不能为空！";
            return errors
        }
        if(!Validator.isLength(data.password,{min:6,max:30})){
            //验证 password 最小长度6 最大长度30
            errors.msg="密码的长度不能小于6位且不能超过30位";
            return errors
        } 

        return errors
    },

}

module.exports=validatorTools