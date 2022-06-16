import React from 'react'
import { Layout } from '@guillotinaweb/react-gmi'
//import { useLocation } from '@guillotinaweb/react-gmi'
//import { Auth } from '@guillotinaweb/react-gmi'
import { CustomAuth } from "./lib/auth";
import { Guillotina } from '@guillotinaweb/react-gmi'
import { Login } from '@guillotinaweb/react-gmi'
import { getClient } from '@guillotinaweb/react-gmi'
import { ClientProvider } from '@guillotinaweb/react-gmi'
import { useState, useEffect } from 'react'
import '@guillotinaweb/react-gmi/dist/css/style.css'
import { RequiredFieldsForm } from "@guillotinaweb/react-gmi";

// guillotina url
/*
let url = 'http://localhost:8080'
const schema = '/'
const auth = new Auth(url)
const client = getClient(url, schema, auth)
*/

// guillotina url
let url = "http://127.0.0.1:8080";
const schemas = ["/", "/db/container/"];
//const auth = new Auth(url);
const auth = new CustomAuth(url);

const registry = {
  forms: {
    DemoType: RequiredFieldsForm,
    },
  };

function App() {
  const [currentSchema, setCurrentSchema] = useState(
    localStorage.getItem("currentSchema") ?? "/"
  );
  const [clientInstance, setClientInstance] = useState(undefined);
  const [isLogged, setLogged] = useState(auth.isLogged);

  useEffect(() => {
    setClientInstance(getClient(url, currentSchema, auth));
  }, [currentSchema]);

  const onLogin = () => {
    localStorage.setItem("currentSchema", currentSchema);
    setLogged(true);
  };

  const onLogout = () => {
    localStorage.removeItem("currentSchema");
    setCurrentSchema("/");
    setLogged(false);
  };

  if (clientInstance === undefined) {
    return null;
  }

  return (
    <ClientProvider client={clientInstance}>
      <Layout auth={auth} onLogout={onLogout}>
        {isLogged && <Guillotina auth={auth} url={currentSchema} registry={registry} />}
        {!isLogged && (
          <div className="columns is-centered">
            <div className="columns is-half">
              <Login
                onLogin={onLogin}
                auth={auth}
                schemas={schemas}
                currentSchema={currentSchema}
                setCurrentSchema={setCurrentSchema}
              />
            </div>
          </div>
        )}
      </Layout>
    </ClientProvider>
  );
}

export default App;
