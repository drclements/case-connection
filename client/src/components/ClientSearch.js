import React, {useState} from "react";
import { Input } from "../styled-components/input";
import { Label } from "../styled-components/Label";

function ClientSearch( {onSearch} ) {

  function handleSearch(event) {
    onSearch(event)
  }

  return (

    <div style={{margin: "0 5rem"}}>
      <Label htmlFor="search">Search For Mentee:</Label>
      <Input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default ClientSearch;