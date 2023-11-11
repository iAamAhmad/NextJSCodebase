import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='items-center'>
      <Image src='' alt=''></Image>
      <h1>Muhammad Ahmad</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat
        veniam cupiditate?
      </p>
      <Link href='/contact'>Click Me</Link>
    </div>
  );
}
