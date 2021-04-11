import React, { useEffect } from 'react';
import AppPresenter from './AppPresenter';


const AppContainer = (props) => {
  const { history } = props;
  useEffect(() => {
    checkPage();
  }, [history]);

  const changePage = async (path = '/') => {
     history.replace(path);
  };

  const checkPage = async () => {
    await changePage();
  };


  return (
    <>
      {/* <LoadingWrap loading={true} /> */}
      <AppPresenter {...props} changePage={changePage} />


    </>
  );
};

export default AppContainer;
