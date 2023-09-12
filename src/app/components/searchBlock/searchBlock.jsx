
const SearchBlock = () => {
    return (
        <div className="searchBlock">
        <div className="wrap">
          <div className="search relative-position">
              <i className="fa fa-search"></i>
              <input type="text" className="searchTerm" placeholder="Search by Destination, Kreator...." />
              <button type="submit" className="searchButton">
                  Search
              </button>
          </div>
        </div>
        </div>
    );
}

export default SearchBlock;
