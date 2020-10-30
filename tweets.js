tweets = ["sachin tewee1",
    "sehwag tewee1",
    "kohli tewee1",
    "sachin tewee1",
    "kohli tewee1",]
arr=[];
count=0;
for(i of tweets){
    if(i in arr){
        arr[i]+=1

    }
    else{
        arr[i]=1;
    }
}
console.log(arr)



