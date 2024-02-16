import { NextPage } from "next";
import { Cv } from "../../util/models/types";
import SearchCV from "../../components/searchCvs";

interface Data {
  data: Cv;
}

const CvSearchPage: NextPage<Data> = (props) => {
  return (
    <div>
      <SearchCV />
    </div>
  );
};

export default CvSearchPage;
