import Layout from '../components/layout/Layout'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipMzglyiaqyt4ozOGTnD3u3HjVP7SfiFLZNq6dGa=w260-h175-n-k-no',
    address: 'Some address 5, 12345 Some City',
    description: 'This is the first meetup',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://nijhoom.b-cdn.net/wp-content/uploads/2021/04/puthia-temple-complex-768-o.jpg',
    address: 'Some address 10, 54321 Some City',
    description: 'This is the second meetup',
  },
]

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage
