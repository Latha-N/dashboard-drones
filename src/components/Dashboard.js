import React from 'react'
import Icon from "@material-ui/core/Icon";
import Warning from "@material-ui/icons/Warning";
import { makeStyles } from "@material-ui/core/styles";




import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
//import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
//import Danger from "components/Typography/Danger.js";


import styles from "../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);




function Dashboard(){
    const classes = useStyles();

    return(
        <>
            <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Used Space</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>GB</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                  <Warning />
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter>
          </Card>
        </>
    )
}
export default Dashboard