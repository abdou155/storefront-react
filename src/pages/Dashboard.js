import React from 'react'
import Container from '@material-ui/core/Container';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'




function Dashboard() {

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]


    return (
        <Container maxWidth="md">
            <h1>Dashboard</h1>
           {/*  <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            </Carousel> */}
        </Container>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton" color="primary">
                Check it out!
            </Button>
        </Paper>
    )
}

export default Dashboard
