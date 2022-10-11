const Home = () => {
    return (
        <div className={'home-container'}>
            <div className={'code-container'}>
                <code className={'code'}>
                    <h3 style={{margin:'0'}}>Sujet REACT.JS</h3><br/>
                    Pour ce petit projet de TodoLIST, nous voulons a présent rajouter une petite fonctionnalité supplémentaire.<br/>
                    Nous voulons créer un bouton qui nous permette de switch entre un thème clair(jour) ou un thème sombre (nuit)<br/>
                    Ce petit bouton devras contenir une icone de "lune" ou de "soleil" selon le mode dans lequel on se trouve.<br/><br/>
                    REGLES :<br/>
                    1. Créer un composant pour le bouton<br/>
                    2. Définir 2 "thèmes" en css<br/>
                    3. Rendre une appli avec le bouton fonctionnel.<br/><br/>
                    BONUS :<br/>
                    1. Rajouter un changement de couleur du bouton aussi<br/>
                    2. Rajouter une animation sur le bouton (lorsqu'il change de couleur)<br/>
                    3. Rajouter une animation sur le thème (lorsqu'il change de couleur)<br/><br/>
                    RENDU :<br/>
                    Votre dossier SANS LE DOSSIER "node_modules", zippé dans un fichier avec votre nom et prénom svp.<br/>
                </code>
            </div>
        </div>
    )
}

export default Home;