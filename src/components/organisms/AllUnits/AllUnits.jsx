import { useState, useEffect } from "react";
import Unit from '../../molecules/Unit/Unit'
import { getData } from "../../utils/common.utils";
import SearchIcon from '@mui/icons-material/Search';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import AddNewUnit from "../AddNewUnit/AddNewUnit";
import './AllUnits.scss';
const AllUnits = () => {

  const [itemList, setItemList] = useState([]);
 
  const fetchData = async () => {
    try {
      const items = await getData('http://localhost:8000/units');
      setItemList(items);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(()=>{
    fetchData()
  },[])

  const [inputText, setInputText] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  let inputHandler = (e) => {

    setInputText(e);
    if (inputText !== '') {
      const filteredData = itemList.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(inputText.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(itemList)
    }
  }
  return (
    <div>
      <div className='units-toolbar shadow'>
        <span className='all-units-text'>All units</span>
        <span className="toolbar-buttons">
          <span class="search-box">
            <input aria-label="search-box-input" onChange={(e) => inputHandler(e.target.value)} class="search-input" type="text" name="search-input" placeholder="Search here" />
            <i className='toolbar-icon'><SearchIcon fontSize='small' /></i>
          </span>
          <i onClick={() => window.location.reload(false)} className='toolbar-icon'><AutorenewOutlinedIcon fontSize='small' /></i>
          <AddNewUnit fetch={fetchData}/>
        </span>
      </div>
      <div className="container">
        <div className="row">
          <div className="table-responsive table-container">
            <table className="table table-fixed table-borderless table-hover bg-white table-font">
              <thead className="table-header units-table-thead">
                <tr className="units-table-tr" >
                  <th scope="col" className="col-2 units-table-th" style={{ paddingLeft: "3.2rem" }}>Status</th>
                  <th scope="col" className="col-2 units-table-th">Serial</th>
                  <th scope="col" className="col-2 units-table-th">Type</th>
                  <th scope="col" className="col-2 units-table-th">Name</th>
                  <th scope="col" className="col-2 units-table-th">Assigned to</th>
                  <th scope="col" className="col-2 units-table-th">From</th>
                </tr>
              </thead>
              <tbody className="units-table-tbody units-table-color">
                {itemList && itemList.length > 0 ?
                (inputText.length > 1 ? (
                  filteredResults.map((item) => {
                    return (
                      <Unit
                        key={item.id}
                        id={item.id}
                        status={item.status}
                        serial={item.serial}
                        type={item.type}
                        name={item.name}
                        person={item.person}
                        fromDate={item.fromDate}>
                      </Unit>
                    )
                  })
                )
                  :

                  itemList.map((item) => (
                    <Unit
                      key={item.id}
                      id={item.id}
                      status={item.status}
                      serial={item.serial}
                      type={item.type}
                      name={item.name}
                      person={item.person}
                      fromDate={item.fromDate}>
                    </Unit>))
                    ) 
                  :
                  <div class="spinner-border spinner-alignment m-5 text-secondary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AllUnits;