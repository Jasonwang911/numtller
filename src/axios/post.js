import request from './index'
import qs from 'qs'


// 急速借款列表  --- 获取产品大类  /v1/product/queryLoanType
export function postApi(data) {
    return request({
        url: '/admin/login',
        method: 'post',
        data: qs.stringify(data)
    })
}