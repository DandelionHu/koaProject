const JwtStrategy = require('passport-jwt').Strategy;  //验证token包
const ExtractJwt = require('passport-jwt').ExtractJwt; //验证token包
const config=require('./config')
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretOrkey;
//验证token
module.exports=async (passport)=>{
    passport.use(new JwtStrategy(opts, await function(jwt_payload, done) {
        console.log(jwt_payload);
        //查询数据
        const user={}
        if(user){
            //返回用户信息
            return done(null,user)
        }else{
            return done(null,false)
        }
    }));
}