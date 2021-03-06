import { ADD_MOVIE } from '../Actions/type';
import { SEARCH_MOVIE } from '../Actions/type';
import { SET_RATE } from '../Actions/type';
import { FILTER_MOVIE } from '../Actions/type';
import { REMOVE_MOVIE,EDIT_MOVIE } from '../Actions/type';
import uuid from "uuid";
const  description=[
    {
      source: "https://media.senscritique.com/media/000004710747/source_big/Inception.jpg",
      title: " Inception",
      rating: 4,
      year: 2010,
      id:uuid()
    },
  
    {
      source: "https://images-na.ssl-images-amazon.com/images/I/81nMSrJHrJL._AC_SY445_.jpg",
      title: " No escape",
      rating: 5,
      year: 2015,
      id:uuid()
      
    },
    {
      source: "http://fr.web.img4.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/19/09/16/11/03/3523781.jpg",
      title: " Fractured",
      rating: 2,
      year: 2019,
      id:uuid()
     
    },
    {
      source: "http://www.linflux.com/wp-content/uploads/2018/03/blade-runner-2049-affiche.jpg",
      title: " Blade Runner",
      rating: 3,
      year: 2017,
      id:uuid()
      
    },
    {
      source: "http://fr.web.img2.acsta.net/r_1280_720/pictures/19/10/16/09/16/4845967.jpg",
      title: "Under Water",
      rating: 5,
      year: 2019,
      id:uuid()
     
    },
    {
      source: "http://fr.web.img4.acsta.net/c_215_290/pictures/19/02/25/12/06/2908996.jpg",
      title: "The Lion King",
      rating: 4,
      year: 2019,
      id:uuid()
     
    },
    
  ];

const MovieReducer = ( state = {MoviesDescription: description,keyword:"", rating: 1} , action) => {
    switch(action.type){
        case ADD_MOVIE : 
        return {
          ...state,
          MoviesDescription: state.MoviesDescription.concat(action.payload)
        };
        case SEARCH_MOVIE:
          return {
            ...state,
            MoviesDescription: description.filter(el => el.rating >= action.payload.rating && el.title.toLowerCase().includes(action.payload.title.toLowerCase().trim() )  )
          }
          case REMOVE_MOVIE:
          return {
            ...state,
            MoviesDescription:state.MoviesDescription.filter(el => el.id !== action.payload) 
          }
          case EDIT_MOVIE:
          return {
            ...state,
            MoviesDescription:state.MoviesDescription.map(el => el.id === action.payload.id?action.payload:el) 
          }
        
        default : return state ;
    }
}
export default MovieReducer;