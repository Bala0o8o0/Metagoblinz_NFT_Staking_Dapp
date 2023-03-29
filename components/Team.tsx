import Image from "next/image";

interface Props {
  name1: string;
  name2: string;
  name3: string;
  position1: string;
  position2: string;
  position3: string;
  image1: string;
  image2: string;
  image3: string;
}


const Team = ({ name1, name2, name3, position1, position2, position3, image1, image2, image3 }: Props) => {
  return (
    <div className="flex py-5 gap-4  ">
      <div className="flex flex-col items-center">
        <Image height={48} width={48} src={image1} alt={name1} className="w-48 h-48 object-cover 
        hover:transition duration-100 transform  hover:scale-110" />
        <h3 className="mt-10 text-xl  text-white  font-bold">{name1}</h3> <br></br>
        <p className="text-gray-400">{position1}</p>
      </div>
      <div className="flex flex-col items-center">
        <Image height={48} width={48} src={image2} alt={name2} className="w-48 h-48 object-cover rounded-full
         hover:transition duration-100 transform hover:scale-110 " />
        <h3 className="mt-10 gap-10 text-xl text-white  font-bold">{name2}</h3> <br></br>
        <p className="text-gray-400 m- ">{position2}</p>
      </div>

      <div className="flex flex-col items-center">
        <Image height={48} width={48} src={image3} alt={name3} className="w-48 h-48 object-cover rounded-full
         hover:transition duration-100 transform hover:scale-110 " />
        <h3 className="mt-10 text-xl text-white  font-bold">{name3}</h3>
        <br></br>
        <p className="text-gray-400">{position3}</p>
      </div>

    </div>
  );
};


export default Team;
