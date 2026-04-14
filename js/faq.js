var items = document.querySelectorAll('.faq-item');

for (var i = 0; i < items.length; i++) {
    items[i].onclick = function() {
        this.classList.toggle('active');
    };
}