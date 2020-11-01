import React, { useContext } from 'react';
import {
  ImportantInfo,
  ThemeContext,
} from '../../../contexts/ImportantContext';

const SubSubChild = props => {
  const important = useContext(ImportantInfo);
  const currentTheme = useContext(ThemeContext);

  return (
    <>
      <div>Current theme: {currentTheme.isLightTheme ? 'light' : 'dark'}</div>
      <div>prop consumer: {JSON.stringify(important)}</div>
      <button
        onClick={() => {
          currentTheme.changeTheme();
        }}>
        Change Theme
      </button>
    </>
  );
};

export default SubSubChild;
