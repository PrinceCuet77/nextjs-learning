import MeetupList from '../components/meetups/MeetupList'
import { DUMMY_MEETUPS } from '../data'

const HomePage = (props) => {
  // 'props' is pre-rendering in 'getStaticProps()' function
  return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  }
}

export default HomePage
