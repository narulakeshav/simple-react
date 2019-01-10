/**
 * @flow
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import Button from '../../components/Button';
import { Page, Grid, Section } from '../../utils/styles';

/**
 * Home Component
 */
const Home = () => (
  <Page bg="#F2F3F7">
    <Grid padding="4rem 25%" bg="#FFFFFF">
      <Section alignCenter>
        <h2>Homepage</h2>
        <Button bg="#FFB02F" color="#FFFFFF">Get Started</Button>
      </Section>
    </Grid>
  </Page>
);

// Export
export default Home;
