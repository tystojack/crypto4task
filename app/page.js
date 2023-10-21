import Image from 'next/image'
import TaskFeed from "../components/TaskFeed"
import TitleComponent from '@/components/TitleComponent'
export default function Home() {
  return (
    <main className="">
      <TitleComponent/>
      <TaskFeed/>
    </main>
  )
}
