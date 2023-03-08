import ActionLink from "./ButtonIlustreFilm";
import ButtonFavoris from "./ButtonFavoris";

function Movie({nom,description,srcImg,srcHref,id}) {
    const film ={nom,description,srcImg,srcHref};
    return <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="min-h-80 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                        <img alt="img film" src={film.srcImg} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                        <h3 className="text-sm text-gray-700">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {film.nom}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{film.description}</p>
                    </div>
                </div>
                <ActionLink img={srcImg} href={srcHref}/>
                <ButtonFavoris id={id}/>
            </div>
            </div>
}

export default Movie ;
