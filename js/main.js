let name = document.querySelector(".home h2"), desc = document.querySelector(".home p"), minus = 
    document.querySelector(".minus"), count = document.querySelector(".control input"), plus = 
    document.querySelector(".plus"), ranch = document.querySelector(".ranch"), chilli = 
    document.querySelector(".chilli"), nacho = document.querySelector(".nacho"), image = "nacho_cheese.webp";

// Buttons Animations
minus.onclick = () => {
    if (Number(count.value) <= 1) return;
    count.value = Number(count.value) - 1;
};
plus.onclick = () => {
    count.value = Number(count.value) + 1;
};

// Pack Animations
var anime = anime.timeline({
    autoplay: false
});

anime.add({
    targets: ".image",
    translateX: -1600,
    rotate: "2deg",
    changeComplete: function(anim) {
        document.querySelector(".image").src = "images/" + image;
    }
}).add({
    targets: ".image",
    translateX: 0,
    rotate: "-15deg"
});

ranch.onclick = () => {
    if (image != "cool_ranch.webp"){
        image = "cool_ranch.webp";
        anime.play();

        name.innerText = "COOL RANCH";
        desc.innerText = "No seasoning has ever reigned down a cool factor quite like these zesty, crunchy tortilla chips.";
    }
};

chilli.onclick = () => {
    if (image != "spicy_sweet_chili.webp"){
        image = "spicy_sweet_chili.webp";
        anime.play();

        name.innerText = "SWEET CHILLI";
        desc.innerText = "This isn't just a chip. It's fuel for disruption — our flavors ignite adventure and inspire action.";
    }
};

nacho.onclick = () => {
    if (image != "nacho_cheese.webp"){
        image = "nacho_cheese.webp";
        anime.play();
        
        name.innerText = "NACHO CHEESE";
        desc.innerText = "Savory nacho cheese meets crunchy tortilla chip in this crazy delicious snack. 110% awesome.";
    }
};