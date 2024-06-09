export default function Main(){
    const { data } = props
    return (
        
        <div className="imgContainer">
            <img src={data.hdurl} alt="mars-demo-picture" className="bgImage"/>
        </div>
    )
}