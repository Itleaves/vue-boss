import fetch from '../utils/fetch'

export function getUser(obj) {
    return fetch({
        url:"/api/getUser",
        method:"post",
        data:{
            lname:obj.lname,
            lpwd:obj.lpwd
        }
    })
}