const React = require('react');
const {useState,useRef} =React;

const GuGuDan = () => {
    const [first,setFirst] = useState(Math.ceil(Math.random() * 9 ));
    const [second,setSecond] = useState(Math.ceil(Math.random() * 9 ));
    const [value,setValue] = useState('');
    const [result,setResult] = useState('');
    const inputRef =React.useRef(null);

    const onChangeInput =(e) => {
    setValue(e.target.value);
}
    console.log('렌더링');
    const onSubmitForm = (e) => {
    e.preventDefault();
    if(parseInt(value) === first * second) {
    setResult('정답' + value);
    setFirst(Math.ceil(Math.random() * 9 ));
    setSecond(Math.ceil(Math.random() *9));
    setValue('');
    inputRef.current.focus();
}else{
    setResult('떙');
    setValue('')
    inputRef.current.focus();
}

}


    return (
    <React.Fragment>
    <div>{first}곱하기 {second}는?</div>
    <form onSubmit={onSubmitForm}>
    <input  ref={inputRef} onChange={onChangeInput} value={value}/>
    <button>입력!</button>
    </form>
    <div className="result">{result}</div>
    </React.Fragment>
    )
}



module.exports = GuGuDan;
