import { ShowDetails } from '../../store/types';

interface MovieListProps{
    showList: ShowDetails[];
    search: string;
    handleClick: (id: number) => void

}
const MovieList = ({showList,search,handleClick}: MovieListProps) => {
    return (
        <div className="list-items">
         <div className="card">
          { showList.length > 0 && search.length > 0 && 
            showList.map(({show}) => 
          
          <div key={show.id} title={show.name + " || " + show.genres.join(" | ")}>
              
               <a href={show?.url} target="_blank" rel="noreferrer">
                   <img src={show.image?.medium} alt={show.name}/>
               </a>
               
               <div className="card-details">
                   <p className="card-name">{show?.name}</p>
                   <p>Rated - {show.rating?.average || 'N/A'}</p>
                   <button className="btn" onClick={() => handleClick(show?.id)}>Add</button>
                </div>
          
          </div>
          )}
        </div>
     </div>
    )
}

MovieList.defaultProps = {
    showList: [],
    search: "",
    handleClick: () => {},
}
export default MovieList
