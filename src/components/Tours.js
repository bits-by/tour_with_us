import Card from "./Card";

function Tours({tours, removeTour}) {
    return(
        <>
        <div className="container">
            <h2 className="title">Plan with Love</h2>
        </div> 
        <div className="cards">
            {
                tours.map( (tour) => {
                return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                } )
            }
        </div> 
        </>
    );
}
export default Tours;