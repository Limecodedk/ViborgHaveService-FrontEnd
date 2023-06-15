import React from 'react'
import { useEffect } from 'react'
import Error from '../components/Error'
import Loader from '../components/Loader'
import useRequestData from '../hooks/useRequestData'

const Viborghaveservice = () => {

  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {

    makeRequest("https://viborghaveservice.onrender.com/haveservice")

  }, [])


  return (
    <>
      {error && <error />}

      {isLoading && <Loader />}

      <section className='service'>
        <div className='ServiceHeader'>
          <h2>Vores Ydelser</h2>
          <div className='line'></div>
          <p>Herunder en oversigt over alle vores services. </p>
          <p> Hvis du måtte have flere spørgsmål, er du velkommen til at kontakte os.</p>
        </div>

        {
          data && data.haveservice.map(r =>
            <div>
              <img className='serviceImg' src={"https://viborghaveservice.onrender.com/images/" + r.image} alt={r.name} />
              <p className='ServiceTitle'>{r.title}</p>
              <p className='ServiceContent'>{r.content}</p>
            </div>


          )
        }
      </section>


    </>
  )
}

export default Viborghaveservice