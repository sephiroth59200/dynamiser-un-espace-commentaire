//Bien placer le script JS a la fin du document HTML juste avant le body pour quil execute tout le DOM



//Creation des differentes variables 
var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var message = document.getElementById('message');
var errorMessage = document.getElementById('error-message');
var form = document.querySelector('form');
var commentList = document.getElementById('comment-list');
 
 //Recuperer le bouton (le submit) et empecher le rafraichissement de la page 
 //Ecoute de l'evenement

form.addEventListener('submit', (event) => {
    
    
// (Condition)Erreur si le prénom , le nom et le message sont vide...
    
if ((firstName.value <1) || (lastName.value <1) || (message.value <1))  {
         errorMessage.style.visibility = 'visible'; // Reintialiser le message d'erreur
         console.log("la condition est fausse"); 
         showError();
         event.preventDefault();
     }
     
//Sinon appeler la fonction pour rajouter un "commentaire" et reinitialser le formulaire  
else {
         createComment();
         console.log("la condition est vraie");
         event.preventDefault();
         errorMessage.style.visibility = 'hidden'; // Message d'erreur cacher 
         ResetForm();      
     }
 })
 
 //Affichage du message d'erreur
 function showError() {errorMessage.style.display = "block";}
 

 //Fonction Reset du formulaire lors de la soumission
 function ResetForm(){form.reset();}


 //Création du nouveau commentaire

 function createComment(){
 
 
//Création des variables pour creer les nouveaux elements..
var newDiv1 = document.createElement('div');
var newDiv2 = document.createElement('div');
var newDiv3 = document.createElement('div');
var newH3 = document.createElement('h3');
var newP = document.createElement('p');
 
//Récuperation des valeurs
newTextH3 = document.createTextNode(firstName.value + ' ' + lastName.value);
newTextP = document.createTextNode(message.value);
 
//Récuperation des classes CSS
newDiv1.classList.add('flex','space-x-4','text-sm','text-gray-500');
newDiv2.classList.add('flex-1','py-10','border-t','border-gray-200');
newDiv3.classList.add('prose','prose-sm','mt-4','max-w-none','text-gray-500');
newH3.classList.add('font-medium','text-gray-900');
    
//Organisation des nouveaux éléments dans l'ordre div1->div2->h3->Texte
                                                       //   ->div3->NewP->Texte
newDiv1.appendChild(newDiv2);
newDiv2.appendChild(newH3);
newH3.appendChild(newTextH3);
newDiv2.appendChild(newDiv3);
newDiv3.appendChild(newP);
newP.appendChild(newTextP);
 
//Publication du commentaire
     commentList.appendChild(newDiv1);
 }





 

 







