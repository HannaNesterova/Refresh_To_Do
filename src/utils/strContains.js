

 const strContains = (searchString, setSearchString ) => {
     if(searchString.toLowerCase().includes(setSearchString?.toLowerCase())) {
         return true;
     }
     else{
         return false
     }
 }


/*function strContains(card, setSearchString) {
    if (typeof setSearchString === 'string') {
      setSearchString = setSearchString.toLowerCase();
      return (
        card.title.toLowerCase().includes(setSearchString) ||
        card.description.toLowerCase().includes(setSearchString) ||
        card.status.toLowerCase().includes(setSearchString)
      );
    }
    return false;
  }*/
  
  export default strContains;