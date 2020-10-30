h=[3,1,4,6,5]
for(i=0;i<h.length;i++){
    for (var j=i+1;j<h.length;j++)
    for(k=0;k<h.length;k++){
    if(h[i]**2+h[j]**2==h[k]**2){
        console.log(h[i],h[j],h[k])

       
    }
}
}



