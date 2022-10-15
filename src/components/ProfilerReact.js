import React,{ Profiler } from 'react'
import CounterForProfiler from './CounterForProfiler'

// it is used to calculate the time duration a component taked to render so that we can use memorization
// to optimize the performance ---jsut wrap the component inside the profiler then all the tree below it 
// will be calculated.

// function onRenderCallback(
//   id, // the "id" prop of the Profiler tree that has just committed
//   phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
//   actualDuration, // time spent rendering the committed update
//   baseDuration, // estimated time to render the entire subtree without memoization
//   startTime, // when React began rendering this update
//   commitTime, // when React committed this update
//   interactions // the Set of interactions belonging to this update
// ) {
//   console.log(.....)
// }

const callbackFn= (id, phase, actualDuration,baseDuration, startTime, commitTime, interactions)=>{
  console.log(id, phase, actualDuration,baseDuration, startTime, commitTime, interactions)
}


function ProfilerReact() {
  return (
    <div>
        <Profiler id='anyName' onRender={callbackFn} >
        <CounterForProfiler />
        </Profiler>
    </div>
  )
}

export default ProfilerReact