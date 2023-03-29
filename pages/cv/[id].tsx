import { GetServerSideProps, NextPage } from "next";
import { Cv } from "../../util/models/types";
import axios from "axios";
import Head from "next/head";
import CvView from "../../components/cvView";
import { padding } from "@mui/system";

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
      <body className="content">
        <CvView data={props.data} />
      </body>
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
