import "./App.css";
import React from "react";
import Toggle from "./components/Toggle";
import Counter from "./components/Counter";
import { Game } from "./components/tictactoe/Game";
import Button from "./components/button/Button";
import Card from "./components/Card/Card";
import CardList from "./components/Card/CardList";
import { Global } from "./Global";
import CardTailwind from "./components/Card/CardTailwind";
import Photos from "./components/photo/Photos";
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
    <div>
      <Counter></Counter>
      {/* <CardTailwind primary></CardTailwind> */}
      {/* <Photos></Photos> */}
    </div>
    // <div className="youtube-list">
    //   {/* <YtbItems
    //     image="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    //     avatar="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    //     title="Gau Gau"
    //     author="dog"
    //   />
    //   <YtbItems
    //     image="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    //     avatar="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    //     title="Gau Gau"
    //     author="dog"
    //   />
    //   <YtbItems
    //     image="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    //     avatar="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    //     title="Gau Gau"
    //     author="dog"
    //   />
    //   <YtbItems
    //     image="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    //     avatar="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    //     title="Gau Gau"
    //     author="dog"
    //   /> */}
    //   {/* <Toggle />
    //   <Counter></Counter> */}
    //   {/* <Game></Game> */}
    //   {/* <Button>dsadas</Button>
    //   <Button className="button--secondary">sda</Button> */}
    //   {/* <Card></Card> */}
    //   {/* <Global> */}
    //   {/* <CardList>
    //     <Card second={true}></Card>
    //     <Card></Card>
    //     <Card></Card>
    //     <Card></Card>
    //     <Card></Card>
    //     <Card></Card>
    //   </CardList> */}
    //   {/* <div className="text-center text-lg text-[#ffaaaa]">dasd</div> */}
    //   {/* </Global> */}
    //   {/* <h1 className="text-3xl font-bold underline text-amber-300">
    //     Hello world!
    //   </h1> */}
    // </div>
  );
}

export default App;
