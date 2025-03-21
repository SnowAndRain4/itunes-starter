let stocksV = [];
let stocksVA = [];
let StockArray = ["GS" ,"TSLA", "BLK", "AMZN", "APLE", "NVDA"];
let AverageValueGS = {name:"Goldman Sachs", value: 0};
let AverageValueTSLA = {name:"Tesla", value: 0};
let AverageValueBLK = {name:"Blackrock", value: 0};
let AverageValueAMZN = {name:"Amazon", value: 0};
let AverageValueAPLE = {name:"APPLE", value: 0};
let AverageValueNVDA = {name:"Nvidia", value: 0};
let Joyboy = "name"
let UserW

//use the d variavle from data.js

function main(){
GatherData();
AverageData();
ChooseLowestStock();
GatherUserNeeds();
ChooseStockToBuy();
}

function AverageData(){
    let l = 0
        while(true){
            AverageValueGS.value =+ stocksV[l]
            l++
            if(l == 50){
                break;
            }
        }
        AverageValueGS.value = AverageValueGS.value/50
        while(true){
            AverageValueTSLA.value =+ stocksV[l]
            l++
            if(l == 100){
                break;
            }
        }
        AverageValueTSLA.value = AverageValueTSLA.value/50
        while(true){
            AverageValueBLK.value =+ stocksV[l]
            l++
            if(l == 150){
                break;
            }
        }
        AverageValueBLK.value = AverageValueBLK.value/50
        while(true){
            AverageValueAMZN.value =+ stocksV[l]
            l++
            if(l == 200){
                break;
            }
        }
        AverageValueAMZN.value = AverageValueAMZN.value/50
        while(true){
            AverageValueAPLE.value =+ stocksV[l]
            l++
            if(l == 250){
                break;
            }
        }
        AverageValueAPLE.value = AverageValueAPLE.value/50
        while(true){
            AverageValueNVDA.value =+ stocksV[l]
            l++
            if(l == 300){
                break;
            }
        }
        AverageValueNVDA.value = AverageValueNVDA.value/50
    StocksVA = [AverageValueGS, AverageValueTSLA, AverageValueBLK, AverageValueAMZN, AverageValueAPLE, AverageValueNVDA];
    console.log(StocksVA)
}
            
//sorts the array of stocks from lowest to highest
function ChooseLowestStock(){

        for (var i = 0; i <  StocksVA.length; i++) {
    
            // Last i elements are already in place  
            for (var j = 0; j < ( StocksVA.length - i - 1); j++) {
    
                // Checking if the item at present iteration 
                // is greater than the next iteration
                if ( StocksVA[j].value >  StocksVA[j + 1].value) {
    
                    // If the condition is true
                    // then swap them
                    var temp =  StocksVA[j]
                    StocksVA[j] =  StocksVA[j + 1]
                    StocksVA[j + 1] = temp
                }
}
        }
    }

 function GatherUserNeeds(){
     UserW = document.getElementById("StockG").value;
     if(UserW == "Bullish"){
         Joyboy = StocksVA[5].name;

     }else{
     if(UserW == "Slightly Bullish"){
         Joyboy = StocksVA[4].name;

     }else{
            if(UserW == "Nuteral Bullish"){
                Joyboy = StocksVA[3].name;

           }else{
         if(UserW == "Nuteral Bearish"){
             Joyboy = StocksVA[2].name;

         }else{
             if(UserW == "Slightly Bearish"){
                 Joyboy = StocksVA[1].name;

             }else{
                 if(UserW == "Bearish"){
                     Joyboy = StocksVA[0].name;

                 }
             }
         }
     }
 }
 }
}


function ChooseStockToBuy(){
    let ImageOutput = document.getElementById("ImageOutput")
    console.log("you should buy " + Joyboy);
    if(Joyboy == "Goldman Sachs"){
        ImageOutput.innerHTML = `<img src="photos/Goldman_Sachs.svg (1).png" alt="Trulli" style="width:100%"> Goldman Sachs a stock firm is currently your best choice!>`
    }else{
        
        if(Joyboy == "Tesla"){
        ImageOutput.innerHTML = `<img src="photos/640px-Tesla_logo.png" alt="Trulli" style="width:100%"> Tesla a electric vehicle company is currently your best choice!>`
    }else{    
        
        if(Joyboy == "APPLE"){
        ImageOutput.innerHTML = `<img src="photos/image-58-1024x512.png" alt="Trulli" style="width:100%"> Apple a technologic distribution company, is currently your best choice!>`
    }else{
        
        if(Joyboy == "Nvidia"){
            ImageOutput.innerHTML = `<img src="photos/nvidia-logo-vert.png" alt="Trulli" style="width:100%"> Nvida a microchip manufacturer is currently your best choice!>`
    }else{
        if(Joyboy == "Blackrock"){
            ImageOutput.innerHTML = `<img src="photos/BlackRock-Logo.png" alt="Trulli" style="width:100%"> Blackrock a private equity firm is currently your best choice!>`
        }else{
            
            if(Joyboy == "Amazon"){
                    ImageOutput.innerHTML = `<img src="photos/Amazon-Logo-2000-present-1024x576.jpeg" alt="Trulli" style="width:100%"> Amazon a online market company, is currently your best choice!>`
            }


                
            }

            }
    
        }
    }

    }
}


//40058b16-400b-4a05-ab3d-c64b90190af9
//0UPFSXBBHRJJMOUK This is my API key


function GatherData(){
// for(let i = 0; i < 5; i++){
// fetch("https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=" + StockArray[i] + "&apikey=0UPFSXBBHRJJMOUK")
//     .then(Response => {

//             if(!Response.ok){
//                     throw new Error("could not fetch resource")
//             }
//             return Response.json();

//         })
        //.then(data => console.log(data))
        // .then(data =>  {
            for(let i = 0; i < 6; i++){
        
            for (let j = 0; j < 50; j++) {
            stocksV.push(d[i].feed[j].overall_sentiment_score)
            }
        }
        console.log(stocksV);
        
        // })
        // .catch(error => console.error(error)
    }