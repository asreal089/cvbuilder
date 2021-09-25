import React, { FunctionComponent } from 'react'

type Props ={
    tipolink: string,
    link: string
}

const DadosLinks:FunctionComponent<Props> = ({tipolink, link}) =>(
    <div>
        <p>{tipolink}</p> 
        <p>{link}</p>
    </div>
)

export default DadosLinks;