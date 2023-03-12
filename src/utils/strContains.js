

const strContains = (searchString, setSearchString ) => {
    if(searchString.toLowerCase().includes(setSearchString.toLowerCase())) {
        return true;
    }
    else{
        return false
    }
}

export default strContains;