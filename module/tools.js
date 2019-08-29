const bcrypt=require('bcryptjs') //hash 加密包

const tools={
    //加密密码
    enbcrypt(password){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    },
    //验证密码
    chbcrypt(password,enpassword){
        const result=bcrypt.compareSync(password, enpassword);
        return result
    }
}

module.exports=tools