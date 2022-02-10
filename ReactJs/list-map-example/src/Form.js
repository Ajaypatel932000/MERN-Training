import React,{Component} from 'react';

class Form extends Component
{
    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
         comment:'',
         topic:'React'
      }
    }
    onChange=(event)=>{
        //this.setState({userName:event.target.value})
        let {name,value}=event.target;
         if(name==="nm")
         {
            this.setState({userName:value})
         }
         if(name==="cmt")
         {
             this.setState({comment:value})
         }
         if(name==="dw")
         {
             this.setState({topic:value   })
         }

    }
    handleSubmit=(event)=>{
        alert(`${this.state.userName} ${this.state.topic} ${this.state.comment}`);
        event.preventDefault()
    }
    render()
    {
        return(
            <div>
                   <h1>Form Component</h1>
                   <form onSubmit={this.handleSubmit}>
                       <div>
                           <label>UserName</label>
                           <br/>
                           <input type="text" value={this.state.userName} name="nm" onChange={this.onChange} />
                               
                               
                  </div>
                  <div>
                  <label>Comments</label>
                           <br/>
                           <input type="text" value={this.state.comment} name="cmt" onChange={this.onChange} />
                           

                  </div>
                   <div>
                       <label>Topic</label>
                       <select value={this.state.topic} name="dw" onChange={this.onChange}>
                           <option value="React">React</option>
                           <option value="Angular">Angular</option>
                           <option value="Vue">Vue</option>
                       </select>
                   </div>
                   <button type="submit">Submit</button>
                   </form>
            </div>
        )
    }
}
export default Form;