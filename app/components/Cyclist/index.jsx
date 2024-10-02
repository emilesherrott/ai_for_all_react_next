'use client';

import React, {useState} from "react"

import Button from "../Button"

import "./Cyclist.css"

const Cyclist = ({name, team, type, age, tdf}) => {

  const [stageWins, setStageWins] = useState(tdf)

  return (
    <div className="cyclist">
      <p className='rider rider-details'>Cyclist: <span className="name">{name}</span></p>
      <p className='team rider-details'>Team: {team}</p>
      <p className='type-of-rider rider-details'>Type of rider: {type}</p>
      <p className='age rider-details'>Age: {age}</p>
      <p className='tdf-stages rider-details'>TDF Stages: {stageWins}</p>
      <Button setStageWins={setStageWins}/>
    </div>
  )
}

export default Cyclist
