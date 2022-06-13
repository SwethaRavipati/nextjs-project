import { Fragment } from 'react';

import Head from 'next/head';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    async function addMeetupHandler(enteredMeetupData){
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        const data = await response.json();
        
        console.log('data', data);
    }

    return (
        <Fragment>
        <Head>
            <title>Add a new Meetup</title>
            <meta name="description" content="Create your own amazing Meetups" />
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </Fragment>
    );
}

export default NewMeetupPage;