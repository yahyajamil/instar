const categoryBtn = document.querySelectorAll(".category-btn");
const footerBtn = document.querySelectorAll(".footer-item");


categoryBtn.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        
        categoryBtn.forEach((btn)=>{
            
            btn.classList.remove("active");
        })
        btn.classList.add("active");        
    })
})

footerBtn.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        
        footerBtn.forEach((btn)=>{
            
            btn.classList.remove("active");
        })
        btn.classList.add("active");        
    })
})


