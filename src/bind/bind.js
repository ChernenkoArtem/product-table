Function.prototype.myBind = function(ctx,...args){
    return  (...args2)=> {
        this.apply(ctx, [...args, ...args2]);
    }
}
