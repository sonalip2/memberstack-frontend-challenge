import { useState } from "react";
import ColorPicker from "./components/ColorPicker";
import ChatBotIFrame from "./components/ChatBotIFrame";
import './App.css';

const IFRAME_DOMAIN = 'http://localhost:3002'

const App = () => {
  const [color, setColor] = useState('#e66465')

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setColor(newColor)
    const iframeEl = document.querySelector("iframe.chatbot-iframe") as HTMLIFrameElement
    const iframeWindow = iframeEl.contentWindow as Window;
    iframeWindow.postMessage(newColor, IFRAME_DOMAIN)
  };

  return (
    <>
      <ColorPicker
        value={color}
        onChange={handleColorChange}
      />
      <ChatBotIFrame />
    </>
  );
}

export default App;
