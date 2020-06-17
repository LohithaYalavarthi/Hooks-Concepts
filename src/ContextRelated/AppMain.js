import React from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export default function AppMain () {
  return (
    <div>
      <UserContext.Provider value={'lohitha'}>
        <ChannelContext.Provider value={'futurerevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}
