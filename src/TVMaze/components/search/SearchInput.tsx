interface SearchProps {
    search: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const SearchInput = ({ search, handleChange}: SearchProps) => {
    return (
        <input type="text" 
        className="search-box"
        placeholder="Search for a Movie/TV Series" 
        value={search} 
        onChange={handleChange} /> 
    )
}

SearchInput.defaultProps = {
    search: "",
    handleChange: () => {}
}
export default SearchInput
