"use client";
import Image from "next/image";

const ImageCom = ({image}:{image:string}) => {
  return (
    <Image src={image} alt="imgge" width={400} height={400} quality={100} />
  )
}

export default ImageCom