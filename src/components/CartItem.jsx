export default function CartItem(props)
{
    return (
        <>
             
                            <h2>{props.details.title}</h2>
                            <p>{props.details.description}</p>
            <p>Price: ${props.details.price}</p>
            <img src={props.details.images[0]} height='150px' alt="" />
                        
        </>
    )
}