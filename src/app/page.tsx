import BlogList from "@/app/blogs/page";
import Header from "@/components/Header/page";
export default function Home() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <BlogList/>
      </div>
    </div>
  );
}
