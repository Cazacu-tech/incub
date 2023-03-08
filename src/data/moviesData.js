/* eslint-disable eqeqeq */
export const films = [{
    id:1,
    nom:'les affranchis',
    description:'film de mafieux basé sur la vie de henry hill',
    srcImg:'https://www.themoviedb.org/t/p/w94_and_h141_bestv2/v4c6WMVqUlSJHMyjHNj72iTFGhm.jpg',
    srcHref: ""
},
{
    id:2,
    nom:'le seigneur des anneaux',
    description:'Saga de films basé sur les livres de l\'auteur britannique John Ronald Reuel pathlkien',
    srcImg:'https://www.themoviedb.org/t/p/w94_and_h141_bestv2/gpHezxjqAnZ21o8T9vSSrUKygQ3.jpg',
    srcHref: ""
},
{
    id:3,
    nom:'Casino',
    description:'Film sur la vie d\'un associé de la mafia américaine',
    srcImg:'https://www.themoviedb.org/t/p/w94_and_h141_bestv2/4a0I37pYcdFY6HeutalHQTGs0sl.jpg',
    srcHref: ""
},
]
export function findById(id){
    const found = films.find(element => element.id == id);
    return found
}