//меняем ночной и дневной фон
function lkm(){
    var light = document.querySelector(".night");
    var body = document.querySelector("body");
    var contains = body.classList.contains("night");//проверяем наличие CSS класса
         //console.log(contains);

        if(contains==true){
            light.classList.remove("night");//удаляем класс
        }else{
            
        body.classList.add("night");//добавляем класс
        
        
        }
        
    }
    


