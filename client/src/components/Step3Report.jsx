import React from 'react'

function Step3Report({report}) {
  if(!report){
    return(
      <div className='min-h-screen flex items-center justify-center'>
        <p className='text-gray-500 text-lg'>
         Loading Report...
        </p>
      </div>
    )
  }

  const {
  finalScore = 0,
  confidence = 0,
  communication = 0,
  correctness =0,
  questionWiseScore =[],
  } = report;

 const questionScoreData = questionWiseScore.map((score,index)=>{
  name: `Q${index+1}`
  score:
 }




  return (
    <div>
      
    </div>
  )
}

export default Step3Report
