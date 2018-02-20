const initState = {
  "flowers" : [
    {"num": 1, "name": "lily"},
    {"num": 2, "name": "jasmine"},
    {"num": 3, "name": "rose"}    
  ],
  "fruits": [
    {"num": 1, "name": "apple"},
    {"num": 22, "name": "melon"},    
  ]
}
export default (state= initState, action) => {
    switch(action.type){
      case 'del':
        console.log(action)
        return {
           ...state,
           "flowers": state.flowers.filter(item => {
              return item.num !== action.num
           })
        }
      case 'minus':
        return {
          "a": state.a -1,
          "b": 24
        }
      default:
        return state;
    }
}