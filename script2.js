document.getElementById('cake').addEventListener('click', function() {
    // Move the top layer down (cutting effect)
    document.querySelector('.top').style.transform = 'translateY(50px)';
    
    // Hide the candle and flame
    document.querySelector('.candle').style.display = 'none';

    // Show birthday message
    document.getElementById('message').style.display = 'block';

    // Show balloons
    let balloonsContainer = document.getElementById('balloons');
    balloonsContainer.style.display = 'block';

    // Generate balloons
    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 200 - 100}px`;
        balloon.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        balloon.style.animationDelay = `${Math.random()}s`;
        balloonsContainer.appendChild(balloon);
    }
});
