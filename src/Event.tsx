
function Event(){
    const handleClick = ()=>{
        console.log('button clicked')
    }
    return(
        <>

         <button className="button"  onClick={handleClick}>Click Event</button>
        </>
    )
}

export default Event