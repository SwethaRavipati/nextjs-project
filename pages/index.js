import { Fragment } from 'react';

import Head from 'next/head';

import { MongoClient } from 'mongodb';

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {

  return (
  <Fragment>
      <Head>
          <title>React Meetups</title>
          <meta name="description" content="Browse a huge history of lighly effective meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
  </Fragment>
  );
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = contect.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

export async function getStaticProps() {

  const client = await MongoClient.connect(
    "mongodb+srv://Swetha_Ravipati:BujjiRaj%4009@cluster0.gheo2uo.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
              title: meetup.title,
              address: meetup.address,
              image: meetup.image,      
              id: meetup._id.toString(),
      })),
        // meetups:JSON.parse(JSON.stringify(meetups.map((meetup) => ({
        //     title: meetup.title,
        //     address: meetup.address,
        //     image: meetup.image,
        //     id: meetup._id,
        // })),))
    },
    revalidate: 1,
  };
}

export default HomePage;
