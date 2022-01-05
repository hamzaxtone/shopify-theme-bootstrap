/* 
    © 2021 Shopify
    ***
*/

// Scroll to newsletter form after submit
if (window.location.href.indexOf('?customer_posted=true') > -1) {
    setTimeout(function() { 
        document.querySelector('.newsletter').scrollIntoView();
    }, 750);
}