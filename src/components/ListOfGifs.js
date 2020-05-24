import React, { useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import Gif from './Gif';

export default function ListOfGifs({ params }) {
  const [gifs, setGifs] = useState([])
  const { keyword } = params;

  useEffect(function () {
    getGifs({ keyword }).then((gifs) => {
      return setGifs(gifs)
    })
  }, [keyword])

  return (
    <>
      {gifs.map(({ title, id, url }) =>
        <Gif
          key={id}
          url={url}
          id={id}
          title={title}
        />
      )}
    </>
  )
}