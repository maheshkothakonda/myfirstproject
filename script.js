document.addEventListener('DOMContentLoaded', function() {
    const text = document.createElement('span');
    text.textContent = 'hello world';
    text.style.cursor = 'pointer';
    text.style.position = 'relative';

    const emojiBox = document.createElement('span');
    emojiBox.style.position = 'absolute';
    emojiBox.style.left = '110%';
    emojiBox.style.top = '0';
    emojiBox.style.whiteSpace = 'nowrap';
    emojiBox.style.display = 'none';
    emojiBox.textContent = '❤️❤️❤️ 😍😊😁😄';

    text.appendChild(emojiBox);
    document.body.appendChild(text);

    text.addEventListener('mouseenter', function() {
        emojiBox.style.display = 'inline';
    });

    text.addEventListener('mouseleave', function() {
        emojiBox.style.display = 'none';
    });
});