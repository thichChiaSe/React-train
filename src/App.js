import "./App.css";
import React from "react";
import Toggle from "./components/Toggle";
import Counter from "./components/Counter";
import { Game } from "./components/tictactoe/Game";
// export const YtbItems = (props) => {
//   return (
//     <div className="youtube-item">
//       <div className="youtube-image">
//         <img src={props.image} alt="" />
//         <div className="youtube-footer">
//           <img src={props.avatar} alt="" className="youtube-avatar" />
//           <div className="youtube-info">
//             <h3 className="youtube-title">{props.title}</h3>
//             <h4 className="youtube-author">{props.author}</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
function App() {
  return (
    <div className="youtube-list">
      {/* <YtbItems
        image="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        avatar="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        title="Gau Gau"
        author="dog"
      />
      <YtbItems
        image="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        avatar="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        title="Gau Gau"
        author="dog"
      />
      <YtbItems
        image="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        avatar="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        title="Gau Gau"
        author="dog"
      />
      <YtbItems
        image="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        avatar="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        title="Gau Gau"
        author="dog"
      /> */}
      {/* <Toggle />
      <Counter></Counter> */}
      <Game></Game>
    </div>
  );
}

export default App;
