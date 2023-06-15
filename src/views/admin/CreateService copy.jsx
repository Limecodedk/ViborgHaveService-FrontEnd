import React, { useEffect, useState } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader'

import useRequestData from '../../hooks/useRequestData'

const CreateWish = () => {

  //init request-hook
  const { data, isLoading, error, makeRequest } = useRequestData()
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {

    makeRequestService("https://viborghaveservice.onrender.com/haveservice",
    )

  }, [])

  const handleSubmit = e => {
    e.preventDefault();

    makeRequest("https://viborghaveservice.onrender.com/haveservice",
      {
        "Content-Type": ""
      }, null, "POST",
      {
        "title": title,
        "content": content,
        "images": image,
      })
    e.target.reset() //Tøm input felter efter oprettelse 
  }

  return (
    <>
      <h1>Tilføj et ønske</h1>
      {isLoading && <Loader />}

      {error && <Error />}

      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" onChange={e => setTitle(e.target.value)} placeholder='Service titel' required />
        <input type="text" name="" id="" onChange={e => setContent(e.target.value)} placeholder='skriv en tekst' />
        {/*  <input type="file" name="" id="" ref={ } /> */}

        <button type='submit'>Opret Service</button>
      </form>
      {
        data &&
        < article >
          {data.fields.Item} er oprettet
        </article >
      }

    </>
  )
}

export default CreateWish
