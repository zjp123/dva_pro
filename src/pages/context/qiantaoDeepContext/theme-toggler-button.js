import {ThemeContext} from './theme-context';
import React from 'react'

function ThemeTogglerButton() {
  // Theme Toggler 按钮不仅仅只获取 theme 值，它也从 context 中获取到一个 toggleTheme 函数
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => 
          (
        <button   onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>

          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

// 这种嵌套很深的  只能用Consumer 这种方式来写很方便 
// 如果不用这种的话, 就只能用props的方式通过回调的形式
export default ThemeTogglerButton;