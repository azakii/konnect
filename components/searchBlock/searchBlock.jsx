
import { useTranslations } from 'next-intl';

const SearchBlock = () => {
    const t = useTranslations('Index');

    return (
        <div className="searchBlock">
        <div className="wrap">
          <div className="search relative-position">
              <i className="fa fa-search"></i>
              <input type="text" className="searchTerm" placeholder={t("search_by_destination_kreator")} />
              <button type="submit" className="searchButton">
                  {t("search")}
              </button>
          </div>
        </div>
        </div>
    );
}

export default SearchBlock;
