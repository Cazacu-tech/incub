function MovieFavori({nom,description,srcImg,srcHref}) {
    const film ={nom,description,srcImg,srcHref};
    return <div>
                <h1 className="mb-2 text-center">{film.nom}</h1>
                <span className="mb-2">{film.description}</span>
                <img src={film.srcImg} className="img-fluid m-auto" alt=""></img>
            </div>
}

export default MovieFavori;
