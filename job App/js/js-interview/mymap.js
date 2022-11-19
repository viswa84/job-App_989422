Array.prototype.mymap = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}


Array.prototype.mapping=function (callback) {
    const res =[];
    for(let i=0 ; i<this.length ; i++){
        res.push(callback(this[i],i,this))
    }
    return res

}
