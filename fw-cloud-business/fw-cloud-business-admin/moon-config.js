/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2020/3/8
 **/
module.exports ={
    db:{
        connect:{
            host     : 'taobiaowang.mysql.rds.aliyuncs.com',
            user     : 'uniondb_pmo',
            password : '1qaz!QAZ',
            database : 'uniondb_pmo'
        },
        saveDir:"./src/main/java/com/github/liuweijw/business/admin",
        plugins:[
            //     (hook)=>{
            //     // hook.loadGeneratorEngine.tapPromise('load custom plugin',(context)=>{
            //     //     return Promise.resolve(async()=>{
            //     //         debugger;
            //     //     });
            //     // });
            // }
        ],
    },
}
