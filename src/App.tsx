import {MultiChatWindow, useMultiChatLogic, MultiChatSocket} from "react-chat-engine-advanced";


//server
const projectId: string = "8b9b2469-73a4-4ad1-89df-7fdeb04773d0"
const username: string = "Arvind"
const secret: string = "1234"

function App() {
  //logic
  const chatProps = useMultiChatLogic(projectId, username, secret)
  return (
    <div>
      {/*websocket*/}
      <MultiChatSocket {...chatProps}/>
      {/*components*/ }
     <MultiChatWindow {...chatProps} style={{height: "100vh"}} />
    </div>
  );
}

export default App;
