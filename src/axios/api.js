import request from "@/axios/axiosInstance";

export default {
    login:(phone,password)=>{
        return request({
            url: `/userApi/login`,
            method: 'POST',
            params: {
                phone:phone,
                password:password
            }
        })
    },
    register:(phone,password,sex,name)=>{
        return request({
            url: `/userApi/register`,
            method: 'POST',
            params: {
                phone:phone,
                password:password,
                sex:sex,
                name:name
            }
        })
    },
    destination:(adminId)=>{
        return request({
            url: `/userApi/destination`,
            method: 'POST',
            params: {
                adminId:adminId
            }
        })
    },
    deleteDestination:(id)=>{
        return request({
            url: `/userApi/deleteDestination`,
            method: 'POST',
            params: {
                id:id
            }
        })
    },
    updateDestination:(id,destination,name,sex,phone)=>{
        return request({
            url: `/userApi/updateDestination`,
            method: 'POST',
            params: {
                id:id,
                destination:destination,
                name:name,
                sex:sex,
                phone:phone
            }
        })
    },
    createDestination:(adminId,destination,name,sex,phone)=>{
        return request({
            url: `/userApi/createDestination`,
            method: 'POST',
            params: {
                adminId:adminId,
                destination:destination,
                name:name,
                sex:sex,
                phone:phone
            }
        })
    },
    shopList:()=>{
        return request({
            url: `/businessApi/shopList`,
            method: 'POST',
        })
    },
    foodList:(businessId)=>{
        return request({
            url: `/businessApi/foodList`,
            method: 'POST',
            params: {
                businessId:businessId
            }
        })
    },
    createOrder:(businessId,adminId,destinationId,totalPrice,itemsCount)=>{
        return request({
            url: `/orderApi/createOrder`,
            method: 'POST',
            params: {
                businessId:businessId,
                adminId:adminId,
                destinationId:destinationId,
                totalPrice:totalPrice,
                itemsCount:itemsCount
            }
        })
    },
    pay:(id)=>{
        return request({
            url: `/orderApi/pay`,
            method: 'POST',
            params: {
                id:id
            }
        })
    },
    allOrder:(adminId)=>{
        return request({
            url: `/orderApi/allOrder`,
            method: 'POST',
            params: {
                adminId:adminId
            }
        })
    },
    orderItem:(orderId)=>{
        return request({
            url: `/orderApi/orderItem`,
            method: 'POST',
            params: {
                orderId:orderId
            }
        })
    },
    business:function (businessId){
        return request(({
            url: `/businessApi/shop`,
            method: 'POST',
            params: {
                businessId:businessId
            }
        }))
    }
}