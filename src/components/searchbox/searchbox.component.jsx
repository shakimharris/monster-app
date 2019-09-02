import react from 'react';

export const SearchBox = () => 
return (
<input 
    className="search-box"
    type="search" 
    placeholder="Search" 
    onChange={e => {
    this.setState({ searchField: e.target.value }
  );
  }} />