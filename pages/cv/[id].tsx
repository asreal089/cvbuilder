import { GetServerSideProps, NextPage } from "next";
import { Cv } from "../../util/models/types";
import axios from "axios";
import CvView from "../../components/cvView";
import styles from "../../styles/Cv.module.css";

interface Data {
  data: Cv;
}

const ViewCv: NextPage<Data> = (props) => {
  return (
    <div className={styles.content}>
        <CvView data={props.data} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const axioscfg = { baseURL: process.env.URL };
  const res = await axios.get("/api/cv/" + id, axioscfg);
  if (res.data == null || res.data == undefined) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: res.data,
    },
  };
};

export default ViewCv;
