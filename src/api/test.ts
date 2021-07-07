import request from '../utils/request'

export function testGet () {
    return request({
        url: '/login',
        method: 'post'
    })
}