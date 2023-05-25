import MeetupList from '../components/meetups/MeetupList'
import { DUMMY_MEETUPS } from '../data'

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage
