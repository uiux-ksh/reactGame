const React = require('react');
const {useState, useRef} = require("react");
const {Component} = React;


//hooks
const WordRelay = () => {
   const[word,setWord] =useState('김성훈');
   const[value,setValue] =useState('');
   const[result,setResult] =useState('');
   const refInput=useRef(null);


    const onSubmitForm = (e) => {
        e.preventDefault()
        if(word[word.length -1] === value[0]) {
            setWord(value);
            setValue('');
            setResult('딩동댕');
            refInput.current.focus();
        }else{
            setValue('');
            setResult('떙')
            refInput.current.focus();
        }
    }

    const onChangeInput =(e) => {
        setValue(e.target.value);
    }

   return(
       <>
           <div>{word}</div>
           <form onSubmit={onSubmitForm}>
               <input ref={refInput} value={value} onChange={onChangeInput}/>
               <button>입력!</button>
           </form>
           <div>{result}</div>
       </>
   )
}

module.exports = WordRelay;

//클래스 컴포넌트
// class WordRelay extends  Component {
//     state  = {
//          word:'김성훈',
//          value:'',
//          result:'',
//     };
//
//     onSubmitForm = (e) => {
//         e.preventDefault();
//         if(this.state.word[this.state.word.length - 1 ] === this.state.value[0]) {
//             this.setState({
//                 result:'딩동댕',
//                 word: this.state.value,
//                 value:'',
//             });
//             this.input.focus();
//         }else{
//             this.setState({
//                 result:'떙',
//                 value:'',
//             })
//             this.input.focus();
//         }
//     };
//     onChangeInput = (e) =>{
//       this.setState({value: e.target.value});
//     };
//     input;
//     onRefInput = (c) => {
//         this.input = c;
//     }
//
//     render() {
//        return (
//            <>
//               <div>{this.state.word}</div>
//                <form onSubmit={this.onSubmitForm}>
//                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
//                    <button>입력!</button>
//                </form>
//                <div>{this.state.result}</div>
//            </>
//        )
//     }
// }


