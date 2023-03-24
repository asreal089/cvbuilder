import { GetServerSideProps, NextPage } from "next";
import { getSession, SessionProvider, useSession } from "next-auth/react";
import { Cv } from "../../util/models/types";
import axios from "axios";
import { Container } from "@material-ui/core";
import Head from "next/head";
import Navbar from "../../components/navbar";
import cvView from "../../components/cvView";
import CvView from "../../components/cvView";

interface Data {
  data: Cv;
}

const ViewCv: NextPage<Data> = (props) => {
  return (
    <div>
      <Head>
        <title>CV BUILDER</title>
        <meta name="CV BUILDER" content="Site para armazenar o CV." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CvView data={props.data} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const axioscfg = { baseURL: process.env.URL };
  const res = await axios.get("/api/cv/" + id, axioscfg);
  return {
    props: {
      data: res.data,
    },
  };
};

export default ViewCv;
