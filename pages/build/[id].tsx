import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { Cv } from "../../util/models/types";
import * as cvAddEdit from "../../components/cvAddEdit";
import axios from "axios";
import { Container } from "@material-ui/core";
import Head from "next/head";
import Navbar from "../../components/navbar";

interface Data {
  data: Cv;
}

const EditCv: NextPage<Data> = (props) => {
  return (
    <div>
      <Head>
        <title>CV BUILDER</title>
        <meta name="CV BUILDER" content="Site para armazenar o CV." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Navbar />
        <cvAddEdit.default data={props.data} />
      </Container>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
  const { id } = query;
  const axioscfg = { baseURL: process.env.URL, headers: {
    cookie: req.headers.cookie || "",
  }};
  const res = await axios.get("/api/cv/" + id, axioscfg);
  
  return {
    props: {
      data: res.data
    }
  };
};
export default EditCv;
