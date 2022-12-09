function prime(){
    for(let i=2;i<=20;i++){
        let flag=0;
        for(let j=2;j<i;j++){
            if(i%j==0){
                flag=1;
                break;
            }
        }
        if(i>0 && flag==0)
          console.log(i);
    }
}
prime();