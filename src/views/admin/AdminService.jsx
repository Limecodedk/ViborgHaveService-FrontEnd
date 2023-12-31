import React, { useEffect } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader'
import useRequestData from '../../hooks/useRequestData'
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const AdminService = () => {

  //init request-hook
  const { data, isLoading, error, makeRequest } = useRequestData()
  const { data: dataDelete, isLoading: isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete } = useRequestData()

  useEffect(() => {

    makeRequest("https://viborghaveservice.onrender.com/haveservice",
    )

  }, [dataDelete])

  const handleDelete = (id, title) => {

    if (window.confirm("Wow er du sikker på at du vil slette " + title + "?")) {
      makeRequestDelete("https://viborghaveservice.onrender.com/haveservice/" + id,
        {
        }, null, "DELETE")
    }
  }

  return (
    <>
      <h1>Service</h1>
      {isLoading && <Loader />}

      {error && <Error />}


      <table>
        <thead>
          <tr>
            <th>Titel:</th>
            <th>Beskrivelse:</th>
            <th>Billede:</th>
            <th>Ret</th>
            <th>Slet</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.haveservice.map(s =>

              <tr key={s._id}>
                <td>{s.title}</td>
                <td>{s.content}</td>
                <td>{s.image}</td>
                <td><Link to={"/admin/editservice/" + s._id} ><FiEdit size={"1.5em"} /></Link></td>
                <td><MdOutlineDelete size={"1.7em"} color='darkred' onClick={() => handleDelete(s._id, s.title)} /></td>
              </tr>
            )
          }
        </tbody >
      </table>

    </>
  )
}

export default AdminService