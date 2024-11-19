// var foods ={
//     best:"小龙虾",
//     good:"火锅",
//     nomal:"快餐",
//     bad:"方便面",
// }
const address = {
    city:{
    name:"南京市",
    area: {
    name:"栖霞区",
    schooL:{
    name:"南工",
    }
}
    }
}
    // 传统写法取出属性
    // console.log(address.city.name)
    // // console.log(address,city.area,name)
    // // console.log(address.city.area,school.name)
   
    // 嵌套的解构应值
    let {
    city: {
    name:cityName,
    area:{
      name: areaName,
      school:{ name: schooWane },
    },
},
  }= address
    console.log(cityName)
    console.log(areaName)
    console.log(schooLName)
    