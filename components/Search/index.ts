import { withInstall } from '../util/type';
import JAdvancedSearch from './Advanced/index.vue';
import JSearch from './Search.vue';

const AdvancedSearch = withInstall(JAdvancedSearch, 'JAdvancedSearch');
const Search = withInstall(JSearch, 'JSearch');

export { AdvancedSearch };
export default Search;
