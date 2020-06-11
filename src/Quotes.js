import React, { useEffect, useState } from 'react'

export default function Quotes () {
  const [quotesdata, setQuotes] = useState([])
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/lang/en')
      .then(res => res.json())
      .then(response => {
        setQuotes(response)
      })
  }, [quotesdata.length])
  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count])
  function mapData (quotesdata) {
    return quotesdata.map(quote => (
      <>
        <li>{quote.en}</li>
        <li>{quote.author}</li>
      </>
    ))
  }
  console.log('quotesdata :', quotesdata, count)
  return (
    <>
      <div>
        <ul>{mapData(quotesdata)}</ul>
      </div>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}
