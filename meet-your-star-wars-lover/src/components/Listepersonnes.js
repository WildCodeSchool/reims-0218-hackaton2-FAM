import React from 'react'
import Personne from './Personne'

const Listepersonnes = ({personnes, remove}) => <div>
  {personnes.map((personne)=> <Personne
      key={personne.id}
      {...personne}
      remove={() => remove(personne.id)}
      /> )}
  </div>


export default Listepersonnes