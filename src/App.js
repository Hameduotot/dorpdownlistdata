import "./index.css";
import DataList from "./components/DataList/DataList";

function App() {
  function handleChangedData(listData, text, setFilterData) {
    const value = text.toLowerCase();
    const filterList = listData.filter((listObj) => {
      if (value !== "" && listObj.city.toLowerCase().indexOf(value) > -1)
        return true;
    });
    setFilterData(filterList);
  }

  return (
    <>
      <DataList onChangedFunction={handleChangedData} />
    </>
  );
}

export default App;
