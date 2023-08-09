// Declare reqired Variables
const filterItem = document.querySelector(".items");
const imgFilter = document.querySelectorAll(".gallery-item");

window.onload = () => {
    filterItem.addEventListener("click", (SelectedItem) => {
        if (SelectedItem.target.classList.contains("item")) {
            filterItem.querySelector(".active").classList.remove("active");
            SelectedItem.target.classList.add("active");
            // console.log("true");
            let filterName = SelectedItem.target.getAttribute("data-name");
            // console.log(filterName);
            imgFilter.forEach((image) => {
                let filterimages = image.getAttribute("data-name");
                // console.log(filterimages);
                if ((filterimages == filterName) || filterName == "all") {
                    image.classList.remove("hide");
                    image.classList.add("show");
                } else {
                    image.classList.add("hide");
                    image.classList.remove("show");
                }

            });
        }


    });
    for (let index = 0; index < imgFilter.length; index++) {
        imgFilter[index].setAttribute("onclick", "preview(this)");
    }
}

//selecting Requirement Elements

const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const categoryImgName = previewBox.querySelector(".title p");
const closeIcon = previewBox.querySelector(".icon");
const shadow = document.querySelector(".shadow");

function preview(elements) {
    let selectedPreviewImg = elements.querySelector("img").src;
    let selectedImg = elements.getAttribute("data-name");
    categoryImgName.textContent = selectedImg;
    previewImg.src = selectedPreviewImg;
    shadow.classList.add("show");
    // console.log(selectedPreviewImg);
    previewBox.classList.add("show");
    closeIcon.addEventListener("click", () => {
        previewBox.classList.remove("show");
        shadow.classList.remove("show");
        
        
    })
    shadow.addEventListener("click",()=>{
        previewBox.classList.remove("show");
        shadow.classList.remove("show");
    })

}


