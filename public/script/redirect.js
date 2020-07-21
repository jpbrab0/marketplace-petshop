const petshops = document.querySelectorAll(".petshop");
for (let petshop of petshops){
    petshop.addEventListener("click", () => {
        const petshopId = petshop.getAttribute("id")
        window.location.href = `/petshops/${petshopId}`
    })
    
}
