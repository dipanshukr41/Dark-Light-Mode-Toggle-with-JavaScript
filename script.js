let modebtn = document.querySelector("#mode");
let currmode = "light"; //dark

modebtn.addEventListener("click", () => {
    if (currmode == "light") {
        currmode = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    } else {
        currmode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
    console.log(currmode);
});
