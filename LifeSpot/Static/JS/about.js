﻿function getReview() {

    let review = {}

    
    review["userName"] = prompt("Как вас зовут ?")
    if (review["userName"] == null) {
        alert("Вы не ввели имя. Будет использованно имя по умолчанию: \"Анонимус\"");
        review["userName"] = "Анонимус";
    }

    
    review["comment"] = prompt("Напишите свой отзыв")
    if (review["comment"] == null) {
        return
    }

    
    review["date"] = new Date().toLocaleString()

   
    writeReview(review);
}

const writeReview = review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '<div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>` +
        '</div>'; 
}