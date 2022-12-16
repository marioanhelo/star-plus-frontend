import React from 'react'
import { TailSpin } from  'react-loader-spinner'

const Loader = () => {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: 'center' }
    return (
        <div style={style}>
            <TailSpin
                height="100"
                width="100"
                color="#FD5619"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
  )
}

export default Loader