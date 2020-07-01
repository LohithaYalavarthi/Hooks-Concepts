import React, { useEffect } from 'react'

function useDocTitle () {
  useEffect(() => {
    document.title = `Count ${count}`
  }, [count])
}

export default useDocTitle
