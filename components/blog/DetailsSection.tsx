
import Image from 'next/image';


const DetailsSection = () => {
  return (
    <>
       <div className="flex gap-8 pb-10">
        <Image src="/next.svg" width={300} height={300} alt="iamge" />
        <div className="flex flex-col gap-3">
          <p className="text-primary text-2xl font-semibold">
            Blessing & Peace Among Chaos
          </p>
          <div className="flex gap-3">
            <p>Title</p>
            <Image src="/red_dot.svg" width={10} height={10} alt="icon" />
            <p>Blessing & Peace Among Chaos</p>
          </div>
          <div className="flex gap-3">
            <p>Add Date</p>
            <Image src="/red_dot.svg" width={10} height={10} alt="icon" />
            <p>Sep 18th, 2022</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="max-w-[60rem] py-10">
        <p className="text-primary text-2xl font-semibold pb-4">Description</p>
        <span className="">
          Artist Htoo Aung Kyaw was born in Kyaukpadaung , a small town on the
          way to Bagan , Mandalay Regain . He is a Bachelor’s degree holder in
          philosophy and studied art , especially in paintings , at the State
          School of Fine Art in Yangon . He has great interest in history and
          philosophy . Since he was child , he usually goes to Bagan and studied
          about See more...
        </span>
      </div>
      <hr />
    </>
  )
}
export default DetailsSection