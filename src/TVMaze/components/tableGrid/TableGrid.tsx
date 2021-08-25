import { ShowDetails } from '../../store/types';

interface TableGridProps{
  listItem: ShowDetails[];
  handleDelete: (id: number) => void;
}
const TableGrid = ({listItem: tableList,handleDelete}: TableGridProps) => {
    return (
        <>
         {tableList.length > 0 && <table id="data-grid">

            <thead>
             <tr>
                {["Name","Rating","Language","Visit Link",""].map((item,indx) => <th key={indx}>{item}</th>)}
            </tr>
            </thead>

            <tbody>
            { tableList.map(({show}) => <tr key={show.id}>
                <td>{show?.name}</td>
                <td>{show?.rating?.average || 'N/A'}</td>
                <td>{show?.language || 'N/A'}</td>
                <td><a href={show?.url} target="_blank" rel="noreferrer"><img className="table-img" src={show.image?.medium} alt={show.name}/></a></td>
                <td><button className="btn" onClick={() => handleDelete(show.id)}>Delete</button></td>
                </tr>)}
            </tbody>
            
      </table>}
      </>
    )

}

TableGrid.defaultProps = {
    listItem: [],
    handleDelete: () => {}
}
export default TableGrid
