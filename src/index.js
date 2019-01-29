import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";

import "./styles.css";

import { addLocaleData } from "react-intl";
import locale_en from "react-intl/locale-data/en";
import locale_ar from "react-intl/locale-data/ar";
import messages_ar from "./translations/ar.json";
import messages_en from "./translations/en.json";

//const language = navigator.language.split(/[-_]/)[0]; // language without region code
const language = localStorage.getItem("lang");
//console.log(localStorage.getItem("lang"));

const messages = {
  ar: messages_ar,
  en: messages_en
};

addLocaleData([...locale_en, ...locale_ar]);
function App() {
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <div className="App">
        <h1>
          <FormattedMessage
            id="app.title"
            defaultMessage="Welcome to {what}"
            description="Welcome header on app main page"
            values={{ what: "react-intl" }}
          />
        </h1>
        <h2>
          <FormattedHTMLMessage
            id="app.intro"
            defaultMessage="To get started, edit <code>src/App.js</code> and save to reload."
            description="Text on main page"
          />
        </h2>
      </div>
    </IntlProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
