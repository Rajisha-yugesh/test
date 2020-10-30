var n=2
var minimum=49
var maximum=65
var sum=[];
for(i=0;i<=((minimum+maximum)/2);i++){
     sum.push(i**n);
    
}
for(i=minimum;i<=maximum;i++){
    for(p of sum){
        if(p==i){
            console.log(p)

        }
    }
}




