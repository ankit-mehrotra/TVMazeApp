import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './TVMaze/store/reducers';
import { fetchMovies } from './TVMaze/store/actions/MovieTvAction';
import { addTableItem,removeTableItem } from './TVMaze/store/actions/TableAction';
import './App.css';
import { TableList } from './TVMaze/store/types';
import SearchInput from './TVMaze/components/search';
import MovieList from './TVMaze/components/MovieList';
import TableGrid from './TVMaze/components/tableGrid';

function App() {

  const[search, setSearch] = useState('');
  const {list : showList, error, loading} = useSelector((state: RootState)  => state.movieTvList);
  const tableList: TableList = useSelector((state: RootState) => state.tableList);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    let mounted = true;
    if(mounted && search.length > 0){
       dispatch(fetchMovies(search))
    }
    return () => { 
      mounted = false;
    }
    
  }, [search,dispatch]);

  const handleClick = (id: number): void => {
      dispatch(addTableItem(id,showList))
  }

  const handleDelete = (index: number) => {
    dispatch(removeTableItem(index))
  }
  return (
    <div className="container">
      <SearchInput handleChange={handleChange} search={search}/>
      {loading && <h1>Loading</h1>}
      {search.length === 0 && <h3> No Result to Display...</h3>}
      {error && <h2>Something went wrong</h2>}
      <MovieList handleClick={handleClick} showList={showList} search={search}/>
      <TableGrid listItem={tableList.listItem} handleDelete={handleDelete} />
    </div>
   
  );
}

export default App;
