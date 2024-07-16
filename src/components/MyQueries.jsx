
import AddQueriesPage from '../pages/AddQueriesPage';
import AddQueriesBanner from './AddQueriesBanner';

const MyQueries = () => {
    return (
        <div className='container mx-auto'>
            <AddQueriesBanner></AddQueriesBanner>
            <AddQueriesPage></AddQueriesPage>
        </div>
    );
};

export default MyQueries;