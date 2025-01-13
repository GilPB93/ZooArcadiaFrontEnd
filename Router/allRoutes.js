import Route from "./Route.js";

//Définir ici les routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", "/js/home.js"),
    new Route("/services", "Services", "/pages/services.html"),
    new Route("/habitats", "Habitats", "/pages/habitats.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/avis", "Avis", "/pages/avis.html"),
    new Route("/connexion", "Connexion", "/pages/auth/connexion.html", "/js/auth/connexion.js"),
    new Route("/marais", "Marais", "/pages/habitat/marais.html"),
    new Route("/savane", "Savane", "/pages/habitat/savane.html"),
    new Route("/jungle", "Jungle", "/pages/habitat/jungle.html"),
    new Route("/veterinaire", "Espace vétérinaire", "/pages/auth/vet.html"),
    new Route("/administrateur", "Espace administrateur", "/pages/auth/admin.html"),
    new Route("/employe", "Espace employé", "/pages/auth/employe.html"),


];
    
    
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";
