import Image from "next/image"

const Cards = ({image, title, desc}) => {
    return(
        <div className="max-w-sm">
            <Image src={image} width={400} height={250} />
            <h2 className="text-2xl text-darkBlood">{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default Cards