import {connect} from 'react-redux';
import {fetchData} from '../store'
import {useEffect} from 'react'
import './CatImage.css'

const CatImage = (props) => {

    useEffect(() => {
        props.fetchData();
    }, [])

    return(
        <div>
        <div className="catWrapper">
            <div className="factContainer">
                <h1 style = {{color:"blue"}}>CAT FACTS</h1>
            {props.isLoading ? <h3>Loading data...</h3>:null}
            {props.error ? <p style = {{color:"red"}}>{props.error}</p>:null}
            <ol>
            {props.facts.map((fact) => {
                return(<li key= {fact.text}>{fact.text}</li>)
            })}
            </ol>
            </div>
            <div className="imageContainer">
            <img src= {props.cats.webpurl}/>
            </div>
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