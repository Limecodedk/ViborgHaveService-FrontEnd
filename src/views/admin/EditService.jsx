import React, { useEffect, useState } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader'
import { useParams } from 'react-router-dom';

import useRequestData from '../../hooks/useRequestData'

const EditWish = () => {

  const { id } = useParams()

  //init request-hook
  const { data, isLoading, error, makeRequest } = useRequestData()
  /* const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData() */

  useEffect(() => {

    // hent oplysninger på service der skal rettets ud fra id
    makeRequest("https://viborghaveservice.onrender.com/haveservice/" + id,
      {

      })

  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    let fd = new FormData(e.target)
    makeRequest("https://viborghaveservice.onrender.com/haveservice/" + id,
      {
        "Content-Type": ""
      }, null, "PUT", fd
    )
  }

  return (
    <>
      <h1>Ret Service </h1>
      {isLoading && <Loader />}

      {error && <Error error={error} />}

      {
        data &&

        < form onSubmit={e => handleSubmit(e)}>
          <input type="text" name="title" defaultValue={data.Records.title} placeholder='Service titel' required />
          <input type="text" name="content" defaultValue={data.Records.content} id="" placeholder='skriv en tekst' />
          <input type="file" name="image" id="" />

          <button type='submit'>Ret Service</button>
        </form >

      }

    </>
  )
}

export default EditWish;