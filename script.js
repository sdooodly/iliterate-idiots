document.addEventListener('DOMContentLoaded', function() {
    const bookTitles = document.querySelectorAll('.book-title');
  
    bookTitles.forEach(title => {
      title.addEventListener('click', function() {
        const details = this.nextElementSibling;
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
      });
    });
  });
  