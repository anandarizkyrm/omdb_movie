import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/templates/Layout/Layout';

type Props = {};

const Detail = (props: Props) => {
  const { id } = useParams();

  console.log(id);
  return (
    <div>
      <Layout>Detail</Layout>
    </div>
  );
};

export default Detail;
