import React, { useEffect, useState } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader'

import useRequestData from '../../hooks/useRequestData'

const CreateWish = () => {

  //init request-hook
  const { data, isLoading, error, makeRequest } = useRequestData()
  /* const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData() */

  /*   const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('') */

  /*   useEffect(() => {
  
      makeRequestService("https://viborghaveservice.onrender.com/haveservice",
      )
  
    }, []) */

  const handleSubmit = e => {
    e.preventDefault();
    let fd = new FormData(e.target)
    makeRequest("https://viborghaveservice.onrender.com/haveservice",
      {
        "Content-Type": ""
      }, null, "POST", fd
    )
    e.target.reset() //Tøm input felter efter oprettelse 
  }

  return (
    <>
      <h1>Tilføj et ønske</h1>
      {isLoading && <Loader />}

      {error && <Error />}

      <form onSubmit={handleSubmit}>
        <input type="text" name="title" id="" placeholder='Service titel' required />
        <input type="text" name="content" id="" placeholder='skriv en tekst' />
        <input type="file" name="image" id="" />

        <button type='submit'>Opret Service</button>
      </form>
      {
        data &&
        < article >
          {data.created.title} er oprettet
        </article >
      }

    </>
  )
}

export default CreateWish
