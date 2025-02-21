
function generatePartners() {
    const partners = [
        {
            img: "images/partners/partner-bustour.png",
            alt: "Partner Bus Tours"
        },
        {
            img: "images/partners/partner-cabinrental.png",
            alt: "Partner Cabin Rental"
        },
        {
            img: "images/partners/partner-campingadv.png",
            alt: "Partner Camping Adventure"
        },
        {
            img: "images/partners/partner-collegetours.png",
            alt: "Partner College Tours"
        },
        {
            img: "images/partners/partner-rentalbike.png",
            alt: "Partner Bike Rentals"
        },
        {
            img: "images/partners/partner-tourgroup.png",
            alt: "Partner Tour Group"
        }
    ];

    const partnersContainer = document.getElementById('partners');
    
    partners.forEach(partner => {
        const li = document.createElement('li');
        li.className = 'partner';
        
        const img = document.createElement('img');
        img.src = partner.img;
        img.alt = partner.alt;
        
        li.appendChild(img);
        partnersContainer.appendChild(li);
    });
}

// Call the function when the page loads
window.onload = function() {
    generatePartners();
};
