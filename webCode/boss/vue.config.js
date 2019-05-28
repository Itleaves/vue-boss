module.exports={//修改的webpack原来配置
    devServer:{
        proxy: {
            '/api':{//凡是以api开头的接口全部代理到下面的接口
               // target:'http://192.168.199.121:5000/',
               target:'http://172.16.13.26:5000/',
               // target:'http://192.168.0.110:5000/',
               changeOrigin: true
            }
        }
    }
}