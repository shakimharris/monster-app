import react from 'react';

export const SearchBox = ({ placeholder, handleChange }) => 
return (
<input 
    className="search-box"
    type="search" 
    handleChange="Search" 
    handleChange={e => {
    this.setState({ searchField: e.target.value }
    }}
    />
  );
 