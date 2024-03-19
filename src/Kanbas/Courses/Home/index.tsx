import ModuleList from "../Modules/List";
import StatusList from "./statusList";
function Home() {
    return (
    <div className="d-flex"> 
        <div style={{ flex: 3 }}> 
            <ModuleList />
        </div>
        <div style={{ flex: 1 }}>
            <StatusList />
        </div>
    </div>
    );
}
export default Home;