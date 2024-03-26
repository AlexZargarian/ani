window.onload = displayContent();


function displayContent() {
    const params = new URLSearchParams(window.location.search);
    const destination = params.get('destination');
    const cuisine = params.get('cuisine');


    let content = "";
    let headerColor = ""; 
    let textColor = ""; 
    let backgroundColor = "";


if (destination === "rome" && cuisine === "chinese") {
        content = "<h2>Rome - Chinese Cuisine</h2><p>Discover the flavors of China in the heart of Rome.</p>";
        headerColor = "#97333D"; 
        textColor = "#3C0D17"; 
        backgroundColor = "#9E99B5";
    } else if (destination === "rome" && cuisine === "italian") {
    content = "<h2>Rome - Italian Cuisine</h2><p>Welcome to Rome! Enjoy the best Italian cuisine.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
    } else if (destination === "rome" && cuisine === "japanese") {
    content = "<h2>Rome - Japanese Cuisine</h2><p>Experience the exquisite taste of Japan in Rome.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "rome" && cuisine === "mexican") {
    content = "<h2>Rome - Mexican Cuisine</h2><p>Spicy and flavorful Mexican dishes await you in Rome.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "rome" && cuisine === "american") {
    content = "<h2>Rome - American Cuisine</h2><p>Enjoy classic American favorites in Rome.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "rome" && cuisine === "indian") {
    content = "<h2>Rome - Indian Cuisine</h2><p>Savor the rich and diverse flavors of Indian cuisine in Rome.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} 




else if (destination === "paris" && cuisine === "chinese") {
    content = "<h2>Paris - Chinese Cuisine</h2><p>Explore the authentic Chinese flavors in Paris.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "paris" && cuisine === "french") {
    content = "<h2>Paris - French Cuisine</h2><p>Experience the exquisite French cuisine in the heart of Paris.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "paris" && cuisine === "japanese") {
    content = "<h2>Paris - Japanese Cuisine</h2><p>Delight in the refined tastes of Japan in Paris.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "paris" && cuisine === "mexican") {
    content = "<h2>Paris - Mexican Cuisine</h2><p>Discover the zest of Mexico in Paris.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "paris" && cuisine === "american") {
    content = "<h2>Paris - American Cuisine</h2><p>Classic American dishes with a Parisian twist.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "paris" && cuisine === "indian") {
    content = "<h2>Paris - Indian Cuisine</h2><p>Embark on a flavorful journey with Indian cuisine in Paris.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
}

else if (destination === "yerevan" && cuisine === "chinese") {
    content = "<h2>Yerevan - Chinese Cuisine</h2><p>Chinese culinary excellence, now in Yerevan.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17"; 
} else if (destination === "yerevan" && cuisine === "italian") {
    content = "<h2>Yerevan - Italian Cuisine</h2><p>Italian gastronomy meets Armenian hospitality.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "yerevan" && cuisine === "japanese") {
    content = "<h2>Yerevan - Japanese Cuisine</h2><p>Japanese culinary art in the heart of Yerevan.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "yerevan" && cuisine === "mexican") {
    content = "<h2>Yerevan - Mexican Cuisine</h2><p>Yerevan welcomes the vibrant flavors of Mexico.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "yerevan" && cuisine === "american") {
    content = "<h2>Yerevan - American Cuisine</h2><p>Enjoy beloved American meals in Yerevan.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "yerevan" && cuisine === "indian") {
    content = "<h2>Yerevan - Indian Cuisine</h2><p>Indian spices and flavors come alive in Yerevan.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
}

else if (destination === "madrid" && cuisine === "chinese") {
    content = "<h2>Madrid - Chinese Cuisine</h2><p>Explore the wonders of Chinese cuisine in Madrid.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "madrid" && cuisine === "italian") {
    content = "<h2>Madrid - Italian Cuisine</h2><p>Italian culinary masterpieces await in Madrid.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "madrid" && cuisine === "japanese") {
    content = "<h2>Madrid - Japanese Cuisine</h2><p>Madrid's gateway to Japanese gastronomy.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "madrid" && cuisine === "mexican") {
    content = "<h2>Madrid - Mexican Cuisine</h2><p>The spirit of Mexico captured in Madrid's cuisine.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "madrid" && cuisine === "american") {
    content = "<h2>Madrid - American Cuisine</h2><p>American classics served with a Spanish flair.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "madrid" && cuisine === "indian") {
    content = "<h2>Madrid - Indian Cuisine</h2><p>Authentic Indian flavors in the heart of Spain.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
}

else if (destination === "losangeles" && cuisine === "chinese") {
    content = "<h2>Los Angeles - Chinese Cuisine</h2><p>Chinese culinary traditions shine in Los Angeles.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "losangeles" && cuisine === "italian") {
    content = "<h2>Los Angeles - Italian Cuisine</h2><p>Experience Italy's finest in Los Angeles.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "losangeles" && cuisine === "japanese") {
    content = "<h2>Los Angeles - Japanese Cuisine</h2><p>Japanese innovation meets LA style.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "losangeles" && cuisine === "mexican") {
    content = "<h2>Los Angeles - Mexican Cuisine</h2><p>Vibrant Mexican flavors thrive in Los Angeles.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "losangeles" && cuisine === "american") {
    content = "<h2>Los Angeles - American Cuisine</h2><p>Iconic American dishes with an LA twist.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "losangeles" && cuisine === "indian") {
    content = "<h2>Los Angeles - Indian Cuisine</h2><p>Indian culinary treasures in Los Angeles.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
}

else if (destination === "salzburg" && cuisine === "chinese") {
    content = "<h2>Salzburg - Chinese Cuisine</h2><p>Chinese cuisine finds a home in Salzburg.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "salzburg" && cuisine === "italian") {
    content = "<h2>Salzburg - Italian Cuisine</h2><p>Italian elegance in the streets of Salzburg.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "salzburg" && cuisine === "japanese") {
    content = "<h2>Salzburg - Japanese Cuisine</h2><p>Experience the zen of Japanese cuisine in Salzburg.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "salzburg" && cuisine === "mexican") {
    content = "<h2>Salzburg - Mexican Cuisine</h2><p>The bold flavors of Mexico arrive in Salzburg.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "salzburg" && cuisine === "american") {
    content = "<h2>Salzburg - American Cuisine</h2><p>American dining reimagined in Salzburg.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
} else if (destination === "salzburg" && cuisine === "indian") {
    content = "<h2>Salzburg - Indian Cuisine</h2><p>Embark on a spice-filled adventure in Salzburg.</p>";
    headerColor = "#F0F3F4"; 
    textColor = "#CB4335";
    backgroundColor = "3C0D17";
}

    const contentPlaceholder = document.getElementById('content-placeholder');
    contentPlaceholder.innerHTML = content || "<p>Content not found for the selected combination.</p>";

    document.getElementsByClassName("header_class")[0].style.backgroundColor = headerColor;
    //document.getElementById("paragraph_container").style.color = textColor;

    // const header = document.querySelector('.header'); 
    // if (header) {
    //     header.style.backgroundColor = headerColor;
    // }


    document.body.style.backgroundColor = backgroundColor; 
    //document.querySelector('.header').style.backgroundColor = headerColor; 
    document.body.style.color = textColor; 


    if (!headerColor) header.style.backgroundColor = "#EAEAEA"; 
    if (!textColor) document.body.style.color = "#333"; 
    if (!backgroundColor) document.body.style.backgroundColor = "#FFFFFF"; 


}

document.addEventListener('DOMContentLoaded', function() {
    displayContent();
});