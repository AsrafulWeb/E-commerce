$( document ).ready(function() {
    var menu_bg = $(".menu_bg");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 80) {
            menu_bg.addClass('menu_bg2')
            $(".menu2Mneu").addClass('menu2Menu2');
        } else {
            menu_bg.addClass('menu_bg');
            menu_bg.removeClass('menu_bg2');
            $(".menu2Mneu").addClass('menu2Menu2');
            $(".menu2Mneu").removeClass('menu2Menu2');
        }
    });
    function slider(){
        if($(".sliderBanner1").hasClass("active")){
            $(".sliderBanner2").addClass("active");
            $(".sliderBanner1").removeClass("active");
            $(".chandeAndSelectButton1").removeClass("ButtonActive");
            $(".chandeAndSelectButton3").removeClass("ButtonActive");
            $(".chandeAndSelectButton4").removeClass("ButtonActive");
            $(".chandeAndSelectButton2").addClass("ButtonActive");
        }else if($(".sliderBanner2").hasClass("active")){
            $(".sliderBanner3").addClass("active");
            $(".sliderBanner2").removeClass("active");
            $(".chandeAndSelectButton3").addClass("ButtonActive");
            $(".chandeAndSelectButton2").removeClass("ButtonActive");
            $(".chandeAndSelectButton1").removeClass("ButtonActive");
            $(".chandeAndSelectButton4").removeClass("ButtonActive");
        }else if($(".sliderBanner3").hasClass("active")){
            $(".sliderBanner4").addClass("active");
            $(".sliderBanner3").removeClass("active");
            $(".chandeAndSelectButton4").addClass("ButtonActive");
            $(".chandeAndSelectButton1").removeClass("ButtonActive");
            $(".chandeAndSelectButton3").removeClass("ButtonActive");
            $(".chandeAndSelectButton2").removeClass("ButtonActive");
        }else if($(".sliderBanner4").hasClass("active")){
            $(".sliderBanner1").addClass("active");
            $(".sliderBanner4").removeClass("active");
            $(".chandeAndSelectButton1").addClass("ButtonActive");
            $(".chandeAndSelectButton2").removeClass("ButtonActive");
            $(".chandeAndSelectButton3").removeClass("ButtonActive");
            $(".chandeAndSelectButton4").removeClass("ButtonActive");
        }else {
            $(".sliderBanner1").addClass("active");
            $(".sliderBanner2").removeClass("active");
            $(".sliderBanner3").removeClass("active");
            $(".sliderBanner4").removeClass("active");
            $(".chandeAndSelectButton1").addClass("ButtonActive");
            $(".chandeAndSelectButton2").removeClass("ButtonActive");
            $(".chandeAndSelectButton3").removeClass("ButtonActive");
            $(".chandeAndSelectButton4").removeClass("ButtonActive");
        }
    }
    $(".chandeAndSelectButton1").click(function(){
        $(".sliderBanner1").addClass("active");
        $(".sliderBanner2").removeClass("active");
        $(".sliderBanner3").removeClass("active");
        $(".sliderBanner4").removeClass("active");
        
        $(".chandeAndSelectButton1").addClass("ButtonActive");
        $(".chandeAndSelectButton2").removeClass("ButtonActive");
        $(".chandeAndSelectButton3").removeClass("ButtonActive");
        $(".chandeAndSelectButton4").removeClass("ButtonActive");
    });
    $(".chandeAndSelectButton2").click(function(){
        $(".sliderBanner2").addClass("active");
        $(".sliderBanner1").removeClass("active");
        $(".sliderBanner3").removeClass("active");
        $(".sliderBanner4").removeClass("active");
        
        $(".chandeAndSelectButton2").addClass("ButtonActive");
        $(".chandeAndSelectButton1").removeClass("ButtonActive");
        $(".chandeAndSelectButton3").removeClass("ButtonActive");
        $(".chandeAndSelectButton4").removeClass("ButtonActive");
    });
    $(".chandeAndSelectButton3").click(function(){
        $(".sliderBanner3").addClass("active");
        $(".sliderBanner2").removeClass("active");
        $(".sliderBanner1").removeClass("active");
        $(".sliderBanner4").removeClass("active");
        
        $(".chandeAndSelectButton3").addClass("ButtonActive");
        $(".chandeAndSelectButton2").removeClass("ButtonActive");
        $(".chandeAndSelectButton1").removeClass("ButtonActive");
        $(".chandeAndSelectButton4").removeClass("ButtonActive");
    });
    $(".chandeAndSelectButton4").click(function(){
        $(".sliderBanner4").addClass("active");
        $(".sliderBanner2").removeClass("active");
        $(".sliderBanner3").removeClass("active");
        $(".sliderBanner1").removeClass("active");
        
        $(".chandeAndSelectButton4").addClass("ButtonActive");
        $(".chandeAndSelectButton2").removeClass("ButtonActive");
        $(".chandeAndSelectButton3").removeClass("ButtonActive");
        $(".chandeAndSelectButton1").removeClass("ButtonActive");
    });
    function setIntervals(){
        setInterval(slider , 7000);
    }
    setIntervals()
    $(".menu2BtnS").click(function (){
        $(".menu2Mneu").slideToggle();
    });
    // $(".menu2HeaderCancel").click(function (){
    //     $(".menu2").css("left" , "-335px");
    // });
    $("#categoriesz").click(function(){
        $("#categoriesz").addClass("categoriesc");
        $("#brandsz").removeClass("brandss");
        $("#shopsz").removeClass("shopss");
    });
    $("#brandsz").click(function(){
        $("#brandsz").addClass("brandss");
        $("#categoriesz").removeClass("categoriesc");
        $("#shopsz").removeClass("shopss");
    });
    $("#shopsz").click(function(){
        $("#shopsz").addClass("shopss");
        $("#categoriesz").removeClass("categoriesc");
        $("#brandsz").removeClass("brandss");
    });
    $("#headerCartIcon").click(function(){
        $("#headerCartIconsDropdown").toggleClass("headerCartIconsDropdownExtraClass");
    });
    
});
// Start Cart Development
    let products = [
        {
            title: "Polyester Backpack For Men - Black and Lime",
            price: 640.00,
            tag: "polyesterBackpackForMen-BlackandLime",
            src: "product/product1.png",
            inCart: 0
        },
        {
            title: "Polyester Backpack For Men - Black and Orange",
            price: 640.00,
            tag: "polyesterBackpackForMen-BlackandOrange",
            src: "product/product2.png",
            inCart: 0
        },
        {
            title: "Polyester Backpack For Men - Red and Black",
            price: 640.00,
            tag: "polyesterBackpackForMen-RedandBlack",
            src: "product/product3.png",
            inCart: 0
        },
        {
            title: "Polyester Backpack For Men - Black and Blue",
            price: 640.00,
            tag: "polyesterBackpackForMen-BlackandBlue",
            src: "product/product4.png",
            inCart: 0
        },
        {
            title: "Polyester Backpack For Men - Navy Blue and Sky Blue",
            price: 640.00,
            tag: "polyesterBackpackForMen-NavyBlueandSkyBlue",
            src: "product/product5.png",
            inCart: 0
        },
        {
            title: "Polyester Backpack For Men - Gray and Lime Green",
            price: 640.00,
            tag: "polyesterBackpackForMen-GrayandLimeGreen",
            src: "product/product6.png",
            inCart: 0
        }
    ]

    let clickedProduct = document.querySelectorAll("#addToCartBtn");
    function receiveDataFromLocalStorageAndPushCartItemsNumber(){
        let localStorageToGetCartNumberS = localStorage.getItem("cartAddedNumber");
        document.querySelector(".cartItemsNumber").innerHTML = localStorageToGetCartNumberS;
    }
    setInterval(receiveDataFromLocalStorageAndPushCartItemsNumber , 1);
    for (let i = 0; i < clickedProduct.length; i++) {
        const elements = clickedProduct[i];
        elements.addEventListener("click" , function(){
            addToCart(products[i]);
            totalCost(products[i]);
        });
    }
    function addToCart(product){
        let getData = localStorage.getItem("cartValue");
        getData = JSON.parse(getData);
        
        if(getData != null){
            if(getData[product.tag] == undefined){
                getData = {
                    ...getData,
                    [product.tag]: product
                }
            }

            getData[product.tag].inCart += 1;
        }else{
            product.inCart = 1;
            getData = {
                [product.tag]: product
            }
        }

        localStorage.setItem("cartValue" , JSON.stringify(getData));

        let localStorageToGetCartNumber = localStorage.getItem("cartAddedNumber");
        localStorageToGetCartNumber = parseInt(localStorageToGetCartNumber);

        if( localStorageToGetCartNumber ){
            localStorage.setItem("cartAddedNumber" , localStorageToGetCartNumber + 1 );
        }else{
            localStorage.setItem("cartAddedNumber" , 1);
        }
    }
    function totalCost(product){
        let totalCostDataReactive = localStorage.getItem("totalCost");
        if( totalCostDataReactive != null){
            totalCostDataReactive = JSON.parse(totalCostDataReactive);
            localStorage.setItem("totalCost" , totalCostDataReactive + product.price);
        }else{
            localStorage.setItem("totalCost" , product.price);
        }
    }
    function cartItemsAdding(){
        let cartItems = localStorage.getItem("cartValue")
        cartItems = JSON.parse(cartItems);
        let cartItemsAllSection = document.querySelector(".cartItemsAllSection");
        if ( cartItems && cartItemsAllSection ) {
            
            Object.values(cartItems).map(item => {
                cartItemsAllSection.innerHTML += `
                <div class="cartProductSection">
                    <img class="cartProductMainImg" src="${item.src}" alt="">
                    <h3>${item.title}</h3><br>
                    <div class="cartPecLeignth">
                        <input id="cartProductItemMinus" type="button" class="btn" value="-">
                        <input value="${item.inCart}" id="cartProductItemValue" type="number" class="form-control mr-sm-2">
                        <input id="cartProductItemPlus" type="button" class="btn" value="+">
                    </div>
                    <span class="cartPPrice">৳ <span class="cartPPriceAmount">${item.price}</span></span>
                    <img class="cartProductClose" src="icon/cross.png" alt=""><br>
                </div>
                `;
            })
        }
    }
    function totalCostRunning(){
        let totalCostRunningLet = localStorage.getItem("totalCost");
        totalCostRunningLet = JSON.parse(totalCostRunningLet);
        let cartTotal = document.querySelector(".cartTotal");

        if(cartTotal && totalCostRunningLet){
            cartTotal.innerHTML += `
            <span class="cartTotalTotalText">total:</span>
            <span class="cartTotalTotalAmount">৳ ${totalCostRunningLet}</span>
            `;
        }
    }
    totalCostRunning();
    cartItemsAdding();
// End Cart Development
// Cart clear start
    let clickToClearBtn = document.querySelectorAll(".cartProductClose");
    
    for (let i = 0; i < clickToClearBtn.length; i++){
        let getDataForLoopin = localStorage.getItem(localStorage.key(i));
        getDataForLoopin = JSON.parse(getDataForLoopin);
        console.log(getDataForLoopin)
        let elements = clickToClearBtn[i];
        elements.addEventListener("click" , function(){
            // $(this).parents("div.cartProductSection").remove();
            clickToClearCartProductsItem(getDataForLoopin[i]);
        });
        function clickToClearCartProductsItem(getDataForLoop){
            console.log("as" , getDataForLoop);
        }
        
    }
    
    // console.log(5600 + 3500 +500 + 750 + 1400 + 750 + 600 + 2000 + 700 + 700 + 3000 + 1035 + 500 + 300);
// Cart clear end