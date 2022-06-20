import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import { Cv } from "../../util/models/types";
import CvAddEdit from "../components/cvAddEdit";
import axios from "axios";
import { FindReplaceTwoTone } from "@mui/icons-material";

interface Data{
    data : Cv;
}

const EditCv: NextPage<Data> = (props) => {
    const session: any = useSession();

    
    return(
        <CvAddEdit data={props.data} />
        
        );
}
    
export const getServerSideProps: GetServerSideProps = async({query}) =>{
    const session = await getSession();
    const {id} = query;
    const axioscfg={baseURL:process.env.URL}
    const res =  await axios.get('/api/cv/'+id, axioscfg);

    
    return {props: {
        data: res.data
    }};


}

export default EditCv;
