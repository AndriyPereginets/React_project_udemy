
import SearchPanel from '../search-panel/search-panel';
import AppInfo from '../app-info/app-info';
import './app.css';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {

    const data = [
        {name:"Andy. P", salary: 1500, increase: true, id: 1 },
        {name:"Viktor. B", salary: 250, increase: false, id: 2},
        {name:"Olexander. B", salary: 50, increase: true, id: 3}
    ];

    return (
        <div className="app" >
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;