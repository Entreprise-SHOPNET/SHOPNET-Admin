

// ----- IDENTIFIANTS FIXES POUR LE LOGIN -----
const VALID_ID = "DashboardShopnetActon.2025";
const VALID_KEY = "Shopnet2025.@";

// ----- RÉCUPÉRATION DU FORMULAIRE -----
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const adminId = document.getElementById("adminId").value;
    const adminKey = document.getElementById("adminKey").value;
    const errorBox = document.getElementById("errorMessage");

    // ---- VÉRIFICATION -----
    if (adminId === VALID_ID && adminKey === VALID_KEY) {
        errorBox.style.display = "none"; // cache erreur

        // ----- MARQUE L’UTILISATEUR COMME CONNECTÉ -----
        sessionStorage.setItem("loggedIn", "true");

        // ----- REDIRECTION VERS LE DASHBOARD -----
        window.location.href = "../Dashboard/Dashboard.html";

    } 
    else {
        // ----- AFFICHER ERREUR -----
        errorBox.innerText = "ID ou Clé d’accès incorrect.";
        errorBox.style.display = "block";
    }
});

// ----- OPTIONNEL : Déconnexion -----
// Si tu veux gérer un bouton déconnexion dans le dashboard
function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
