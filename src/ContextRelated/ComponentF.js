import React from 'react'
import { UserContext, ChannelContext } from './AppMain'
function ComponentF () {
  return (
    <div>
      <UserContext.Consumer>
        {value => {
          return (
            <ChannelContext.Consumer>
              {channel => {
                return (
                  <div>
                    {value}
                    {channel}
                  </div>
                )
              }}
            </ChannelContext.Consumer>
          )
        }}
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
