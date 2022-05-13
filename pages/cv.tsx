import { Avatar, Card, CardHeader, IconButton } from "@material-ui/core";
import AssignmentIcon from '@mui/icons-material/Assignment';
import { NextPage } from "next";
import React from "react";

const CvPage:NextPage = () => {

    return(
        <div>
            <h1>Olar cv</h1>

            <Card variant="outlined">

            <CardHeader
                avatar={
                <Avatar aria-label="CV">
                    CV
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    < AssignmentIcon />
                </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />

            </Card>
        </div>
        )
}

export default CvPage;