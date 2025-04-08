'use client'
const { useState, createContext } = require("react")

export const AuthContext = createContext(null)
const AuthProvider = ({children})=>{
  const [isloggin ,setIsloggin] = useState(false)
  return(
    <AuthContext.Provider value={{isloggin,setIsloggin}}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider;