import fetch from '../utils/fetch'

export function getWorklist(){
    return fetch({
        url:"/api/getworklist",
        method:"get",
    })
}