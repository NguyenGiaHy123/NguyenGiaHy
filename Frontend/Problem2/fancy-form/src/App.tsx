// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CurrencySwapForm from './components/CurrencySwapForm'

function App() {
  // const [count, setCount] = useState(0)

  return (

    <div>
     
      <div
      className="w-full min-h-screen flex items-center justify-center 
             bg-[url('https://acb.com.vn/_next/image?url=%2Fmedia%2FYfFKyH7Lq3OtJRCEDmkRBrIuoVuCDeEZksjbvTeH.jpg&w=3840&q=80')] 
             bg-cover bg-center bg-no-repeat"
    >

      <div className="bg-white p-6 rounded-lg shadow-lg w-[450px]">
        <CurrencySwapForm />
      </div>
    </div>
    </div>
   
  )
}

export default App
