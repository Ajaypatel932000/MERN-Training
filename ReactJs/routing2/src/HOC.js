import React,{Component} from 'react'

function HOC(ComponentName) {

  return class extends Component{
      render()
      {
          return(
              <>
                <h1>HOC</h1>
                      <ComponentName/>
              </>
          )
      }

  }
}

export default HOC
