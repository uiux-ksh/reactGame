import React, {Component} from "react";

function getNumbers() { //숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수

}

class  NumberBaseball extends Component {
    state = {
      result:'',
      value:'',
      count:[],
      answer:getNumbers(),
    };

    onChangeInput = () => {

    }

    onSubmitForm = () => {

    }
   render() {
       return(
          <>
            <h1>{this.state.result}</h1>
              <form onSubmit={this.onSubmitForm}>
                  <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
              </form>
              <div>시도{this.state.count.length}</div>
              <ul>
                  {['like','222','333','444','like2'].map( (v) =>
                      <li key ={v}> {v}</li>
                  )}
              </ul>
          </>
       )
   }
}

export  default NumberBaseball;