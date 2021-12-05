let sum = function(para){
    let sum1 = function(para1){
        let sum2 = function(para2){
            let r = para + para1 + para2;
            console.log(r)
        }
        return sum2
    }
    return sum1
}
sum(10)(20)(30)