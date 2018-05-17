import React from 'react'
import Personne from './Personne'

const Listepersonnes = ({liste, chooseProfile}) => <div>
  {liste.map((personne)=> <Personne
      key={personne.id}
      {...personne}
      chooseProfile={() => chooseProfile(personne.id)}
      /> )}
  </div>


export default Listepersonnes