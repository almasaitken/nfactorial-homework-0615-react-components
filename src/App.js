import { useState } from "react";
import { DefaultContext } from "./Contexts";
//importing styles
import "./App.css";

//importing components
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

export default function App() {
  const [fan, setFan] = useState("");
  const handleChooseFan = ({ name }) => {
    setFan(name);
  };

  const [theme, setTheme] = useState("dark");
  const handleSetTheme = () => {
    if (theme ==='light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };


  return (
    <DefaultContext.Provider value={{ handleChooseFan, fan, handleSetTheme, theme}}>
      <Header />
      <hr />
      <Content />
      <Footer />
    </DefaultContext.Provider>
  );
}