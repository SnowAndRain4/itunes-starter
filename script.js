//these variables shall act as the STOCKS
let TSLA = "Value 1"; //will use getPositions command for all of these shares normally
let BLACKROCK = "Value 2";
let AMD = "Value 3";
let NVDYA = "Value 4";
let APPLE = "Value 5";
let SandP = "Value 6";
let NASDAQ = "Value 7";
let AMAZON = "Value 8";


let StockArray = [var1, var2, var3, var4, var5, var6, var7, var8];

//will give me my values for all of my stocks, I will use this in order to
function gatherStockValues(array) {
    for (let i = 0; i < array.length; i++) {
        //array[i] = getPosition()
          return(array[i])
    }
}
//sorts the array of stocks from lowest to highest
function chooseLowestStock(array){
    for(let i = 0; i < 8; i++){
        if(array[i] > [i++]){
            let storage = array[i]
            array[i++] = array[i]
            storage = array[i++]
        }
    }
}

function ChooseStockToBuy{

}