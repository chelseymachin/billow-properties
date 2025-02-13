import searchBarStyles from '../styles/SearchBar.module.scss'
import { Button } from '@/components/ui/button'
import buttonStyles from '@/styles/Button.module.scss'

const SearchBar = () => {

    return (
        <div className={searchBarStyles.searchBar}>
            <input 
                placeholder="Search location..."
            />
            <Button className={buttonStyles.button}>
                Search
            </Button>
        </div>
    )
}

export default SearchBar;