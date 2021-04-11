import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: '10rem' }} />;

const LoadingWrap = ({ loading = false }) => {
  return (
    loading && (
      <div style={styles.container}>
        <Spin indicator={antIcon} />
      </div>
    )
  );
};

const styles = {
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: '99999999',
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default LoadingWrap;
