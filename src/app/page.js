import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import Friends from '@/app/friends/page'
export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Friends/>
      </div>
    </>
  );
}
