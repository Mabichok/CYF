document.addEventListener('DOMContentLoaded', () => {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const content = link.previousElementSibling;

            if (link.classList.contains('expanded')) {
                link.textContent = 'Read More';
                link.classList.remove('expanded');
                content.style.maxHeight = '3em'; // Adjust to your desired collapsed height
            } else {
                link.textContent = 'Read Less';
                link.classList.add('expanded');
                content.style.maxHeight = 'none'; // Fully expand the content
            }
        });
    });
});
