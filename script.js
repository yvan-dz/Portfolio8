// Script pour faire tomber les flocons de neige
(function() {
    // Créer un flocon de neige
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
        snowflake.textContent = '❄';

        // Append snowflake to the hero section
        document.querySelector('.hero').appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    // Créer plusieurs flocons de neige à intervalle régulier
    setInterval(createSnowflake, 200);
})();
