import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
  const meetupHandler = () => {}

  return <NewMeetupForm onAddMeetup={meetupHandler} />
}

export default NewMeetupPage
