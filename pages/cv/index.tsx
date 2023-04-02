import { GetServerSideProps, NextPage } from "next";
import { Cv } from "../../util/models/types";
import axios from "axios";
import Head from "next/head";
import CvView from "../../components/cvView";
import { padding } from "@mui/system";
import SearchCV from "../../components/seachCvs";
import Navbar from "../../components/navbar";
import styles from "../../styles/Home.module.css";
import { Container } from "@material-ui/core";

interface Data {
  data: Cv;
}

const CvSearchPage: NextPage<Data> = (props) => {
  return (
    <>
      <Head>
        <title>CV BUILDER</title>
        <meta name="CV BUILDER" content="Site para armazenar o CV." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Navbar/>
        <SearchCV />
      
      </Container>
    </>
  );
};


export default CvSearchPage;
