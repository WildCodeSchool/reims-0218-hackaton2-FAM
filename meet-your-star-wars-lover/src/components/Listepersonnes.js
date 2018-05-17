import React from 'react'
import Personne from './Personne'

const Listepersonnes = ({liste}) => <div>
  {liste.map((personne)=> <Personne
      key={personne.id}
      {...personne}
      /> )}
  </div>


export default Listepersonnes