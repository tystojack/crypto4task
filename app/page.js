import Image from 'next/image'
import TaskFeed from "../components/TaskFeed"
import TitleComponent from '@/components/TitleComponent'
import SearchComponent from '@/components/SearchComponent'
export default function Home() {
  return (
    <div className="bg-stone-500 mt-16 pt-2">
      <TitleComponent/>
      <SearchComponent/>
      <TaskFeed/>
     
    </div>
  )
}
