function reviewCompany(e){
    e.preventDefault();
    const company = e.target.company.value;
    const title = e.target.title.value;
    const review = e.target.review.value;
    const rating = e.target.rating.value;

    const comReviwe = {
        company,
        title,
        review,
        rating
    };

    axios
        .post('http://localhost:3000/review', comReviwe)
        .then(res => {
            console.log(res);
        }) .catch(err => {
            console.log(err);
        })
};


// function searchReview(e){
//         e.preventDefault();
//         const searchCompany = e.target.search.value;
//         axios
//             .get('https://crudcrud.com/api/19441ea22f0a4d32aa4ac0465528204f/review')
//             .then(res => {
                
//                 for(let i=0; i<res.data.length;i++){
//                     if(res.data[i].company === searchCompany){
//                         console.log(res.data[i]);
//                        // displayReview(res.data);
//                     }  
//                 }
//             })
//             .catch(err => console.log(err));
// }

// function displayReview(reData){
//     const pn = document.getElementById('results');
//     const cn = `<li>${reData.company}-${reData.title}-${reData.review}-${reData.rating}</li>`
//     pn.innerHTML = pn.innerHTML+cn;
// }



function searchReview(e) {
    e.preventDefault();
    const searchCompany = e.target.search.value;

    axios
        .get('http://localhost:3000/review')
        .then(res => {
            const matchingReviews = [];

            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].company === searchCompany) {
                    matchingReviews.push(res.data[i]);
                }
            }

            if (matchingReviews.length > 0) {
                displayReviews(matchingReviews);
            } else {
                const div = document.getElementById('results');
                div.innerHTML = div.innerHTML+'<h4>No Review found for this Company!</h4>';
            }
        })
        .catch(err => console.log(err));
}

function displayReviews(reviews) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ""; 

    for (const review of reviews) {
        const reviewItem = document.createElement('li');
        reviewItem.innerHTML = `<h4>${review.company} - ${review.title} - ${review.review} - ${review.rating}</h4>`;
        resultsContainer.appendChild(reviewItem);
    }
}

