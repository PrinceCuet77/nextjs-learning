import MeetupDetail from '../../components/meetups/meetupDetail'

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image='https://lh5.googleusercontent.com/p/AF1QipMzglyiaqyt4ozOGTnD3u3HjVP7SfiFLZNq6dGa=w260-h175-n-k-no'
      title='A First Meetup'
      address='Some address 5, 12345 Some City'
      description='This is the first meetup'
    />
  )
}

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
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

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: 'A First Meetup',
        image:
          'https://lh5.googleusercontent.com/p/AF1QipMzglyiaqyt4ozOGTnD3u3HjVP7SfiFLZNq6dGa=w260-h175-n-k-no',
        address: 'Some address 5, 12345 Some City',
        description: 'This is the first meetup',
      },
    },
  }
}

export default MeetupDetails
