import react from 'react';

export const SearchBox = ({ placeholder, handleChange }) => 
return (
<input 
    className="search-box"
    type="search" 
    placeholder={placeholder} 
    handleChange={e => {
    this.setState({ searchField: e.target.value }
    }}
    />
  );
 