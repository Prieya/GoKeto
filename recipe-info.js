
//blur Image
const loadImage = document.querySelector('#loadImage');
var load = 0;
var int = setInterval(blurring, 30);

function blurring(){
    load++;
    if(load > 99){
        clearInterval(int);
    }
    loadImage.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) =>{
    return(num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}



function clickImage(id){
    const element = document.getElementById(id);
    if(element.click){
        switch(id){ 
            case "ChickenStirFry":
                window.open("https://www.dietdoctor.com/recipes/asian-chicken-stir-fry-with-broccoli");
                break;
            case "breakfastScramble":
                window.open("https://www.flavcity.com/keto-breakfast-scramble/");
                break;
            case "KetoBrownies":
                window.open("https://www.instrupix.com/easy-keto-brownies/");
                break;
            case "Cheesecake":
                window.open("https://www.delish.com/cooking/recipe-ideas/recipes/a58711/keto-cheesecake-recipe/");
                break;
            case "DevilEgg":
                window.open("https://drivemehungry.com/easy-classic-keto-deviled-eggs/");
                break;
            case "EggCassarole":
                window.open("https://www.dietdoctor.com/recipes/keto-egg-casserole-with-zucchini-and-ham");
                break;
            case "Mufin":
                window.open("https://healthyfitnessmeals.com/breakfast-egg-muffins/");
                break;
            case "GreekSaladWithGrilledChicken":
                window.open("https://www.foodiecrush.com/greek-salad-with-chicken/");
                break;
            case "BeconCheeseBurgerWrap":
                window.open("https://www.dietdoctor.com/recipes/keto-bacon-cheeseburger-wraps");
                break;
            case "KetoButterBurger":
                window.open("https://www.dietdoctor.com/recipes/keto-butter-burgers");
                break;
            case "ZoodlePestoChickenSalad":
                window.open("https://themodernproper.com/pesto-zoodle-salad");
                break;
            case "SteakBiteSalad":
                window.open("https://www.dietdoctor.com/recipes/garlic-butter-steak-bite-salad-with-tarragon-dressing");
                break;
            case "KetoFriedChickenBroccoli":
                window.open("https://www.dietdoctor.com/recipes/keto-fried-chicken-broccoli")
                break;
            case "KetoChickenEggplant":
                window.open("https://www.dietdoctor.com/recipes/keto-chicken-and-eggplant-sheet-pan-with-tzatziki")
                break;
            case "EggCustard":
                window.open("https://www.dietdoctor.com/recipes/dairy-free-keto-egg-custard-tarts")
                break;
            case "tiramisu":
                window.open("https://www.dietdoctor.com/recipes/keto-tiramisu")
                break;
            case "CinnamonRoll":
                window.open("https://www.dietdoctor.com/recipes/keto-cinnamon-rolls")
                break;
            case "ChocolateChipCookies":
                window.open("https://kirbiecravings.com/keto-chocolate-chip-cookies/")
                break;
            case "CheeseChips":
                window.open("https://how2doketo.com/keto-cheese-chips/")
                break;
            case "CheddarCheeseBalls":
                window.open("https://www.dietdoctor.com/recipes/keto-cheddar-cheese-bacon-balls")
                break;
            case "SteakBiteSalad":
                window.open("https://www.dietdoctor.com/recipes/keto-sandwich-with-smoked-salmon-and-horseradish-cream")
                break;
            case "BeconWrapped":
                window.open("https://www.gather-be.com/post/bacon-wrapped-halloumi-fries-green-goddess-dip")
                break;
            case "CrispyTofu":
                window.open("https://www.ruled.me/crispy-tofu-and-bok-choy-salad/")
                break;
            case "GrilledEggplant":
                window.open("https://kalynskitchen.com/spicy-grilled-eggplant-recipe-with-red/")
                break;
            case "Porridge":
                window.open("https://www.ruled.me/vegan-keto-porridge/")
                break;
            
        }
        
    }
}

