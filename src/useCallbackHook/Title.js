import React from 'react'

function Title () {
  console.log('Rendering Title')
  return <div>Use Call back hook</div>
}

export default React.memo(Title)
