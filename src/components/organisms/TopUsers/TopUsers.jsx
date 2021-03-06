import React, { useEffect, useState } from 'react'
import NavigationBar from '../../molecules/NavigationBar/NavigationBar'
import TopUsersContentSection from '../../molecules/TopUsersContentSection/TopUsersContentSection'
import { getData } from '../../utils/common.utils'
import './TopUsers.scss'

const TopUsers = () => {

  const [usersList, setUsersList] = useState([]);
  const url = window.location.href;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getData("http://localhost:8000/persons")
        setUsersList(users);

      } catch (error) {
        console.log("error", error.message);
      }
    };
    fetchData();

  }, [url])

  const topUsersList = [...usersList]

  for (let i = 0; i < usersList.length; i++) {
    topUsersList[i].units = usersList[i].information.length;
  }

  topUsersList.sort((a, b) => (b.units - a.units));

  return (
    <div><NavigationBar></NavigationBar>
      <div className="row">
        <div className="table-responsive table-container-reports">
          <table className="table table-fixed table-borderless table-hover bg-white">
            <thead className="table-header-topusers">
              <tr >
                <th scope="col" className="col-2">Units</th>
                <th scope="col" className="col-2 col-user">User</th>
                <th scope="col" className="col-2">Email</th>
                <th scope="col" className="col-2">Skype</th>
              </tr>
            </thead>
            <tbody>
              {topUsersList && topUsersList.length > 0 ?
                topUsersList.map((user) => (
                  <TopUsersContentSection key={user.id} id={user.id} person={user.personName} email={user.email} skype={user.skype} units={user.units}></TopUsersContentSection>
                ))
                :
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TopUsers