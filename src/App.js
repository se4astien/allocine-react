import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Movies from "./components/Movies";

function App() {
  const [isLoading, setIsLoading] = useState(false); // au chargement de l'API
  // 1. Qu'est ce qui change dans la page ?
  const [movies, setMovies] = useState([]); // la liste des films
  const [selectedTab, setSelectedTab] = useState("popular"); // l'onglet à selectionner par default

  // 2. On déclare la fonction qui va faire un appel à l'API pour récupérer les données
  const fetchData = async () => {
    try {
      // On charge les données
      setIsLoading(true);
      const response = await axios.get(
        `https://api-allocine.herokuapp.com/api/movies/${selectedTab}`
      );
      // On stop le chargement des données
      setIsLoading(false);
      // On récupère le résultat
      setMovies(response.data.results);
      // console.log(response.data.results);
    } catch (error) {
      alert("An error occured");
    }
  };

  // Le tableau vide indiquera à React d'executer cet effet seulement au premier chargement du composant (étape de création)
  // 3. On va maintenant charger les données uniquement à la création du composant
  useEffect(() => {
    fetchData(selectedTab); // fetchData exécute la variable selectedTab
  }, [selectedTab]); // Le tableau indique à React quelles variables il doit surveiller pour déclencher l'effet

  return (
    <div className="container">
      <Header />
      <section className="wrapper">
        <Menu selected={selectedTab} setSelected={setSelectedTab} />
        {isLoading === true ? (
          <p>En cours de chargement...</p>
        ) : (
          <Movies movies={movies} />
        )}
      </section>
    </div>
  );
}

export default App;
