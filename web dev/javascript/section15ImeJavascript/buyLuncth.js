const nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        
        

        const payIndex = Math.floor(Math.random() * names.length);

        payName = names[payIndex];

        return  payName + " is going to buy lunch today!";
        
    
    
    /******Don't change the code below*******/    
    }

    console.log(whosPaying(nameList)); 

    