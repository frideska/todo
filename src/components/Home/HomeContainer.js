import React, { Component } from 'react'
import { Grid, Header, Divider } from 'semantic-ui-react'

import Navbar from '../Navbar'


class HomeContainer extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <Navbar/>
                <Divider hidden/>
                <Grid width={16}>
                    <Grid.Column width={16} textAlign="center">
                        <Header as="h1">Docs maybe bby</Header>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }


}
export default HomeContainer