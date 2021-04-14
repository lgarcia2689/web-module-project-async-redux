import {connect} from 'react-redux';
import {fetchData} from '../store'
import {useEffect} from 'react'

const CatImage = (props) => {

    useEffect(() => {
        props.fetchData();
    }, [])

    return(
        <div>
        <h1>Hey there from ./components/CatImage</h1>
        <div className="catWrapper">
            {props.isLoading ? <h3>Loading data...</h3>:null}
            {props.error ? <p style = {{color:"red"}}>{props.error}</p>:null}
            {props.facts.map((fact) => {
                return(<h1 key= {fact.text}>{fact.text}</h1>)
            })}
            <img src= {props.cats.webpurl}/>
        </div>
        </div>
    )
}

const mapStateToProps =(state)=>{
    return{
        isLoading: state.isLoading,
        cats: state.cats,
        facts: state.facts,
        error: state.error
    }
}

export default connect(mapStateToProps,{fetchData})(CatImage);