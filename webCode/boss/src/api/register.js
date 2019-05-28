import fetch from '../utils/fetch'

export function postUser(obj){
    return fetch({
        url:"/api/postuser",
        method:"post",
        data:{
            name:obj.name,
            pwd:obj.pwd
        }
    })
}