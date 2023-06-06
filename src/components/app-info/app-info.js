
import './app-info.css';

const AppInfo = ({countStar, employees}) => {
    return (
        <div className="app-info">
            <h1>Список працівників компанії Petroleum</h1>
            <h2>Загальна кількість працівників: {employees} </h2>
            <h2>Премію отримуюють: {countStar} </h2>
        </div>
    )
}

export default AppInfo;