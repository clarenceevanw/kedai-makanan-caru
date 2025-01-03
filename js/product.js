export const products = [{
    img : "./img/Menu/nasi-bali.jpeg",
    nama: "Nasi Bali",
    harga: 35
},
{
    img : "./img/Menu/nasi-ayam-rica .jpeg",
    nama: "Ayam Rica",
    harga: 35
},
{
    img : "./img/Menu/nasi-lemak-malaysia.jpeg",
    nama: "Nasi Lemak",
    harga: 35
},
{
    img : "./img/Menu/ayam-gulai.jpeg",
    nama: "Nasi Ayam Gulai",
    harga: 35
},
{
    img : "./img/Menu/nasi-goreng-cumi.jpeg",
    nama: "Nasi Goreng Cumi",
    harga: 35
},
{
    img : "./img/Menu/Nasi Campur ayam cabe garam.jpeg",
    nama: "Nasi Ayam Cabe Garam",
    harga: 35
},
{
    img : "./img/Menu/kungpaoXgeneraltsoChicken.jpeg",
    nama: "Kungpao X General Tso Chicken",
    harga: 35
}];

export function insertProduct(){
    let menuMakanan = "";
    products.forEach((productItem)=>{
        const html = `
            <div class="menu-card">
                <img src="${productItem.img}" alt="Nasi-Bali">
                <h3 class="menu-card-title">- ${productItem.nama} -</h3>
                <p class="menu-card-price">IDR ${productItem.harga}K</p>
            </div>
        `
        menuMakanan += html;
    })
    document.querySelector(".menuRow").innerHTML = menuMakanan;
}