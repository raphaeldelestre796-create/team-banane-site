// Vérifie que l'élément existe
const countdown = document.getElementById("countdown");

if (countdown) {

    // Récupère la date enregistrée
    let endDate = localStorage.getItem("teamBananeUpdate");

    // Si aucune date n'existe, on crée une date dans 6 jours
    if (!endDate) {
        endDate = Date.now() + (6 * 24 * 60 * 60 * 1000);
        localStorage.setItem("teamBananeUpdate", endDate);
    }

    endDate = Number(endDate);

    function updateCountdown() {

        const now = Date.now();
        const distance = endDate - now;

        if(distance <= 0){
            countdown.innerHTML = "✅ La mise à jour est disponible !";
            return;
        }

        const jours = Math.floor(distance / 86400000);
        const heures = Math.floor((distance % 86400000) / 3600000);
        const minutes = Math.floor((distance % 3600000) / 60000);
        const secondes = Math.floor((distance % 60000) / 1000);

        countdown.innerHTML =
        `${jours}j ${heures}h ${minutes}m ${secondes}s`;

    }

    updateCountdown();
    setInterval(updateCountdown,1000);

}
