import React, { useEffect, useState } from 'react'
import IntegritySection from '../../molecules/IntegritySection/IntegritySection'
import NavigationBar from '../../molecules/NavigationBar/NavigationBar'
import { getData } from '../../utils/common.utils';

const Integrity = () => {
    const [unitsList, setUnitsList] = useState([]);
    const [equipmentList,setEquipmentList] = useState([]);
    const url = window.location.href;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const units = await getData('http://localhost:8000/units');
                const equipments = await getData('http://localhost:8000/equipments')
                setUnitsList(units);
                setEquipmentList(equipments);

            } catch (error) {
                console.log("error", error.message);
            }
        };
        fetchData();
    }, [url]);

    let archivedEquipments = [];
    let countArchivedStored = 0;
    let countArchivedEl = 0;
    let countArray = [];

    for(let i = 0; i < equipmentList.length; i++){
        if(equipmentList[i].archive === true){
            archivedEquipments.push(equipmentList[i]);
        }
    }
    
    for(let i = 0; i<archivedEquipments.length; i++){
        for(let j = 0; j<unitsList.length; j++){
            if(archivedEquipments[i].name === unitsList[j].type){
                countArchivedStored+=1;
            }
        }
    }
    const userExists = (name) => {
        return equipmentList.some((el) => {
            for(let i = 0; i< el.parts.length; i++){
                if(el.parts[i].partName === name){
                    countArchivedEl+=1;
                }
            }

            countArray.push(countArchivedEl);

            return countArchivedEl;
          
        }); 
    }
    
    
    for(let i = 0; i<archivedEquipments.length; i++){
        userExists(archivedEquipments[i].name);
    }

    const countArchivedParts= countArray.reduce(add, 0);

    function add(accumulator, a) {
      return accumulator + a;
    }
    
    return (
        <div><NavigationBar></NavigationBar><IntegritySection archivedPartsValue={countArchivedParts} archivedStoredValue={countArchivedStored}></IntegritySection></div>
    )
}

export default Integrity