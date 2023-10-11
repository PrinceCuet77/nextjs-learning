import MeetupDetail from '../../components/meetups/MeetupDetail'
import { DUMMY_MEETUPS } from '../../data'

const MeetupDetails = (props) => {
  return <MeetupDetail {...props.meetupData} />
}

export async function getStaticPaths() {
  return {
    fallback: false, // All supported
    paths: [
      // One object per version of the dynamic page
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId

  // Just use for static data (not recommanded but only for making workable)
  let index = -1
  if (meetupId === 'm1') index = 0
  else index = 1

  return {
    props: {
      meetupData: DUMMY_MEETUPS[index],
    },
  }
}

export default MeetupDetails
