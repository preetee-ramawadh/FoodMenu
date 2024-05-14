"use strict";

let menu = {
    drinks: [
        "Water", "Tea", "Sweet Tea",
        "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees: [
        "Hamburger w/ Fries",
        "Grilled Cheese w/ Tater Tots",
        "Grilled Chicken w/ Veggies",
        "Chicken Fried Steak w/ Mashed Potatoes",
        "Fried Shrimp w/ Coleslaw",
        "Veggie Plate"
    ],
    desserts: [
        "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};
const menuList = document.getElementById("menuList");

window.onload = function () {

    //dynamically filling up Menu dropdown
    initMenuDropdown();

    menuList.onchange = initItemDropDown;
};

function initMenuDropdown() {

    let menus = Object.keys(menu);

    for (let i = 0; i < menus.length; i++) {
        let theOption = new Option(menus[i], menus[i]);
        menuList.appendChild(theOption);
    }
}

function initItemDropDown() {

    let selectedMenuValue = menuList.value;
    //console.log("selectedMenuValue: " + selectedMenuValue);
    //console.log("selectedMenuValue type: " + typeof (selectedMenuValue));
    //let menus = Object.keys(menu);
    //console.log("menus: " + menus);

    let itemList = document.getElementById("ItemList");

    if (selectedMenuValue == undefined) {
        return;
    }
    else {
        //checking if dropdown is prepopulated
        while (itemList.firstChild) {
            console.log("length more");
            itemList.removeChild(itemList.firstChild);
        }
        itemList.appendChild(new Option("Select..."));

        if (selectedMenuValue in menu) {
            for (let property in menu[selectedMenuValue]) {
                // console.log("property in selected value: " + menu[selectedMenuValue][property]);
                let theOption = new Option(menu[selectedMenuValue][property], menu[selectedMenuValue][property]);
                itemList.appendChild(theOption);
            }
        }
    }
}









